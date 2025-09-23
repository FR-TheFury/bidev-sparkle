import { Shield, Zap, Users, Award, CheckCircle } from 'lucide-react';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';

const AboutSection = () => {
  const strengths = [
    {
      icon: Shield,
      title: "Sécurité Avancée",
      description: "Protection maximale de vos données avec les dernières technologies de sécurité",
      features: ["Chiffrement SSL", "Sauvegardes automatiques", "Monitoring continu"]
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Sites ultra-rapides optimisés pour une expérience utilisateur exceptionnelle",
      features: ["Temps de chargement < 2s", "CDN mondial", "Optimisation mobile"]
    },
    {
      icon: Users,
      title: "Accompagnement Expert",
      description: "Équipe dédiée d'experts disponible pour vous accompagner",
      features: ["Proximité client", "Formation incluse", "Maintenance proactive"]
    },
    {
      icon: Award,
      title: "Qualité Certifiée",
      description: "Standards de qualité élevés respectant les meilleures pratiques",
      features: ["Code certifié", "Tests rigoureux", "Garantie qualité"]
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollAnimationWrapper animation="fade-in">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              🚀 BI Développement
              <span className="block gradient-text-accent">Votre partenaire digital sur mesure</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Chez BI Développement, nous concevons et développons des solutions digitales performantes, 
              pensées pour répondre à vos besoins spécifiques et accompagner durablement la croissance de votre entreprise.
            </p>
            <div className="mt-6 p-4 sm:p-6 bg-primary/5 rounded-xl border border-primary/10 max-w-4xl mx-auto">
              <p className="text-sm sm:text-base text-foreground">
                Notre approche repose sur une écoute attentive, une compréhension fine de vos enjeux et un accompagnement de chaque instant, de la conception à la mise en production.
                <br /><br />
                👉 Nous ne sommes pas une très grande structure, et c'est ce qui fait notre force : agilité, proximité et réactivité. 
                Chaque projet bénéficie d'un suivi personnalisé, sans lourdeurs administratives ni délais interminables.
              </p>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Strengths Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {strengths.map((strength, index) => (
            <ScrollAnimationWrapper key={index} animation="fade-in" delay={`${index * 200}ms`}>
              <div className="group bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <strength.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                  {strength.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  {strength.description}
                </p>
                
                <ul className="space-y-1.5 sm:space-y-2">
                  {strength.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Stats Section */}
        <ScrollAnimationWrapper animation="slide-up" delay="200ms">
          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">&lt;2s</div>
                <div className="text-sm sm:text-base text-muted-foreground">Temps de chargement</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Projets livrés</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm sm:text-base text-muted-foreground">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default AboutSection;