import { Link } from 'react-router-dom';
import { ArrowLeft, Search, TrendingUp, BarChart3, Target, CheckCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';

const Referencement = () => {
  const seoServices = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Audit SEO Complet",
      description: "Analyse approfondie de votre site web pour identifier tous les points d'amélioration SEO.",
      features: ["Analyse technique", "Audit du contenu", "Étude concurrentielle", "Rapport détaillé"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Optimisation On-Page",
      description: "Optimisation complète de votre site pour améliorer votre positionnement sur les moteurs de recherche.",
      features: ["Balises méta", "Structure des URLs", "Optimisation images", "Maillage interne"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Stratégie de Contenu",
      description: "Création et optimisation de contenu de qualité pour attirer et convertir votre audience cible.",
      features: ["Recherche de mots-clés", "Création de contenu", "Optimisation sémantique", "Content marketing"]
    }
  ];

  const stats = [
    { number: "150%", label: "Augmentation du trafic organique en moyenne" },
    { number: "85%", label: "De nos clients voient des résultats en 3 mois" },
    { number: "24h", label: "Temps de réponse maximum" },
    { number: "100+", label: "Sites web optimisés avec succès" }
  ];

  const features = [
    "Recherche approfondie de mots-clés",
    "Optimisation technique complète",
    "Création de contenu SEO-friendly",
    "Link building de qualité",
    "Suivi et reporting mensuel",
    "Support et conseils personnalisés"
  ];

  const process = [
    {
      step: "1",
      title: "Audit Initial",
      description: "Analyse complète de votre présence en ligne et identification des opportunités."
    },
    {
      step: "2",
      title: "Stratégie Personnalisée",
      description: "Élaboration d'une stratégie SEO sur mesure adaptée à vos objectifs business."
    },
    {
      step: "3",
      title: "Mise en Œuvre",
      description: "Implémentation des optimisations techniques et création de contenu optimisé."
    },
    {
      step: "4",
      title: "Suivi & Optimisation",
      description: "Monitoring continu des performances et ajustements pour maximiser les résultats."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-accent to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimationWrapper animation="fade-in">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Link>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="slide-up" delay="200ms">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Référencement SEO
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Propulsez votre visibilité en ligne et dominez les résultats de recherche avec nos stratégies SEO éprouvées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Search className="w-5 h-5 mr-2" />
                  Audit SEO gratuit
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Voir nos résultats
                </Button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Des Résultats Qui Parlent
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nos clients font confiance à notre expertise SEO pour développer leur visibilité
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimationWrapper key={index} animation="slide-up" delay={`${index * 150}ms`}>
                <div className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border/50 hover:border-primary/20 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Nos Services SEO
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Une approche complète pour maximiser votre présence en ligne
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <ScrollAnimationWrapper key={index} animation="slide-up" delay={`${index * 200}ms`}>
                <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 group">
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimationWrapper animation="slide-left">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Pourquoi Choisir Notre Expertise SEO ?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Notre approche holistique du référencement combine expertise technique, créativité et analyse de données pour des résultats durables.
                </p>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-lg">
                      <Star className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right" delay="300ms">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                    SEO
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Consultation Gratuite
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Discutons de votre projet et découvrez comment améliorer votre référencement naturel.
                  </p>
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">
                      Réserver ma consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Notre Processus SEO
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Une méthodologie éprouvée pour des résultats durables et mesurables
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <ScrollAnimationWrapper key={index} animation="slide-up" delay={`${index * 150}ms`}>
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-8 h-px bg-border"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Boostez Votre Visibilité Dès Aujourd'hui
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Ne laissez pas vos concurrents prendre l'avantage. Commencez votre stratégie SEO maintenant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    <Target className="w-5 h-5 mr-2" />
                    Demander un audit gratuit
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20 hover:text-white">
                  Voir nos cas clients
                </Button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Referencement;