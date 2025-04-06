"use client";

// components/ApiIntegration.tsx
import React, { useState } from "react";
import { ExtractedData } from "../../types";

interface ApiIntegrationProps {
  onDataExtracted: (data: ExtractedData) => void;
}

const ApiIntegration: React.FC<ApiIntegrationProps> = ({ onDataExtracted }) => {
  const apiKey = "Lzb+wAAbxvC0cI/ZHDyV6A==3xcxvOs0c1HUoiig";
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImageFile(files[0]);
      setErrorMessage("");
    }
  };

  const callApiNinjas = async () => {
    if (!imageFile) {
      setErrorMessage("Please select an image first");
      return;
    }

    if (!apiKey) {
      setErrorMessage("Please enter your API Ninjas API key");
      return;
    }

    setIsLoading(true);
    setProgress("Preparing image...");
    setErrorMessage("");

    try {
      // Create FormData for multipart/form-data request
      const formData = new FormData();
      formData.append("image", imageFile);

      setProgress("Uploading to API...");

      // Call API Ninjas endpoint with FormData
      const response = await fetch(
        "https://api.api-ninjas.com/v1/imagetotext",
        {
          method: "POST",
          headers: {
            "X-Api-Key": apiKey,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      setProgress("Processing response...");
      const jsonResult = await response.json();

      // Parse the API response
      parseApiResponse(jsonResult);
    } catch (error) {
      console.error("API Error:", error);
      setErrorMessage(
        `API Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    } finally {
      setIsLoading(false);
      setProgress("");
    }
  };

  const parseApiResponse = (jsonResult: any) => {
    try {
      // Initialize data structure
      const data: ExtractedData = {
        experimentParams: {
          date: "",
          sampleId: "A",
          concentration: "",
        },
        initialValue: 0,
        conditions: [
          { name: "ZnO - 200", total: 0 },
          { name: "ZnO - 300", total: 0 },
        ],
        timePoints: [],
      };

      // Sort elements by y position (top to bottom)
      const sortedElements = [...jsonResult].sort((a: any, b: any) => {
        return a.bounding_box.y1 - b.bounding_box.y1;
      });

      // Extract numbers from the text elements
      const allNumbers: number[] = [];

      sortedElements.forEach((el: any) => {
        // Extract decimal numbers
        const decimalMatches = el.text.match(/\d+[.,]\d+/g);
        if (decimalMatches) {
          decimalMatches.forEach((match: string) => {
            allNumbers.push(parseFloat(match.replace(",", ".")));
          });
        }

        // Extract integers
        const intMatches = el.text.match(/\b\d+\b/g);
        if (intMatches) {
          intMatches.forEach((match: string) => {
            if (!match.includes(",") && !match.includes(".")) {
              allNumbers.push(parseInt(match));
            }
          });
        }
      });

      // First number might be the initial value
      if (allNumbers.length > 0) {
        data.initialValue = allNumbers[0];
      }

      // Extract time points
      // Assume a pattern of measurement1, measurement2, time
      const timeValues = [30, 60, 90, 120, 150, 180];

      for (let i = 1; i < allNumbers.length - 1; i += 3) {
        const timeIndex = Math.floor((i - 1) / 3);
        if (i + 2 < allNumbers.length && timeIndex < timeValues.length) {
          const measurement1 = allNumbers[i];
          const measurement2 = allNumbers[i + 1];
          const time = allNumbers[i + 2] || timeValues[timeIndex];

          // Add time point if values make sense
          if (!isNaN(measurement1) && !isNaN(measurement2) && !isNaN(time)) {
            data.timePoints.push({
              time,
              measurements: [measurement1, measurement2],
            });
          }
        }
      }

      // If no time points detected, use default time values
      if (data.timePoints.length === 0) {
        const measurements: number[][] = [];

        // Group numbers in pairs, skipping the first (initial value)
        for (let i = 1; i < allNumbers.length; i += 2) {
          if (i + 1 < allNumbers.length) {
            measurements.push([allNumbers[i], allNumbers[i + 1]]);
          }
        }

        // Assign time values to measurements
        for (
          let i = 0;
          i < Math.min(measurements.length, timeValues.length);
          i++
        ) {
          data.timePoints.push({
            time: timeValues[i],
            measurements: measurements[i],
          });
        }
      }

      // Call the callback with the extracted data
      onDataExtracted(data);
    } catch (error) {
      console.error("Parsing error:", error);
      setErrorMessage(
        `Error parsing API response: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
          disabled={isLoading}
        />
      </div>

      <button
        onClick={callApiNinjas}
        disabled={isLoading || !imageFile || !apiKey}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400">
        {isLoading ? "Processing..." : "Generate from Image to Data"}
      </button>

      {progress && <div className="mt-2 text-sm text-gray-800">{progress}</div>}

      {errorMessage && (
        <div className="mt-2 text-sm text-red-500">{errorMessage}</div>
      )}
    </div>
  );
};

export default ApiIntegration;
