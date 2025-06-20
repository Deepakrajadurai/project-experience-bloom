
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Applied Computer Science',
      institution: 'Schmalkalden University of Applied Sciences, Germany',
      period: '2024 - present',
      location: 'Germany',
      description: 'Pursuing advanced studies in computer science with focus on software engineering, AI, and system architecture.',
      current: true
    },
    {
      degree: 'B.E. in Electronics and Communication',
      institution: 'Vemana Institute of Technology, aff. to VTU, India',
      period: '2016 - 2020',
      location: 'India',
      grade: 'CGPA: 8/10',
      description: 'Comprehensive study of electronics and communication systems with strong foundation in programming and system design.',
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-4 top-16 w-0.5 h-full bg-blue-200 hidden md:block"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center hidden md:flex ${
                    edu.current ? 'bg-blue-600' : 'bg-gray-400'
                  }`}>
                    <GraduationCap size={16} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow ${
                  edu.current ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                }`}>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                        {edu.current && (
                          <span className="ml-3 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                            Current
                          </span>
                        )}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold mb-3">{edu.institution}</p>
                      {edu.grade && (
                        <p className="text-gray-700 font-medium mb-2">{edu.grade}</p>
                      )}
                    </div>
                    <div className="flex flex-col lg:text-right text-gray-500 text-sm mt-4 lg:mt-0">
                      <div className="flex items-center lg:justify-end mb-1">
                        <Calendar size={16} className="mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <MapPin size={16} className="mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
