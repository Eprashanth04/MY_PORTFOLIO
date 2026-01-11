
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, LinkedinIcon, Download, Code } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'ellurprashanth82@gmail.com',
      link: 'mailto:ellurprashanth82@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 9632433442',
      link: 'tel:+919632433442'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'Jeedimetla, Telangana, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/EPrashanth04',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/esaiprashanth',
      color: 'hover:text-blue-400'
    },
    {
      name: 'HackerRank',
      icon: <Code className="w-6 h-6" />,
      url: 'https://www.hackerrank.com/Prashanth_04',
      color: 'hover:text-green-400'
    }
  ];

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Ready to collaborate on exciting projects or discuss opportunities
        </p>
      </div>

      <div className="grid lg:grid-cols-2 items-stretch gap-12 max-w-6xl mx-auto">
        <div className="space-y-8 h-full flex flex-col">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Let's Connect</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              I'm always open to discussing new opportunities, innovative projects, or potential collaborations.
              Whether you're looking for a dedicated Full Stack Developer or want to explore how we can work
              together, I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/70 dark:bg-slate-800/50 border-blue-600/20 dark:border-blue-400/20 hover:border-blue-600/40 dark:hover:border-blue-400/40 transition-all duration-300 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-blue-600 dark:text-blue-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-semibold">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-slate-700 dark:text-slate-300">{info.content}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-700 dark:text-white ${social.color} transition-all duration-200 transform hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Card className="bg-white/70 dark:bg-slate-800/50 border-blue-600/20 dark:border-blue-400/20 h-full flex flex-col card-hover">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">Ready to Start a Project?</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">
              Download my resume or send me a message
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 flex-grow flex flex-col">
            <div className="space-y-4">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
                onClick={downloadResume}
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>

              <Button
                variant="outline"
                className="w-full border-blue-600/40 text-blue-600 hover:bg-blue-600/10 dark:border-blue-400/40 dark:text-blue-400 dark:hover:bg-blue-400/10"
                size="lg"
                onClick={() => window.open('mailto:ellurprashanth82@gmail.com')}
              >
                <Mail className="mr-2" size={20} />
                Send Email
              </Button>
            </div>

            <div className="bg-slate-100 dark:bg-slate-700/50 p-6 rounded-lg mt-auto">
              <h4 className="text-slate-900 dark:text-white font-semibold mb-3">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4+</div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6+</div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm">Certifications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm">Internship</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
