import { Globe, BarChart3, Code, Smartphone } from 'lucide-react';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';

const ServiceCards = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Sites web modernes, applications web sur mesure et e-commerce performants avec les dernières technologies React, Vue.js et Node.js",
      features: ["Sites vitrines premium", "E-commerce avancé", "Applications web sur mesure", "Optimisation SEO"],
      color: "from-primary via-primary-glow to-secondary",
      highlight: "Solutions sur mesure",
      stats: "50+ projets réalisés"
    },
    {
      icon: BarChart3,
      title: "Intelligence d'Affaires",
      description: "Transformez vos données en insights stratégiques avec nos solutions BI avancées et tableaux de bord interactifs",
      features: ["Dashboards interactifs", "Analyse prédictive", "Rapports automatisés", "KPI en temps réel"],
      color: "from-secondary via-accent to-primary",
      highlight: "Données en temps réel",
      stats: "99.9% de disponibilité"
    },
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollAnimationWrapper animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="gradient-text-primary">Spécialités</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deux domaines d'expertise complémentaires pour transformer votre vision en réalité digitale
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <ScrollAnimationWrapper
                key={service.title}
                animation="slide-up"
                delay={`${index * 300}ms`}
              >
                <div className="relative bg-card border border-border rounded-3xl p-8 shadow-elegant hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700`}></div>
                  
                  {/* Highlight Badge */}
                  <div className="absolute top-6 right-6 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {service.highlight}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start space-x-4 mb-6 relative z-10">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-primary group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="text-sm text-primary font-medium">
                        {service.stats}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 relative z-10">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 gap-4 mb-8 relative z-10">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center text-sm bg-background/50 rounded-lg p-3 border border-border/50 hover:border-primary/20 transition-colors"
                      >
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary mr-3 flex-shrink-0"></div>
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] relative z-10">
                    Découvrir nos solutions
                    <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </ScrollAnimationWrapper>
            );
          })}
        </div>

        {/* Additional Services Preview */}
        <ScrollAnimationWrapper animation="fade-in" delay="600ms">
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
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default ServiceCards;