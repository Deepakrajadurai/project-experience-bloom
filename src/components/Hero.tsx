
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 animate-float">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1 animate-pulse-slow">
                <div className="bg-slate-900 rounded-full p-1">
                  <img
                    src="/lovable-uploads/a0c9da35-fff3-4d6d-8797-a654909b8bd1.png"
                    alt="Vidhula Kripali Ganesh Babu"
                    className="w-40 h-40 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow">
              <span className="gradient-text">Vidhula Kripali</span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-300">Ganesh Babu</span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="text-yellow-400 animate-pulse" size={20} />
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Full Stack Developer & Software Engineer
              </p>
              <Sparkles className="text-yellow-400 animate-pulse" size={20} />
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master's student in Applied Computer Science with 3+ years of enterprise experience 
            building scalable applications using Java, Spring Boot, Angular, Python, and cloud technologies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover-glow transition-all duration-300"
            >
              <FolderOpen size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
              View My Work
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="group glass-effect border-2 border-purple-500/50 text-white hover:bg-purple-500/20 px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>

            <Button 
              variant="outline"
              className="group glass-effect border-2 border-pink-500/50 text-white hover:bg-pink-500/20 px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              <Download size={20} className="mr-2 group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a 
              href="mailto:gvidhulakripali@gmail.com"
              className="group p-4 glass-effect rounded-xl hover-glow transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/vidhula-kripali"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 glass-effect rounded-xl hover-glow transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>
            <a 
              href="https://github.com/vidhula-kripali"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 glass-effect rounded-xl hover-glow transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-gray-300 group-hover:text-purple-400 transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="group animate-bounce hover:animate-none"
          >
            <div className="p-3 glass-effect rounded-full hover-glow transition-all duration-300 group-hover:scale-110">
              <ArrowDown size={24} className="text-purple-400 group-hover:text-white transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
