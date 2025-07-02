
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle';
import { useAnalytics } from '../../hooks/useAnalytics';

const AboutSection = () => {
  const { t } = useTranslation();
  const { trackEvent } = useAnalytics();

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-zinc-900 px-4">
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
  );
};

export default AboutSection;
