
'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef, forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const { t } = useTranslation();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky font-semibold top-0 h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex flex-col items-center justify-center text-foreground relative overflow-hidden'
    >
      {/* Grid Pattern Background */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]'></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-7xl">
        <motion.div
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center tracking-tight leading-[110%] mb-4 sm:mb-6 text-gray-900 dark:text-white'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent font-extrabold">
              Hi, I'm Mervine
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 lg:mb-16 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build smart, meaningful digital experiences.
          </motion.p>

          {/* Scroll Indicator - Positioned after text with proper spacing */}
          <motion.div
            className="flex justify-center mt-4 sm:mt-6 lg:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
              <span className="text-sm sm:text-base mb-3 sm:mb-4 font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 sm:h-4 bg-gray-500 dark:bg-gray-400 rounded-full mt-2"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const { t } = useTranslation();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='relative h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden'
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]'></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      {/* Content Container */}
      <div className='container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 h-full flex items-center max-w-7xl'>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center">
          {/* Left Content - Takes more space on large screens */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <motion.h1 
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Building Digital Excellence{" "}
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 font-light mt-2 sm:mt-4">
                Through Innovation & Design
              </span>
            </motion.h1>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[48px] sm:min-h-[56px] touch-manipulation"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta.work')}
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[48px] sm:min-h-[56px] touch-manipulation"
                onClick={() => document.getElementById('graphics')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Designer Portfolio
              </Button>
            </motion.div>
          </div>

          {/* Right Image - Responsive sizing */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Animated Background Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl animate-pulse"></div>
              
              {/* Main Image Container - Responsive sizing */}
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 group-hover:border-white/20 transition-all duration-500">
                <img
                  src="/lovable-uploads/652bfb97-77e2-46e8-bab9-f06c9196ad4b.png"
                  alt="Mervine Muganguzi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Elements - Responsive */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-primary/60 rounded-full"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    right: `${-10 + Math.random() * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const HeroScrollAnimation = forwardRef<HTMLElement>((props, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={container} className='relative h-[200vh] bg-background'>
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
});

HeroScrollAnimation.displayName = 'HeroScrollAnimation';

export default HeroScrollAnimation;
