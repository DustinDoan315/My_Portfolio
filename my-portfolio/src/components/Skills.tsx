'use client';
import { certifications, getLevelColor, skillCategories } from '@/data/skills';
import React from 'react';

import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiExpo,
  SiFirebase,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiWeb3Dotjs,
} from 'react-icons/si';

const Skills = () => {
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType } = {
      FaReact,
      FaNodeJs,
      FaJs,
      FaPython,
      FaGitAlt,
      FaDocker,
      FaAws,
      SiNextdotjs,
      SiTypescript,
      SiTailwindcss,
      SiMongodb,
      SiPostgresql,
      SiGraphql,
      SiFirebase,
      SiRedux,
      SiExpo,
      SiSolidity,
      SiWeb3Dotjs,
    };

    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <div className="mt-8 w-full max-w-6xl">
      <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Technical Skills
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              {category.title}
            </h4>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <span className={`${skill.color} text-2xl`}>
                      {getIconComponent(skill.icon)}
                    </span>
                    <span className="font-medium text-gray-700">
                      {skill.name}
                    </span>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
        <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Certifications & Achievements
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className={`flex items-center space-x-3 p-3 ${cert.bgColor} rounded-lg`}
            >
              <span className={cert.iconColor}>{cert.icon}</span>
              <div>
                <p className="font-medium text-gray-800">{cert.title}</p>
                <p className="text-sm text-gray-600">{cert.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
