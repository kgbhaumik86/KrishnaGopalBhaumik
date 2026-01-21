import { ArrowRight, Github, Linkedin, Mail, Phone, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="about" className="section pt-40 pb-20 min-h-screen flex items-center justify-center">
      <div className="section-container w-full">
        <div className="text-center md:text-left animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6 backdrop-blur-xs">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Welcome to my portfolio</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Krishna Gopal
            <span className="block gradient-text">Bhaumik</span>
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            Technical Manager | SharePoint & Power Platform Specialist
          </p>

          <p className="text-lg text-gray-400 mb-2">
            15+ years | CSPO Certified | Agile Leadership | Digital Transformation
          </p>

          <p className="text-gray-300 max-w-3xl mb-10 leading-relaxed text-lg">
            Results-driven Technical Manager with deep expertise in SharePoint Online, Power Platform, and Microsoft 365,
            combining hands-on architecture with strong people and delivery leadership. Proven ability to lead cross-functional
            teams, drive solution design using SPFx (React, TypeScript), Power Automate, and Power Apps, and align technology
            with business goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Get In Touch <ArrowRight size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-bhaumik"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              View Profile
            </a>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 w-full max-w-2xl">
            <a
              href="tel:+919836952545"
              className="card hover:border-accent/50 group"
            >
              <div className="card-content flex items-center gap-3">
                <Phone size={20} className="text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="text-left min-w-0">
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="font-medium text-gray-200">+91 9836952545</p>
                </div>
              </div>
            </a>
            <a
              href="mailto:bhaumikg1986@gmail.com"
              className="card hover:border-accent/50 group"
            >
              <div className="card-content flex items-center gap-3">
                <Mail size={20} className="text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="text-left min-w-0">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-medium text-gray-200 break-all">bhaumikg1986@gmail.com</p>
                </div>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/krishna-bhaumik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent/10 border border-accent/30 rounded-xl text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/kgbhaumik86"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent/10 border border-accent/30 rounded-xl text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
