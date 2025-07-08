import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle';
import ProjectCard from '../ProjectCard';
import { GlowingEffect } from '../ui/glowing-effect';
import { useFeaturedProjects } from '../../hooks/useProjects';
import { useAnalytics } from '../../hooks/useAnalytics';

const ProjectsSection = () => {
  const { t } = useTranslation();
  const { data: projects, isLoading: projectsLoading } = useFeaturedProjects();
  const { trackEvent } = useAnalytics();

  const handleProjectClick = (project: any) => {
    trackEvent('project_click', {
      project_title: project.title,
      project_category: project.category
    });
  };

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-zinc-900 px-4">
      <div className="container mx-auto">
        <SectionTitle title={t('projects.things_built')} />
        
        {projectsLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-[400px] sm:h-[440px] lg:h-[480px] bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-xl animate-pulse">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="flex gap-2 flex-wrap">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-16"
            onViewportEnter={() => trackEvent('section_view', { section: 'projects' })}
          >
            {projects?.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="h-[400px] sm:h-[440px] lg:h-[480px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative h-full rounded-xl overflow-hidden group">
                  <div className="relative h-full rounded-xl border border-gray-200 dark:border-zinc-700 p-3 sm:p-4 bg-white dark:bg-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <GlowingEffect
                      spread={50}
                      glow={true}
                      disabled={false}
                      proximity={80}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <ProjectCard 
                      title={project.title}
                      description={project.description}
                      techStack={project.tech_stack}
                      githubUrl={project.github_url}
                      liveUrl={project.live_url}
                      imageUrl={project.image_url || '/lovable-uploads/spendwise-mockup.png'}
                      category={project.category || 'Web'}
                      index={index}
                      isInProgress={true}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
