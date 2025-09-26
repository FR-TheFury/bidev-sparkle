import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Smartphone, Globe, Tablet, Code2, Zap, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';
import HomeTherapieImage from '@/assets/HomeTherapie.png';
import PompeFunebreImage from '@/assets/PompeFunebre.png';

const DeveloppementWeb = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Un bureau en Tunisie",
      description: "Nous avons choisi la Tunisie pour une raison simple : ses talents digitaux sont parmi les plus reconnus au monde.",
      features: ["Équipe de développeurs performants, passionnés et rigoureux", "Présence locale pour accompagner nos clients africains", "Agilité renforcée pour répondre rapidement aux projets", "Excellence technique reconnue mondialement"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Pilotage depuis la France", 
      description: "Si le développement technique est partagé, tout l'accompagnement client et le contrôle qualité sont assurés depuis notre bureau en France.",
      features: ["Interlocuteurs dédiés basés en France", "Suivi rigoureux et méthodologie éprouvée", "Standards de qualité européens", "Gage de fiabilité et de satisfaction"]
    },
    {
      icon: <Tablet className="w-12 h-12" />,
      title: "La complémentarité",
      description: "Cette organisation hybride est notre force. Une synergie parfaite entre excellence tunisienne et rigueur française.",
      features: ["Équipe tunisienne : expertise et productivité", "Équipe française : relation client et qualité", "Coûts optimisés", "Services premium à prix imbattables"]
    }
  ];


  const processSteps = [
    {
      step: "01",
      title: "Analyse & Conception",
      description: "Étude approfondie de vos besoins et conception de l'architecture technique."
    },
    {
      step: "02", 
      title: "Développement",
      description: "Codage avec les dernières technologies et meilleures pratiques du marché."
    },
    {
      step: "03",
      title: "Tests & Optimisation", 
      description: "Tests rigoureux et optimisation des performances sur tous les appareils."
    },
    {
      step: "04",
      title: "Déploiement & Suivi",
      description: "Mise en ligne sécurisée et accompagnement post-lancement."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Développement Web sur Mesure | BiDev - Sites Internet Professionnels</title>
        <meta name="description" content="Développement web sur mesure avec BiDev. Équipe franco-tunisienne experte : sites vitrine, e-commerce, applications web. Technologies modernes, prix compétitifs." />
        <meta name="keywords" content="développement web, sites internet, applications web, e-commerce, équipe France Tunisie, développement sur mesure" />
        <link rel="canonical" href="https://fr-thefury.github.io/bidev-sparkle/developpement-web" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Développement Web sur Mesure",
            "provider": {
              "@type": "Organization",
              "name": "BiDev",
              "url": "https://fr-thefury.github.io/bidev-sparkle/"
            },
            "serviceType": "Développement Web",
            "areaServed": ["France", "Belgique", "Tunisie"],
            "description": "Services de développement web avec équipe franco-tunisienne, sites sur mesure et applications web modernes"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
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
                BI Développement
                <span className="block text-2xl md:text-3xl mt-2 text-white/90">Un partenaire digital tourné vers l'avenir</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Chez BI Développement, nous croyons que l'avenir du digital se joue aussi en Afrique.
                C'est pourquoi nous avons ouvert un bureau à Tunis, au cœur d'un écosystème reconnu mondialement 
                pour la qualité et l'excellence de ses développeurs.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <p className="text-white text-lg">
                  Cette implantation nous permet d'avoir un pied solide sur le continent africain, 
                  de nous rapprocher davantage de nos clients et de renforcer notre vision : 
                  accompagner les entreprises d'aujourd'hui dans leur transformation digitale, avec une expertise internationale.
                </p>
              </div>
              <div className="flex justify-start">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    <Code2 className="w-5 h-5 mr-2" />
                    Commencer un projet
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Notre Organisation Internationale
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Proximité, talents et opportunités au service de votre réussite digitale
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                        <Zap className="w-4 h-4 text-accent mr-2" />
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

      {/* Expertise Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Notre Engagement
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Que vous soyez en France, en Belgique ou en Afrique, avec BI Développement vous bénéficiez :
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-up" delay="300ms">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Partenaire Agile</h3>
                <p className="text-muted-foreground">
                  Un partenaire digital agile et proche de vous, sans lourdeurs administratives.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Savoir-faire International</h3>
                <p className="text-muted-foreground">
                  Un savoir-faire international combinant rigueur française et excellence tunisienne.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Solutions Premium</h3>
                <p className="text-muted-foreground">
                  Des solutions sur mesure, performantes et accessibles à prix imbattables.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>


      {/* Projets Réalisés Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Nos Réalisations Web
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Découvrez quelques exemples de nos projets web sur mesure
              </p>
            </div>
          </ScrollAnimationWrapper>

           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
             <ScrollAnimationWrapper animation="slide-up" delay="0ms">
               <div className="bg-card overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 h-[700px] flex flex-col">
                   <div className="h-96 bg-muted/50 flex items-center justify-center relative overflow-hidden">
                   <img 
                     src={HomeTherapieImage} 
                     alt="Home Therapy - Système de réservation"
                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                   />
                 </div>
                 <div className="p-6 flex-grow flex flex-col">
                   <div className="flex items-center justify-between mb-2">
                     <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                       Système de Réservation
                     </span>
                   </div>
                   <h3 className="text-xl font-bold text-card-foreground mb-3">Home Therapy</h3>
                   <p className="text-muted-foreground text-base leading-relaxed mb-4">
                     Plateforme de réservation de salles pour thérapeutes sans locaux fixes. 
                     Système complet avec gestion des créneaux, paiements en ligne et interface intuitive.
                   </p>

                   {/* Bulles d'information détaillées */}
                   <div className="space-y-3 flex-1">
                     <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                       <h4 className="text-xs font-semibold text-blue-800 mb-1">🎯 Demande initiale</h4>
                       <p className="text-xs text-blue-700 leading-relaxed">Développer une plateforme de réservation de salles thérapeutiques pour professionnels nomades avec gestion des créneaux et paiements automatisés.</p>
                     </div>
                     
                     <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-r-lg">
                       <h4 className="text-xs font-semibold text-orange-800 mb-1">⚡ Enjeux entreprise</h4>
                       <p className="text-xs text-orange-700 leading-relaxed">Faciliter l'accès aux locaux thérapeutiques, optimiser l'utilisation des espaces disponibles et créer un nouveau modèle économique dans le secteur.</p>
                     </div>
                     
                     <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg">
                       <h4 className="text-xs font-semibold text-green-800 mb-1">🚀 Mise en place</h4>
                       <p className="text-xs text-green-700 leading-relaxed">Étude marché thérapeutique → Architecture système → Interface de réservation → Gestion paiements → Tests thérapeutes → Déploiement</p>
                     </div>
                     
                     <div className="bg-purple-50 border-l-4 border-purple-400 p-3 rounded-r-lg">
                       <h4 className="text-xs font-semibold text-purple-800 mb-1">✨ Bénéfices finaux</h4>
                       <p className="text-xs text-purple-700 leading-relaxed">Plateforme active avec 50+ thérapeutes inscrits, 300+ réservations/mois, automatisation complète des processus, nouvelle source de revenus pour les propriétaires.</p>
                     </div>
                     
                     <div className="bg-gray-50 border-l-4 border-gray-400 p-3 rounded-r-lg">
                       <h4 className="text-xs font-semibold text-gray-800 mb-1">⏱️ Temps de réalisation</h4>
                       <p className="text-xs text-gray-700 font-medium">5 mois</p>
                     </div>
                   </div>
                 </div>
               </div>
             </ScrollAnimationWrapper>

             <ScrollAnimationWrapper animation="slide-up" delay="200ms">
               <div className="bg-card overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 h-[700px] flex flex-col">
                 <div className="h-64 bg-muted/50 flex items-center justify-center relative overflow-hidden">
                   <img 
                     src={PompeFunebreImage} 
                     alt="Pompe Funèbres Buchet - Page de condoléances"
                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                   />
                 </div>
                 <div className="p-6 flex-grow flex flex-col">
                   <div className="flex items-center justify-between mb-2">
                     <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                       Site Communautaire
                     </span>
                   </div>
                   <h3 className="text-xl font-bold text-card-foreground mb-3">Pompe Funèbres Buchet</h3>
                   <p className="text-muted-foreground text-base leading-relaxed mb-4">
                     Plateforme permettant de créer des pages d'avis de décès, recevoir des messages de condoléances 
                     et organiser des collectes de dons pour les familles endeuillées.
                   </p>

                   {/* Bulles d'information détaillées */}
                   <div className="space-y-3 flex-1">
                     <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                       <h4 className="text-xs font-semibold text-blue-800 mb-1">🎯 Demande initiale</h4>
                       <p className="text-xs text-blue-700 leading-relaxed">Digitaliser les services funéraires en créant une plateforme permettant aux familles de créer des pages d'hommage et recevoir des condoléances en ligne.</p>
                     </div>
                     
                     <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-r-lg">
                       <h4 className="text-xs font-semibold text-orange-800 mb-1">⚡ Enjeux entreprise</h4>
                       <p className="text-xs text-orange-700 leading-relaxed">Moderniser les pratiques traditionnelles tout en respectant la sensibilité du domaine funéraire et offrir un service de qualité aux familles endeuillées.</p>
                     </div>
                     
                     <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg">
                       <h4 className="text-xs font-semibold text-green-800 mb-1">🚀 Mise en place</h4>
                       <p className="text-xs text-green-700 leading-relaxed">Analyse secteur funéraire → Conception UX sensible → Développement sécurisé → Tests familles → Formation équipe → Lancement progressif</p>
                     </div>
                     
                     <div className="bg-purple-50 border-l-4 border-purple-400 p-3 rounded-r-lg">
                       <h4 className="text-xs font-semibold text-purple-800 mb-1">✨ Bénéfices finaux</h4>
                       <p className="text-xs text-purple-700 leading-relaxed">Plateforme respectueuse permettant création d'hommages personnalisés, collecte de dons, messages de condoléances et partage de souvenirs, adoptée par 200+ familles.</p>
                     </div>
                     
                     <div className="bg-gray-50 border-l-4 border-gray-400 p-3 rounded-r-lg">
                       <h4 className="text-xs font-semibold text-gray-800 mb-1">⏱️ Temps de réalisation</h4>
                       <p className="text-xs text-gray-700 font-medium">4 mois</p>
                     </div>
                   </div>
                 </div>
               </div>
             </ScrollAnimationWrapper>
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
                Prêt à Lancer Votre Projet ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé gratuitement.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    <Shield className="w-5 h-5 mr-2" />
                    Obtenir un devis gratuit
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
    </>
  );
};

export default DeveloppementWeb;