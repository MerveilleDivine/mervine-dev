
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  index?: number;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
  index = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.2
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="project-card bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-700"
    >
      <div className="h-48 bg-gray-200 relative overflow-hidden border-b border-gray-200 dark:border-zinc-700">
        <motion.img 
          src={imageUrl || '/placeholder.svg'} 
          alt={title} 
          className="w-full h-full object-cover"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.5 }
          }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-secondary px-3 py-1 rounded-full text-sm font-medium dark:bg-secondary/20 border border-secondary-dark/30"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="project-card-links flex justify-end space-x-4">
          <motion.a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            aria-label={`GitHub repository for ${title}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            aria-label={`Live demo for ${title}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
