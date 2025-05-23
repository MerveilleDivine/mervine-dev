
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Zap, Users, Brain } from 'lucide-react';

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
        return <Brain className="text-yellow-500" size={16} fill="currentColor" />;
      case 'Social':
        return <Users className="text-blue-500" size={16} fill="currentColor" />;
      case 'Productivity':
        return <Zap className="text-green-500" size={16} fill="currentColor" />;
      default:
        return <Star className="text-purple-500" size={16} fill="currentColor" />;
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'AI':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Social':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Productivity':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default:
        return 'bg-gradient-to-r from-purple-500 to-indigo-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -12,
        transition: { duration: 0.3 }
      }}
      className="project-card bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-zinc-700 h-full flex flex-col group"
    >
      <div className="h-52 bg-gray-200 relative overflow-hidden border-b border-gray-200 dark:border-zinc-700">
        <motion.img 
          src={imageUrl || '/placeholder.svg'} 
          alt={title} 
          className="w-full h-full object-cover"
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.6 }
          }}
        />
        {category && (
          <div className="absolute top-4 left-4">
            <div className={`flex items-center gap-2 ${getCategoryColor()} text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg`}>
              {getCategoryIcon()}
              <span>{category}</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white leading-tight">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Key Features:
            </h4>
            <div className="grid grid-cols-2 gap-1">
              {features.slice(0, 4).map((feature, idx) => (
                <div 
                  key={idx}
                  className="text-xs bg-gray-50 dark:bg-zinc-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded flex items-center"
                >
                  <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                  <span className="truncate">{feature}</span>
                </div>
              ))}
              {features.length > 4 && (
                <div className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 font-medium">
                  +{features.length - 4} more
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {techStack.slice(0, 4).map((tech, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="bg-secondary/70 dark:bg-secondary/20 px-2 py-1 rounded text-xs font-medium border border-secondary-dark/20 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </motion.span>
          ))}
          {techStack.length > 4 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 font-medium">
              +{techStack.length - 4}
            </span>
          )}
        </div>
        
        <div className="project-card-links flex justify-between items-center mt-auto pt-2">
          <motion.a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
            aria-label={`GitHub repository for ${title}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
            View Code
          </motion.a>
          <motion.a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-2 rounded-lg hover:from-primary/90 hover:to-primary/70 transition-all text-sm font-semibold shadow-md hover:shadow-lg"
            aria-label={`Live demo for ${title}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
