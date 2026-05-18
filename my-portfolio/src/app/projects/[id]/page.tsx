/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { projectItems } from '@/utils/mock';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaRocket,
  FaSpinner,
  FaUsers,
} from 'react-icons/fa';

const ProjectDetailPage = ({ params }: any) => {
  const project = projectItems.find((item) => item.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <FaCheckCircle className="text-emerald-400" />;
      case 'In Progress':
        return <FaSpinner className="text-blue-400 animate-spin" />;
      default:
        return <FaClock className="text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-900 text-emerald-300 border-emerald-700';
      case 'In Progress':
        return 'bg-blue-900 text-blue-300 border-blue-700';
      default:
        return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800 overflow-hidden mb-8">
          <div className="relative h-96 bg-gray-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center space-x-3 mb-3">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium border flex items-center ${getStatusColor(project.status)}`}
                >
                  {getStatusIcon(project.status)}
                  <span className="ml-2">{project.status}</span>
                </span>
                <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {project.title}
              </h1>
              <p className="text-white/80 text-lg max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Project Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <FaRocket className="text-cyan-400 mr-3" />
                Project Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="text-gray-500 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold text-gray-200">
                      {project.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaUsers className="text-gray-500 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Team Size</p>
                    <p className="font-semibold text-gray-200">
                      {project.teamSize}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <FaCheckCircle className="text-emerald-400 mr-3" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <FaCode className="text-purple-400 mr-3" />
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-cyan-700 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Stats */}
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">
                Project Stats
              </h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-blue-950 border border-blue-800 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">
                    {project.features.length}
                  </div>
                  <div className="text-sm text-blue-400">Features</div>
                </div>
                <div className="text-center p-4 bg-emerald-950 border border-emerald-800 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-400">
                    {project.technologies.length}
                  </div>
                  <div className="text-sm text-emerald-400">Technologies</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">
                Get the Code
              </h3>
              <div className="space-y-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-gray-700 text-white px-4 py-3 rounded-xl hover:bg-gray-600 transition-colors font-medium"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-cyan-600 text-white px-4 py-3 rounded-xl hover:bg-cyan-700 transition-colors font-medium"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            {/* Related Projects */}
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">
                Related Projects
              </h3>
              <div className="space-y-3">
                {projectItems
                  .filter(
                    (item) =>
                      item.category === project.category &&
                      item.id !== project.id
                  )
                  .slice(0, 3)
                  .map((item) => (
                    <Link
                      key={item.id}
                      href={`/projects/${item.id}`}
                      className="block p-3 rounded-lg hover:bg-gray-800 border border-gray-800 hover:border-gray-700 transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-gray-200 text-sm line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-xs text-gray-500">{item.status}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl p-8 text-center text-white border border-blue-600">
          <h3 className="text-2xl font-bold mb-4">
            Interested in This Project?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let&#39;s discuss how we can work together on similar projects or
            customize this solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:dustindoan315@gmail.com"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Let&#39;s Discuss
            </a>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-200"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
