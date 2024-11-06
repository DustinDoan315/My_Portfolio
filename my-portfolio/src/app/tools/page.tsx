/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import mammoth from "mammoth";
import {
  Document,
  IFontAttributesProperties,
  Packer,
  Paragraph,
  TextRun,
} from "docx";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
    console.log("Selected file:", selectedFile);
  };

  const formatFileContent = (htmlContent: string): Paragraph[] => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    const paragraphs: Paragraph[] = [];
    const regex = /([A-Za-z\)])(\d*)/g;

    Array.from(doc.body.childNodes).forEach((node) => {
      if (node.nodeName === "P") {
        const paragraphRuns: TextRun[] = [];

        Array.from(node.childNodes).forEach((childNode) => {
          if (childNode.nodeName === "STRONG") {
            paragraphRuns.push(
              new TextRun({ text: childNode.textContent || "", bold: true })
            );
          } else if (childNode.nodeName === "EM") {
            paragraphRuns.push(
              new TextRun({ text: childNode.textContent || "", italics: true })
            );
          } else if (childNode.nodeType === Node.TEXT_NODE) {
            const line = childNode.textContent || "";
            let match;
            let lastIndex = 0;

            while ((match = regex.exec(line)) !== null) {
              const [_, element, number] = match;

              if (match.index > lastIndex) {
                paragraphRuns.push(
                  new TextRun(line.substring(lastIndex, match.index))
                );
              }

              const parentElement = childNode.parentNode as HTMLElement;
              const isBold = parentElement?.nodeName === "STRONG";
              const isItalic = parentElement?.nodeName === "EM";

              const fontSize = parentElement?.style.fontSize || "13px";
              const sizeInHalfPoints = parseFloat(fontSize) * 2;

              const fontOptions: any = {
                size: sizeInHalfPoints,
                bold: isBold,
                italics: isItalic,
              };

              paragraphRuns.push(
                new TextRun({ text: element, font: fontOptions })
              );

              if (number) {
                paragraphRuns.push(
                  new TextRun({
                    text: number,
                    subScript: true,
                  })
                );
              }

              lastIndex = regex.lastIndex;
            }

            if (lastIndex < line.length) {
              paragraphRuns.push(new TextRun(line.substring(lastIndex)));
            }
          }
        });

        paragraphs.push(new Paragraph({ children: paragraphRuns }));
      }
    });

    return paragraphs;
  };

  const generateDocxFile = async (paragraphs: Paragraph[]) => {
    const doc = new Document({
      sections: [
        {
          children: paragraphs,
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted_document.docx";
    a.click();
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
      console.log("Raw file content:", value);

      if (messages.length > 0) {
        console.warn("Mammoth messages:", messages);
      }

      const formattedData = formatFileContent(value);
      console.log("Formatted data:", formattedData);

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
