
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
    <section id="graphics" className="relative overflow-hidden">
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
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary via-purple-600 to-secondary hover:from-primary/90 hover:via-purple-600/90 hover:to-secondary/90 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/10 hover:border-white/20 backdrop-blur-sm overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            />
            
            {/* Icons */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <Calendar size={20} className="transition-transform duration-300" />
            </motion.div>
            
            <Sparkles size={16} className="text-yellow-300 animate-pulse relative z-10" />
            
            <span className="relative z-10">Book a Design Consultation</span>
            
            {/* Floating particles */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-75 animation-delay-500"></div>
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-500 dark:text-gray-400 text-sm mt-4"
          >
            Let's bring your creative vision to life
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicDesignSection;
