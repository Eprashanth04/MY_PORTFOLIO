
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const About = () => {
  const resumeHref = '/resume.png';
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Final-year B.Tech student specializing in Internet of Things with strong full stack development experience
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="prose prose-invert">
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              I'm a final-year B.Tech student specializing in the Internet of Things, with strong experience in full stack development, web technologies, and a growing passion for AI/ML. I actively build real-world projects and participate in coding contests.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              My expertise spans across the full stack, from crafting intuitive user interfaces with React and modern web technologies to building robust backend systems with Node.js and MongoDB. I've had the privilege of working as a Web Development Intern at Tech Octanet, where I've honed my skills in responsive design, user authentication, and modern development practices.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              I'm passionate about building impactful projects using Java, MERN Stack, and AI/ML technologies. My goal is to apply technical and problem-solving skills in real-world environments while contributing to innovation and continuous learning through collaboration.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
              <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Location</h4>
              <p className="text-slate-700 dark:text-slate-300">Jeedimetla, Telangana</p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
              <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Experience</h4>
              <p className="text-slate-700 dark:text-slate-300">Web Development Intern</p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
              <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Phone</h4>
              <p className="text-slate-700 dark:text-slate-300">+91 9632433442</p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
              <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Email</h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm">ellurprashanth82@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Card className="bg-slate-800/50 border-blue-400/20 overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">Professional Resume</h3>
                <p className="text-slate-400">Complete technical background and experience</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-white rounded-lg p-4 shadow-lg cursor-zoom-in">
                    <img 
                      src={resumeHref}
                      alt="E Sai Prashanth Resume" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-0 border-none bg-transparent shadow-none">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src={resumeHref}
                      alt="E Sai Prashanth Resume Large Preview" 
                      className="w-full h-auto"
                    />
                    <div className="flex justify-end gap-2 p-4 bg-slate-100">
                      <a href={resumeHref} download>
                        <Button size="sm" variant="secondary">Download</Button>
                      </a>
                      <a href={resumeHref} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Open in new tab</Button>
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
