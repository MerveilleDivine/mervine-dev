
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
        <div className="relative flex flex-col rounded-lg border-[0.75px] border-border bg-white dark:bg-zinc-800 p-6 shadow-md transition-transform hover:-translate-y-1 h-full">
          <div className="flex items-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
              {icon}
            </div>
            <h3 className="text-xl font-bold dark:text-white">{title}</h3>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                style={{ 
                  backgroundColor: `${color}10`,
                  color: color,
                  border: `1px solid ${color}30`
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
