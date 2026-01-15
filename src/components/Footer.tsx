import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/krishna-bhaumik',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/kgbhaumik86',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:bhaumikg1986@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-primary border-t border-accent/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">KB</h3>
            <p className="text-gray-400 text-sm">
              Technical Manager | SharePoint & Power Platform Specialist
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-100 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-100 mb-4">More</h4>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-100 mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-accent/10 border border-accent/30 rounded-lg text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-accent/10 pt-8 text-center text-gray-500 text-sm space-y-2">
          <div className="flex items-center justify-center gap-2">
            <p>© {currentYear} Krishna Gopal Bhaumik. All rights reserved.</p>
          </div>
          <p className="flex items-center justify-center gap-1">
            Designed & Developed with <Heart size={14} className="text-accent" /> using React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
