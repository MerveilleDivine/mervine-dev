
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import SkillCategory from '../components/SkillCategory';
import ContactForm from '../components/ContactForm';
import ChatWidget from '../components/ChatWidget';
import { Code, Database, Server, Laptop } from 'lucide-react';

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

  const testimonials = [
    {
      text: "Mervine has a remarkable ability to explain complex concepts in a way that makes them accessible. Her passion for teaching shines through in everything she does.",
      name: "Sarah Johnson",
      position: "Former Student"
    },
    {
      text: "Working with Mervine was an incredible experience. Her technical skills combined with her clear communication made our project a success. She's a true professional.",
      name: "Michael Chen",
      position: "Project Manager"
    },
    {
      text: "Mervine's mentorship transformed my approach to coding. She doesn't just teach you to write code—she teaches you how to think like a developer.",
      name: "David Rodriguez",
      position: "Junior Developer"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-secondary/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm Mervine — <br />
              <span className="text-primary">I build smart, meaningful digital experiences.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
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

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="About Me" 
            subtitle="Get to know more about me and what drives my passion for development."
          />
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
              <p className="text-gray-700 mb-6">
                I'm Mervine Muganguzi, a Computer Engineering graduate and Full Stack Developer with a passion for building creative technical solutions that make a real difference in people's lives.
              </p>
              <p className="text-gray-700 mb-6">
                I'm multilingual, speaking English and French fluently, and I'm currently learning German. This love for languages extends to programming languages as well, where I enjoy mastering new tools and frameworks.
              </p>
              <p className="text-gray-700">
                I believe that knowledge matters most when it makes someone better. That's why I'm passionate about knowledge-sharing, teamwork, and teaching—helping others grow while constantly improving myself.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-primary">Personal Interests</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Health & Fitness</h4>
                  <p className="text-gray-700">Passionate about glute/abs workouts for mind-body balance.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Snack of Choice</h4>
                  <p className="text-gray-700">Salted peanuts—simple, nutritious fuel for coding sessions.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Community Work</h4>
                  <p className="text-gray-700">Active in faith-based community initiatives and service.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Music Leadership</h4>
                  <p className="text-gray-700">Involved in music programs and mentoring beginners.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="My Projects" 
            subtitle="Here are some of the projects I've worked on. Each one presented unique challenges and opportunities for growth."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="My Skills" 
            subtitle="A comprehensive list of the technologies and tools I'm proficient with."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCategory 
              title="Frontend Development"
              skills={['JavaScript', 'TypeScript', 'React', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']}
              icon={<Laptop size={24} />}
            />
            
            <SkillCategory 
              title="Backend Development"
              skills={['Node.js', 'Express', 'REST API', 'Authentication', 'Authorization']}
              icon={<Server size={24} />}
            />
            
            <SkillCategory 
              title="Database Management"
              skills={['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Data Modeling', 'Query Optimization']}
              icon={<Database size={24} />}
            />
            
            <SkillCategory 
              title="Tools & Others"
              skills={['Git', 'Docker', 'CI/CD', 'Testing', 'AWS', 'Agile', 'Problem Solving']}
              icon={<Code size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Teaching & Mentoring" 
            subtitle="Sharing knowledge and helping others grow is a passion of mine."
          />
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Educational Involvement</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-1">
                    <span>1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Teaching Assistant</h4>
                    <p className="text-gray-600">Assisted professors in programming courses, providing one-on-one help to students struggling with assignments and concepts.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-1">
                    <span>2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Programming Workshops</h4>
                    <p className="text-gray-600">Organized and ran workshops explaining complex programming concepts like Object-Oriented Programming in simple, accessible ways.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-1">
                    <span>3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tech Meetups</h4>
                    <p className="text-gray-600">Participate in local tech meetups, sharing knowledge and experiences with the community.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Community Leadership</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-1">
                    <span>1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Choir Training Program</h4>
                    <p className="text-gray-600">Run a training program for beginners in music, helping them develop their skills and confidence.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-1">
                    <span>2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Mentoring Initiative</h4>
                    <p className="text-gray-600">Mentor junior developers, providing guidance on career development and technical skills.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-1">
                    <span>3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Faith-based Community Service</h4>
                    <p className="text-gray-600">Actively involved in community service projects, applying technical skills to help non-profit organizations.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Testimonials" 
            subtitle="Here's what people I've worked with have to say."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Get In Touch" 
            subtitle="Have a question or want to work together? Feel free to reach out!"
          />
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <ContactForm />
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-secondary/30 rounded-lg p-8 h-full">
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
                    <p>Montreal, Canada</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Social Profiles</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://github.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white p-2 rounded-full hover:bg-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a 
                        href="https://linkedin.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-lg shadow-inner">
                  <h4 className="font-semibold text-lg mb-4">My Philosophy</h4>
                  <p className="italic text-gray-700">
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
