
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="/lovable-uploads/a0c9da35-fff3-4d6d-8797-a654909b8bd1.png"
              alt="Vidhula Kripali Ganesh Babu"
              className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-white hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Vidhula Kripali
            <span className="block text-3xl md:text-4xl text-blue-600 mt-2">
              Ganesh Babu
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Full Stack Developer with 3+ years of enterprise experience building scalable applications
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Master's student in Applied Computer Science specializing in Java, Spring Boot, Angular, Python, and cloud technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="mailto:gvidhulakripali@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/vidhula-kripali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/vidhula-kripali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
