/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const ToolCard = ({ item }: any) => {
  return (
    <div className="flex flex-col max-w-xs p-3 bg-white border rounded-lg shadow-md h-full">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-36 rounded-lg mb-3 object-cover"
      />

      <h3 className="text-lg font-semibold text-black">{item.title}</h3>

      <p className="text-sm text-gray-500 mb-4 flex-grow">{item.description}</p>

      <Link href={`/tools/${item.name}`}>
        <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
          Try
        </button>
      </Link>
    </div>
  );
};

export default ToolCard;
