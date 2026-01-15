import { Zap, TrendingUp, Star, Rocket } from 'lucide-react';

export const About = () => {
  const achievements = [
    {
      icon: Zap,
      title: '25% Efficiency',
      description: 'Improved process efficiency through workflow automation',
    },
    {
      icon: TrendingUp,
      title: '30% Adoption',
      description: 'Enhanced SharePoint solutions boosting user adoption',
    },
    {
      icon: Star,
      title: '95% Satisfaction',
      description: 'Consistently achieving high client satisfaction ratings',
    },
    {
      icon: Rocket,
      title: '20+ Power Apps',
      description: 'Developed and deployed 20+ Power Platform applications',
    },
  ];

  return (
    <section id="about" className="section bg-secondary/30 backdrop-blur-sm">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              With 15+ years of experience in the technology industry, I've successfully led digital transformation
              initiatives across multiple organizations. My expertise spans SharePoint Online, Power Platform,
              Microsoft 365, and modern web development.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              As a Certified Scrum Product Owner (CSPO), I excel at bridging the gap between technical teams and
              business stakeholders, ensuring that technology solutions directly contribute to business objectives.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              I'm passionate about automating workflows, improving user experiences, and building scalable solutions
              that drive business value. Throughout my career, I've consistently delivered results with a 95% client
              satisfaction rate.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="card group hover:border-accent/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="card-content">
                    <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-all">
                      <Icon className="text-accent group-hover:scale-110 transition-transform" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-100 mb-2">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
