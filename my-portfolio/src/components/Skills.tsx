'use client';
import { getLevelColor, skillCategories } from '@/data/skills';
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

const getLevelPercent = (level: string): number =>
  ({ Expert: 95, Advanced: 75, Intermediate: 55, Beginner: 30 }[level] ?? 50);

const getBarColor = (level: string): string =>
  ({
    Expert: 'bg-gradient-to-r from-emerald-400 to-emerald-600',
    Advanced: 'bg-gradient-to-r from-blue-400 to-blue-600',
    Intermediate: 'bg-gradient-to-r from-amber-300 to-amber-500',
    Beginner: 'bg-gradient-to-r from-gray-500 to-gray-600',
  }[level] ?? 'bg-gray-600');

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
      <h3 className="text-3xl font-bold text-gray-100 text-center mb-8">
        Technical Skills
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800"
          >
            <h4 className="text-xl font-semibold text-gray-100 mb-4 text-center">
              {category.title}
            </h4>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className={`${skill.color} text-2xl`}>
                        {getIconComponent(skill.icon)}
                      </span>
                      <span className="font-semibold text-gray-200 text-sm">
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${getLevelColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-500 ${getBarColor(skill.level)}`}
                      style={{ width: `${getLevelPercent(skill.level)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
