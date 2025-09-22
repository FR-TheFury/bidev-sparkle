import { Code, Brain, BarChart3, Smartphone, Shield, Zap } from 'lucide-react';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';

const ServiceCards = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Sites web modernes, performants et sur mesure pour votre présence en ligne.",
      features: ["Sites vitrines", "E-commerce", "Applications web", "Sites responsives"],
      color: "from-blue-500 via-purple-600 to-pink-500",
      highlight: "Sur mesure",
      stats: "Sites performants"
    },
    {
      icon: Smartphone,
      title: "Développement Application",
      description: "Applications mobiles natives et cross-platform pour iOS et Android. Solutions mobiles complètes adaptées à vos besoins.",
      features: ["iOS & Android", "Cross-platform", "UX/UI design", "Maintenance"],
      color: "from-green-500 via-teal-500 to-blue-500",
      highlight: "Multi-plateforme",
      stats: "Apps natives"
    },
    {
      icon: BarChart3,
      title: "Référencement Web",
      description: "Donnez de la visibilité à votre entreprise et mesurez les retombées de vos actions en temps réel. SEO, SEA, netlinking.",
      features: ["SEO naturel Google", "Campagnes SEA", "Netlinking", "Analytics"],
      color: "from-orange-500 via-red-500 to-pink-500",
      highlight: "Visibilité max",
      stats: "Résultats mesurables"
    },
    {
      icon: Brain,
      title: "Solution Complète",
      description: "De la création du nom de domaine au déploiement final. Nous gérons l'intégralité de votre projet web de A à Z.",
      features: ["Nom de domaine", "Hébergement", "Développement", "Déploiement"],
      color: "from-purple-500 via-indigo-500 to-blue-500",
      highlight: "Tout inclus",
      stats: "Service complet"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollAnimationWrapper animation="fade-in">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Nos <span className="gradient-text-primary">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Une expertise complète pour votre réussite digitale, de la conception à la croissance online
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <ScrollAnimationWrapper
                key={service.title}
                animation="slide-up"
                delay={`${index * 300}ms`}
              >
                <div className="relative bg-card border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-elegant hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full -translate-y-6 sm:-translate-y-8 translate-x-6 sm:translate-x-8 group-hover:scale-150 transition-transform duration-700`}></div>
                  
                  {/* Highlight Badge */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-primary/10 text-primary text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                    {service.highlight}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6 relative z-10">
                    <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.color} shadow-primary group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg flex-shrink-0`}>
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="text-xs sm:text-sm text-primary font-medium">
                        {service.stats}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 relative z-10">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8 relative z-10">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center text-xs sm:text-sm bg-background/50 rounded-lg p-2.5 sm:p-3 border border-border/50 hover:border-primary/20 transition-colors"
                      >
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-primary to-secondary mr-2.5 sm:mr-3 flex-shrink-0"></div>
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] relative z-10 text-sm sm:text-base">
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
          <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, label: "Sécurité" },
              { icon: Zap, label: "Performance" },
              { icon: Brain, label: "Innovation" },
              { icon: Code, label: "Qualité" },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={item.label}
                  className="text-center p-4 sm:p-6 rounded-xl bg-card/50 hover:bg-card transition-all duration-300 hover:-translate-y-1"
                >
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">{item.label}</p>
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