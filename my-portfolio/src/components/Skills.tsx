"use client";
import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: <FaReact />,
      link: "https://reactjs.org/",
      defaultColor: "text-blue-500",
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "React Native",
      icon: <FaReact />,
      link: "https://reactnative.dev/",
      defaultColor: "text-cyan-500",
      hoverColor: "hover:text-green-400",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      link: "https://nodejs.org/",
      defaultColor: "text-green-600",
      hoverColor: "hover:text-green-600",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      link: "https://nextjs.org/",
      defaultColor: "text-gray-600",
      hoverColor: "hover:text-gray-500",
    },
  ];

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold text-gray-600 text-center">
        Skills
      </h3>
      <div className="flex space-x-4 mt-2">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${skill.defaultColor} ${skill.hoverColor} text-4xl p-2 rounded transition-colors duration-200`}
            aria-label={`Visit ${skill.name} documentation`}>
            {skill.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
