import Link from 'next/link';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

const ToolCard = ({ item }: any) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h3>

        <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
          {item.description}
        </p>

        {/* Technologies */}
        {item.technologies && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {item.technologies
                .slice(0, 3)
                .map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              {item.technologies.length > 3 && (
                <span className="text-blue-600 text-xs font-medium">
                  +{item.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        <Link href={`/tools/${item.name}`}>
          <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            Try Tool
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
