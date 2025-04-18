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

const GenerateWord: React.FC = () => {
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
  const handleDataExtracted = (extractedData: any): void => {
    if (extractedData.experimentParams) {
      setExperimentParams(extractedData.experimentParams);
    }

    if (extractedData.initialValue && !isNaN(extractedData.initialValue)) {
      setInitialValue(extractedData.initialValue);
    }

    if (extractedData.conditions && extractedData.conditions.length > 0) {
      setConditions(extractedData.conditions);
    }

    if (extractedData.timePoints && extractedData.timePoints.length > 0) {
      setTimePoints(extractedData.timePoints);
      // Recalculate totals after setting time points
      setTimeout(calculateTotals, 100);
    }
  };

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
          Convert Image to Word
        </h1>

        <ClientOnly>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
                <ApiIntegration onTextExtracted={handleDataExtracted} />
            </div>
          </div>

        </ClientOnly>
      </main>
    </div>
  );
};

export default GenerateWord;
