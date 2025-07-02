
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import ChatWidget from '../components/ChatWidget';
import { TubelightNavbar } from '../components/TubelightNavbar';
import { Code, Database, Server, Laptop, Wrench, Mail } from 'lucide-react';
import { SocialDock } from '../components/SocialDock';
import SectionTitle from '../components/SectionTitle';
import SkillCategory from '../components/SkillCategory';
import { GlowingEffect } from '../components/ui/glowing-effect';
import { ResumeTimeline } from '../components/ResumeTimeline';
import HeroScrollAnimation from '../components/ui/hero-scroll-animation';
import GraphicDesignSection from '../components/GraphicDesignSection';
import { useFeaturedProjects } from '../hooks/useProjects';
import { useAnalytics } from '../hooks/useAnalytics';

const Index = () => {
  const { t } = useTranslation();
  const { data: projects, isLoading: projectsLoading } = useFeaturedProjects();
  const { trackEvent } = useAnalytics();
  
  // Track page view on component mount
  useEffect(() => {
    trackEvent('page_view', { page: 'home' });
  }, [trackEvent]);

  // Updated skills categories with better organization and new technologies
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

  const handleProjectClick = (project: any) => {
    trackEvent('project_click', {
      project_title: project.title,
      project_category: project.category
    });
  };

  return (
    <>
      <TubelightNavbar />
      
      {/* Hero Section with Scroll Animation */}
      <section id="home">
        <HeroScrollAnimation />
      </section>

      {/* About Section - Enhanced spacing and responsive design */}
      <section id="about" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-950 px-4" style={{ marginTop: '120px' }}>
        <div className="container mx-auto">
          <SectionTitle title={t('about.title')} />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-200 dark:border-zinc-700 max-w-4xl mx-auto"
            onViewportEnter={() => trackEvent('section_view', { section: 'about' })}
          >
            <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed">
                {t('about.p1')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                {t('about.p2')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Experience Timeline Section - Enhanced spacing */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-zinc-950 px-4">
        <div className="container mx-auto">
          <ResumeTimeline />
        </div>
      </section>

      {/* Projects Section - Enhanced spacing and responsive design */}
      <section id="projects" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 px-4" style={{ marginTop: '120px' }}>
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
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Skills Section - Fixed background color */}
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

      {/* Graphic Design Section - COMPLETELY FIXED BACKGROUND */}
      <section id="graphics" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-zinc-900 px-4">
        <div className="container mx-auto">
          <GraphicDesignSection />
        </div>
      </section>

      {/* Contact Section - Enhanced spacing and responsive design */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-950 px-4">
        <div className="container mx-auto">
          <SectionTitle title={t('contact.title')} />
          
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 mt-8 sm:mt-12 lg:mt-16">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onViewportEnter={() => trackEvent('section_view', { section: 'contact' })}
            >
              <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-200 dark:border-zinc-700">
                <ContactForm />
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:bg-gradient-to-br dark:from-primary/10 dark:to-secondary/10 rounded-xl p-6 sm:p-8 lg:p-10 h-full border border-primary/20 dark:border-primary/30 shadow-xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t('contact.info')}
                </h3>
                
                <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                  <div className="group">
                    <h4 className="font-semibold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4 text-gray-800 dark:text-gray-200">
                      {t('contact.email')}
                    </h4>
                    <div className="flex items-start gap-2">
                      <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <a 
                        href="mailto:mervinemuganguzi1@outlook.com"
                        className="text-primary hover:text-secondary transition-colors duration-300 font-medium text-sm sm:text-base lg:text-lg break-words"
                        onClick={() => trackEvent('social_click', { social_platform: 'email' })}
                      >
                        mervinemuganguzi1@outlook.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-semibold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4 text-gray-800 dark:text-gray-200">
                      {t('contact.phone')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg">+90 533 889 22 70</p>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-semibold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4 text-gray-800 dark:text-gray-200">
                      {t('contact.location')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg">{t('contact.location_value')}</p>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-semibold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4 text-gray-800 dark:text-gray-200">
                      {t('contact.connect')}
                    </h4>
                    <div className="flex justify-start">
                      <SocialDock />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ChatWidget />
    </>
  );
};

export default Index;
