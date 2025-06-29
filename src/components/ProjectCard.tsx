
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Zap, Users, Brain, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  index?: number;
  category?: string;
  features?: string[];
}

const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
  index = 0,
  category,
  features = [],
}: ProjectCardProps) => {
  const getCategoryIcon = () => {
    switch (category) {
      case 'AI':
        return <Brain className="text-yellow-400" size={18} fill="currentColor" />;
      case 'Social':
        return <Users className="text-blue-400" size={18} fill="currentColor" />;
      case 'Productivity':
        return <Zap className="text-green-400" size={18} fill="currentColor" />;
      default:
        return <Star className="text-purple-400" size={18} fill="currentColor" />;
    }
  };

  const getCategoryGradient = () => {
    switch (category) {
      case 'AI':
        return 'bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400';
      case 'Social':
        return 'bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400';
      case 'Productivity':
        return 'bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400';
      default:
        return 'bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400';
    }
  };

  const handleLiveDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewCode = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div 
      className="group relative h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(126, 105, 171, 0.2), rgba(253, 225, 211, 0.2), rgba(126, 105, 171, 0.2))",
            "linear-gradient(225deg, rgba(253, 225, 211, 0.2), rgba(126, 105, 171, 0.2), rgba(253, 225, 211, 0.2))",
            "linear-gradient(45deg, rgba(126, 105, 171, 0.2), rgba(253, 225, 211, 0.2), rgba(126, 105, 171, 0.2))"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-zinc-800 dark:via-zinc-850 dark:to-zinc-900 rounded-xl overflow-hidden h-full flex flex-col border border-gray-200/50 dark:border-zinc-700/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
        {/* Enhanced Image Container - Reduced height */}
        <div className="relative h-32 sm:h-36 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-700 dark:to-zinc-800 overflow-hidden flex-shrink-0">
          <motion.img 
            src={imageUrl || '/placeholder.svg'} 
            alt={title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Sophisticated overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Enhanced Category Badge */}
          {category && (
            <motion.div 
              className="absolute top-2 left-2 z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
            >
              <div className={`flex items-center gap-1.5 ${getCategoryGradient()} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-2xl backdrop-blur-md border border-white/20`}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  {getCategoryIcon()}
                </motion.div>
                <span className="font-semibold tracking-wide">{category}</span>
              </div>
            </motion.div>
          )}
          
          {/* Premium Live Demo Button */}
          <motion.div 
            className="absolute top-2 right-2 z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 150 }}
          >
            <motion.button
              onClick={handleLiveDemo}
              className="bg-white/95 dark:bg-zinc-800/95 backdrop-blur-md text-gray-800 dark:text-white p-2 rounded-full shadow-2xl border border-white/20 dark:border-zinc-600/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Open ${title} live demo`}
            >
              <ArrowUpRight size={16} className="text-primary" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Enhanced Content - Better proportions */}
        <div className="p-4 sm:p-5 flex flex-col flex-1 min-h-0">
          {/* Title with premium animation */}
          <motion.div 
            className="flex items-center justify-between mb-2 flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent leading-tight group-hover:from-primary group-hover:via-secondary group-hover:to-primary transition-all duration-500">
              {title}
            </h3>
          </motion.div>
          
          {/* Enhanced Description - Better sizing */}
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mb-3 text-xs sm:text-sm leading-relaxed flex-shrink-0 h-10 sm:h-12 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          </motion.p>

          {/* Premium Features Section - Compact */}
          <motion.div 
            className="mb-3 flex-shrink-0 h-14 sm:h-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <h4 className="text-xs font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-1.5 tracking-wider uppercase">
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-1">
              {features.slice(0, 2).map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 + idx * 0.1 }}
                  className="relative group/feature"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg blur-sm opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-xs bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-lg flex items-center border border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <motion.div 
                      className="w-1 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mr-1.5 flex-shrink-0"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="font-medium truncate text-xs">
                      {feature.length > 22 ? `${feature.substring(0, 22)}...` : feature}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Premium Tech Stack - Compact */}
          <motion.div 
            className="flex flex-wrap gap-1.5 mb-3 flex-shrink-0 h-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            {techStack.slice(0, 3).map((tech, techIndex) => (
              <motion.span 
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 + techIndex * 0.05, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="relative group/tech bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700 px-2 py-0.5 rounded-full text-xs font-semibold border border-gray-200 dark:border-zinc-600 text-gray-700 dark:text-gray-300 hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-default"
              >
                <span className="relative z-10">{tech}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
              </motion.span>
            ))}
            {techStack.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-0.5 font-medium bg-gradient-to-r from-gray-50 to-gray-100 dark:from-zinc-800 dark:to-zinc-700 rounded-full border border-gray-200 dark:border-zinc-600">
                +{techStack.length - 3}
              </span>
            )}
          </motion.div>
          
          {/* Premium Action Buttons - Fixed at bottom */}
          <motion.div 
            className="flex gap-2 mt-auto pt-3 border-t border-gray-100 dark:border-zinc-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
          >
            <motion.button 
              onClick={handleViewCode}
              className="flex-1 flex items-center justify-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 py-2 px-3 rounded-xl border border-gray-200 dark:border-zinc-600 hover:border-primary/40 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 font-semibold text-xs backdrop-blur-sm group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={14} className="group-hover/btn:rotate-12 transition-transform duration-300" />
              <span>Code</span>
            </motion.button>
            
            <motion.button 
              onClick={handleLiveDemo}
              className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-primary via-primary/90 to-secondary text-white py-2 px-3 rounded-xl hover:from-primary/90 hover:via-secondary/90 hover:to-primary font-bold text-xs shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              <ExternalLink size={14} className="relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Demo</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
