
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Globe, Server, Cloud } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C', level: 75 },
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 85 },
      ]
    },
    {
      title: 'Libraries & Tools',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'NumPy', level: 80 },
        { name: 'Pandas', level: 80 },
        { name: 'Scikit-learn', level: 75 },
        { name: 'Matplotlib', level: 75 },
      ]
    },
    {
      title: 'Development Tools',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Jupyter Notebook', level: 85 },
        { name: 'Postman', level: 80 },
        { name: 'Netlify', level: 75 },
      ]
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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {skillCategories.map((category, index) => (
          <Card 
            key={category.title} 
            className="bg-white/70 dark:bg-slate-800/50 border-blue-600/20 dark:border-blue-400/20 hover:border-blue-600/40 dark:hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105 card-hover"
          >
            <CardHeader className="text-center">
              <div className="flex justify-center text-blue-600 dark:text-blue-400 mb-2">
                {category.icon}
              </div>
              <CardTitle className="text-slate-900 dark:text-white">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 4 + skillIndex) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/70 dark:bg-slate-800/50 border-blue-600/20 dark:border-blue-400/20">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white text-center">Technologies & Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium transform hover:scale-105 transition-all duration-200"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 dark:bg-slate-800/50 border-blue-600/20 dark:border-blue-400/20">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white text-center">Technical Concepts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {concepts.map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium transform hover:scale-105 transition-all duration-200"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
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
