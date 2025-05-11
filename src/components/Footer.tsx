
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-800 text-white pt-16 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 opacity-20"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Mervine Muganguzi</h3>
            <p className="text-gray-300 mb-4">Software Developer</p>
            <div className="h-1 w-20 bg-primary rounded-full mb-4"></div>
            <p className="text-sm text-gray-400">
              Building digital experiences that make a difference.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">{t('nav.navigation')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">{t('nav.about')}</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-primary transition-colors">{t('nav.projects')}</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-primary transition-colors">{t('nav.skills')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">{t('contact.info')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:mervinemuganguzi1@outlook.com" className="text-gray-300 hover:text-primary transition-colors">
                  mervinemuganguzi1@outlook.com
                </a>
              </li>
              <li className="text-gray-300">Nicosia, North Cyprus</li>
            </ul>
            
            <div className="mt-6">
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
                  href="mailto:mervinemuganguzi1@outlook.com" 
                  className="bg-gray-800 p-2 rounded-full hover:bg-primary/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Mervine Muganguzi. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full bg-gray-800 border-gray-700 hover:bg-primary/20 mb-4 md:mb-0"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
