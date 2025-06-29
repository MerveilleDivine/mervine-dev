
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
        <div className="relative flex flex-col rounded-lg border-[0.75px] border-border bg-white dark:bg-zinc-800 p-4 sm:p-6 shadow-md transition-transform hover:-translate-y-1 h-full">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="bg-primary/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 text-primary flex-shrink-0">
              {icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold dark:text-white leading-tight">{title}</h3>
          </div>
          
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm rounded-full px-2 sm:px-3 py-1 leading-tight"
                style={{ 
                  backgroundColor: `${color}30`,
                  color: "#6959a5",
                  border: `1px solid ${color}60`
                }}
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
