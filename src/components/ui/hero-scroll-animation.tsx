
'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef, forwardRef } from 'react';
import { Button } from '@/components/ui/button';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky font-semibold top-0 h-screen bg-gradient-to-t to-[#f8f9fa] from-[#e9ecef] dark:to-[#2a2a2a] dark:from-[#1a1a1a] flex flex-col items-center justify-center text-foreground'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 sm:px-8 font-semibold text-center tracking-tight leading-[120%]'>
        <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
          Hi, I'm Mervine
        </span>
        <br />
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          I build smart, meaningful digital experiences
        </span>
      </h1>
    </motion.section>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='relative h-screen bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <article className='container mx-auto relative z-10 px-4 flex flex-col justify-center h-full'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[100%] py-6 sm:py-10 font-semibold tracking-tight'>
          Building Digital Excellence <br className="hidden sm:block" />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">
            Through Innovation & Design
          </span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-sm sm:text-base font-semibold"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Dev Portfolio
          </Button>
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-6 py-3 text-sm sm:text-base font-semibold"
            onClick={() => document.getElementById('graphics')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Designer Portfolio
          </Button>
        </div>

        <div className="mt-8 sm:mt-12 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="/lovable-uploads/652bfb97-77e2-46e8-bab9-f06c9196ad4b.png"
                alt="Mervine Muganguzi"
                className="w-full h-full object-cover"
                style={{ objectFit: 'contain', transform: 'scale(1.1)' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </article>
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
