
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center relative">
        {title}
        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
      </h2>
      {subtitle && <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
