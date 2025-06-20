
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a Master's student in Applied Computer Science in Germany with over 3+ years of 
              professional experience as a Full Stack Developer. My journey in technology has been 
              driven by a passion for creating scalable, efficient solutions that solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Cognizant Technology Solutions, I delivered enterprise solutions for major clients 
              like Caterpillar and Optum, specializing in full-stack architecture, DevOps, and Agile 
              methodologies. My expertise spans across Java, Spring Boot, Angular, Python, and cloud 
              technologies.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I'm skilled in full-stack architecture, DevOps, and Agile methodologies with strong 
              problem-solving abilities, team collaboration skills, and UI/UX optimization expertise. 
              I have a passion for clean code, continuous learning, and staying at the forefront of 
              technology trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-700">Technologies</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">Enterprise</div>
              <div className="text-gray-700">Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
