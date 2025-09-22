import { Code, Brain, BarChart3, Smartphone, Shield, Zap } from 'lucide-react';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';

const ServiceCards = () => {
  const services = [
    {
      icon: Code,
      title: "Motion Design",
      description: "Donnez vie à vos idées avec des messages percutants et rythmés. Faites passer un maximum de messages clefs en un minimum de temps auprès du plus grand nombre de clients potentiels.",
      features: ["Messages clefs efficaces", "Augmentation viralité", "Bouche à oreille 2.0", "63% de partage vidéo"],
      color: "from-blue-500 via-purple-600 to-pink-500",
      highlight: "63% partage vidéo",
      stats: "Impact garanti"
    },
    {
      icon: Brain,
      title: "Le Concept",
      description: "Une agence de communication digitale qui fait bien plus que créer un site internet. Accompagnement global dans l'élaboration de votre communication.",
      features: ["Introspection entreprise", "Communication globale", "Génération croissance", "Toutes tailles d'entreprises"],
      color: "from-purple-500 via-pink-500 to-red-500",
      highlight: "Communication globale",
      stats: "Accompagnement complet"
    },
    {
      icon: BarChart3,
      title: "Référencement WEB",
      description: "Donnez de la visibilité à votre entreprise et mesurez les retombées de vos actions en temps réel. SEO, SEA, netlinking.",
      features: ["SEO naturel Google", "Campagnes SEA", "Netlinking", "Mesure temps réel"],
      color: "from-green-500 via-teal-500 to-blue-500",
      highlight: "Visibilité maximale",
      stats: "Résultats mesurables"
    },
    {
      icon: Smartphone,
      title: "Identité Graphique",
      description: "Proximité et temps consacré à la compréhension de votre projet pour retranscrire les messages qui toucheront vos clients potentiels.",
      features: ["Design professionnel", "Messages authentiques", "Équipe spécialisée", "Proximité client"],
      color: "from-orange-500 via-red-500 to-pink-500",
      highlight: "Design authentique",
      stats: "Messages impactants"
    }
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
              Nos <span className="gradient-text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une expertise complète pour votre réussite digitale, de la conception à la croissance online
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
              { icon: Shield, label: "Accompagnement" },
              { icon: Zap, label: "Croissance rapide" },
              { icon: Brain, label: "Stratégie digitale" },
              { icon: Code, label: "Développement" },
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