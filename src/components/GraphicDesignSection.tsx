
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { ThreeDPhotoCarouselDemo } from "@/components/ui/demo";
import SectionTitle from './SectionTitle';
import { useTranslation } from 'react-i18next';

const GraphicDesignSection = () => {
  const { t } = useTranslation();
  
  const handleBookConsultation = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="graphics" className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t('graphics.title')} />
        
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            {t('graphics.description')}
          </p>
        </motion.div>

        {/* 3D Carousel Gallery Section */}
        <div className="relative py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <ThreeDPhotoCarouselDemo />
          </motion.div>
        </div>

        {/* Professional Book Consultation Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20 lg:mt-24"
        >
          <motion.button
            onClick={handleBookConsultation}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border border-primary/20 hover:border-primary/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Calendar size={20} className="transition-transform duration-300" />
            </motion.div>
            <span>{t('graphics.book_consultation')}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicDesignSection;
