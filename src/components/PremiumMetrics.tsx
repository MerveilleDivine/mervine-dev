
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Award, Zap } from 'lucide-react';
import { MetricsCard } from './ui/metrics-card';
import SectionTitle from './SectionTitle';

const PremiumMetrics = () => {
  const metrics = [
    {
      icon: Code2,
      value: "50+",
      label: "Projects Completed",
      description: "Successfully delivered web applications, from concept to deployment with modern technologies.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      icon: Users,
      value: "25+",
      label: "Happy Clients",
      description: "Satisfied clients across various industries, from startups to established businesses.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      icon: Award,
      value: "3+",
      label: "Years Experience",
      description: "Proven track record in full-stack development with cutting-edge technologies.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      icon: Zap,
      value: "100%",
      label: "Success Rate",
      description: "Perfect delivery record with attention to detail and client satisfaction.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTitle title="Impact & Results" />
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transforming ideas into digital excellence with measurable outcomes and exceptional quality.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricsCard
              key={index}
              {...metric}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Additional visual elements */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 px-8 py-4 rounded-full border border-primary/20 backdrop-blur-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="text-primary" size={24} />
            </motion.div>
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              Ready to create something amazing together?
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumMetrics;
