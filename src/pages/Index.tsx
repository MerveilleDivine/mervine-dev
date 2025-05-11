import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import ChatWidget from '../components/ChatWidget';
import { TubelightNavbar } from '../components/TubelightNavbar';
import { BackgroundAurora } from '../components/ui/background-aurora';
import { Code, Database, Server, Laptop, FileDown } from 'lucide-react';
import { ResumeTimeline } from '../components/ResumeTimeline';
import { SocialDock } from '../components/SocialDock';
import SectionTitle from '../components/SectionTitle';
import { StarBorder } from '../components/ui/star-border';
import { Button } from '../components/ui/button';
import { techLogos, getTechImage } from '../components/TechIcons';
import SkillCategory from '../components/SkillCategory';
import { GlowingCard } from '../components/GlowingCard';
import { GlowingEffect } from '../components/ui/glowing-effect';

const Index = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with cart functionality, user auth, and payment processing.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      techStack: ['React', 'Express', 'Socket.io', 'MySQL'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'Learning Platform',
      description: 'Educational platform with course creation, enrollment, and progress tracking features.',
      techStack: ['React', 'Firebase', 'Node.js', 'Redux'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'Health Tracker',
      description: 'Mobile-first app for tracking fitness goals, nutrition, and wellness metrics.',
      techStack: ['React Native', 'Express', 'MongoDB', 'Chart.js'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      imageUrl: '/placeholder.svg'
    }
  ];

  // Skills categories for the new grid-based layout
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Tailwind CSS'],
      color: "#7E69AB",
      icon: <Laptop size={24} />
    },
    {
      title: "Backend Development",
      skills: ['Node.js', 'Express', 'REST API', 'Authentication', 'Authorization'],
      color: "#FEC6A1",
      icon: <Server size={24} />
    },
    {
      title: "Database Management",
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Data Modeling', 'Query Optimization'],
      color: "#9b87f5",
      icon: <Database size={24} />
    },
    {
      title: "Tools & Others",
      skills: ['Git', 'Docker', 'CI/CD', 'Testing', 'AWS', 'Agile', 'Problem Solving'],
      color: "#F1F1F1",
      icon: <Code size={24} />
    }
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/mervine_muganguzi_resume.pdf';
    link.download = 'Mervine_Muganguzi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <TubelightNavbar />
      
      {/* Hero Section */}
      <BackgroundAurora>
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 md:pr-8 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t('hero.greeting')} <br />
                <span className="text-primary">{t('hero.title')}</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-lg">
                {t('hero.subtitle')}
              </p>
              <div className="flex gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <StarBorder as="a" href="#projects" className="inline-block">
                    {t('hero.cta.work')}
                  </StarBorder>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <StarBorder as="a" href="#contact" className="inline-block" color="#FEC6A1">
                    {t('hero.cta.contact')}
                  </StarBorder>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 flex justify-center md:justify-end"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="avatar-blob w-64 h-64 md:w-80 md:h-80 bg-primary/10 overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Mervine Muganguzi"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </BackgroundAurora>

      {/* About Section with GlowingCard */}
      <section id="about" className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('about.title')} />
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">{t('about.subtitle')}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {t('about.p1')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {t('about.p2')}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {t('about.p3')}
              </p>
            </motion.div>
            
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <GlowingCard 
                  title={t('card.fitness')}
                  description={t('card.fitness.desc')}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <GlowingCard 
                  title={t('card.snack')}
                  description={t('card.snack.desc')}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <GlowingCard 
                  title={t('card.community')}
                  description={t('card.community.desc')}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <GlowingCard 
                  title={t('card.music')}
                  description={t('card.music.desc')}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with GlowingCard */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('projects.title')} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden">
                <div className="relative rounded-xl border-[0.75px] border-border p-2">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <ProjectCard {...project} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Grid Layout */}
      <section id="skills" className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('skills.title')} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                skills={category.skills}
                icon={category.icon}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Resume Timeline Section with Download Button */}
      <section id="teaching" className="py-20 bg-gray-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <SectionTitle 
              title={t('resume.title')} 
              subtitle={t('resume.subtitle')} 
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <StarBorder onClick={handleResumeDownload} className="inline-flex items-center gap-2 cursor-pointer">
                <FileDown size={16} />
                {t('resume.download')}
              </StarBorder>
            </motion.div>
          </div>
          
          <ResumeTimeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('contact.title')} />
          
          <div className="flex flex-col md:flex-row gap-10">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary/30 dark:bg-primary/5 rounded-lg p-8 h-full border border-gray-200 dark:border-zinc-700 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">{t('contact.info')}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('contact.email')}</h4>
                    <a 
                      href="mailto:mervine@example.com"
                      className="text-primary hover:underline"
                    >
                      mervine@example.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('contact.location')}</h4>
                    <p className="dark:text-gray-300">Montreal, Canada</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('contact.connect')}</h4>
                    <SocialDock />
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-inner border border-gray-200 dark:border-zinc-700">
                  <h4 className="font-semibold text-lg mb-4">{t('contact.philosophy')}</h4>
                  <p className="italic text-gray-700 dark:text-gray-300">
                    {t('contact.philosophy.quote')}
                  </p>
                </div>

                <div className="mt-8 flex justify-center">
                  <StarBorder as="a" href="#contact" color="#FEC6A1" className="inline-block">
                    Get in touch
                  </StarBorder>
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
