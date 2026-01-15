import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      position: 'Technical Manager',
      company: 'HCL Tech',
      location: 'Bangalore, India',
      duration: '09/2021 - PRESENT',
      highlights: [
        'Managed discussions with business stakeholders and global delivery teams',
        'Led multiple Agile projects as CSPO, defining product vision and prioritizing backlogs',
        'Developed custom SPFx solutions using React JS, TypeScript, and Power Platform',
        'Increased efficiency by 25% through Power Automate workflows',
        'Enhanced SharePoint solutions, boosting adoption by 30%',
        'Developed 20+ Power Platform apps with 90% client approval rating',
      ],
    },
    {
      position: 'Senior System Analyst',
      company: 'IBM',
      location: 'Bangalore, India',
      duration: '05/2021 - 09/2021',
      highlights: [
        'Created 7+ SharePoint Online web parts using SPFx with React and TypeScript',
        'Improved user experience and data visualization with Power BI by 30%',
        'Led a team of 4 to ensure 100% on-time project completion',
      ],
    },
    {
      position: 'Senior Project Engineer',
      company: 'Wipro Technologies',
      location: 'Bangalore, India',
      duration: '06/2019 - 05/2021',
      highlights: [
        'Migrated 230+ SharePoint 2013 sites to SharePoint Online',
        'Automated user communication with PowerShell, reducing manual efforts by 40%',
        'Converted 100+ InfoPath forms to PowerApps, enhancing efficiency by 30%',
      ],
    },
    {
      position: 'Technology Analyst',
      company: 'Infosys',
      location: 'Bhubaneshwar, India',
      duration: '09/2015 - 06/2019',
      highlights: [
        'Managed SharePoint portal for 500+ employees',
        'Enhanced reliability by 30% through proactive management',
        'Mentored new team members and improved client communication',
      ],
    },
  ];

  return (
    <section id="experience" className="section bg-secondary/30 backdrop-blur-sm">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card hover:border-accent/50 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-content">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all">
                      <Briefcase className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-100">{exp.position}</h3>
                      <p className="text-accent font-semibold mt-1">{exp.company}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-accent" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-accent" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <ChevronRight size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
