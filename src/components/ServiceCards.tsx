import { Globe, BarChart3, Code, Smartphone } from 'lucide-react';

const ServiceCards = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Sites web modernes, applications web sur mesure et e-commerce performants avec les dernières technologies",
      features: ["React & Next.js", "Node.js & Express", "Bases de données", "API REST & GraphQL"],
      color: "from-primary to-secondary",
    },
    {
      icon: BarChart3,
      title: "Intelligence d'Affaires",
      description: "Analysez vos données, optimisez vos processus et prenez des décisions éclairées grâce à nos solutions BI",
      features: ["Tableaux de bord", "Analyse de données", "Rapports personnalisés", "KPI & Métriques"],
      color: "from-secondary to-accent",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="gradient-text-primary">Spécialités</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deux domaines d'expertise complémentaires pour transformer votre vision en réalité digitale
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={service.title}
                className="card-service group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon & Title */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-primary group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text-primary transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 px-6 rounded-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium group-hover:border-primary/50">
                  Découvrir nos solutions
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Services Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Globe, label: "Sites vitrines" },
            { icon: Smartphone, label: "Applications mobiles" },
            { icon: BarChart3, label: "Tableaux de bord" },
            { icon: Code, label: "Solutions sur mesure" },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.label}
                className="text-center p-6 rounded-xl bg-card/50 hover:bg-card transition-all duration-300 hover:-translate-y-1"
              >
                <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;