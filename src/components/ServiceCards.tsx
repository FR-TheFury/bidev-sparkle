import { Code, Brain, BarChart3, Smartphone, Shield, Zap, Users } from 'lucide-react';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';

const ServiceCards = () => {
  const services = [
    {
      icon: Code,
      title: "🌐 Création de sites internet sur mesure",
      description: "Nous réalisons des sites internet modernes, performants et entièrement personnalisés, adaptés à votre secteur et à vos objectifs. Qu'il s'agisse d'un site vitrine, d'un e-commerce ou d'une plateforme professionnelle.",
      features: ["Conception 100% personnalisée (aucun modèle générique)", "Optimisation SEO dès la création", "Sites rapides, sécurisés et évolutifs", "Intégration aux outils de gestion (CRM, ERP, paiement)"],
      color: "from-blue-500 via-purple-600 to-pink-500",
      highlight: "100% Sur mesure",
      stats: "Sites uniques"
    },
    {
      icon: Brain,
      title: "💻 Développement web sur mesure",
      description: "Parce que chaque entreprise est unique, nous concevons des outils digitaux adaptés à vos processus et métiers. De la mise en place d'un ERP personnalisé à la création de plateformes collaboratives.",
      features: ["ERP et logiciels de gestion (commandes, stock, logistique, RH)", "Outils métiers spécifiques à votre secteur", "Tableaux de bord et reporting temps réel (BI, Power BI)", "Connecteurs et API pour relier vos outils existants"],
      color: "from-purple-500 via-indigo-500 to-blue-500",
      highlight: "Solutions métier",
      stats: "Outils évolutifs"
    },
    {
      icon: Smartphone,
      title: "📱 Développement d'applications mobiles",
      description: "Nous vous accompagnons dans la conception d'applications mobiles iOS & Android intuitives et performantes, pensées pour améliorer vos services et créer une proximité renforcée avec vos clients.",
      features: ["Design ergonomique et moderne", "Expérience utilisateur fluide et adaptée", "Intégration de fonctionnalités avancées (notifications, géolocalisation, paiement)", "Développement natif ou hybride selon vos besoins"],
      color: "from-green-500 via-teal-500 to-blue-500",
      highlight: "iOS & Android",
      stats: "Apps performantes"
    },
    {
      icon: Users,
      title: "🤝 Accompagnement & Support",
      description: "Chez BI Développement, nous croyons qu'un projet réussi repose sur une collaboration étroite et transparente. Chaque solution est testée pour garantir performance, rapidité, sécurité et fiabilité.",
      features: ["Écoute & analyse : compréhension de vos besoins", "Conception & prototypage avec validation", "Développement & contrôle qualité rigoureux", "Accompagnement & support continu"],
      color: "from-orange-500 via-red-500 to-pink-500",
      highlight: "Suivi 24/7",
      stats: "Support durable"
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
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-4 sm:px-0">
              🎯 <strong>Pourquoi choisir BI Développement ?</strong>
              <br />Une structure agile et réactive, un service 100% sur mesure, une expertise complète et un accompagnement durable.
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
                  <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 bg-primary/10 text-primary text-xs font-semibold px-2 sm:px-3 py-1 rounded-full z-10">
                    {service.highlight}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6 relative z-10 pr-16 sm:pr-20">
                    <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.color} shadow-primary group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg flex-shrink-0`}>
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
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