
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';

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
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="project-card bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-700 h-full flex flex-col group"
    >
      <div className="h-48 bg-gray-200 relative overflow-hidden border-b border-gray-200 dark:border-zinc-700">
        <motion.img 
          src={imageUrl || '/placeholder.svg'} 
          alt={title} 
          className="w-full h-full object-cover"
          whileHover={{ 
            scale: 1.08,
            transition: { duration: 0.5 }
          }}
        />
        {category && (
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
          {category === 'AI' && (
            <Star className="text-yellow-500" size={16} fill="currentColor" />
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Key Features:
            </h4>
            <div className="flex flex-wrap gap-1">
              {features.slice(0, 3).map((feature, idx) => (
                <span 
                  key={idx}
                  className="text-xs bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
              {features.length > 3 && (
                <span className="text-xs text-gray-500 dark:text-gray-400 px-1">
                  +{features.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="bg-secondary px-2 py-1 rounded text-xs font-medium dark:bg-secondary/20 border border-secondary-dark/30"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="project-card-links flex justify-between items-center mt-auto">
          <div className="flex space-x-3">
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
              Code
            </motion.a>
            <motion.a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-3 py-1.5 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
              aria-label={`Live demo for ${title}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
