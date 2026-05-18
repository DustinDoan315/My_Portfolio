/* eslint-disable @next/next/no-html-link-for-pages */
import Skills from '@/components/Skills';
import StructuredData from '@/components/StructuredData';
import { personalInfo } from '@/data/personal';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

const DashBoard = () => (
  <>
    <StructuredData />
    <div className="bg-gray-950 min-h-screen">
      <main className="flex-grow container mx-auto px-4 sm:px-8 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="flex flex-col items-center rounded-3xl py-16 px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 mb-12 shadow-2xl border border-gray-800">
          <div className="relative">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="rounded-full w-40 h-40 mb-6 shadow-2xl border-4 border-gray-700"
            />
            <div className="absolute -bottom-2 -right-2 bg-emerald-400 w-6 h-6 rounded-full border-2 border-gray-900"></div>
          </div>

          <h1 className="text-4xl font-bold text-gray-100 mb-2">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl font-semibold text-gray-400 mb-4">
            {personalInfo.title}
          </h2>

          <div className="flex flex-wrap gap-3 mb-6">
            {personalInfo.badges.map((badge) => (
              <span
                key={badge.text}
                className={`${badge.color} px-3 py-1 rounded-full text-sm font-medium`}
              >
                {badge.text}
              </span>
            ))}
          </div>

          <p className="w-full max-w-4xl text-gray-300 text-center text-lg leading-relaxed mb-6">
            {personalInfo.bio.short}
          </p>

          <Skills />
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {personalInfo.expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 hover:border-cyan-800 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className={`${area.iconBg} p-3 rounded-lg mr-4`}>
                  <span className="text-2xl">{area.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-100">
                  {area.title}
                </h3>
              </div>
              <p className="text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 mb-12">
          <h3 className="text-3xl font-bold text-gray-100 text-center mb-8">
            Quick Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label}>
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl p-12 text-center text-white shadow-2xl border border-blue-600">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let&#39;s collaborate and bring your ideas to life with cutting-edge
            technology and exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              View My Work
            </a>
          </div>
        </div>
      </main>
    </div>
  </>
);

export default DashBoard;
