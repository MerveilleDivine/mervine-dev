
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code, Database, Server, Laptop, Wrench } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import SkillCategory from '../SkillCategory';
import { useAnalytics } from '../../hooks/useAnalytics';

const SkillsSection = () => {
  const { t } = useTranslation();
  const { trackEvent } = useAnalytics();

  const skillCategories = [
    {
      title: t('skills.frontend.title'),
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Tailwind CSS'],
      color: "#7E69AB", 
      icon: <Laptop size={20} />
    },
    {
      title: t('skills.backend.title'),
      skills: ['Node.js', 'Express', 'Python', 'REST API', 'Authentication', 'Authorization'],
      color: "#7E69AB",
      icon: <Server size={20} />
    },
    {
      title: t('skills.database.title'),
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Data Modeling'],
      color: "#7E69AB",
      icon: <Database size={20} />
    },
    {
      title: t('skills.tools.title'),
      skills: ['Git', 'Docker', 'CI/CD', 'Testing', 'AWS', 'C/C++', 'Problem Solving'],
      color: "#7E69AB",
      icon: <Wrench size={20} />
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-zinc-950 px-4">
      <div className="container mx-auto">
        <SectionTitle title={t('skills.title')} />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-16"
          onViewportEnter={() => trackEvent('section_view', { section: 'skills' })}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="h-[280px] sm:h-[300px] lg:h-[320px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full rounded-xl border border-gray-200 dark:border-zinc-700 p-3 sm:p-4 bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <SkillCategory
                  title={category.title}
                  skills={category.skills}
                  icon={category.icon}
                  color={category.color}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
