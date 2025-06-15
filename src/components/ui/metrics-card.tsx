
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MetricsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  gradient: string;
  delay?: number;
}

export const MetricsCard = ({ 
  icon: Icon, 
  value, 
  label, 
  description, 
  gradient, 
  delay = 0 
}: MetricsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 200 
      }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: gradient }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="relative bg-white/80 dark:bg-zinc-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-zinc-700/50 shadow-xl hover:shadow-2xl transition-all duration-500">
        {/* Icon container */}
        <motion.div 
          className="mb-6 relative"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ background: gradient }}
          >
            <Icon size={28} className="text-white" />
          </div>
          
          {/* Icon glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-50 blur-lg"
            style={{ background: gradient }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Value with counter animation */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="mb-2"
        >
          <span className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {value}
          </span>
        </motion.div>

        {/* Label */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
          {label}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-5 dark:opacity-10" style={{ background: gradient }} />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full opacity-5 dark:opacity-10" style={{ background: gradient }} />
      </div>
    </motion.div>
  );
};
