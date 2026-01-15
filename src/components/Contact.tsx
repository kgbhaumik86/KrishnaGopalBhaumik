import { Mail, Phone, Linkedin, MapPin, GraduationCap, Send } from 'lucide-react';

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'bhaumikg1986@gmail.com',
      link: 'mailto:bhaumikg1986@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9836952545',
      link: 'tel:+919836952545',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Krishna Bhaumik',
      link: 'https://www.linkedin.com/in/krishna-bhaumik',
      color: 'from-blue-400 to-blue-600',
    },
  ];

  return (
    <section id="contact" className="section bg-secondary/30 backdrop-blur-sm">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const isExternal = method.link.startsWith('http');

            return (
              <a
                key={index}
                href={method.link}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="card hover:border-accent/50 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card-content">
                  <div className={`mb-4 p-4 bg-gradient-to-br ${method.color} rounded-lg w-fit`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-gray-100 text-lg">{method.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{method.value}</p>
                  <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                    {isExternal ? 'Visit' : 'Contact'} <Send size={14} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="card hover:border-accent/50 group">
            <div className="card-content">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-100">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-100">Bachelor of Technology</p>
                <p className="text-gray-400 text-sm">Computer Science Engineering</p>
                <p className="text-gray-500 text-sm mt-3">Seacom Engineering College, Kolkata</p>
                <p className="text-gray-500 text-sm">Graduated: August 2010</p>
              </div>
            </div>
          </div>

          <div className="card hover:border-accent/50 group">
            <div className="card-content">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-100">Location</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300 font-medium">Bangalore, India</p>
                <p className="text-gray-400 text-sm">
                  Open to remote opportunities and collaboration with global teams
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="card bg-gradient-to-r from-accent/10 via-purple-500/10 to-accent/10 border-accent/30 hover:border-accent/50">
          <div className="card-content text-center space-y-6">
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-3">Let's Collaborate</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                I'm always excited to discuss new projects, opportunities, and innovative solutions. Let's connect
                and explore how we can work together to achieve great results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:bhaumikg1986@gmail.com" className="btn-primary inline-flex items-center justify-center gap-2">
                Send Email <Send size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-bhaumik"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
