
import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilter = ({ categories, activeFilter, onFilterChange }: ProjectFilterProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex flex-wrap gap-3 bg-gray-100 dark:bg-zinc-800 p-2 rounded-full">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === category
                ? 'bg-primary text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
