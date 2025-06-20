
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Cognizant Technology Solutions, India',
      period: 'Feb 2021 - Aug 2024',
      location: 'India',
      achievements: [
        'Developed and redesigned the Optum Eureka dashboard using Angular, enhancing functionality and user experience',
        'Implemented cross-device optimizing design elements for better accessibility and performance',
        'Collaborated with cross-functional teams to implement scalable and efficient front-end solutions'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Caterpillar Inc.',
      period: 'Mar 2022 - Dec 2023',
      location: 'India',
      achievements: [
        'Developed and maintained intranet applications using Java, Spring Boot, and Angular, enhancing system efficiency and user experience',
        'Contributed to service request management systems, optimizing workflows and improving user satisfaction',
        'Applied Agile methodologies for iterative development and delivery',
        'Worked on frontend and backend integration ensuring seamless functionality and scalability for enterprise applications'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-slate-900/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-16 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center hidden md:flex shadow-lg">
                    <Building size={16} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-effect rounded-xl p-8 card-hover">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-lg text-purple-400 font-semibold mb-2">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:text-right text-gray-300 text-sm">
                      <div className="flex items-center sm:justify-end mb-1">
                        <Calendar size={16} className="mr-2 text-blue-400" />
                        {exp.period}
                      </div>
                      <div className="flex items-center sm:justify-end">
                        <MapPin size={16} className="mr-2 text-purple-400" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
