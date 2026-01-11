import { useState, useEffect } from 'react';
import { Github, LinkedinIcon, Mail, Phone, ExternalLink, Download, Code, Database, Globe, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 transition-colors">
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />

      <section id="home">
        <Hero />
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="skills" className="py-20 bg-slate-100/60 dark:bg-slate-800/50 transition-colors">
        <Skills />
      </section>

      <section id="experience" className="py-20">
        <Experience />
      </section>

      <section id="projects" className="py-20 bg-slate-100/60 dark:bg-slate-800/50 transition-colors">
        <Projects />
      </section>

      <section id="education" className="py-20">
        <Education />
      </section>

      <section id="certificates" className="py-20 bg-slate-100/60 dark:bg-slate-800/50 transition-colors">
        <Certificates />
      </section>

      <section id="contact" className="py-20">
        <Contact />
      </section>

      <footer className="bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white py-8 text-center transition-colors">
        <p>&copy; 2025 E Sai Prashanth. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
