
import React from 'react';
import { AuroraBackground } from './aurora-background';
import { motion } from 'framer-motion';

interface BackgroundAuroraProps {
  children: React.ReactNode;
}

export function BackgroundAurora({ children }: BackgroundAuroraProps) {
  return (
    <AuroraBackground className="min-h-screen">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative w-full py-12 md:py-24"
      >
        {children}
      </motion.div>
    </AuroraBackground>
  );
}
