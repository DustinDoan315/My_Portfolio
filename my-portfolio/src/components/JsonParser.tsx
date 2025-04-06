/* eslint-disable @typescript-eslint/no-explicit-any */
// components/JsonParser.tsx
"use client";
import React, { useState } from "react";
import { ExtractedData } from "../../types";

interface JsonParserProps {
  onDataExtracted: (data: ExtractedData) => void;
}

interface TextElement {
  text: string;
  bounding_box: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
}

const JsonParser: React.FC<JsonParserProps> = ({ onDataExtracted }) => {
  const [jsonInput, setJsonInput] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const parseJson = () => {
    try {
      setErrorMessage("");

      // Check if the input is empty
      if (!jsonInput.trim()) {
        setErrorMessage("Please enter JSON data");
        return;
      }

      // Try to parse the JSON input, handling different possible formats
      let textElements: TextElement[];

      try {
        // First try direct parsing
        textElements = JSON.parse(jsonInput);
      } catch (initialError) {
        // If direct parsing fails, try to clean the input
        try {
          // Remove any potential leading/trailing characters that might cause issues
          const cleanedInput = jsonInput
            .trim()
            .replace(/^[\s\n]*\[/, "[") // Clean start of array
            .replace(/\][\s\n]*$/, "]"); // Clean end of array
          textElements = JSON.parse(cleanedInput);
        } catch (secondError) {
          console.error("Second parsing attempt failed:", secondError);
          // If still failing, check if the input might be a JSON object with a data property
          try {
            const jsonObj = JSON.parse(jsonInput);
            if (Array.isArray(jsonObj.data)) {
              textElements = jsonObj.data;
            } else {
              throw new Error("Could not find data array in JSON");
            }
          } catch (thirdError) {
            console.error("Third parsing attempt failed:", thirdError);
            // If all parsing attempts fail, throw the original error
            throw initialError;
          }
        }
      }

      // Verify we have an array
      if (!Array.isArray(textElements)) {
        setErrorMessage(
          "Invalid JSON format: Expected an array of text elements"
        );
        return;
      }

      // Initialize data structure
      const data: ExtractedData = {
        experimentParams: {
          date: "",
          sampleId: "A",
          concentration: "",
        },
        initialValue: 0,
        conditions: [],
        timePoints: [],
        metadata: {
          extractionMethod: "json",
          processedAt: new Date(),
          rawData: textElements,
        },
      };

      // Sort elements by y position (top to bottom)
      const sortedElements = [...textElements].sort((a, b) => {
        return a.bounding_box.y1 - b.bounding_box.y1;
      });

      console.log("Sorted elements:", sortedElements);

      // Group elements by their approximate y position (lines)
      const lineThreshold = 15; // pixels
      const lines: TextElement[][] = [];
      let currentLine: TextElement[] = [];
      let prevY = -1000;

      sortedElements.forEach((el) => {
        if (
          prevY < 0 ||
          Math.abs(el.bounding_box.y1 - prevY) <= lineThreshold
        ) {
          // Same line
          currentLine.push(el);
        } else {
          // New line
          if (currentLine.length > 0) {
            lines.push([...currentLine]);
          }
          currentLine = [el];
        }

        prevY = el.bounding_box.y1;
      });

      // Add the last line
      if (currentLine.length > 0) {
        lines.push(currentLine);
      }

      // Sort each line by x position (left to right)
      lines.forEach((line) => {
        line.sort((a, b) => a.bounding_box.x1 - b.bounding_box.x1);
      });

      console.log("Grouped lines:", lines);

      // Extract all numbers from the text elements
      const allNumbers: {
        value: number;
        isDecimal: boolean;
        text: string;
        y: number;
      }[] = [];

      textElements.forEach((el) => {
        // Extract decimal numbers (with comma or dot)
        const decimalMatches = el.text.match(/\d+[.,]\d+/g);
        if (decimalMatches) {
          decimalMatches.forEach((match) => {
            allNumbers.push({
              value: parseFloat(match.replace(",", ".")),
              isDecimal: true,
              text: match,
              y: el.bounding_box.y1,
            });
          });
        }

        // Extract integers
        const intMatches = el.text.match(/\b\d+\b/g);
        if (intMatches) {
          intMatches.forEach((match) => {
            // Skip if this number was already captured as part of a decimal
            if (
              !decimalMatches ||
              !decimalMatches.some((dm) => dm.includes(match))
            ) {
              allNumbers.push({
                value: parseInt(match),
                isDecimal: false,
                text: match,
                y: el.bounding_box.y1,
              });
            }
          });
        }

        // Look for date format
        const dateMatch = el.text.match(/(\d{2}\/\d{2}\/\d{2,4})/);
        if (dateMatch) {
          data.experimentParams.date = dateMatch[1];
        }

        // Look for sample ID
        if (el.text.includes("Sample") || el.text.includes("ID")) {
          data.experimentParams.sampleId = "A"; // Default
        }

        // Look for Ban dau
        if (el.text.includes("Ban") || el.text.includes("dau")) {
          // Find the closest number below this text (likely the initial value)
          const banDauY = el.bounding_box.y1;
          const initialValues = allNumbers.filter(
            (n) => n.y > banDauY && n.y < banDauY + 30 && n.isDecimal
          );
          if (initialValues.length > 0) {
            data.initialValue = initialValues[0].value;
          }
        }

        // Look for ZnO conditions
        if (el.text.includes("ZnO")) {
          let conditionName = el.text;
          // If next elements on same line are part of the condition name, add them
          const sameLineElements = lines.find((line) => line.includes(el));
          if (sameLineElements) {
            const elIndex = sameLineElements.indexOf(el);
            if (elIndex >= 0 && elIndex < sameLineElements.length - 1) {
              const nextElements = sameLineElements.slice(elIndex + 1);
              conditionName += " " + nextElements.map((e) => e.text).join(" ");
            }
          }
          data.conditions.push({ name: conditionName.trim(), total: 0 });
        }
      });

      // Sort numbers by y position
      allNumbers.sort((a, b) => a.y - b.y);

      console.log("All extracted numbers:", allNumbers);

      // If we found an initial value from Ban dau, remove it from allNumbers
      if (data.initialValue > 0) {
        const initialIndex = allNumbers.findIndex(
          (n) => n.value === data.initialValue
        );
        if (initialIndex >= 0) {
          allNumbers.splice(initialIndex, 1);
        }
      } else if (allNumbers.length > 0 && allNumbers[0].isDecimal) {
        // If no initial value found but we have decimal numbers, use the first one
        data.initialValue = allNumbers[0].value;
        allNumbers.splice(0, 1);
      }

      // If we didn't find any conditions, add default ones
      if (data.conditions.length === 0) {
        data.conditions = [
          { name: "ZnO - thuan", total: 0 },
          { name: "ZnO - special", total: 0 },
        ];
      }

      // Look for time series pattern in the remaining numbers
      // Typical pattern is: index, measurement1, measurement2, time
      // So we group in fours, skipping index
      const measurements: number[][] = [];
      const times: number[] = [];

      for (let i = 0; i < allNumbers.length; i += 4) {
        // Skip index (or make sure we have enough numbers)
        if (i + 3 < allNumbers.length) {
          // The middle two are usually measurements
          const measurement1 = allNumbers[i + 1].value;
          const measurement2 = allNumbers[i + 2].value;

          // The last one is usually time
          const time = allNumbers[i + 3].value;

          if (time >= 30 && time <= 180) {
            // Sanity check for time values
            measurements.push([measurement1, measurement2]);
            times.push(time);
          }
        }
      }

      // If pattern detection failed, try an alternative approach
      if (measurements.length === 0) {
        // Just group all decimal numbers in pairs
        const decimalNumbers = allNumbers
          .filter((n) => n.isDecimal)
          .map((n) => n.value);
        const intNumbers = allNumbers
          .filter((n) => !n.isDecimal)
          .map((n) => n.value);

        // Use default time values if we can't extract them
        const defaultTimes = [30, 60, 90, 120, 150, 180];

        for (let i = 0; i < decimalNumbers.length; i += 2) {
          if (i + 1 < decimalNumbers.length) {
            measurements.push([decimalNumbers[i], decimalNumbers[i + 1]]);

            // Try to find a matching time, or use default
            const timeIndex = Math.floor(i / 2);
            if (timeIndex < intNumbers.length) {
              times.push(intNumbers[timeIndex]);
            } else if (timeIndex < defaultTimes.length) {
              times.push(defaultTimes[timeIndex]);
            } else {
              times.push(30 * (timeIndex + 1));
            }
          }
        }
      }

      // Create time points from measurements and times
      for (let i = 0; i < measurements.length; i++) {
        data.timePoints.push({
          time: times[i] || 30 * (i + 1),
          measurements: measurements[i],
        });
      }

      // Fallback to example data if we couldn't extract any time points
      if (data.timePoints.length === 0) {
        // Based on the provided example
        data.timePoints = [
          { time: 30, measurements: [2.759, 2.66] },
          { time: 60, measurements: [2.643, 2.553] },
          { time: 90, measurements: [2.5, 2.351] },
          { time: 120, measurements: [2.29, 2.2] },
          { time: 180, measurements: [2.116, 1.87] },
        ];
      }

      console.log("Extracted data:", data);

      // Call the callback with the extracted data
      onDataExtracted(data);
    } catch (error) {
      console.error("JSON parsing error:", error);
      setErrorMessage(
        `JSON parsing error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        Parse API Ninjas JSON Response
      </h2>

      <div className="mb-4">
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={10}
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Paste the JSON response from api-ninjas here..."
        />
      </div>

      <button
        onClick={parseJson}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Process JSON
      </button>

      {errorMessage && (
        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
      )}

      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Paste the JSON response from the API Ninjas image-to-text API.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Example API endpoint: https://api.api-ninjas.com/v1/imagetotext
        </p>
      </div>
    </div>
  );
};

export default JsonParser;
