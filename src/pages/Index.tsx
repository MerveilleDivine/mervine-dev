
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
      techStack: ['Next.js', 'Node.js', 'MongoDB Atlas', 'OpenAI GPT-4', 'Tailwind CSS', 'Chart.js', 'AWS Lambda'],
      githubUrl: 'https://github.com/MerveilleDivine/spendwise-ai',
      liveUrl: 'https://spendwise-ai-demo.vercel.app',
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
      liveUrl: 'https://roomsy-demo.vercel.app',
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
      liveUrl: 'https://planstack-demo.vercel.app',
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
      liveUrl: 'https://quickquote-demo.vercel.app',
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-700 dark:text-gray-300">{t('hero.greeting')}</span> <br />
                <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <StarBorder 
                    as="a" 
                    href="#projects" 
                    className="inline-block px-8 py-3 text-center w-full sm:w-auto whitespace-nowrap"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('hero.cta.work')}
                  </StarBorder>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <StarBorder 
                    as="a" 
                    href="#contact" 
                    className="inline-block px-8 py-3 text-center w-full sm:w-auto whitespace-nowrap" 
                    color="#FEC6A1"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
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
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative avatar-blob w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden border-2 border-primary/20">
                  <img
                    src="/lovable-uploads/652bfb97-77e2-46e8-bab9-f06c9196ad4b.png"
                    alt="Mervine Muganguzi"
                    className="w-full h-full object-cover"
                    style={{ objectFit: 'contain', transform: 'scale(1.1)' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </BackgroundAurora>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-950">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('about.title')} />
          
          <div className="w-full mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-zinc-700 w-full"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  I'm Mervine, a Computer Engineer based in Nicosia, North Cyprus. I specialize in both front-end and back-end development, user-focused design. My approach blends engineering precision with creative thinking to deliver work that is both reliable and engaging.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  I'm passionate about continuous learning, collaborative work, and using technology to make a positive impact. Check my work, and let me know what we can create together!
                </p>
              </div>
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
      <section id="projects" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('projects.things_built')} />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.title} 
                className="h-[500px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full rounded-2xl overflow-hidden group">
                  <div className="relative h-full rounded-2xl border border-gray-200 dark:border-zinc-700 p-3 bg-white dark:bg-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-500">
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
      <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('skills.title')} />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="h-[300px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full rounded-2xl border border-gray-200 dark:border-zinc-700 p-3 bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-950">
        <div className="container mx-auto px-4">
          <SectionTitle title={t('contact.title')} />
          
          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-zinc-700">
                <ContactForm />
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:bg-gradient-to-br dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-8 h-full border border-primary/20 dark:border-primary/30 shadow-xl">
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t('contact.info')}
                </h3>
                
                <div className="space-y-8">
                  <div className="group">
                    <h4 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">
                      {t('contact.email')}
                    </h4>
                    <a 
                      href="mailto:mervinemuganguzi1@outlook.com"
                      className="text-primary hover:text-secondary transition-colors duration-300 font-medium text-lg"
                    >
                      mervinemuganguzi1@outlook.com
                    </a>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">
                      {t('contact.phone')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">+90 533 889 22 70</p>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">
                      {t('contact.location')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">Nicosia, North Cyprus</p>
                  </div>
                  
                  <div className="group">
                    <h4 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200">
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
