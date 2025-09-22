import { Shield, Zap, Users, Award, CheckCircle } from 'lucide-react';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';

const AboutSection = () => {
  const strengths = [
    {
      icon: Shield,
      title: "Sécurité Avancée",
      description: "Protection maximale de vos données avec les dernières technologies de sécurité",
      features: ["Chiffrement SSL", "Sauvegardes automatiques", "Monitoring 24/7"]
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Sites ultra-rapides optimisés pour une expérience utilisateur exceptionnelle",
      features: ["Temps de chargement < 2s", "CDN mondial", "Optimisation mobile"]
    },
    {
      icon: Users,
      title: "Support Expert",
      description: "Équipe dédiée d'experts disponible pour vous accompagner",
      features: ["Support 24/7", "Formation incluse", "Maintenance proactive"]
    },
    {
      icon: Award,
      title: "Qualité Certifiée",
      description: "Standards de qualité élevés respectant les meilleures pratiques",
      features: ["Code certifié", "Tests rigoureux", "Garantie qualité"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollAnimationWrapper animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Notre
              <span className="block gradient-text-accent">Savoir Faire</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              En s'appuyant sur 10 années d'expérience dans l'univers du digital, BI DEVELOPPEMENT, 
              agence webmarketing à Marcq-en-Baroeul près de Lille, vous offre de multiples services 
              ainsi qu'un accompagnement complet afin de permettre à votre entreprise une croissance online.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {strengths.map((strength, index) => (
            <ScrollAnimationWrapper key={index} animation="fade-in" delay={`${index * 200}ms`}>
              <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <strength.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {strength.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {strength.description}
                </p>
                
                <ul className="space-y-2">
                  {strength.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
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
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Disponibilité</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">&lt;2s</div>
                <div className="text-muted-foreground">Temps de chargement</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projets livrés</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default AboutSection;