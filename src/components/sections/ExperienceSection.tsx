
import React from 'react';
import { ResumeTimeline } from '../ResumeTimeline';
import { useToast } from '@/hooks/use-toast';

const ExperienceSection = () => {
  const { toast } = useToast();
  
  const handleResumeDownloadError = () => {
    toast({
      title: "Resume Download Error",
      description: "The resume file could not be loaded. Please try again later.",
      variant: "destructive",
    });
  };
  
  return (
    <section id="resume" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-zinc-950 px-4">
      <div className="container mx-auto">
        <ResumeTimeline onDownloadError={handleResumeDownloadError} />
      </div>
    </section>
  );
};

export default ExperienceSection;
