import ToolCard from '@/components/ToolCard';
import { toolsData } from '@/data/tools';

const ToolList = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {toolsData.map((item) => (
            <ToolCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolList;
