
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles } from './ui/sparkles';
import { StarBorder } from './ui/star-border';
import { ArrowDown, Code, Zap, Brain } from 'lucide-react';

const PremiumHero = () => {
  const { t } = useTranslation();

  const floatingIcons = [
    { icon: Code, delay: 0, position: { top: '20%', left: '10%' } },
    { icon: Zap, delay: 0.5, position: { top: '60%', left: '80%' } },
    { icon: Brain, delay: 1, position: { top: '40%', left: '85%' } },
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <Sparkles
          id="hero-sparkles"
          background="transparent"
          minSize={1}
          maxSize={3}
          particleDensity={100}
          particleColor="#7E69AB"
          className="w-full h-full"
        />
      </div>

      {/* Floating Elements */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10 dark:opacity-20"
          style={item.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <item.icon size={60} className="text-primary" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <motion.div 
          className="md:w-1/2 md:pr-8 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Enhanced Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 text-primary/80 text-lg font-semibold tracking-wide">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋
              </motion.div>
              {t('hero.greeting')}
            </span>
          </motion.div>

          {/* Enhanced Title */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.span 
              className="block text-gray-700 dark:text-gray-300 mb-2"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              I'm
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-primary via-purple-500 via-secondary to-primary bg-clip-text text-transparent bg-300% animate-gradient"
              style={{
                backgroundSize: '300% 300%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              {t('hero.title')}
            </motion.span>
          </motion.h1>
          
          {/* Enhanced Subtitle */}
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-xl mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <StarBorder 
                as="a" 
                href="#projects"
                variant="primary"
                className="inline-flex items-center justify-center text-center min-w-[220px] py-4 px-8 text-lg font-bold relative overflow-hidden group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
                <span className="relative z-10">{t('hero.cta.work')}</span>
              </StarBorder>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <StarBorder 
                as="a" 
                href="#contact"
                variant="secondary"
                className="inline-flex items-center justify-center text-center min-w-[220px] py-4 px-8 text-lg font-bold backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>{t('hero.cta.contact')}</span>
              </StarBorder>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex items-center gap-2 mt-12 text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Avatar */}
        <motion.div 
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 100 }}
        >
          <div className="relative group">
            {/* Animated rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110"
              animate={{ rotate: 360, scale: [1.1, 1.2, 1.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-secondary/20 scale-125"
              animate={{ rotate: -360, scale: [1.25, 1.15, 1.25] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse scale-150"></div>
            
            {/* Main avatar */}
            <motion.div 
              className="relative avatar-blob w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.img
                src="/lovable-uploads/652bfb97-77e2-46e8-bab9-f06c9196ad4b.png"
                alt="Mervine Muganguzi"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectFit: 'contain', transform: 'scale(1.1)' }}
                loading="lazy"
                whileHover={{ scale: 1.1 }}
              />
              
              {/* Overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Floating particles around avatar */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/60 rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
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
  );
};

export default PremiumHero;
