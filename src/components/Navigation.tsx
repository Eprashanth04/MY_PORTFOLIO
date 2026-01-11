import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

interface NavigationProps {
  activeSection: string;
  onNavigate?: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = 80; // approximate navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    onNavigate?.(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            E Sai Prashanth
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 ${activeSection === item.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-200"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            className="md:hidden text-slate-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 transition-colors duration-200 ${activeSection === item.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
              aria-label="Toggle theme"
              className="mt-2 text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-200"
            >
              {isDark ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
