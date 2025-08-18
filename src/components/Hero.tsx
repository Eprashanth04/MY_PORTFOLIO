
import { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer | Passionate Coder';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Prashanthresume =()=>{
    window.open('https://drive.google.com/file/d/1HGZ7NhfP749okkqGLvrLugI3b9pZ7mT9/view?usp=sharing');
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Hi, I'm
          </h1>
          <h2 className="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="text-blue-600 dark:text-blue-400">E Sai Prashanth</span>
          </h2>
          <div className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 h-12">
            <span className="border-r-2 border-blue-600 dark:border-blue-400 pr-2 animate-pulse">
              {displayText}
            </span>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-4 max-w-2xl mx-auto">
            2026 Graduate | Motivated Software Engineering Enthusiast
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
            Aspiring Full Stack Developer and 2026 Graduate. Passionate about building impactful projects using Java, MERN Stack, and AI/ML. Seeking to apply technical and problem-solving skills in real-world environments.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={Prashanthresume}
            >
              <Download className="mr-2" size={20} />
              View Resume
            </Button>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/EPrashanth04" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <GithubIcon size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/esaiprashanth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <LinkedinIcon size={24} />
              </a>
              <a 
                href="mailto:ellurprashanth82@gmail.com"
                className="text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
