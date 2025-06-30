
import React from 'react';
import { motion } from 'framer-motion';
import { ThreeDPhotoCarouselDemo } from "@/components/ui/demo";

const GraphicDesignSection = () => {
  return (
    <section id="graphics" className="relative bg-gradient-to-b from-gray-50 to-white dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
      {/* 3D Carousel Gallery Section */}
      <div className="relative py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
