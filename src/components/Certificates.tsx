
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink, Download } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'NPTEL IoT – Elite Silver',
      issuer: 'NPTEL',
      description: 'Achieved 82% score in Internet of Things certification from NPTEL, demonstrating expertise in IoT technologies and applications.'
    },
    {
      title: 'Machine Learning (Regression & Classification)',
      issuer: 'Coursera',
      description: 'Completed comprehensive Machine Learning course covering regression and classification techniques, enhancing skills in AI/ML technologies.'
    },
    {
      title: 'Programming for Everybody (Python)',
      issuer: 'University of Michigan via Coursera',
      description: 'Successfully completed Python programming fundamentals from University of Michigan, building strong foundation in programming concepts.'
    },
    {
      title: 'Cyber Security Essentials',
      issuer: 'Cisco Networking Academy',
      description: 'Completed Cyber Security Essentials certification from Cisco, gaining knowledge in network security and cyber protection.'
    },
    {
      title: 'Front-End Web Development',
      issuer: 'DevoTown',
      description: 'Earned Front-End Web Development internship certificate, demonstrating practical skills in modern web development technologies.'
    },
    {
      title: 'HackerRank Achievements',
      issuer: 'HackerRank',
      description: '4-star coder in C and 3-star coder in Java on HackerRank platform, showcasing strong problem-solving and programming skills.'
    }
  ];

  const allcertificate = "https://drive.google.com/drive/folders/1ZOHU2dzjLIVxHw8pd3njxmbQa3xnTAsX?usp=drive_link";

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Certificates & <span className="text-blue-600 dark:text-blue-400">Achievements</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Professional certifications and training achievements demonstrating technical expertise
        </p>
      </div>

      <div className="mb-12 text-center">
        <Button 
          asChild
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <a 
            href={allcertificate} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <ExternalLink className="mr-2" size={20} />
            View All Certificates
          </a>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <Card key={index} className="bg-white/70 dark:bg-slate-800/50 border-blue-600/20 dark:border-blue-400/20 hover:border-blue-600/40 dark:hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105 h-full flex flex-col card-hover">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-400">
                  <Award className="w-8 h-8" />
                </div>
                <Badge variant="secondary" className="bg-blue-600 text-white">
                  Certified
                </Badge>
              </div>
              
              <CardTitle className="text-slate-900 dark:text-white text-xl">{cert.title}</CardTitle>
              <CardDescription className="text-blue-600 dark:text-blue-400 font-semibold">
                {cert.issuer}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 flex flex-col h-full">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {cert.description}
              </p>
              <div className="mt-auto">
                <Button 
                  asChild
                  variant="outline" 
                  size="sm" 
                  className="border-blue-600/40 text-blue-700 hover:bg-blue-600/10 dark:border-blue-400/40 dark:text-blue-300 dark:hover:bg-blue-600/20 w-full"
                >
                  <a 
                    href={allcertificate} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    <Download className="mr-2" size={16} />
                    View Certificate
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-slate-800/50 p-8 rounded-lg border border-blue-400/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Continuous Learning
          </h3>
          <p className="text-slate-300 text-lg mb-6">
            Successfully completed multiple certifications in web development, machine learning, and programming, demonstrating commitment to continuous skill development.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="border-blue-400/40 text-blue-300">
              Web Development
            </Badge>
            <Badge variant="outline" className="border-blue-400/40 text-blue-300">
              Machine Learning
            </Badge>
            <Badge variant="outline" className="border-blue-400/40 text-blue-300">
              Python Programming
            </Badge>
            <Badge variant="outline" className="border-blue-400/40 text-blue-300">
              Cyber Security
            </Badge>
            <Badge variant="outline" className="border-blue-400/40 text-blue-300">
              IoT Technologies
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
