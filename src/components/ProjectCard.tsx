
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
      className="bg-gradient-to-br from-white to-gray-50 dark:from-zinc-800 dark:to-zinc-900 rounded-xl overflow-hidden h-full flex flex-col group border border-gray-200 dark:border-zinc-700 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Image Container */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-700 dark:to-zinc-800 overflow-hidden flex-shrink-0">
        <motion.img 
          src={imageUrl || '/placeholder.svg'} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4 z-10">
            <div className={`flex items-center gap-2 ${getCategoryGradient()} text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm`}>
              {getCategoryIcon()}
              <span className="font-medium">{category}</span>
            </div>
          </div>
        )}
        
        {/* Live Demo Quick Access */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            onClick={handleLiveDemo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm text-gray-800 dark:text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label={`Open ${title} live demo`}
          >
            <ArrowUpRight size={16} />
          </motion.button>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <div className="flex items-center justify-between mb-3 flex-shrink-0">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white leading-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 flex-shrink-0">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-4 flex-shrink-0">
            <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Key Features:
            </h4>
            <div className="grid grid-cols-1 gap-1.5">
              {features.slice(0, 2).map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="text-xs bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 text-gray-600 dark:text-gray-300 px-2 py-1.5 rounded-lg flex items-center border border-primary/10"
                >
                  <div className="w-1 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mr-2 flex-shrink-0"></div>
                  <span className="truncate font-medium">{feature}</span>
                </motion.div>
              ))}
              {features.length > 2 && (
                <div className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 font-medium text-center">
                  +{features.length - 2} more features
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6 flex-shrink-0">
          {techStack.slice(0, 3).map((tech, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-zinc-700 dark:to-zinc-600 px-2 py-1 rounded text-xs font-medium border border-gray-200 dark:border-zinc-600 text-gray-700 dark:text-gray-300 hover:from-primary/10 hover:to-secondary/10 hover:border-primary/20 transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
          {techStack.length > 3 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 font-medium bg-gray-50 dark:bg-zinc-700 rounded">
              +{techStack.length - 3}
            </span>
          )}
        </div>
        
        {/* Action Buttons - Fixed positioning */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-zinc-700">
          <button 
            onClick={handleViewCode}
            className="flex-1 flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg border border-gray-200 dark:border-zinc-600 hover:border-primary/30 hover:bg-primary/5 font-medium text-sm"
          >
            <Github size={16} />
            View Code
          </button>
          
          <button 
            onClick={handleLiveDemo}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl"
          >
            <ExternalLink size={16} />
            Live Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
