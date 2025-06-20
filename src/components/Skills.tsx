
import { useState } from 'react';
import { Code, Server, Database, Cloud, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: Globe,
      title: 'Frontend',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Angular', level: 90, category: 'Framework' },
        { name: 'React', level: 85, category: 'Framework' },
        { name: 'TypeScript', level: 88, category: 'Language' },
        { name: 'HTML5 & CSS3', level: 92, category: 'Markup' },
        { name: 'Tailwind CSS', level: 85, category: 'Styling' },
        { name: 'JavaScript ES6+', level: 90, category: 'Language' }
      ]
    },
    backend: {
      icon: Server,
      title: 'Backend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java', level: 95, category: 'Language' },
        { name: 'Spring Boot', level: 92, category: 'Framework' },
        { name: 'Python', level: 80, category: 'Language' },
        { name: 'REST APIs', level: 90, category: 'Architecture' },
        { name: 'Microservices', level: 85, category: 'Architecture' },
        { name: 'Node.js', level: 75, category: 'Runtime' }
      ]
    },
    database: {
      icon: Database,
      title: 'Database',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'PostgreSQL', level: 88, category: 'SQL' },
        { name: 'MySQL', level: 85, category: 'SQL' },
        { name: 'MongoDB', level: 78, category: 'NoSQL' },
        { name: 'Redis', level: 75, category: 'Cache' },
        { name: 'Database Design', level: 85, category: 'Architecture' }
      ]
    },
    devops: {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Azure DevOps', level: 82, category: 'Platform' },
        { name: 'Docker', level: 80, category: 'Container' },
        { name: 'Jenkins', level: 85, category: 'CI/CD' },
        { name: 'Git', level: 90, category: 'Version Control' },
        { name: 'Linux', level: 78, category: 'OS' }
      ]
    }
  };

  const languages = [
    { name: 'English', level: 'C1', flag: '🇺🇸' },
    { name: 'German', level: 'A2', flag: '🇩🇪' },
    { name: 'Tamil', level: 'Native', flag: '🇮🇳' }
  ];

  const softSkills = [
    'Problem Solving', 'Team Leadership', 'Agile Methodology', 
    'Communication', 'Project Management', 'Mentoring'
  ];

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          
          {/* Technical Skills */}
          <div className="xl:col-span-3">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(skillCategories).map(([key, category]) => {
                const Icon = category.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`group flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                      activeCategory === key
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{category.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Skills Grid */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                {(() => {
                  const Icon = skillCategories[activeCategory as keyof typeof skillCategories].icon;
                  return <Icon className="mr-3" size={28} />;
                })()}
                {skillCategories[activeCategory as keyof typeof skillCategories].title} Development
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-white font-medium text-lg">{skill.name}</span>
                        <span className="text-gray-400 text-sm ml-2">({skill.category})</span>
                      </div>
                      <span className="text-purple-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-8">
            
            {/* Languages */}
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Globe className="mr-3" size={24} />
                Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="text-white font-medium">{lang.name}</span>
                    </div>
                    <span className="text-purple-400 font-bold text-sm">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Code className="mr-3" size={24} />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-lg text-sm font-medium hover:bg-purple-500/30 transition-colors"
                  >
                    {skill}
                  </span>
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
