/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/index.tsx
"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import ApiIntegration from "@/components/ApiIntegration";
import ClientOnly from "@/components/ClientOnly";
import {
  ExperimentParams,
  Condition,
  TimePoint,
  ExtractedData,
} from "../../../../types";

const Home: React.FC = () => {
  // State for experiment parameters
  const [experimentParams, setExperimentParams] = useState<ExperimentParams>({
    date: "",
    sampleId: "A",
    concentration: "0.032g/L Cif + 0.025g/250 mL xi", // Default value from image
  });

  // State for experiment conditions - ZnO with different concentrations
  const [conditions, setConditions] = useState<Condition[]>([
    { name: "ZnO - với 200", total: 0 },
    { name: "ZnO - với 300", total: 0 },
  ]);

  // State for time series data
  const [timePoints, setTimePoints] = useState<TimePoint[]>([
    { time: 30, measurements: [0.574, 0.649] },
    { time: 60, measurements: [2.592, 2.485] },
    { time: 90, measurements: [2.207, 2.355] },
    { time: 120, measurements: [2.055, 2.239] },
    { time: 150, measurements: [1.728, 2.231] },
    { time: 180, measurements: [1.602, 1.887] },
  ]);

  // State for the "Ban dau" (initial) value
  const [initialValue, setInitialValue] = useState<number>(2.802);

  // Handle input changes for experiment parameters
  const handleParamChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setExperimentParams({
      ...experimentParams,
      [name]: value,
    });
  };

  // Handle condition name changes
  const handleConditionNameChange = (index: number, value: string): void => {
    const newConditions = [...conditions];
    newConditions[index].name = value;
    setConditions(newConditions);
  };

  // Handle time point changes
  const handleTimeChange = (index: number, value: string): void => {
    const newTimePoints = [...timePoints];
    newTimePoints[index].time = parseInt(value, 10) || 0;
    setTimePoints(newTimePoints);
  };

  // Handle measurement value changes
  const handleMeasurementChange = (
    timeIndex: number,
    conditionIndex: number,
    value: string
  ): void => {
    const newTimePoints = [...timePoints];
    newTimePoints[timeIndex].measurements[conditionIndex] =
      parseFloat(value) || 0;
    setTimePoints(newTimePoints);

    // Recalculate totals
    calculateTotals();
  };

  // Calculate totals for each condition
  const calculateTotals = (): void => {
    const newConditions = [...conditions];

    for (let condIndex = 0; condIndex < conditions.length; condIndex++) {
      let sum = 0;
      for (let timeIndex = 0; timeIndex < timePoints.length; timeIndex++) {
        sum += timePoints[timeIndex].measurements[condIndex];
      }
      newConditions[condIndex].total = sum;
    }

    setConditions(newConditions);
  };

  // Add new time point
  const addTimePoint = (): void => {
    const lastTime =
      timePoints.length > 0 ? timePoints[timePoints.length - 1].time : 0;
    const newMeasurements = Array(conditions.length).fill(0);

    setTimePoints([
      ...timePoints,
      { time: lastTime + 30, measurements: newMeasurements },
    ]);
  };

  // Remove time point
  const removeTimePoint = (index: number): void => {
    const newTimePoints = [...timePoints];
    newTimePoints.splice(index, 1);
    setTimePoints(newTimePoints);
    calculateTotals();
  };

  // Generate Excel file
  const generateExcel = (): void => {
    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet([]);

    // Add header row with date and concentration
    XLSX.utils.sheet_add_aoa(
      ws,
      [[experimentParams.date, experimentParams.concentration, "", "", ""]],
      { origin: "A1" }
    );

    // Add sample ID row
    XLSX.utils.sheet_add_aoa(
      ws,
      [["Sample ID", experimentParams.sampleId, "", "time/min"]],
      { origin: "A2" }
    );

    // Add "Ban dau" (initial) row
    XLSX.utils.sheet_add_aoa(ws, [["Ban dau", initialValue.toString()]], {
      origin: "A3",
    });

    // Add condition headers
    const conditionRow = [""];
    conditions.forEach((condition) => {
      conditionRow.push(condition.name);
    });
    XLSX.utils.sheet_add_aoa(ws, [conditionRow], { origin: "A4" });

    // Add time series data
    timePoints.forEach((point, index) => {
      const rowData = [index];
      point.measurements.forEach((measurement) => {
        rowData.push(measurement);
      });
      rowData.push(point.time);
      XLSX.utils.sheet_add_aoa(ws, [rowData], { origin: `A${5 + index}` });
    });

    // Add totals row at the bottom
    const totalsRow = [""];
    conditions.forEach((condition: any) => {
      totalsRow.push(condition.total);
    });
    XLSX.utils.sheet_add_aoa(ws, [totalsRow], {
      origin: `A${5 + timePoints.length}`,
    });

    // Create workbook and add the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Experiment Data");

    // Generate Excel file
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Save file
    saveAs(
      dataBlob,
      `experiment-data-${new Date().toISOString().split("T")[0]}.xlsx`
    );
  };

  // Handle data extracted from OCR
  // const handleDataExtracted = (extractedData: ExtractedData): void => {
  //   if (extractedData.experimentParams) {
  //     setExperimentParams(extractedData.experimentParams);
  //   }

  //   if (extractedData.initialValue && !isNaN(extractedData.initialValue)) {
  //     setInitialValue(extractedData.initialValue);
  //   }

  //   if (extractedData.conditions && extractedData.conditions.length > 0) {
  //     setConditions(extractedData.conditions);
  //   }

  //   if (extractedData.timePoints && extractedData.timePoints.length > 0) {
  //     setTimePoints(extractedData.timePoints);
  //     // Recalculate totals after setting time points
  //     setTimeout(calculateTotals, 100);
  //   }
  // };

  // Initialize and calculate totals on component mount
  useEffect(() => {
    calculateTotals();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Experiment Data Generator</title>
        <meta
          name="description"
          content="Generate experiment data Excel files"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">
          Excel Generator
        </h1>

        <ClientOnly>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-black">
                Step 1: Upload Hình ảnh
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ApiIntegration />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Step 2: Chỉnh sửa thông số
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Date
                </label>
                <input
                  type="text"
                  name="date"
                  value={experimentParams.date}
                  onChange={handleParamChange}
                  placeholder="e.g., 31/03/25"
                  className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Sample ID
                </label>
                <input
                  type="text"
                  name="sampleId"
                  value={experimentParams.sampleId}
                  onChange={handleParamChange}
                  className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Công thức
                </label>
                <input
                  type="text"
                  name="concentration"
                  value={experimentParams.concentration}
                  onChange={handleParamChange}
                  className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-black mb-1">
                Initial Value (Ban đầu)
              </label>
              <input
                type="number"
                step="0.001"
                value={initialValue}
                onChange={(e) =>
                  setInitialValue(parseFloat(e.target.value) || 0)
                }
                className="w-full md:w-1/3 px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Step 3: Cập nhật
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 mb-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Tên cột
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {conditions.map((condition, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-black">
                        <input
                          type="text"
                          value={condition.name}
                          onChange={(e) =>
                            handleConditionNameChange(index, e.target.value)
                          }
                          className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Step 4: Review
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y text-black mb-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-black">
                      Index
                    </th>
                    {conditions.map((condition, index) => (
                      <th
                        key={index}
                        className="px-4 py-2 text-left text-sm font-medium text-black">
                        {condition.name}
                      </th>
                    ))}
                    <th className="px-4 py-2 text-left text-sm font-medium text-black">
                      Time (min)
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-black">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {timePoints.map((point, timeIndex) => (
                    <tr key={timeIndex}>
                      <td className="px-4 py-2 text-black">{timeIndex}</td>
                      {point.measurements.map((measurement, condIndex) => (
                        <td key={condIndex} className="px-4 py-2 text-black">
                          <input
                            type="number"
                            step="0.001"
                            value={measurement}
                            onChange={(e) =>
                              handleMeasurementChange(
                                timeIndex,
                                condIndex,
                                e.target.value
                              )
                            }
                            className="w-24 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </td>
                      ))}
                      <td className="px-4 py-2 text-black">
                        <input
                          type="number"
                          value={point.time}
                          onChange={(e) =>
                            handleTimeChange(timeIndex, e.target.value)
                          }
                          className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => removeTimePoint(timeIndex)}
                          className="text-red-600 hover:text-red-800">
                          Xoá
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 font-medium">Total</td>
                    {conditions.map((condition, index) => (
                      <td key={index} className="px-4 py-2 font-medium">
                        {condition.total.toFixed(3)}
                      </td>
                    ))}
                    <td colSpan={2}></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              onClick={addTimePoint}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4">
              Add Time Point
            </button>
          </div>

          <div className="flex justify-center">
            <button
              onClick={generateExcel}
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Step 5: Generate Excel File
            </button>
          </div>
        </ClientOnly>
      </main>
    </div>
  );
};

export default Home;
