
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
    <div className="h-full p-6 sm:p-8 lg:p-10 bg-white dark:bg-zinc-800 rounded-2xl border border-gray-200 dark:border-zinc-700 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group hover:-translate-y-2">
      {/* Premium background gradient */}
      <div 
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
        style={{ backgroundColor: color }}
      />
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{ 
             background: `linear-gradient(45deg, ${color}20, transparent, ${color}20)`,
             backgroundSize: '200% 200%',
             animation: 'gradient-shift 3s ease infinite'
           }} 
      />
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 sm:mb-8 relative z-10">
        <div 
          className="p-3 sm:p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: `${color}20`, color: color }}
        >
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white leading-tight">
          {title}
        </h3>
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group/skill"
          >
            <div className="relative overflow-hidden rounded-xl">
              <div 
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 rounded-xl bg-gray-50 dark:bg-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-600 transition-all duration-300 border border-gray-200 dark:border-zinc-600 group-hover/skill:border-opacity-50 group-hover/skill:shadow-lg"
                style={{ borderColor: `${color}40` }}
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0 group-hover/skill:scale-125 transition-transform duration-300"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm sm:text-base lg:text-lg font-medium text-gray-700 dark:text-gray-300 leading-tight">
                  {skill}
                </span>
              </div>
              
              {/* Premium hover effect */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-20 transition-all duration-300 pointer-events-none"
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
