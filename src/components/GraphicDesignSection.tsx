
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles } from 'lucide-react';
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
              {t('graphics.creative')}
            </span>{' '}
            <span className="text-gray-900 dark:text-white">
              {t('graphics.visual_solutions')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            {t('graphics.drive_results')}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('graphics.description')}
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20"
        >
          {[
            {
              title: t('graphics.services.brand_identity'),
              description: t('graphics.services.brand_identity_desc'),
              icon: "🎨"
            },
            {
              title: t('graphics.services.print_design'),
              description: t('graphics.services.print_design_desc'),
              icon: "📄"
            },
            {
              title: t('graphics.services.digital_graphics'),
              description: t('graphics.services.digital_graphics_desc'),
              icon: "💻"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 3D Carousel Gallery Section */}
        <div className="relative py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('graphics.portfolio_gallery')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
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

        {/* Enhanced Book Consultation Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20 lg:mt-24"
        >
          <motion.button
            onClick={handleBookConsultation}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all duration-500 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #7E69AB 0%, #9B7EDE 50%, #7E69AB 100%)',
              backgroundSize: '200% 100%'
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              backgroundPosition: '100% 0'
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
            }}
            transition={{
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl scale-150 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
              style={{ width: '50%' }}
            />
            
            {/* Button content */}
            <div className="relative z-10 flex items-center gap-3 text-white">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="group-hover:animate-spin"
              >
                <Sparkles size={20} />
              </motion.div>
              <span className="font-bold tracking-wide">{t('graphics.book_consultation')}</span>
              <motion.div
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <Calendar size={20} />
              </motion.div>
            </div>
          </motion.button>
          
          {/* Floating elements around button */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/60 rounded-full"
              style={{
                top: `${40 + Math.random() * 20}%`,
                left: `${45 + Math.random() * 10}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicDesignSection;
