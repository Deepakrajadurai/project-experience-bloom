
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Retrieval Augmented Generation (RAG)',
      description: 'Built a RAG system using LLaMA for efficient AI-driven knowledge retrieval, implementing advanced natural language processing techniques.',
      technologies: ['Python', 'LLaMA', 'NLP', 'AI/ML'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Detection and Prevention of Wormhole Attack in MANETs',
      description: 'Designed a wormhole attack detection algorithm in MANETs using NS2 to enhance security protocols and network reliability.',
      technologies: ['Network Security', 'NS2', 'Algorithm Design', 'MANETs'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Enterprise Dashboard - Optum Eureka',
      description: 'Redesigned and developed a comprehensive dashboard for Optum using Angular, focusing on user experience and performance optimization.',
      technologies: ['Angular', 'TypeScript', 'REST APIs', 'UI/UX'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Intranet Management System - Caterpillar',
      description: 'Developed scalable intranet applications using Java Spring Boot and Angular for enhanced system efficiency and user experience.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${project.featured ? 'border-blue-200 bg-blue-50/30' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2 text-gray-900">
                      {project.title}
                      {project.featured && (
                        <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                          Featured
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex items-center bg-blue-600 hover:bg-blue-700">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
