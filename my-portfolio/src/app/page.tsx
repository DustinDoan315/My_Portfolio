/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Skills from "@/components/Skills";
import React from "react";

const DashBoard = () => (
  <div className="bg-gray-100">
    <main className="flex-grow container mx-auto sm:px-24">
      <div className="flex flex-col items-center rounded-2xl py-6 bg-gradient-to-br from-[#ABECD6] to-[#dadfbc]">
        <img
          src="/avatar.jpg"
          alt="Dustin"
          className="rounded-full w-32 h-32 mb-4 shadow-lg"
        />
        <h2 className="text-2xl font-semibold text-gray-600">Dustin Doan</h2>
        <p className="w-2/3 text-gray-700 mt-2">
          👋 I&#39;m a Mobile Engineer with over 4 years of experience
          specializing in React Native. My journey in mobile development has
          equipped me with a solid foundation and deep expertise in creating
          seamless, high-performance applications.
        </p>
        <ul className="w-2/3 text-gray-700 mt-2 list-disc list-inside space-y-2">
          <li>
            🔗 <strong>Blockchain</strong>: I&#39;ve developed secure and
            efficient applications that leverage decentralized technologies,
            ensuring data integrity and user privacy.
          </li>
          <li>
            🛒 <strong>E-commerce</strong>: My experience includes building
            robust platforms that provide smooth user experiences and facilitate
            secure transactions, enhancing the shopping journey for customers.
          </li>
          <li>
            📅 <strong>Booking</strong>: I&#39;ve designed intuitive booking
            systems that streamline reservation processes, making it easy for
            users to find and book what they need.
          </li>
          <li>
            🎉 <strong>Events</strong>: My work in event management apps has
            involved creating engaging interfaces and features that cater to
            user needs, improving the overall event experience.
          </li>
        </ul>
        <p className="w-2/3 text-gray-700 mt-4">
          My passion lies in crafting user-centric applications that not only
          meet but exceed expectations. I thrive in collaborative environments
          and am always eager to tackle new challenges and learn new
          technologies.
        </p>

        <Skills />
      </div>
    </main>
  </div>
);

export default DashBoard;
