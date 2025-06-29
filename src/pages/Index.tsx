import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import ChatWidget from '../components/ChatWidget';
import { TubelightNavbar } from '../components/TubelightNavbar';
import { BackgroundAurora } from '../components/ui/background-aurora';
import { Code, Database, Server, Laptop } from 'lucide-react';
import { SocialDock } from '../components/SocialDock';
import SectionTitle from '../components/SectionTitle';
import { StarBorder } from '../components/ui/star-border';
import SkillCategory from '../components/SkillCategory';
import { GlowingEffect } from '../components/ui/glowing-effect';
import { ResumeTimeline } from '../components/ResumeTimeline';
import HeroScrollAnimation from '../components/ui/hero-scroll-animation';
import GraphicDesignSection from '../components/GraphicDesignSection';

const Index = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: 'SpendWise AI',
      description: 'Revolutionary AI-powered budgeting platform that transforms financial habits for natural spenders. Features intelligent spending analysis, predictive financial modeling, and personalized coaching to help users achieve their savings goals through data-driven insights.',
      techStack: ['Next.js', 'Node.js', 'MongoDB Atlas', 'OpenAI GPT-4', 'Tailwind CSS', 'Chart.js', 'AWS Lambda'],
      githubUrl: 'https://github.com/MerveilleDivine/spendwise-ai',
      liveUrl: 'https://spendwise-ai-seven.vercel.app',
      imageUrl: '/lovable-uploads/spendwise-mockup.png',
      category: 'AI',
      features: [
        'AI Spending Pattern Analysis',
        'Predictive Financial Modeling', 
        'Smart Budget Recommendations',
        'Receipt OCR & Auto-Categorization',
        'Goal-Based Savings Plans',
        'Real-time Expense Tracking',
        'Financial Health Scoring',
        'Personalized Coaching Tips'
      ]
    },
    {
      title: 'Roomsy',
      description: 'Intelligent roommate matching platform that connects compatible living partners through advanced algorithms. Features comprehensive profile systems, real-time messaging, and smart filtering to ensure perfect roommate matches based on lifestyle, budget, and preferences.',
      techStack: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Google Maps API', 'Redis', 'Docker'],
      githubUrl: 'https://github.com/MerveilleDivine/roomsy',
      liveUrl: 'https://roomsy-nine.vercel.app',
      imageUrl: '/lovable-uploads/roomsy-mockup.png',
      category: 'Social',
      features: [
        'Smart Compatibility Matching',
        'Real-time Secure Messaging',
        'Advanced Profile Verification',
        'Location-Based Filtering',
        'Budget & Lifestyle Matching',
        'Photo & Video Tours',
        'Background Check Integration',
        'Mobile-First Design'
      ]
    },
    {
      title: 'PlanStack',
      description: 'Professional-grade project management suite with intuitive Kanban boards, advanced collaboration tools, and real-time synchronization. Built for teams who demand efficiency with drag-and-drop workflows, deadline tracking, and comprehensive project analytics.',
      techStack: ['React', 'GraphQL', 'Apollo', 'PostgreSQL', 'Tailwind CSS', 'DND Kit', 'React Query', 'Framer Motion'],
      githubUrl: 'https://github.com/MerveilleDivine/planstack',
      liveUrl: 'https://planstack-gray.vercel.app',
      imageUrl: '/lovable-uploads/planstack-mockup.png',
      category: 'Productivity',
      features: [
        'Drag & Drop Kanban Boards',
        'Real-time Team Collaboration',
        'Advanced Task Dependencies',
        'Time Tracking & Analytics',
        'Custom Workflow Templates',
        'Role-Based Permissions',
        'Integration Webhooks',
        'Mobile Responsive Design'
      ]
    },
    {
      title: 'QuickQuote',
      description: 'Enterprise-level proposal and invoice generation platform designed for freelancers and agencies. Features AI-enhanced content optimization, professional PDF generation, and automated client management with seamless payment processing integration.',
      techStack: ['React', 'Node.js', 'Express.js', 'jsPDF', 'OpenAI API', 'Tailwind CSS', 'React Hook Form', 'Stripe API'],
      githubUrl: 'https://github.com/MerveilleDivine/quickquote',
      liveUrl: 'https://quickquote-beta.vercel.app',
      imageUrl: '/lovable-uploads/quickquote-mockup.png',
      category: 'AI',
      features: [
        'AI-Enhanced Proposal Writing',
        'Professional PDF Generation',
        'Dynamic Cost Calculations',
        'Client Management System',
        'Template Library & Customization',
        'E-signature Integration',
        'Payment Processing',
        'Analytics & Reporting'
      ]
    }
  ];

  // Skills categories with consistent colors
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Tailwind CSS'],
      color: "#7E69AB", 
      icon: <Laptop size={20} />
    },
    {
      title: "Backend Development",
      skills: ['Node.js', 'Express', 'REST API', 'Authentication', 'Authorization'],
      color: "#7E69AB",
      icon: <Server size={20} />
    },
    {
      title: "Database Management",
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Data Modeling'],
      color: "#7E69AB",
      icon: <Database size={20} />
    },
    {
      title: "Tools & Others",
      skills: ['Git', 'Docker', 'CI/CD', 'Testing', 'AWS', 'Agile', 'Problem Solving'],
      color: "#7E69AB",
      icon: <Code size={20} />
    }
  ];

  return (
    <>
      <TubelightNavbar />
      
      {/* Hero Section with Scroll Animation */}
      <section id="home">
        <HeroScrollAnimation />
      </section>

      {/* About Section - Added more spacing from hero */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-950 px-4 mt-16 sm:mt-20 lg:mt-24">
        <div className="container mx-auto">
          <SectionTitle title={t('about.title')} />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 rounded-xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200 dark:border-zinc-700 max-w-4xl mx-auto"
          >
            <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
                {t('about.p1')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                {t('about.p2')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Experience Timeline Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 dark:bg-zinc-950 px-4">
        <div className="container mx-auto">
          <ResumeTimeline />
        </div>
      </section>

      {/* Projects Section - Added more spacing for dark mode */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 px-4 mt-16 sm:mt-20 lg:mt-24">
        <div className="container mx-auto">
          <SectionTitle title={t('projects.things_built')} />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-12"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.title} 
                className="h-[360px] sm:h-[380px] lg:h-[400px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full rounded-xl overflow-hidden group">
                  <div className="relative h-full rounded-xl border border-gray-200 dark:border-zinc-700 p-2 sm:p-3 bg-white dark:bg-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <GlowingEffect
                      spread={50}
                      glow={true}
                      disabled={false}
                      proximity={80}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <ProjectCard {...project} index={index} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900 px-4">
        <div className="container mx-auto">
          <SectionTitle title={t('skills.title')} />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-12"
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="h-[200px] sm:h-[220px] lg:h-[250px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full rounded-xl border border-gray-200 dark:border-zinc-700 p-2 sm:p-3 bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300">
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

      {/* Graphic Design Section */}
      <GraphicDesignSection />

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-950 px-4">
        <div className="container mx-auto">
          <SectionTitle title={t('contact.title')} />
          
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 mt-6 sm:mt-8 lg:mt-12">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200 dark:border-zinc-700">
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
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:bg-gradient-to-br dark:from-primary/10 dark:to-secondary/10 rounded-xl p-4 sm:p-6 lg:p-8 h-full border border-primary/20 dark:border-primary/30 shadow-xl">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t('contact.info')}
                </h3>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <div className="group">
                    <h4 className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 lg:mb-3 text-gray-800 dark:text-gray-200">
                      {t('contact.email')}
                    </h4>
                    <a 
                      href="mailto:mervinemuganguzi1@outlook.com"
                      className="text-primary hover:text-secondary transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base break-all"
                    >
                      mervinemuganguzi1@outlook.com
                    </a>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 lg:mb-3 text-gray-800 dark:text-gray-200">
                      {t('contact.phone')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base">+90 533 889 22 70</p>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 lg:mb-3 text-gray-800 dark:text-gray-200">
                      {t('contact.location')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base">{t('contact.location_value')}</p>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 lg:mb-3 text-gray-800 dark:text-gray-200">
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
