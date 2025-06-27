
import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

const SkillCategory = ({ title, skills, icon, color }: SkillCategoryProps) => {
  return (
    <div className="h-full p-4 sm:p-6 bg-white dark:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-700 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: color }}
      />
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6 relative z-10">
        <div 
          className="p-2 sm:p-3 rounded-xl shadow-lg"
          style={{ backgroundColor: `${color}20`, color: color }}
        >
          {icon}
        </div>
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 dark:text-white leading-tight">
          {title}
        </h3>
      </div>
      
      {/* Skills Grid - Better mobile layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group/skill"
          >
            <div className="relative overflow-hidden">
              <div 
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-gray-50 dark:bg-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-600 transition-all duration-300 border border-gray-200 dark:border-zinc-600 group-hover/skill:border-opacity-50"
                style={{ borderColor: `${color}40` }}
              >
                <div 
                  className="w-2 h-2 rounded-full flex-shrink-0 group-hover/skill:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 leading-tight">
                  {skill}
                </span>
              </div>
              
              {/* Hover effect */}
              <div 
                className="absolute inset-0 rounded-lg opacity-0 group-hover/skill:opacity-20 transition-all duration-300 pointer-events-none"
                style={{ backgroundColor: color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
