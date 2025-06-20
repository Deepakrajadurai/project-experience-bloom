
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+49 15510 389443',
      href: 'tel:+4915510389443'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'gvidhulakripali@gmail.com',
      href: 'mailto:gvidhulakripali@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Schmalkalden, Germany',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vidhula-kripali',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/vidhula-kripali',
      color: 'hover:text-gray-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Connect</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <a 
                      href={item.href}
                      className="flex items-center group"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                        <item.icon size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                        <p className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Work Together?</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm currently pursuing my Master's degree in Germany and am open to internship opportunities, 
              freelance projects, and full-time positions. Let's discuss how we can create something amazing together!
            </p>
            
            <div className="space-y-4">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                onClick={() => window.open('mailto:gvidhulakripali@gmail.com')}
              >
                <Mail size={20} className="mr-2" />
                Send me an Email
              </Button>
              
              <Button 
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3"
                onClick={() => window.open('https://linkedin.com/in/vidhula-kripali', '_blank')}
              >
                <Linkedin size={20} className="mr-2" />
                Connect on LinkedIn
              </Button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Currently Available:</strong> Open for internships and part-time opportunities while completing my Master's degree
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2024 Vidhula Kripali Ganesh Babu. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
