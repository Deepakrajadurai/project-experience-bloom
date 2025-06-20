
const Skills = () => {
  const techSkills = [
    { name: 'Java Full Stack', level: 95 },
    { name: 'Angular | React', level: 90 },
    { name: 'Spring Boot | REST APIs', level: 95 },
    { name: 'HTML5, CSS3 & JavaScript', level: 90 },
    { name: 'SQL & Databases', level: 85 },
    { name: 'Python Programming', level: 80 },
    { name: 'Microservices', level: 85 },
    { name: 'Cloud & Azure DevOps', level: 80 },
    { name: 'Git | CI/CD | Jenkins', level: 85 },
    { name: 'Agile Methodology', level: 90 },
    { name: 'Selenium | Testing & QA', level: 80 },
  ];

  const softSkills = [
    'Software Architecture',
    'Problem Solving',
    'Team Collaboration',
    'Time Management',
    'Leadership',
    'Communication',
  ];

  const languages = [
    { name: 'English', level: 'C1' },
    { name: 'German', level: 'A2' },
    { name: 'Tamil', level: 'Fluent' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {techSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Soft Skills</h3>
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">{lang.name}</span>
                      <span className="text-blue-600 font-medium">{lang.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
