
import { Code, Database, Cloud, Users, Award, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      value: '3+',
      label: 'Years Experience',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      value: '10+',
      label: 'Technologies',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cloud,
      value: 'Enterprise',
      label: 'Solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      value: 'Global',
      label: 'Clients',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const expertise = [
    {
      icon: Award,
      title: 'Enterprise Development',
      description: 'Delivered scalable solutions for Fortune 500 companies including Caterpillar and Optum'
    },
    {
      icon: Target,
      title: 'Full-Stack Architecture',
      description: 'Expert in designing and implementing complete web applications from database to UI'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Proficient in cloud technologies, CI/CD pipelines, and modern deployment strategies'
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-8 hover-glow">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a <span className="gradient-text font-semibold">Master's student in Applied Computer Science</span> in Germany with over 
                <span className="text-purple-400 font-semibold"> 3+ years of professional experience</span> as a Full Stack Developer. 
                My journey in technology has been driven by a passion for creating scalable, efficient solutions that solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At <span className="text-blue-400 font-semibold">Cognizant Technology Solutions</span>, I delivered enterprise solutions for major clients 
                like <span className="text-green-400 font-semibold">Caterpillar and Optum</span>, specializing in full-stack architecture, DevOps, and Agile 
                methodologies. My expertise spans across Java, Spring Boot, Angular, Python, and cloud technologies.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about <span className="gradient-text font-semibold">clean code, continuous learning</span>, and staying at the forefront of 
                technology trends while delivering exceptional user experiences.
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="space-y-4">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="glass-effect rounded-xl p-6 hover-glow card-hover">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="glass-effect rounded-2xl p-8 text-center hover-glow card-hover">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-4`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
