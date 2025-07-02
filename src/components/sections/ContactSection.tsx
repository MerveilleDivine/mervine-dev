
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import ContactForm from '../ContactForm';
import { SocialDock } from '../SocialDock';
import { useAnalytics } from '../../hooks/useAnalytics';

const ContactSection = () => {
  const { t } = useTranslation();
  const { trackEvent } = useAnalytics();

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-zinc-950 px-4">
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
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-primary flex-shrink-0" />
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
  );
};

export default ContactSection;
