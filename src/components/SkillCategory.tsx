
import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon, color }) => {
  return (
    <div className="skills-card bg-white dark:bg-zinc-800 rounded-xl p-4 sm:p-6 h-full overflow-hidden">
      <motion.div 
        className="flex items-center gap-3 mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div 
          className="p-2 sm:p-3 rounded-lg flex-shrink-0"
          style={{ backgroundColor: `${color}20` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white break-words">
          {title}
        </h3>
      </motion.div>
      
      <div className="flex flex-wrap gap-2 sm:gap-3 overflow-hidden">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="skill-tag bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border border-gray-200 dark:border-zinc-600 hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors duration-200 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: color + '20',
              borderColor: color + '40'
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
