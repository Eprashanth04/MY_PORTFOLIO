
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science (Internet of Things)',
      institution: 'Malla Reddy Engineering College',
      location: 'Hyderabad, Telangana',
      duration: '2022–2026',
      cgpa: '8.08',
      type: 'Bachelor\'s Degree'
    },
    {
      degree: 'PU College',
      institution: 'Abhyudaya PU College',
      location: 'Karnataka',
      duration: '2020–2022',
      percentage: '85.83%',
      type: 'Pre-University'
    },
    {
      degree: 'High School',
      institution: 'Chinmayi JC High School',
      location: 'Karnataka',
      duration: '2020',
      percentage: '80%',
      type: 'Secondary Education'
    }
  ];

  const achievements = [
    {
      title: 'NPTEL IoT – Elite Silver',
      description: 'Achieved 82% score in Internet of Things certification from NPTEL.',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Machine Learning Certification',
      description: 'Completed Machine Learning (Regression & Classification) course from Coursera.',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Python Programming',
      description: 'Successfully completed Programming for Everybody (Python) from University of Michigan via Coursera.',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Cyber Security Essentials',
      description: 'Completed Cyber Security Essentials certification from Cisco Networking Academy.',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Front-End Web Development',
      description: 'Earned Front-End Web Development internship certificate from DevoTown.',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'HackerRank Achievements',
      description: '4-star coder in C and 3-star coder in Java on HackerRank platform.',
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Education & <span className="text-blue-600 dark:text-blue-400">Achievements</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Academic background and notable accomplishments
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6">Educational Background</h3>
          {education.map((edu, index) => (
            <Card key={index} className="bg-white/70 dark:bg-slate-800/50 border-blue-600/20 dark:border-blue-400/20 hover:border-blue-600/40 dark:hover:border-blue-400/40 transition-all duration-300 card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-400">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="bg-blue-600 text-white">
                      {edu.type}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-slate-900 dark:text-white text-xl">{edu.degree}</CardTitle>
                <CardDescription className="text-blue-600 dark:text-blue-400 text-lg font-semibold">
                  {edu.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-100 dark:bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {edu.cgpa ? 'CGPA' : 'Percentage'}
                    </h4>
                    <p className="text-slate-900 dark:text-white text-2xl font-bold">
                      {edu.cgpa || edu.percentage}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6">Certifications & Achievements</h3>
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-slate-800/50 border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 mt-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
