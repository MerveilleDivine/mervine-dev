
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
    <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 h-full shadow-xl border border-gray-200 dark:border-zinc-700 hover:shadow-2xl transition-all duration-300">
      <motion.div 
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div 
          className="p-3 rounded-lg flex-shrink-0"
          style={{ backgroundColor: `${color}20` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h3>
      </motion.div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full text-sm font-medium border border-primary/20 dark:border-primary/30 hover:from-primary/20 hover:to-secondary/20 hover:border-primary/40 transition-all duration-200 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 4px 12px ${color}30`
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
