
const About = () => {

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

      <div className="max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-center">
            I'm a final-year B.Tech student specializing in the Internet of Things, with strong experience in full stack development, web technologies, and a growing passion for AI/ML. I actively build real-world projects and participate in coding contests.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-center mt-4">
            My expertise spans across the full stack, from crafting intuitive user interfaces with React and modern web technologies to building robust backend systems with Node.js and MongoDB. I've had the privilege of working as a Web Development Intern at Tech Octanet, where I've honed my skills in responsive design, user authentication, and modern development practices.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-center mt-4">
            I'm passionate about building impactful projects using Java, MERN Stack, and AI/ML technologies. My goal is to apply technical and problem-solving skills in real-world environments while contributing to innovation and continuous learning through collaboration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Location</h4>
            <p className="text-slate-700 dark:text-slate-300">Jeedimetla, Telangana</p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Experience</h4>
            <p className="text-slate-700 dark:text-slate-300">Web Development Intern</p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Phone</h4>
            <p className="text-slate-700 dark:text-slate-300">+91 9632433442</p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Email</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm">ellurprashanth82@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
