
import React from 'react';
import { ResumeTimeline } from '../ResumeTimeline';

const ExperienceSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-zinc-950 px-4">
      <div className="container mx-auto">
        <ResumeTimeline />
      </div>
    </section>
  );
};

export default ExperienceSection;
