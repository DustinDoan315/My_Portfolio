/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/index.tsx
"use client";

import React from "react";
import Head from "next/head";
import ApiIntegration from "@/components/ApiIntegration";
import ClientOnly from "@/components/ClientOnly";

const GenerateWord: React.FC = () => {

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
                <ApiIntegration />
            </div>
          </div>

        </ClientOnly>
      </main>
    </div>
  );
};

export default GenerateWord;
