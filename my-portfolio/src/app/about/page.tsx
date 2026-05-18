import ExperienceTimeline from '@/components/ExperienceTimeline';

const AboutPage = () => {
  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Page Hero Header */}
      <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 py-16 px-4 text-white text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-3">About Me</h1>
        <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
          My journey as a Senior Mobile Engineer — experience, education, and
          milestones that shaped who I am as a developer.
        </p>
      </div>

      {/* Timeline Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <ExperienceTimeline />
      </div>
    </div>
  );
};

export default AboutPage;
