import { Code2, Zap, Cloud, Briefcase } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: Briefcase,
      title: 'Leadership & Management',
      skills: [
        'Technical Leadership',
        'Agile / Scrum (CSPO)',
        'Product Ownership',
        'Roadmapping',
        'Sprint Planning',
        'Backlog Prioritization',
        'Stakeholder Management',
        'Team Mentoring',
      ],
    },
    {
      icon: Cloud,
      title: 'Microsoft 365 & Power Platform',
      skills: [
        'SharePoint Online',
        'Office 365',
        'Power Platform',
        'Power Apps',
        'Power Automate',
        'Governance & Adoption',
        'Automation',
      ],
    },
    {
      icon: Code2,
      title: 'Development & Customization',
      skills: [
        'SPFx',
        'React JS',
        'TypeScript',
        'JavaScript',
        'HTML',
        'Bootstrap',
        'PowerShell Scripting',
        'CSOM / JSOM',
        '.NET',
        'REST APIs',
      ],
    },
    {
      icon: Zap,
      title: 'DevOps, Cloud & Tools',
      skills: [
        'Azure',
        'Azure DevOps',
        'Git / GitHub',
        'CI/CD',
        'Visual Studio',
        'Sharegate',
        'SharePoint Migration',
        'SP2010 → M365',
      ],
    },
  ];

  const professionalStrengths = [
    'Project Management',
    'Decision Making',
    'Collaboration',
    'Communication',
    'Multi-tasking',
    'Fast Learner',
    'Team Player',
    'Creative',
    'Flexible',
  ];

  return (
    <section id="skills" className="section">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="card hover:border-accent/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card-content">
                  <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-100 mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Strengths */}
        <div className="card hover:border-accent/50">
          <div className="card-content">
            <h3 className="text-2xl font-bold gradient-text mb-6">Professional Strengths</h3>
            <div className="flex flex-wrap gap-3">
              {professionalStrengths.map((strength) => (
                <span key={strength} className="skill-badge">
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
