import { projectItems } from '@/utils/mock';
import Link from 'next/link';
import {
  FaCheckCircle,
  FaClock,
  FaExternalLinkAlt,
  FaGithub,
  FaSpinner,
  FaUsers,
} from 'react-icons/fa';

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @next/next/no-img-element */
const ProjectPage = () => {
  const categories = projectItems.reduce((acc: any, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

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
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12">
      <main className="flex-grow container mx-auto px-4 sm:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative applications I&#39;ve built across various
            domains, demonstrating expertise in mobile development, web
            technologies, and emerging tech.
          </p>
        </div>

        {Object.keys(categories).map((category) => (
          <section key={category} className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mr-6">
                {category}
              </h2>
              <div className="flex-grow h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="ml-6 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                {categories[category].length} projects
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {categories[category].map((item: any) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(item.status)}`}
                      >
                        {getStatusIcon(item.status)}
                        <span>{item.status}</span>
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Project Stats */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <FaClock />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaUsers />
                        <span>{item.teamSize}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {item.features.slice(0, 3).map((feature: string) => (
                          <li
                            key={feature}
                            className="flex items-center space-x-2"
                          >
                            <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {item.features.length > 3 && (
                          <li className="text-blue-600 font-medium">
                            +{item.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Link
                        href={`/projects/${item.id}`}
                        className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                      >
                        <FaExternalLinkAlt />
                        <span>View Details</span>
                      </Link>
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-1"
                      >
                        <FaGithub />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={item.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">
            Interested in Working Together?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            I&#39;m always excited to take on new challenges and build
            innovative solutions.
          </p>
          <a
            href="mailto:dustindoan315@gmail.com"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg"
          >
            Let&#39;s Discuss Your Project
          </a>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
