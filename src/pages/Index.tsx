
import React, { useEffect } from 'react';
import { TubelightNavbar } from '../components/TubelightNavbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ChatWidget from '../components/ChatWidget';
import HeroScrollAnimation from '../components/ui/hero-scroll-animation';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import GraphicsSection from '../components/sections/GraphicsSection';
import ContactSection from '../components/sections/ContactSection';
import { useAnalytics } from '../hooks/useAnalytics';

const Index = () => {
  const { trackEvent } = useAnalytics();
  
  // Track page view on component mount
  useEffect(() => {
    trackEvent('page_view', { page: 'home' });
  }, [trackEvent]);

  return (
    <>
      <TubelightNavbar />
      
      {/* Hero Section with Scroll Animation */}
      <section id="home">
        <HeroScrollAnimation />
      </section>

      {/* About Section */}
      <AboutSection />
      
      {/* Experience Timeline Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Graphic Design Section */}
      <GraphicsSection />

      {/* Contact Section */}
      <ContactSection />
      
      <Footer />
      <ChatWidget />
    </>
  );
};

export default Index;
