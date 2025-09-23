import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, Zap, Users, Shield, CheckCircle, ArrowRight, ExternalLink, Apple, Tablet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';

const DeveloppementMobile = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Applications iOS & Android",
      description: "Développement d'applications natives et cross-platform pour smartphone."
    },
    {
      icon: Tablet,
      title: "Applications Tablettes",
      description: "Applications optimisées pour tablettes avec interface adaptée aux grands écrans."
    },
    {
      icon: Zap,
      title: "Progressive Web Apps",
      description: "Applications web progressives combinant le meilleur du web et du mobile."
    },
    {
      icon: Shield,
      title: "Sécurité Mobile",
      description: "Protection des données et authentification sécurisée selon les standards mobiles."
    }
  ];

  const plateformes = [
    "React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin", "PWA", "Capacitor"
  ];

  const projetsExemples = [
    {
      title: "Application de Livraison",
      description: "Application mobile complète avec géolocalisation, paiements intégrés et suivi en temps réel des commandes.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Google Maps"],
      category: "E-commerce"
    },
    {
      title: "App de Fitness",
      description: "Application de suivi sportif avec programmes personnalisés, tracking des performances et communauté.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "HealthKit", "Cloud Functions"],
      category: "Santé & Fitness"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Développement Applications Mobile - iOS & Android | BiDev</title>
        <meta name="description" content="Développement d'applications mobiles natives et hybrides pour iOS et Android. React Native, Flutter, applications performantes par BiDev." />
        <meta name="keywords" content="développement mobile, applications iOS, applications Android, React Native, Flutter, applications hybrides" />
        <link rel="canonical" href="https://bidev.fr/developpement-mobile" />
      </Helmet>

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
                Applications Mobile
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Développement d'applications mobiles performantes pour iOS et Android avec une expérience utilisateur exceptionnelle.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary" className="text-sm flex items-center gap-1">
                  <Apple className="w-4 h-4" />
                  iOS
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Android
                </Badge>
                <Badge variant="secondary" className="text-sm">React Native</Badge>
                <Badge variant="secondary" className="text-sm">Flutter</Badge>
              </div>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  Demander un devis
                </Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Nos Services Mobile
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Solutions mobiles complètes pour toutes les plateformes
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollAnimationWrapper key={index} animation="slide-up" delay={`${index * 150}ms`}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 h-full">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Plateformes Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Technologies & Plateformes
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expertise sur les principales technologies de développement mobile
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="flex flex-wrap justify-center gap-4">
            {plateformes.map((plateforme, index) => (
              <ScrollAnimationWrapper key={index} animation="fade-in" delay={`${index * 100}ms`}>
                <div className="bg-card border rounded-full px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                  {plateforme}
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Projets Examples Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Applications Réalisées
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Découvrez nos dernières créations mobiles
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projetsExemples.map((projet, index) => (
              <ScrollAnimationWrapper key={index} animation="slide-up" delay={`${index * 200}ms`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 h-full flex flex-col">
                  <div className="h-64 bg-muted/50 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={projet.image} 
                      alt={projet.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-sm">
                        {projet.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-3">{projet.title}</CardTitle>
                    <CardDescription className="flex-grow text-base leading-relaxed">
                      {projet.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projet.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full group">
                      Voir l'app 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
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
                Votre Idée d'App Mérite d'Exister
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Transformons votre concept en application mobile à succès
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    Commencer maintenant
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

export default DeveloppementMobile;