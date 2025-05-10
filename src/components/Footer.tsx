
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SocialDock } from './SocialDock';
import { StarBorder } from './ui/star-border';
import { Button } from './ui/button';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 opacity-20"></div>
      
      {/* Let's Start Section inspired by the reference image */}
      <div className="container mx-auto px-4 text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's start</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="mailto:mervine@example.com" className="text-xl hover:text-primary transition-colors border-b border-gray-700 pb-1">
              mervine@example.com
            </a>
            <StarBorder 
              as="a" 
              href="#contact" 
              className="hover:scale-105 transition-transform"
              color="#9b87f5"
            >
              Get a quote
            </StarBorder>
            <a href="tel:+421902468085" className="text-xl hover:text-primary transition-colors border-b border-gray-700 pb-1">
              +421 902 468 085
            </a>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-primary/30 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Github size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-primary/30 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:mervine@example.com" className="bg-gray-800 hover:bg-primary/30 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <motion.div 
        className="container mx-auto px-4 relative z-10 border-t border-gray-800 pt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={itemVariants} className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Mervine Muganguzi</h3>
            <p className="text-gray-300 mb-4">Full Stack Developer</p>
            <div className="h-1 w-20 bg-primary rounded-full mb-4"></div>
            <p className="text-sm text-gray-400">
              Building digital experiences that make a difference.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-primary">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">{t('nav.about')}</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-primary transition-colors">{t('nav.projects')}</a></li>
              <li><a href="#teaching" className="text-gray-300 hover:text-primary transition-colors">{t('nav.resume')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-primary">{t('contact.info')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:mervine@example.com" className="text-gray-300 hover:text-primary transition-colors">
                  mervine@example.com
                </a>
              </li>
              <li className="text-gray-300">Montreal, Canada</li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-primary">{t('contact.connect')}</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:mervine@example.com" 
                className="bg-gray-800 p-2 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Mervine Muganguzi. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4">
            <div className="text-gray-400 text-sm">
              <span className="italic before:content-['\u201C'] after:content-['\u201D']">
                {t('contact.philosophy.quote').split('.')[0]}.
              </span>
            </div>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full bg-gray-800 border-gray-700 hover:bg-primary/20"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Green Sidebar */}
      <div className="hidden md:block absolute left-0 top-1/3 h-1/3 w-12 bg-primary rounded-r-lg transform -translate-y-1/2">
        <div className="h-full w-full flex items-center justify-center">
          <p className="text-white font-bold text-sm transform rotate-90 whitespace-nowrap">
            Send a message
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
