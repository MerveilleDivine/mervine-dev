
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

const Index = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: 'SpendWise AI',
      description: 'Revolutionary AI-powered budgeting platform that transforms financial habits for natural spenders. Features intelligent spending analysis, predictive financial modeling, and personalized coaching to help users achieve their savings goals through data-driven insights.',
      techStack: ['Next.js', 'Supabase', 'OpenAI GPT-4', 'Tailwind CSS', 'Chart.js', 'Stripe API'],
      githubUrl: 'https://github.com/mervine-muganguzi/spendwise-ai',
      liveUrl: 'https://spendwise-ai-demo.netlify.app',
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
      techStack: ['Next.js', 'Supabase', 'Tailwind CSS', 'Socket.io', 'Google Maps API', 'Stripe Connect'],
      githubUrl: 'https://github.com/mervine-muganguzi/roomsy',
      liveUrl: 'https://roomsy-demo.netlify.app',
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
      techStack: ['React', 'Supabase', 'Tailwind CSS', 'DND Kit', 'React Query', 'Framer Motion'],
      githubUrl: 'https://github.com/mervine-muganguzi/planstack',
      liveUrl: 'https://planstack-demo.netlify.app',
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
      techStack: ['React', 'Supabase', 'jsPDF', 'OpenAI API', 'Tailwind CSS', 'React Hook Form'],
      githubUrl: 'https://github.com/mervine-muganguzi/quickquote',
      liveUrl: 'https://quickquote-demo.netlify.app',
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
      icon: <Laptop size={24} />
    },
    {
      title: "Backend Development",
      skills: ['Node.js', 'Express', 'REST API', 'Authentication', 'Authorization'],
      color: "#7E69AB",
      icon: <Server size={24} />
    },
    {
      title: "Database Management",
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Data Modeling'],
      color: "#7E69AB",
      icon: <Database size={24} />
    },
    {
      title: "Tools & Others",
      skills: ['Git', 'Docker', 'CI/CD', 'Testing', 'AWS', 'Agile', 'Problem Solving'],
      color: "#7E69AB",
      icon: <Code size={24} />
    }
  ];

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
                <span className="text-gray-700 dark:text-gray-300">{t('hero.greeting')}</span> <br />
                <span className="text-primary bg-clip-text">{t('hero.title')}</span>
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
                    <span>{t('hero.cta.contact')}</span>
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
                  src="/lovable-uploads/652bfb97-77e2-46e8-bab9-f06c9196ad4b.png"
                  alt="Mervine Muganguzi"
                  className="w-full h-full object-cover"
                  style={{ objectFit: 'contain', transform: 'scale(1.1)' }}
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </BackgroundAurora>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('about.title')} />
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                I'm Mervine, a Computer Engineer based in Nicosia, North Cyprus. I specialize in both front-end and back-end development, user-focused design. My approach blends engineering precision with creative thinking to deliver work that is both reliable and engaging.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                I'm passionate about continuous learning, collaborative work, and using technology to make a positive impact. Check my work, and let me know what we can do together!
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {t('about.p3')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <ResumeTimeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('projects.things_built')} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
            {projects.map((project, index) => (
              <div key={project.title} className="h-[480px]">
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
                    <ProjectCard {...project} index={index} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('skills.title')} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {skillCategories.map((category, index) => (
              <div key={index} className="h-[280px]">
                <SkillCategory
                  title={category.title}
                  skills={category.skills}
                  icon={category.icon}
                  color={category.color}
                />
              </div>
            ))}
          </div>
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
                      href="mailto:mervinemuganguzi1@outlook.com"
                      className="text-primary hover:underline"
                    >
                      mervinemuganguzi1@outlook.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('contact.phone')}</h4>
                    <p className="dark:text-gray-300">+90 533 889 22 70</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('contact.location')}</h4>
                    <p className="dark:text-gray-300">Nicosia, North Cyprus</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-left">{t('contact.connect')}</h4>
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
