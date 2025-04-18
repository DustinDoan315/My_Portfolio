/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// components/ApiIntegration.tsx
import React, { useState } from "react";
import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";

interface ApiIntegrationProps {
  onTextExtracted?: (text: string) => void;
}

const MAX_FILE_SIZE = 200 * 1024; // 200KB in bytes
const MAX_FILES = 2;

const ApiIntegration: React.FC<ApiIntegrationProps> = ({ onTextExtracted }) => {
  const apiKey = "Lzb+wAAbxvC0cI/ZHDyV6A==3xcxvOs0c1HUoiig";
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [processingStatus, setProcessingStatus] = useState<{[key: string]: string}>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    // Convert FileList to Array for easier manipulation
    const fileArray = Array.from(files);
    
    // Validate file count
    if (fileArray.length > MAX_FILES) {
      setErrorMessage(`You can only upload a maximum of ${MAX_FILES} images at once.`);
      return;
    }
    
    // Validate file sizes
    const oversizedFiles = fileArray.filter(file => file.size > MAX_FILE_SIZE);
    if (oversizedFiles.length > 0) {
      setErrorMessage(`The following files exceed the 200KB limit: ${
        oversizedFiles.map(file => `${file.name} (${Math.round(file.size / 1024)}KB)`).join(', ')
      }`);
      return;
    }
    
    setImageFiles(fileArray);
    setErrorMessage("");
  };

  const generateWordDocument = (extractedTexts: {[filename: string]: string}) => {
    try {
      setProgress("Generating Word document...");
      
      // Combine all texts with headers for each image
      const combinedParagraphs: Paragraph[] = [];

      // Add each image's text with a header
      Object.entries(extractedTexts).forEach(([filename, text], index) => {
        // Add a page break after the first image content (if not the first image)
        if (index > 0) {
          combinedParagraphs.push(
            new Paragraph({
              text: "",
              pageBreakBefore: true,
            })
          );
        }
        
        // Add image filename as header
        combinedParagraphs.push(
          new Paragraph({
            text: `Image: ${filename}`,
            heading: "Heading2",
            spacing: { before: 100, after: 100 },
          })
        );
        
        // Add extracted text
        combinedParagraphs.push(
          new Paragraph({
            text: text,
            spacing: { after: 200 },
          })
        );
      });
      
      // Create a single document with all content
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: combinedParagraphs,
          },
        ],
      });
      
      // Generate a filename based on current date/time
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const docFilename = `extracted_text_${timestamp}.docx`;
      
      // Generate and save document
      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, docFilename);
        setProgress("Word document generated successfully!");
      });
      
    } catch (error) {
      console.error("Word document generation error:", error);
      setErrorMessage(
        `Error generating Word document: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  const processImage = async (file: File): Promise<string> => {
    try {
      // Update status for this specific file
      setProcessingStatus(prev => ({
        ...prev,
        [file.name]: "Uploading to API..."
      }));
      
      // Create FormData for multipart/form-data request
      const formData = new FormData();
      formData.append("image", file);

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

      // Handle error responses
      if (!response.ok) {
        // Try to get detailed error information
        try {
          const errorData = await response.json();
          
          // Check for specific error message format
          if (errorData.error) {
            throw new Error(`${file.name}: ${errorData.error}`);
          } else {
            throw new Error(`${file.name} - API Error (${response.status}): ${JSON.stringify(errorData)}`);
          }
        } catch {
          throw new Error(`${file.name} - API Error: ${response.status} ${response.statusText}`);
        }
      }

      // Update status for this specific file
      setProcessingStatus(prev => ({
        ...prev,
        [file.name]: "Processing response..."
      }));
      
      const jsonResult = await response.json();
      
      // Just extract the text from each item in the response
      return jsonResult.map((item: any) => item.text).join('\n');
      
    } catch (error) {
      console.error(`Error processing ${file.name}:`, error);
      throw error;
    }
  };

  const callApiNinjas = async () => {
    if (imageFiles.length === 0) {
      setErrorMessage("Please select at least one image");
      return;
    }

    setIsLoading(true);
    setProgress(`Processing ${imageFiles.length} image(s)...`);
    setErrorMessage("");
    setProcessingStatus({});

    try {
      // Process each image sequentially to avoid rate limiting
      const results: {[filename: string]: string} = {};
      
      // Process images one by one
      for (const file of imageFiles) {
        try {
          const extractedText = await processImage(file);
          results[file.name] = extractedText;
          
          // Update status for this specific file
          setProcessingStatus(prev => ({
            ...prev,
            [file.name]: "Text extracted successfully"
          }));
        } catch (error) {
          // Update status for this specific file
          setProcessingStatus(prev => ({
            ...prev,
            [file.name]: `Failed: ${error instanceof Error ? error.message : "Unknown error"}`
          }));
        }
      }
      
      // If we have at least one successful result, generate documents
      if (Object.keys(results).length > 0) {
        generateWordDocument(results);
        
        // Notify parent component if callback exists
        if (onTextExtracted) {
          // Combine all extracted texts
          const combinedText = Object.values(results).join('\n\n--- Next Image ---\n\n');
          onTextExtracted(combinedText);
        }
      } else {
        setErrorMessage("No text could be extracted from any of the images.");
      }
    } catch (error) {
      console.error("Processing error:", error);
      setErrorMessage(
        `${error instanceof Error ? error.message : "Unknown error"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-full">
       <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Images (Max 2 images, each &lt;200KB)
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
          disabled={isLoading}
        />
        <div className="text-xs text-gray-500 mt-1">
          Selected: {imageFiles.length} image(s)
          {imageFiles.length > 0 && (
            <ul className="mt-1">
              {imageFiles.map((file, index) => (
                <li key={index}>
                  {file.name} ({Math.round(file.size / 1024)}KB)
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <button
        onClick={callApiNinjas}
        disabled={isLoading || imageFiles.length === 0}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 ">
        {isLoading ? "Processing..." : "Extract Text to Word Document"}
      </button>

      {progress && <div className="mt-2 text-sm text-gray-600">{progress}</div>}
      
      {/* Individual file processing status */}
      {Object.keys(processingStatus).length > 0 && (
        <div className="mt-2">
          <h4 className="text-sm font-medium text-gray-700">Processing Status:</h4>
          <ul className="mt-1 text-xs">
            {Object.entries(processingStatus).map(([filename, status]) => (
              <li key={filename} className="mb-1">
                <span className="font-medium">{filename}:</span> {status}
              </li>
            ))}
          </ul>
        </div>
      )}

      {errorMessage && (
        <div className="mt-2 text-sm text-red-500">{errorMessage}</div>
      )}
    </div>
   </div>
  );
};

export default ApiIntegration;