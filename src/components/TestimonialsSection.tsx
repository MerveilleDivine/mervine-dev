
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useFeaturedTestimonials } from '@/hooks/useTestimonials';
import TestimonialCard from './TestimonialCard';
import SectionTitle from './SectionTitle';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const { data: testimonials, isLoading, error } = useFeaturedTestimonials();

  if (isLoading) {
    return (
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 dark:bg-zinc-950 px-4">
        <div className="container mx-auto">
          <SectionTitle title="What People Say" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg animate-pulse">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full mr-3"></div>
                  <div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-24"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !testimonials?.length) {
    console.log('No testimonials to display:', { error, testimonials });
    return null;
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 dark:bg-zinc-950 px-4">
      <div className="container mx-auto">
        <SectionTitle title="What People Say" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 sm:mt-8 lg:mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                text={testimonial.content}
                name={testimonial.name}
                position={`${testimonial.role}${testimonial.company ? ` at ${testimonial.company}` : ''}`}
                imageUrl={testimonial.avatar_url}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
