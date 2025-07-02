
import React from 'react';
import { GlowingEffect } from './ui/glowing-effect';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  color?: string;
}

const SkillCategory = ({ title, skills, icon, color = "#7E69AB" }: SkillCategoryProps) => {
  return (
    <div className="relative h-full rounded-xl overflow-hidden">
      <div className="relative h-full rounded-xl border-[0.75px] border-border p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex flex-col rounded-lg border-[0.75px] border-border bg-white dark:bg-zinc-800 p-4 sm:p-5 lg:p-6 shadow-md transition-transform hover:-translate-y-1 h-full overflow-hidden">
          <div className="flex items-center mb-4 sm:mb-5 lg:mb-6">
            <div className="bg-primary/10 p-2 sm:p-2.5 rounded-full mr-3 text-primary flex-shrink-0">
              {icon}
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold dark:text-white leading-tight">{title}</h3>
          </div>
          
          <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-2.5 mt-auto overflow-hidden">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-sm sm:text-sm lg:text-sm rounded-full px-2 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 leading-tight font-medium transition-all duration-200 hover:scale-105 break-words"
                style={{ 
                  backgroundColor: `${color}20`,
                  color: "#6959a5",
                  border: `1px solid ${color}40`
                }}
                title={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;
