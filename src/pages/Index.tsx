import React from 'react';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import SkillCategory from '../components/SkillCategory';
import SkillsSphere from '../components/SkillsSphere';
import ContactForm from '../components/ContactForm';
import ChatWidget from '../components/ChatWidget';
import { TubelightNavbar } from '../components/TubelightNavbar';
import { BackgroundAurora } from '../components/ui/background-aurora';
import { Code, Database, Server, Laptop, FileDown } from 'lucide-react';
import { ResumeTimeline } from '../components/ResumeTimeline';
import { GlowingCard } from '../components/GlowingCard';
import { SocialDock } from '../components/SocialDock';
import SectionTitle from '../components/SectionTitle';
import { Button } from '../components/ui/button';

const Index = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with cart functionality, user auth, and payment processing.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      techStack: ['React', 'Express', 'Socket.io', 'MySQL'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'Learning Platform',
      description: 'Educational platform with course creation, enrollment, and progress tracking features.',
      techStack: ['React', 'Firebase', 'Node.js', 'Redux'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'Health Tracker',
      description: 'Mobile-first app for tracking fitness goals, nutrition, and wellness metrics.',
      techStack: ['React Native', 'Express', 'MongoDB', 'Chart.js'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      imageUrl: '/placeholder.svg'
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ['JavaScript', 'TypeScript', 'React', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
      color: "#7E69AB"
    },
    {
      title: "Backend Development",
      skills: ['Node.js', 'Express', 'REST API', 'Authentication', 'Authorization'],
      color: "#FEC6A1"
    },
    {
      title: "Database Management",
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Data Modeling', 'Query Optimization'],
      color: "#9b87f5"
    },
    {
      title: "Tools & Others",
      skills: ['Git', 'Docker', 'CI/CD', 'Testing', 'AWS', 'Agile', 'Problem Solving'],
      color: "#F1F1F1"
    }
  ];

  const handleResumeDownload = () => {
    // In a real scenario, you would have the actual resume file path here
    const link = document.createElement('a');
    link.href = '/mervine_muganguzi_resume.pdf'; // This should be the actual path to your resume
    link.download = 'Mervine_Muganguzi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <TubelightNavbar />
      
      {/* Hero Section */}
      <BackgroundAurora>
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm Mervine — <br />
                <span className="text-primary">I build smart, meaningful digital experiences.</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-lg">
                Full Stack Developer with a passion for creating elegant solutions to complex problems. Let's turn your ideas into reality.
              </p>
              <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn-outline">
                  Get In Touch
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="avatar-blob w-64 h-64 md:w-80 md:h-80 bg-primary/10 overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Mervine Muganguzi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </BackgroundAurora>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            About Me
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm Mervine Muganguzi, a Computer Engineering graduate and Full Stack Developer with a passion for building creative technical solutions that make a real difference in people's lives.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm multilingual, speaking English and French fluently, and I'm currently learning German. This love for languages extends to programming languages as well, where I enjoy mastering new tools and frameworks.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I believe that knowledge matters most when it makes someone better. That's why I'm passionate about knowledge-sharing, teamwork, and teaching—helping others grow while constantly improving myself.
              </p>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GlowingCard 
                title="Health & Fitness" 
                description="Passionate about glute/abs workouts for mind-body balance."
              />
              <GlowingCard 
                title="Snack of Choice" 
                description="Salted peanuts—simple, nutritious fuel for coding sessions."
              />
              <GlowingCard 
                title="Community Work" 
                description="Active in faith-based community initiatives and service."
              />
              <GlowingCard 
                title="Music Leadership" 
                description="Involved in music programs and mentoring beginners."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            My Projects
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with 3D Visualization */}
      <section id="skills" className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <SectionTitle title="My Skills" />
          
          <div className="mb-10">
            <SkillsSphere categoryData={skillCategories} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <SkillCategory 
              title="Frontend Development"
              skills={skillCategories[0].skills}
              icon={<Laptop size={24} />}
            />
            
            <SkillCategory 
              title="Backend Development"
              skills={skillCategories[1].skills}
              icon={<Server size={24} />}
            />
            
            <SkillCategory 
              title="Database Management"
              skills={skillCategories[2].skills}
              icon={<Database size={24} />}
            />
            
            <SkillCategory 
              title="Tools & Others"
              skills={skillCategories[3].skills}
              icon={<Code size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Resume Timeline Section with Download Button */}
      <section id="teaching" className="py-20 bg-gray-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <SectionTitle 
              title="Experience & Education" 
              subtitle="My professional journey and educational background" 
            />
            <Button 
              onClick={handleResumeDownload} 
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark"
            >
              <FileDown size={16} />
              Download Resume
            </Button>
          </div>
          
          <ResumeTimeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            Get In Touch
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <ContactForm />
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-secondary/30 dark:bg-primary/5 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Email</h4>
                    <a 
                      href="mailto:mervine@example.com"
                      className="text-primary hover:underline"
                    >
                      mervine@example.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Location</h4>
                    <p className="dark:text-gray-300">Montreal, Canada</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Connect With Me</h4>
                    <SocialDock />
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-inner">
                  <h4 className="font-semibold text-lg mb-4">My Philosophy</h4>
                  <p className="italic text-gray-700 dark:text-gray-300">
                    "I believe that knowledge matters most when it makes someone better. Let's collaborate and create something meaningful together."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ChatWidget />
    </>
  );
};

export default Index;
