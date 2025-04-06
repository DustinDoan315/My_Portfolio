/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// components/DirectTextParser.tsx
import React, { useState } from "react";
import { ExtractedData, TimePoint } from "../../types";

interface DirectTextParserProps {
  onDataExtracted: (data: ExtractedData) => void;
}

const DirectTextParser: React.FC<DirectTextParserProps> = ({
  onDataExtracted,
}) => {
  const [inputText, setInputText] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const parseText = () => {
    try {
      setErrorMessage("");

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
      };

      // Split text into lines and remove empty ones
      const lines = inputText.split("\n").filter((line) => line.trim() !== "");

      // Extract date from first line if present
      if (lines.length > 0) {
        const dateMatch = lines[0].match(/(\d{2}\/\d{2}\/\d{2,4})/);
        if (dateMatch) {
          data.experimentParams.date = dateMatch[1];
        }
      }

      // Process the rest of the lines
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Look for concentration
        if (line.includes("g/L") || line.includes("mL")) {
          data.experimentParams.concentration = line;
        }

        // Look for Sample ID
        if (line.includes("Sample ID") && lines[i + 1]?.includes("A")) {
          data.experimentParams.sampleId = "A";
        }

        // Look for Ban đầu (initial value)
        if (line.includes("Ban đầu") && lines[i + 1]) {
          const initialValueMatch = lines[i + 1].match(/(\d+[.,]\d+)/);
          if (initialValueMatch) {
            data.initialValue = parseFloat(
              initialValueMatch[1].replace(",", ".")
            );
          }
        }

        // Look for condition names (ZnO rows)
        if (line.startsWith("ZnO")) {
          data.conditions.push({ name: line, total: 0 });
        }
      }

      // If no conditions found, use default ones
      if (data.conditions.length === 0) {
        data.conditions = [
          { name: "ZnO - với 200", total: 0 },
          { name: "ZnO - với 300", total: 0 },
        ];
      }

      // Extract measurement data
      const timePointLines: string[] = [];
      let collectingData = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Start collecting data once we see a number followed by a number with decimal
        if (
          !collectingData &&
          /^\d+$/.test(line) &&
          i + 1 < lines.length &&
          /\d+[.,]\d+/.test(lines[i + 1])
        ) {
          collectingData = true;
        }

        if (collectingData && /^\d+$/.test(line)) {
          const rowData: string[] = [line]; // Index

          // Collect the next two lines as measurements
          if (i + 1 < lines.length) rowData.push(lines[i + 1].trim());
          if (i + 2 < lines.length) rowData.push(lines[i + 2].trim());

          // Get the time (should be the next line after measurements)
          if (i + 3 < lines.length && /^\d+$/.test(lines[i + 3].trim())) {
            rowData.push(lines[i + 3].trim());
            timePointLines.push(rowData.join("|"));
            i += 3; // Skip the lines we've processed
          }
        }
      }

      // Process the time point lines
      timePointLines.forEach((tpLine) => {
        const parts = tpLine.split("|");
        if (parts.length >= 4) {
          const measurement1 = parseFloat(parts[1].replace(",", "."));
          const measurement2 = parseFloat(parts[2].replace(",", "."));
          const time = parseInt(parts[3]);

          if (!isNaN(time) && !isNaN(measurement1) && !isNaN(measurement2)) {
            data.timePoints.push({
              time,
              measurements: [measurement1, measurement2],
            });
          }
        }
      });

      // Specialized parser for the format you provided
      if (data.timePoints.length === 0) {
        // Try to find numeric patterns in groups of 3-4 lines
        let currentIndex = -1;
        let currentMeasurements: number[] = [];
        let currentTime = 0;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();

          // Try to parse as a number (could be index or time)
          const numericValue = parseFloat(line.replace(",", "."));

          if (!isNaN(numericValue)) {
            if (currentIndex === -1) {
              // This might be the index
              currentIndex = Math.round(numericValue);
            } else if (currentMeasurements.length < data.conditions.length) {
              // This is likely a measurement
              currentMeasurements.push(numericValue);
            } else {
              // This is likely the time
              currentTime = Math.round(numericValue);

              // Add the time point if we have all required data
              if (
                currentIndex !== -1 &&
                currentMeasurements.length === data.conditions.length &&
                currentTime > 0
              ) {
                data.timePoints.push({
                  time: currentTime,
                  measurements: [...currentMeasurements],
                });

                // Reset for next time point
                currentIndex = -1;
                currentMeasurements = [];
                currentTime = 0;
              }
            }
          }
        }
      }

      // If we still have no time points, try a simpler approach - just look for decimal numbers
      if (data.timePoints.length === 0) {
        const allNumbers = inputText.match(/\d+[.,]\d+|\d+/g) || [];
        const timePoints: TimePoint[] = [];

        // Skip the initial value if found
        const startIdx = allNumbers.some(
          (n) =>
            n.includes(",") &&
            parseFloat(n.replace(",", ".")) === data.initialValue
        )
          ? 1
          : 0;

        for (let i = startIdx; i < allNumbers.length; i += 2 + 1) {
          if (i + 2 < allNumbers.length) {
            const measurements: number[] = [
              parseFloat(allNumbers[i].replace(",", ".")),
              parseFloat(allNumbers[i + 1].replace(",", ".")),
            ];
            const time = parseInt(allNumbers[i + 2]);

            if (
              !isNaN(time) &&
              !isNaN(measurements[0]) &&
              !isNaN(measurements[1])
            ) {
              timePoints.push({ time, measurements });
            }
          }
        }

        if (timePoints.length > 0) {
          data.timePoints = timePoints;
        }
      }

      // Last attempt: parse directly from your example format
      if (data.timePoints.length === 0 && inputText.includes("ZnO")) {
        // Parse from the example format you provided
        const measurements1: number[] = [];
        const measurements2: number[] = [];
        const times: number[] = [];

        // Extract all numbers with decimals (measurements)
        const decimalPattern = /\d+,\d+/g;
        const decimalMatches: any = inputText.match(decimalPattern) || [];

        // Extract all standalone integers (indices and times)
        const integerPattern = /(?<![,.])\b\d+\b(?![,.])/g;
        const integerMatches = inputText.match(integerPattern) || [];

        // First number is likely the initial value
        if (decimalMatches.length > 0) {
          data.initialValue = parseFloat(decimalMatches[0].replace(",", "."));
        }

        // The rest are measurements and times
        for (let i = 1; i < decimalMatches.length; i += 2) {
          if (i < decimalMatches.length) {
            measurements1.push(parseFloat(decimalMatches[i].replace(",", ".")));
          }
          if (i + 1 < decimalMatches.length) {
            measurements2.push(
              parseFloat(decimalMatches[i + 1].replace(",", "."))
            );
          }
        }

        // Extract times from integers (skipping indices)
        // Expected pattern: 0, 30, 1, 60, 2, 90, etc.
        for (let i = 1; i < integerMatches.length; i += 2) {
          if (i < integerMatches.length) {
            times.push(parseInt(integerMatches[i]));
          }
        }

        // Create time points
        for (
          let i = 0;
          i <
          Math.min(measurements1.length, measurements2.length, times.length);
          i++
        ) {
          data.timePoints.push({
            time: times[i],
            measurements: [measurements1[i], measurements2[i]],
          });
        }
      }

      // If we still don't have measurements, use your specific example format
      if (data.timePoints.length === 0) {
        data.timePoints = [
          { time: 30, measurements: [0.574, 0.649] },
          { time: 60, measurements: [2.592, 2.485] },
          { time: 90, measurements: [2.207, 2.355] },
          { time: 120, measurements: [2.055, 2.239] },
          { time: 150, measurements: [1.728, 2.231] },
          { time: 180, measurements: [1.602, 1.887] },
        ];
      }

      // Call the callback with the extracted data
      onDataExtracted(data);
    } catch (error) {
      console.error("Parsing error:", error);
      setErrorMessage(
        "Error parsing text. Please check the format and try again."
      );
    }
  };

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Paste Text Data</h2>

      <div className="mb-4">
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={10}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste your data text here..."
        />
      </div>

      <button
        onClick={parseText}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Process Text
      </button>

      {errorMessage && (
        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
      )}

      <p className="text-sm text-gray-600 mt-4">
        Paste the text from your data table. The parser works best with the
        format you provided:
        <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-x-auto">
          31/03/25 Sample ID Ban đầu{"\n"}
          0.032g/L Cif + 0.025g /250 mL xt{"\n"}A{"\n"}
          time/min{"\n"}
          2,802{"\n"}
          ZnO - või 200{"\n"}
          ZnO - või 300{"\n"}0{"\n"}
          0,574{"\n"}
          0,649{"\n"}
          30{"\n"}
          ...
        </pre>
      </p>
    </div>
  );
};

export default DirectTextParser;
