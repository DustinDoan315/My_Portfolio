"use client";

import { useState } from "react";

const GenerateBackendStructure: React.FC = () => {
  const [projectName, setProjectName] = useState("");
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const handleGenerateProject = async () => {
    setProgress(10);
    setMessage("Generating project...");

    try {
      const response = await fetch("/api/generatecode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectName }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setProgress(100);
      } else {
        const errorData = await response.json();
        setMessage(errorData.error);
        setProgress(0);
      }
    } catch (error) {
      setMessage("Failed to create project.");
      setProgress(0);
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6 text-black">
        Backend Project Generator
      </h1>

      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        required
        className="border p-2 mb-4 rounded text-black"
      />

      <button
        onClick={handleGenerateProject}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Generate Project
      </button>

      <div className="w-full max-w-md h-6 bg-gray-200 rounded-full my-4">
        <div
          style={{ width: `${progress}%` }}
          className={`h-full rounded-full ${
            progress < 100 ? "bg-blue-500" : "bg-green-500"
          }`}></div>
      </div>

      {message && <p className="text-black">{message}</p>}
    </div>
  );
};

export default GenerateBackendStructure;
