'use client';

import { FaAward, FaBriefcase, FaCode, FaGraduationCap } from 'react-icons/fa';

import {
  experienceData,
  experienceStats,
  getTypeColor,
} from '@/data/experience';

const getDotBorderColor = (type: string): string =>
  ({
    work: 'border-blue-400',
    education: 'border-emerald-400',
    achievement: 'border-amber-400',
    project: 'border-purple-400',
  }[type] ?? 'border-gray-300');

const getDotBg = (type: string): string =>
  ({
    work: 'bg-blue-50',
    education: 'bg-emerald-50',
    achievement: 'bg-amber-50',
    project: 'bg-purple-50',
  }[type] ?? 'bg-white');

const ExperienceTimeline = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <FaBriefcase className="text-blue-600" />;
      case 'education':
        return <FaGraduationCap className="text-green-600" />;
      case 'achievement':
        return <FaAward className="text-yellow-600" />;
      case 'project':
        return <FaCode className="text-purple-600" />;
      default:
        return <FaBriefcase className="text-gray-600" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Professional Journey
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My career progression from Computer Science student to Senior Mobile
          Developer, highlighting key milestones, achievements, and continuous
          learning.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-emerald-400 to-purple-400"></div>

        {experienceData.map((item) => (
          <div
            key={item.id}
            className="relative flex items-start mb-8 last:mb-0"
          >
            {/* Timeline Dot */}
            <div className={`flex-shrink-0 w-16 h-16 ${getDotBg(item.type)} border-4 ${getDotBorderColor(item.type)} rounded-full flex items-center justify-center relative z-10 shadow-lg`}>
              {getIcon(item.type)}
            </div>

            {/* Content */}
            <div className="ml-6 flex-grow">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between mb-3">
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-blue-600 font-semibold">
                      {item.organization}
                    </p>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                        item.type
                      )}`}
                    >
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {item.description.map((desc) => (
                    <li
                      key={desc.substring(0, 20)}
                      className="flex items-start space-x-2 text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm">{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                {item.technologies && (
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">
                      Technologies:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {item.achievements && (
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement.substring(0, 20)}
                          className="flex items-center space-x-2 text-green-700"
                        >
                          <span className="text-green-500">✓</span>
                          <span className="text-xs">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {experienceStats.yearsExperience}
            </div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {experienceStats.projectsDelivered}
            </div>
            <div className="text-sm text-gray-600">Projects Delivered</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              {experienceStats.certifications}
            </div>
            <div className="text-sm text-gray-600">Certifications</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-600">
              {experienceStats.appDownloads}
            </div>
            <div className="text-sm text-gray-600">App Downloads</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
