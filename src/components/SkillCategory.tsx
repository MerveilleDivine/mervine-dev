
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
        <div className="relative flex flex-col rounded-lg border-[0.75px] border-border bg-white dark:bg-zinc-800 p-3 sm:p-4 shadow-md transition-transform hover:-translate-y-1 h-full">
          <div className="flex items-center mb-2 sm:mb-3">
            <div className="bg-primary/10 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3 text-primary flex-shrink-0">
              {icon}
            </div>
            <h3 className="text-sm sm:text-base lg:text-lg font-bold dark:text-white leading-tight truncate">{title}</h3>
          </div>
          
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-1 sm:mt-2 overflow-hidden">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1 leading-tight truncate max-w-full"
                style={{ 
                  backgroundColor: `${color}30`,
                  color: "#6959a5",
                  border: `1px solid ${color}60`
                }}
                title={skill} // Show full text on hover
              >
                {skill.length > 12 ? `${skill.substring(0, 12)}...` : skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;
