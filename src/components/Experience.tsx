
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Tech Octanet',
      location: 'Remote',
      duration: 'March 2025 – April 2025',
      type: 'Internship',
      description: [
        'Designed and developed a tourism website using HTML, CSS, and JavaScript with responsive UI design',
        'Implemented user authentication system and package browsing functionality',
        'Created dynamic destination listing and interactive features for enhanced user experience',
        'Collaborated with team members to ensure project requirements were met within deadlines'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'User Authentication', 'Web Development']
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Professional journey building innovative solutions and gaining real-world experience
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-100 dark:border-slate-900 z-10"></div>

              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                <Card className="bg-white/70 dark:bg-slate-800/50 border-blue-600/20 dark:border-blue-400/20 hover:border-blue-600/40 dark:hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105 card-hover">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-blue-600 text-white">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                    </div>
                    <CardTitle className="text-slate-900 dark:text-white text-xl">{exp.title}</CardTitle>
                    <CardDescription className="flex items-center text-blue-600 dark:text-blue-400">
                      <Building className="w-4 h-4 mr-2" />
                      {exp.company}
                      <MapPin className="w-4 h-4 ml-4 mr-1" />
                      {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                          • {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-blue-600/40 text-blue-600 dark:border-blue-400/40 dark:text-blue-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
