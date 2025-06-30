
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ThreeDPhotoCarouselDemo } from "@/components/ui/demo";

const GraphicDesignSection = () => {
  const { t } = useTranslation();

  return (
    <section id="graphics" className="relative bg-gradient-to-b from-gray-50 to-white dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
      {/* 3D Carousel Gallery Section */}
      <div className="relative py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              {t('graphics.portfolio_gallery')}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('graphics.interactive_gallery')}
            </p>
          </motion.div>
          
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
      </div>
    </section>
  );
};

export default GraphicDesignSection;
