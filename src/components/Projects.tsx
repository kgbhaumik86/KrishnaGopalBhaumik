import { ExternalLink, Zap, CheckCircle } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'SPFx Solutions Development',
      client: 'Volvo Cars',
      tech: ['SPFx', 'React JS', 'TypeScript', 'Power Automate', 'Azure DevOps'],
      description: 'Developed custom SPFx solutions for SharePoint Online with robust architecture and scalability.',
      achievements: ['Boosted user adoption by 30%', 'Enhanced data visualization', 'Led team development'],
    },
    {
      title: 'Power Platform Automation',
      client: 'Bank of Baroda',
      tech: ['Power Automate', 'Power Apps', 'Azure', 'PowerShell'],
      description: 'Developed and implemented 10+ automated workflows to streamline business processes.',
      achievements: ['Improved process efficiency by 25%', '90% client approval rating', 'Reduced manual effort by 40%'],
    },
    {
      title: 'SharePoint Online Migration',
      client: 'Sony',
      tech: ['SharePoint Online', 'PowerShell', 'Sharegate', 'Azure'],
      description: 'Led team of 4 in migrating 230+ SharePoint 2013 sites to SharePoint Online.',
      achievements: ['Ensured smooth transitions', 'Minimal downtime', 'Coordinated with stakeholders'],
    },
    {
      title: 'InfoPath to PowerApps Conversion',
      client: 'United Airlines',
      tech: ['Power Apps', 'Power Automate', 'SharePoint Online'],
      description: 'Converted 100+ InfoPath forms to PowerApps for enhanced user experience.',
      achievements: ['Improved efficiency by 30%', 'Better mobile support', 'Reduced maintenance'],
    },
  ];

  const notableClients = ['Edison International', 'Indian Navy', 'Sony', 'Volvo Cars', 'United Airlines'];

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <h2 className="section-title">Project Highlights</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card hover:border-accent/50 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-content">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Zap size={16} className="text-accent" />
                      <p className="text-accent text-sm font-semibold">{project.client}</p>
                    </div>
                  </div>
                  <ExternalLink
                    size={20}
                    className="text-gray-500 group-hover:text-accent transition-colors flex-shrink-0"
                  />
                </div>

                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-accent/10 text-xs text-accent border border-accent/30 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 border-t border-accent/10 pt-4">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-2 text-gray-300 text-sm">
                      <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notable Clients */}
        <div className="card bg-gradient-to-r from-accent/5 to-purple-500/5 border-accent/20">
          <div className="card-content">
            <h3 className="text-2xl font-bold gradient-text mb-6">Trusted by Industry Leaders</h3>
            <div className="flex flex-wrap gap-4">
              {notableClients.map((client) => (
                <div key={client} className="flex items-center gap-3 px-4 py-2 bg-primary/50 rounded-lg border border-accent/20">
                  <span className="w-2.5 h-2.5 bg-accent rounded-full"></span>
                  <span className="text-gray-300 font-medium">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
