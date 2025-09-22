import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Search, Smartphone, PenTool, BarChart3, Shield, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';

const Services = () => {
  const allServices = [
    {
      icon: <Globe className="w-16 h-16" />,
      title: "Développement Web",
      description: "Création de sites web modernes, performants et sur mesure pour votre entreprise.",
      features: [
        "Sites vitrine professionnels",
        "Plateformes e-commerce",
        "Applications web complexes",
        "Responsive design",
        "Performance optimisée"
      ],
      color: "from-blue-500 to-cyan-500",
      link: "/developpement-web"
    },
    {
      icon: <Smartphone className="w-16 h-16" />,
      title: "Applications Mobile",
      description: "Développement d'applications mobiles natives et hybrides pour iOS et Android.",
      features: [
        "Applications natives iOS/Android",
        "Applications React Native",
        "Progressive Web Apps",
        "Interface utilisateur intuitive",
        "Performance optimale"
      ],
      color: "from-green-500 to-emerald-500",
      link: "/developpement-web"
    },
    {
      icon: <Search className="w-16 h-16" />,
      title: "Référencement SEO",
      description: "Optimisation pour les moteurs de recherche et amélioration de votre visibilité en ligne.",
      features: [
        "Audit SEO complet",
        "Optimisation on-page",
        "Stratégie de contenu",
        "Link building",
        "Suivi des performances"
      ],
      color: "from-purple-500 to-pink-500",
      link: "/referencement"
    },
    {
      icon: <PenTool className="w-16 h-16" />,
      title: "Design UI/UX",
      description: "Conception d'interfaces utilisateur élégantes et d'expériences utilisateur optimales.",
      features: [
        "Design d'interface moderne",
        "Expérience utilisateur optimisée",
        "Prototypage interactif",
        "Tests utilisateur",
        "Design system complet"
      ],
      color: "from-orange-500 to-red-500",
      link: "/contact"
    },
    {
      icon: <BarChart3 className="w-16 h-16" />,
      title: "Analytics & Tracking",
      description: "Mise en place d'outils d'analyse pour mesurer et optimiser vos performances.",
      features: [
        "Google Analytics 4",
        "Tableaux de bord personnalisés",
        "Suivi des conversions",
        "Rapports détaillés",
        "Optimisation continue"
      ],
      color: "from-teal-500 to-blue-500",
      link: "/contact"
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: "Maintenance & Support",
      description: "Maintenance continue et support technique pour assurer la pérennité de vos projets.",
      features: [
        "Maintenance préventive",
        "Mises à jour sécurité",
        "Support technique 24/7",
        "Sauvegardes automatiques",
        "Monitoring continu"
      ],
      color: "from-indigo-500 to-purple-500",
      link: "/contact"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "À partir de 1 500€",
      description: "Parfait pour les petites entreprises qui débutent en ligne",
      features: [
        "Site vitrine 5 pages",
        "Design responsive",
        "SEO de base",
        "Formulaire de contact",
        "Support 3 mois"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "À partir de 3 500€",
      description: "Idéal pour les entreprises en croissance",
      features: [
        "Site web avancé",
        "E-commerce intégré",
        "SEO approfondi",
        "Analytics avancés",
        "Support 6 mois",
        "Formation incluse"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      description: "Solutions sur mesure pour les grandes entreprises",
      features: [
        "Développement sur mesure",
        "Architecture complexe",
        "Intégrations tierces",
        "Support prioritaire",
        "Maintenance 1 an",
        "Équipe dédiée"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "100+", label: "Projets réalisés" },
    { number: "10 ans", label: "D'expérience" },
    { number: "24h", label: "Temps de réponse" },
    { number: "WordPress", label: "Spécialité" }
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
                Tous Nos Services
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Découvrez notre gamme complète de services digitaux pour propulser votre entreprise vers le succès.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
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
                Notre Expertise à Votre Service
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Des solutions digitales complètes pour répondre à tous vos besoins
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ScrollAnimationWrapper key={index} animation="slide-up" delay={`${index * 150}ms`}>
                <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 group h-full flex flex-col">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild variant="outline" className="w-full group">
                    <Link to={service.link}>
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Nos Formules
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choisissez la formule qui correspond le mieux à vos besoins et à votre budget
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <ScrollAnimationWrapper key={index} animation="slide-up" delay={`${index * 200}ms`}>
                <div className={`bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border h-full flex flex-col relative ${
                  pkg.popular 
                    ? 'border-primary/50 shadow-primary/10' 
                    : 'border-border/50 hover:border-primary/20'
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                        Plus populaire
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-3xl font-bold text-primary mb-4">
                      {pkg.price}
                    </div>
                    <p className="text-muted-foreground">
                      {pkg.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={`w-full ${pkg.popular ? '' : 'variant-outline'}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    <Link to="/contact">
                      Choisir cette formule
                    </Link>
                  </Button>
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
                Prêt à Démarrer Votre Projet ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé adapté à votre projet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    Demander un devis gratuit
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20 hover:text-white">
                  <Link to="/contact">
                    Voir nos réalisations
                  </Link>
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

export default Services;