"use client";

import { useState, useRef } from "react";

const GenerateImage = () => {
  const [text, setText] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const generateAvatar = () => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Clear previous canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    const eyeColor = text.includes("blue") ? "blue" : "brown";
    const hairColor = text.includes("blonde") ? "blonde" : "brown";

    // Draw the face (circle)
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fillStyle = "#f0d0a0"; // skin color
    ctx.fill();

    // Draw hair
    ctx.beginPath();
    ctx.arc(100, 60, 50, 0, Math.PI);
    ctx.fillStyle = hairColor;
    ctx.fill();

    // Draw eyes
    ctx.beginPath();
    ctx.arc(75, 90, 10, 0, Math.PI * 2);
    ctx.arc(125, 90, 10, 0, Math.PI * 2);
    ctx.fillStyle = eyeColor;
    ctx.fill();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-lg w-full p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Text to Avatar</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Enter a description (e.g., 'blue eyes, blonde hair')"
        />
        <button
          onClick={generateAvatar}
          className="w-full p-2 bg-blue-500 text-white rounded-lg">
          Generate Avatar
        </button>
        <div className="mt-6 flex justify-center">
          <canvas
            ref={canvasRef}
            width={200}
            height={200}
            className="border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default GenerateImage;
