
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating?: number;
  avatar_url?: string;
  is_featured: boolean;
  display_order: number;
  created_at: string;
}

export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      console.log('Fetching testimonials from Supabase...');
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error fetching testimonials:', error);
        throw error;
      }

      console.log('Testimonials fetched successfully:', data);
      return data as Testimonial[];
    },
  });
};

export const useFeaturedTestimonials = () => {
  return useQuery({
    queryKey: ['featured-testimonials'],
    queryFn: async () => {
      console.log('Fetching featured testimonials from Supabase...');
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_featured', true)
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error fetching featured testimonials:', error);
        throw error;
      }

      console.log('Featured testimonials fetched successfully:', data);
      return data as Testimonial[];
    },
  });
};
