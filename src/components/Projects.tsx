import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Code, Globe, Search, Monitor, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Tourism Booking Website',
      description: 'A comprehensive tourism booking website with dynamic listings, user authentication, admin features, and modern UI.',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Stripe'],
      category: 'Full Stack',
      icon: <Globe className="w-6 h-6" />,
      github: 'https://github.com/Eprashanth04/Tourism-website',
      live: 'https://tourism-website-sable.vercel.app/',
      features: [
        'Dynamic Package Listings',
        'Secure User Authentication',
        'Booking System',
        'Reviews & Ratings',
        'Admin Panel'
      ]
    },
    {
      title: 'IoT Spam Detection',
      description: 'An Efficient Spam Detection Technique for IoT devices leveraging Machine Learning models to enhance security.',
      technologies: ['Python', 'Machine Learning', 'IoT', 'Data Analysis'],
      category: 'AI/ML',
      icon: <Database className="w-6 h-6" />,
      github: 'https://github.com/Eprashanth04/An-efficient-spam-detection-technique-for-IoT-devices',
      features: [
        'Spam Detection',
        'IoT Security',
        'Machine Learning Algorithms',
        'Random Forest Algorithim',
        'Data Analysis',
        'Efficient Processing'
      ]
    },
    {
      title: 'Image Search Engine',
      description: 'Developed a web app to browse and search images efficiently using API integration. Provides users with a streamlined interface for finding and organizing visual content.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      category: 'Web Development',
      icon: <Search className="w-6 h-6" />,
      github: 'https://github.com/EPrashanth04/Image-Search-Engine',
      live: 'https://image-search-engine-navy.vercel.app/',
      features: [
        'Image search functionality',
        'API integration for image retrieval',
        'Responsive design',
        'User-friendly interface',
        'Efficient image browsing'
      ]
    },
    {
      title: 'Cognify',
      description: 'A Java-based project demonstrating object-oriented programming concepts and software development best practices. Features include modular design and efficient algorithms.',
      technologies: ['Java', 'OOP', 'Software Development'],
      category: 'Java Development',
      icon: <Code className="w-6 h-6" />,
      github: 'https://github.com/EPrashanth04/Cognify',
      features: [
        'Object-oriented programming',
        'Modular design',
        'Efficient algorithms',
        'Clean code practices',
        'Java development'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Showcase of innovative solutions and technical expertise across web development and AI/ML
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-white/70 dark:bg-slate-800/50 border-blue-600/20 dark:border-blue-400/20 hover:border-blue-600/40 dark:hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105 group card-hover"
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200">
                  {project.icon}
                </div>
                <Badge variant="outline" className="border-blue-600/40 text-blue-600 dark:border-blue-400/40 dark:text-blue-400">
                  {project.category}
                </Badge>
              </div>
              <CardTitle className="text-slate-900 dark:text-white text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {project.title}
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-slate-700 dark:text-gray-300 text-sm">• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-blue-600/10 text-blue-700 dark:bg-blue-600/20 dark:text-blue-300">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-600/40 text-blue-600 hover:bg-blue-600/10 dark:border-blue-400/40 dark:text-blue-400 dark:hover:bg-blue-400/10 w-full"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  {/* Live Demo Button */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white w-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
