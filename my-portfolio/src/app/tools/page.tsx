import ToolCard from "@/components/ToolCard";

const tools = [
  {
    image: "/tulip.jpg",
    title: "Chemistry Formatter",
    name: "formatter",
    description:
      "Formats chemical equations and compounds with proper subscripts and bold elements.",
  },
  {
    image: "/diff.png",
    title: "Check Difference",
    name: "checkdifference",
    description:
      "A real-time text difference checker that highlights additions and deletions line-by-line with line indexing.",
  },
  {
    image: "/generator.png",
    title: "Generate Code",
    name: "generatecode",
    description:
      "The Backend Project Generator creates Node.js backend projects, generating essential files in the Desktop/Nodejs folder based on user input.",
  },
];

const ToolList = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {tools.map((item, index) => (
            <ToolCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolList;
