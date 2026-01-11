
import { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, Mail, Download } from 'lucide-react';
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

  const Prashanthresume = () => {
    window.open('/resume.pdf', '_blank');
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Hi, I'm <br />
              <span className="text-blue-600 dark:text-blue-400">E Sai Prashanth</span>
            </h1>

            <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 h-8 font-medium">
              <span className="border-r-2 border-blue-600 dark:border-blue-400 pr-2 animate-pulse">
                {displayText}
              </span>
            </div>

            <p className="text-lg text-slate-700 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Aspiring Full Stack Developer and 2026 Graduate specializing in MERN Stack and AI/ML. Passionate about building impactful solutions and solving real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                onClick={Prashanthresume}
              >
                <Download className="mr-2" size={20} />
                View Resume
              </Button>

              <div className="flex space-x-5 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                <a
                  href="https://github.com/EPrashanth04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <GithubIcon size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/esaiprashanth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <LinkedinIcon size={24} />
                </a>
                <a
                  href="mailto:ellurprashanth82@gmail.com"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex-1 flex justify-center lg:justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] animate-fade-in-up">
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur-[20px] opacity-20 animate-pulse"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src="/profile-pic.png"
                  alt="E Sai Prashanth"
                  className="w-full h-full object-cover object-[center_-50px]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />

                {/* Fallback if no image */}
                <div className="hidden w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
                  <span className="text-center font-medium">
                    Add profile.png<br />in public folder
                  </span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2 animate-bounce">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Open to Work</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
