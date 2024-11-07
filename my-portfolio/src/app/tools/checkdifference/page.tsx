"use client";

import React, { useState } from "react";
import { diffWords, Change } from "diff";

const TextDiff = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diffResults, setDiffResults] = useState<Change[][]>([]);

  const handleCompare = () => {
    const lines1 = text1.split("\n");
    const lines2 = text2.split("\n");
    const maxLines = Math.max(lines1.length, lines2.length);

    const results: Change[][] = [];
    for (let i = 0; i < maxLines; i++) {
      const diff = diffWords(lines1[i] || "", lines2[i] || "");
      results.push(diff);
    }
    setDiffResults(results);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        Text Difference Checker
      </h1>

      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <textarea
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          placeholder="Enter first text here..."
          className="w-full p-4 border border-gray-300 rounded-md resize-none h-80 text-gray-800"
        />
        <textarea
          value={text2}
          onChange={(e) => setText2(e.target.value)}
          placeholder="Enter second text here..."
          className="w-full p-4 border border-gray-300 rounded-md resize-none h-80 text-gray-800"
        />
      </div>

      <button
        onClick={handleCompare}
        className="mt-6 px-6 py-3 w-full bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200">
        Compare
      </button>

      <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Differences
        </h2>

        <div className="flex flex-col space-y-2 ">
          {diffResults.map((lineDiffs, lineIndex) => (
            <div key={lineIndex} className="flex items-start">
              <div className="w-10 text-right pr-2 text-gray-500">
                {lineIndex + 1}
              </div>

              <div className="whitespace-pre-wrap text-sm leading-relaxed p-1">
                {lineDiffs.map((part, index) => (
                  <span
                    key={index}
                    className={
                      part.added
                        ? "bg-green-200 text-green-800 font-medium"
                        : part.removed
                        ? "bg-red-200 text-red-800 font-medium"
                        : "text-gray-800"
                    }>
                    {part.value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextDiff;
