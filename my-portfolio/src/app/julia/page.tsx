"use client";

import React, { useState } from "react";
import mammoth from "mammoth";
import { Document, Packer, Paragraph, TextRun } from "docx";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
    console.log("Selected file:", selectedFile);
  };

  const formatFileContent = (data: string): string => {
    return data.replace(/([A-Z][a-z]?)(\d+)/g, (match, element, number) => {
      return `${element}<sub>${number}</sub>`;
    });
  };

  const generateDocxFile = (formattedData: string) => {
    const paragraphs = formattedData
      .split(/<\/?p>/)
      .filter(Boolean)
      .map((line) => {
        return new Paragraph({
          children: [
            new TextRun({
              text: line.replace(/<sub>(.*?)<\/sub>/g, (_, sub) => sub),
            }),
          ],
        });
      });

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: paragraphs,
        },
      ],
    });

    Packer.toBuffer(doc).then((buffer) => {
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "formatted_document.docx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const arrayBuffer = await file.arrayBuffer();
      console.log("Reading file...");

      const { value, messages } = await mammoth.convertToHtml({ arrayBuffer });

      if (messages.length > 0) {
        console.warn("Mammoth messages:", messages);
      }

      const formattedData = formatFileContent(value);
      generateDocxFile(formattedData);
      console.log("File formatted and generated successfully.");
    } catch (error) {
      console.error("Error processing file:", error);
      setErrorMessage(
        "There was an error processing the file. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          DOCX Subscript Formatter
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".docx"
            onChange={handleFileChange}
            className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded-lg font-semibold text-white transition duration-300 ${
              isLoading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
            }`}>
            {isLoading ? "Processing..." : "Upload and Format"}
          </button>
        </form>

        {isLoading && (
          <div className="mt-4">
            <progress
              value={50}
              max="100"
              className="w-full h-2 rounded bg-purple-300"></progress>
            <span className="block text-center text-gray-800">50%</span>
          </div>
        )}

        {errorMessage && (
          <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
        )}
      </div>
    </div>
  );
}
