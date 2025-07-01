
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { ThreeDPhotoCarouselDemo } from "@/components/ui/demo";
import SectionTitle from './SectionTitle';

const GraphicDesignSection = () => {
  const handleBookConsultation = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="graphics" className="relative bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Creative Design Portfolio" />
        
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Explore my creative design work showcasing visual storytelling, branding, and digital art.
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
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20 hover:border-primary/30"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar size={20} className="transition-transform duration-300" />
            <span>Book a Design Consultation</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicDesignSection;
