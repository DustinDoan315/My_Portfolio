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

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const project = projectItems.find((item) => item.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <FaCheckCircle className="text-green-500" />;
      case 'In Progress':
        return <FaSpinner className="text-blue-500 animate-spin" />;
      default:
        return <FaClock className="text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-96">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center space-x-3 mb-3">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}
                >
                  {getStatusIcon(project.status)}
                  <span className="ml-2">{project.status}</span>
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {project.title}
              </h1>
              <p className="text-white/90 text-lg max-w-3xl">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaRocket className="text-blue-600 mr-3" />
                Project Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="text-gray-400 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold text-gray-800">
                      {project.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaUsers className="text-gray-400 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Team Size</p>
                    <p className="font-semibold text-gray-800">
                      {project.teamSize}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaCheckCircle className="text-green-600 mr-3" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaCode className="text-purple-600 mr-3" />
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium"
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
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Project Stats
              </h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">
                    {project.features.length}
                  </div>
                  <div className="text-sm text-blue-600">Features</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">
                    {project.technologies.length}
                  </div>
                  <div className="text-sm text-green-600">Technologies</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Get the Code
              </h3>
              <div className="space-y-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-3 rounded-xl hover:bg-gray-700 transition-colors font-medium"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            {/* Related Projects */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
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
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-gray-800 text-sm line-clamp-2">
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
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Interested in This Project?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Lets discuss how we can work together on similar projects or
            customize this solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:dustindoan315@gmail.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Lets Discuss
            </a>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
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
