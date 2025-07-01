
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles } from 'lucide-react';
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
    <section id="graphics" className="relative bg-gradient-to-b from-gray-50 to-white dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Creative Design Portfolio" />
        
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my creative design work showcasing visual storytelling, branding, and digital art.
          </p>
        </motion.div>

        {/* 3D Carousel Gallery Section */}
        <div className="relative py-8 sm:py-12 lg:py-16">
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

        {/* Book Consultation Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={handleBookConsultation}
            className="group relative bg-gradient-to-r from-primary via-primary/90 to-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative z-10 flex items-center gap-3">
              <Calendar size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Book a Design Consultation</span>
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </motion.button>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
            Let's discuss your creative vision and bring it to life
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicDesignSection;
