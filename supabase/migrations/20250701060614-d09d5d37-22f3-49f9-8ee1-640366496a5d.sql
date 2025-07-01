
-- Create projects table for dynamic project management
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tech_stack TEXT[] NOT NULL,
  github_url TEXT NOT NULL,
  live_url TEXT NOT NULL,
  image_url TEXT,
  category TEXT,
  features TEXT[],
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create analytics table for tracking interactions
CREATE TABLE public.analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL, -- 'page_view', 'contact_form', 'project_click', 'resume_download'
  event_data JSONB,
  user_agent TEXT,
  ip_address INET,
  referrer TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create testimonials table for dynamic testimonials
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  avatar_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add RLS policies for projects (public read access)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Projects are viewable by everyone" ON public.projects FOR SELECT USING (true);

-- Add RLS policies for analytics (public insert, no read access for security)
ALTER TABLE public.analytics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Analytics can be inserted by everyone" ON public.analytics FOR INSERT WITH CHECK (true);

-- Add RLS policies for testimonials (public read access)
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Testimonials are viewable by everyone" ON public.testimonials FOR SELECT USING (true);

-- Insert some sample projects
INSERT INTO public.projects (title, description, tech_stack, github_url, live_url, image_url, category, features, is_featured, display_order) VALUES
('AI-Powered Task Manager', 'Smart task management with AI prioritization and natural language processing for seamless productivity.', ARRAY['React', 'TypeScript', 'OpenAI', 'Supabase'], 'https://github.com/example/ai-task-manager', 'https://ai-tasks.demo.com', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=80', 'AI', ARRAY['AI Task Prioritization', 'Natural Language Processing', 'Smart Scheduling'], true, 1),
('Social Media Dashboard', 'Comprehensive social media management platform with analytics and scheduling capabilities.', ARRAY['React', 'Node.js', 'PostgreSQL', 'Chart.js'], 'https://github.com/example/social-dashboard', 'https://social-dash.demo.com', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=80', 'Social', ARRAY['Multi-platform Integration', 'Advanced Analytics', 'Content Scheduling'], true, 2),
('E-commerce Platform', 'Modern e-commerce solution with real-time inventory and payment processing.', ARRAY['Next.js', 'Stripe', 'MongoDB', 'Redis'], 'https://github.com/example/ecommerce', 'https://shop.demo.com', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80', 'Productivity', ARRAY['Real-time Inventory', 'Payment Processing', 'Order Management'], false, 3);

-- Insert some sample testimonials
INSERT INTO public.testimonials (name, role, company, content, rating, avatar_url, is_featured, display_order) VALUES
('Sarah Johnson', 'Product Manager', 'TechCorp Inc.', 'Exceptional work quality and attention to detail. Delivered our project ahead of schedule with outstanding results.', 5, 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face', true, 1),
('Michael Chen', 'CTO', 'StartupXYZ', 'Incredible technical expertise and problem-solving skills. Highly recommended for complex projects.', 5, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', true, 2),
('Emily Rodriguez', 'Design Director', 'Creative Studios', 'Perfect blend of technical skills and creative vision. A pleasure to work with on our digital transformation.', 5, 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', false, 3);
