import { Code2, Zap, Cloud, Briefcase } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      category: 'SharePoint & Power Platform',
      skills: ['SharePoint Online', 'Office 365', 'Power Automate', 'Power Apps', 'SPFx', 'PowerShell', 'Sharegate'],
    },
    {
      icon: Zap,
      category: 'Web Development',
      skills: ['React JS', 'TypeScript', 'HTML', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      icon: Cloud,
      category: 'Microsoft Technologies',
      skills: ['Azure', 'Azure DevOps', '.NET', 'CSOM', 'JSOM', 'Visual Studio'],
    },
    {
      icon: Briefcase,
      category: 'Project Management',
      skills: ['Agile', 'Scrum (CSPO)', 'Sprint Planning', 'Backlog Prioritization', 'Stakeholder Management'],
    },
  ];

  const softSkills = [
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
                key={category.category}
                className="card hover:border-accent/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card-content">
                  <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-100 mb-4">{category.category}</h3>
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

        {/* Soft Skills */}
        <div className="card hover:border-accent/50">
          <div className="card-content">
            <h3 className="text-2xl font-bold gradient-text mb-6">Soft Skills & Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
