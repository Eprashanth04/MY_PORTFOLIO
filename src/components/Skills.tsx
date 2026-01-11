
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Globe, Server, Cloud } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      skills: ['Java', 'Python', 'C']
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="w-8 h-8" />,
      skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL']
    },
    {
      title: 'Libraries & Tools',
      icon: <Server className="w-8 h-8" />,
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib']
    },
    {
      title: 'Development Tools',
      icon: <Cloud className="w-8 h-8" />,
      skills: ['Git/GitHub', 'VS Code', 'Jupyter Notebook', 'Postman', 'Netlify']
    }
  ];

  const technologies = [
    'Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js',
    'Express.js', 'MongoDB', 'SQL', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib',
    'Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Postman', 'Netlify'
  ];

  const concepts = [
    'DSA', 'OOPs', 'Web Development', 'DBMS', 'Computer Networks', 'AWS (Basic)',
    'Machine Learning', 'IoT', 'OS'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Comprehensive expertise across programming, web development, and AI/ML technologies
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {skillCategories.map((category, index) => (
          <Card
            key={category.title}
            className="group relative overflow-hidden bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${index * 100}ms`,
              transitionDuration: '700ms'
            }}
          >
            {/* Gradient Background Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardHeader className="text-center pb-2 relative z-10">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {category.icon}
              </div>
              <CardTitle className="text-xl text-slate-900 dark:text-white mb-2">{category.title}</CardTitle>
              <div className="w-12 h-1 bg-blue-600/20 dark:bg-blue-400/20 mx-auto rounded-full group-hover:w-24 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-all duration-500"></div>
            </CardHeader>
            <CardContent className="relative z-10 pt-4">
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-transparent hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 cursor-default hover:scale-105"
                    style={{
                      transitionDelay: `${skillIndex * 50}ms`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card
          className="group relative overflow-hidden bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full"
        >
          {/* Gradient Background Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-white">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-6 h-6" />
              </div>
              Technologies & Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-transparent hover:border-blue-500/30 dark:hover:border-blue-400/30 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transform hover:scale-105 transition-all duration-300 cursor-default"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card
          className="group relative overflow-hidden bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full"
        >
          {/* Gradient Background Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-white">
              <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                <Server className="w-6 h-6" />
              </div>
              Technical Concepts
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="flex flex-wrap gap-3">
              {concepts.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-transparent hover:border-cyan-500/30 dark:hover:border-cyan-400/30 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:text-cyan-700 dark:hover:text-cyan-300 transform hover:scale-105 transition-all duration-300 cursor-default"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${(index + 5) * 50}ms`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
