
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  category: string;
  features?: string[];
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  githubUrl, 
  liveUrl, 
  imageUrl, 
  category, 
  features = [],
  index 
}: ProjectCardProps) => {
  const [showFeatures, setShowFeatures] = useState(false);

  const categoryColors = {
    'AI': 'bg-gradient-to-r from-purple-500 to-pink-500',
    'Social': 'bg-gradient-to-r from-blue-500 to-cyan-500', 
    'Productivity': 'bg-gradient-to-r from-green-500 to-emerald-500',
    'default': 'bg-gradient-to-r from-gray-500 to-gray-600'
  };

  const categoryColor = categoryColors[category as keyof typeof categoryColors] || categoryColors.default;

  return (
    <motion.div 
      className="relative bg-white dark:bg-zinc-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-zinc-700 overflow-hidden group h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      {/* Image Section */}
      <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden rounded-t-2xl">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-xs sm:text-sm font-semibold ${categoryColor} shadow-lg`}>
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5 lg:space-y-6">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
          {description}
        </p>

        {/* Features Section - Collapsible */}
        {features.length > 0 && (
          <div className="space-y-3 sm:space-y-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFeatures(!showFeatures)}
              className="w-full justify-between p-3 sm:p-4 h-auto text-sm sm:text-base font-medium text-primary hover:text-primary hover:bg-primary/10 transition-colors rounded-xl"
            >
              <span>Key Features</span>
              {showFeatures ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </Button>
            
            <motion.div
              initial={false}
              animate={{ 
                height: showFeatures ? 'auto' : 0,
                opacity: showFeatures ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-3 sm:gap-4 pt-2">
                {features.slice(0, 4).map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    <span className="leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300">Technologies</h4>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {techStack.map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs sm:text-sm lg:text-base font-medium border border-gray-200 dark:border-zinc-600 hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-6 mt-auto">
          <Button
            asChild
            className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 hover:shadow-lg text-sm sm:text-base lg:text-lg min-h-[48px]"
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 hover:shadow-lg text-sm sm:text-base lg:text-lg min-h-[48px]"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
