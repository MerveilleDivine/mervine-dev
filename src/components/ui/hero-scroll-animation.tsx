
'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef, forwardRef } from 'react';

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
          Full Stack Developer
        </span>
        <br />
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Scroll to explore 👇
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
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4'>
          <img
            src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop'
            alt='Programming'
            className='object-cover w-full rounded-md h-32 sm:h-40 lg:h-full'
            loading="lazy"
          />
          <img
            src='https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop'
            alt='Technology'
            className='object-cover w-full rounded-md h-32 sm:h-40'
            loading="lazy"
          />
          <img
            src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop'
            alt='Development'
            className='object-cover w-full rounded-md h-32 sm:h-40 lg:h-full'
            loading="lazy"
          />
          <img
            src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop'
            alt='Design'
            className='object-cover w-full rounded-md h-32 sm:h-40 lg:h-full'
            loading="lazy"
          />
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
