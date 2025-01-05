import React from 'react';
import { Package } from 'lucide-react'; // Example icon from Lucide

const EmptyPage: React.FC = () => {
  return (
    <div className="flex w-full h-full flex-1 flex-col items-center justify-center">
      <Package size={48} className="mb-4 text-gray-500 dark:text-gray-400" />
      <p className="text-lg font-semibold text-black dark:text-white">No items right now</p>
      <p className="text-sm text-gray-500 text-black dark:text-white">Start by adding your first item!</p>
    </div>
  );
};

export default EmptyPage;
