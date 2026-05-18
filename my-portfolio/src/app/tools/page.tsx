import ToolCard from '@/components/ToolCard';
import { toolsData } from '@/data/tools';

const ToolList = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            Development Tools
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A collection of useful tools I have built to streamline development
            workflows, from code formatting to document generation. Each tool is
            designed with developers in mind for maximum efficiency.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {toolsData.map((item) => (
            <ToolCard key={item.name} item={item} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl p-12 text-white border border-blue-600">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Tool?</h3>
          <p className="text-lg mb-6 opacity-90">
            I can build custom development tools tailored to your specific
            workflow needs.
          </p>
          <a
            href="mailto:dustindoan315@gmail.com"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Let&#39;s Discuss
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToolList;
