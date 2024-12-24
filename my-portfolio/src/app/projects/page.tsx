/* eslint-disable @typescript-eslint/no-explicit-any */
import { projectItems } from "@/utils/mock";

/* eslint-disable @next/next/no-img-element */
const ProjectPage = () => {
  const categories = projectItems.reduce((acc: any, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="bg-gray-100">
      <main className="flex-grow container mx-auto">
        {Object.keys(categories).map((category) => (
          <section key={category} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
              {categories[category].map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center bg-white rounded-lg shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-56 h-full rounded-t-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center mb-3">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default ProjectPage;
