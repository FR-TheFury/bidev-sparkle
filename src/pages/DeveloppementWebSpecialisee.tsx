import { Link } from 'react-router-dom';
import { ArrowLeft, Code2, Palette, Zap, Shield, Globe, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';
import HomeTherapieImage from '@/assets/HomeTherapie.png';
import PompeFunebreImage from '@/assets/PompeFunebre.png';

const DeveloppementWebSpecialisee = () => {
  const services = [
    {
      icon: Globe,
      title: "Sites Web Responsives",
      description: "Création de sites web adaptatifs qui s'affichent parfaitement sur tous les appareils et écrans."
    },
    {
      icon: Code2,
      title: "Applications Web Complexes",
      description: "Développement d'applications web sophistiquées avec des fonctionnalités avancées."
    },
    {
      icon: Zap,
      title: "Performance Optimisée",
      description: "Sites ultra-rapides optimisés pour le SEO et l'expérience utilisateur."
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Implémentation des meilleures pratiques de sécurité web pour protéger votre site."
    }
  ];


  const projetsExemples = [
    {
      title: "Home Therapy",
      description: "Système de réservation de salles pour thérapeutes sans locaux. Interface intuitive avec gestion des créneaux, paiements en ligne et suivi des rendez-vous.",
      image: HomeTherapieImage,
      category: "Système de réservation",
      details: {
        besoins: "Développer une plateforme de réservation de salles thérapeutiques pour professionnels nomades avec gestion des créneaux et paiements automatisés.",
        enjeux: "Faciliter l'accès aux locaux thérapeutiques, optimiser l'utilisation des espaces disponibles et créer un nouveau modèle économique dans le secteur.",
        miseEnPlace: "Étude marché thérapeutique → Architecture système → Interface de réservation → Gestion paiements → Tests thérapeutes → Déploiement",
        benefices: "Plateforme active avec 50+ thérapeutes inscrits, 300+ réservations/mois, automatisation complète des processus, nouvelle source de revenus pour les propriétaires.",
        tempsRealisation: "5 mois"
      }
    },
    {
      title: "Pompe Funèbres Buchet",
      description: "Plateforme digitale permettant de créer des pages d'hommage pour annoncer un décès, recueillir des messages de condoléances et gérer les dons pour la famille.",
      image: PompeFunebreImage,
      category: "Plateforme d'hommage",
      details: {
        besoins: "Digitaliser les services funéraires en créant une plateforme permettant aux familles de créer des pages d'hommage et recevoir des condoléances en ligne.",
        enjeux: "Moderniser les pratiques traditionnelles tout en respectant la sensibilité du domaine funéraire et offrir un service de qualité aux familles endeuillées.",
        miseEnPlace: "Analyse secteur funéraire → Conception UX sensible → Développement sécurisé → Tests familles → Formation équipe → Lancement progressif",
        benefices: "Plateforme respectueuse permettant création d'hommages personnalisés, collecte de dons, messages de condoléances et partage de souvenirs, adoptée par 200+ familles.",
        tempsRealisation: "4 mois"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Développement Web Spécialisé | BiDev - Expertise Avancée France-Tunisie</title>
        <meta name="description" content="Services de développement web spécialisé avec BiDev. Expertise poussée en React, Vue.js, Node.js. Équipe franco-tunisienne pour projets complexes et innovants." />
        <meta name="keywords" content="développement web spécialisé, expertise React Vue.js, projets complexes, développement avancé, BiDev spécialisation" />
        <link rel="canonical" href="https://fr-thefury.github.io/bidev-sparkle/developpement-web-specialisee" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Développement Web Spécialisé",
            "provider": {
              "@type": "Organization",
              "name": "BiDev",
              "url": "https://fr-thefury.github.io/bidev-sparkle/"
            },
            "serviceType": "Développement Web Avancé",
            "areaServed": ["France", "Belgique", "Tunisie"],
            "description": "Services spécialisés de développement web pour projets complexes et innovants"
          })}
        </script>
      </Helmet>

      <Header />

      <main>

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
                Développement Web Spécialisé
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Solutions web sur mesure avec les technologies les plus avancées pour des performances exceptionnelles.
              </p>
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
                Nos Services Web
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Des solutions web complètes adaptées à vos besoins spécifiques
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

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Technologies Maîtrisées
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nous utilisons les technologies les plus modernes et performantes
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Projets Examples Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Projets Réalisés
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Découvrez quelques exemples de nos réalisations web
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projetsExemples.map((projet, index) => (
              <ScrollAnimationWrapper key={index} animation="slide-up" delay={`${index * 200}ms`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 h-[700px] flex flex-col">
                  <div className="h-80 bg-muted/50 flex items-center justify-center relative overflow-hidden">
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
                     <CardDescription className="text-base leading-relaxed mb-4">
                       {projet.description}
                     </CardDescription>

                     {/* Bulles d'information détaillées */}
                     <div className="space-y-3">
                       <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                         <h4 className="text-xs font-semibold text-blue-800 mb-1">🎯 Demande initiale</h4>
                         <p className="text-xs text-blue-700 leading-relaxed">{projet.details.besoins}</p>
                       </div>
                       
                       <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-r-lg">
                         <h4 className="text-xs font-semibold text-orange-800 mb-1">⚡ Enjeux entreprise</h4>
                         <p className="text-xs text-orange-700 leading-relaxed">{projet.details.enjeux}</p>
                       </div>
                       
                       <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg">
                         <h4 className="text-xs font-semibold text-green-800 mb-1">🚀 Mise en place</h4>
                         <p className="text-xs text-green-700 leading-relaxed">{projet.details.miseEnPlace}</p>
                       </div>
                       
                       <div className="bg-purple-50 border-l-4 border-purple-400 p-3 rounded-r-lg">
                         <h4 className="text-xs font-semibold text-purple-800 mb-1">✨ Bénéfices finaux</h4>
                         <p className="text-xs text-purple-700 leading-relaxed">{projet.details.benefices}</p>
                       </div>
                       
                       <div className="bg-gray-50 border-l-4 border-gray-400 p-3 rounded-r-lg">
                         <h4 className="text-xs font-semibold text-gray-800 mb-1">⏱️ Temps de réalisation</h4>
                         <p className="text-xs text-gray-700 font-medium">{projet.details.tempsRealisation}</p>
                       </div>
                     </div>
                   </CardHeader>
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
                Prêt à Créer Votre Projet Web ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    Demander un devis gratuit
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default DeveloppementWebSpecialisee;