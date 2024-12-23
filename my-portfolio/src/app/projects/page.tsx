import { projectItems } from "@/utils/mock";

/* eslint-disable @next/next/no-img-element */
const ProjectPage = () => {
  return (
    <div className="bg-gray-100">
      <main className="flex-grow container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {projectItems.map((item) => (
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
      </main>
    </div>
  );
};

export default ProjectPage;
