import { Helmet } from 'react-helmet-async';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, MapPin, Globe } from 'lucide-react';

const Projets = () => {
  // Projets de démonstration - à remplacer par vos vrais projets
  const projets = [
    {
      id: 1,
      titre: "Eazy GO",
      description: "Application mobile de transport connectant chauffeurs et particuliers pour des trajets sécurisés et pratiques.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      categorie: "Mobile",
      date: "Mars 2024",
      client: "Eazy GO",
      lienDemo: "#",
    },
    {
      id: 2,
      titre: "Pompe Funèbres Buchet",
      description: "Plateforme web permettant de créer des pages commémoratives pour avertir d'un décès, recevoir des messages de condoléances et gérer les dons pour la famille.",
      image: "/src/assets/pompeFunebre.png",
      categorie: "Web",
      date: "Février 2024",
      client: "Pompe Funèbres Buchet",
      lienDemo: "https://www.pompesfunebresbuchet.com",
    },
    {
      id: 3,
      titre: "BD Taxi",
      description: "Site vitrine moderne et responsive présentant les services BD Taxi avec système de contact intégré pour faciliter la communication avec l'entreprise.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      categorie: "Vitrine",
      date: "Janvier 2024",
      client: "BD Taxi",
      lienDemo: "#",
    },
    {
      id: 4,
      titre: "Home Therapy",
      description: "Système de réservation intelligent permettant aux thérapeutes sans locaux fixes de réserver des salles adaptées à leurs besoins.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
      categorie: "Gestion",
      date: "Décembre 2023",
      client: "Home Therapy",
      lienDemo: "#",
    }
  ];

  const categories = ["Tout", "Mobile", "Web", "Vitrine", "Gestion"];

  return (
    <>
      <Helmet>
        <title>Portfolio & Réalisations | BiDev - Projets Web & Mobile à Lille</title>
        <meta name="description" content="Découvrez nos réalisations web et mobile : e-commerce, SaaS, applications mobiles, plateformes EdTech. Portfolio BiDev avec projets clients en France et Tunisie." />
        <meta name="keywords" content="portfolio web, réalisations développement, projets e-commerce, applications mobiles, SaaS, EdTech, BiDev projets" />
        <link rel="canonical" href="https://fr-thefury.github.io/bidev-sparkle/projets" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Portfolio BiDev - Réalisations Web et Mobile",
            "creator": {
              "@type": "Organization",
              "name": "BiDev",
              "url": "https://fr-thefury.github.io/bidev-sparkle/"
            },
            "description": "Portfolio de réalisations incluant sites e-commerce, applications SaaS, plateformes EdTech et applications mobiles",
            "genre": ["E-commerce", "SaaS", "Mobile", "EdTech", "Sites Vitrine"]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 bg-gradient-to-br from-primary via-primary-glow to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Nos Projets
                <span className="block text-accent-foreground">Des solutions digitales exceptionnelles</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                Découvrez nos réalisations et l'expertise que nous mettons au service de nos clients
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm opacity-90 mb-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>France</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Tunisie</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {categories.map((cat) => (
                  <Badge 
                    key={cat} 
                    variant="secondary" 
                    className="cursor-pointer hover:bg-white/20 hover:text-white transition-colors px-3 py-1.5 text-sm bg-white/10 text-white border-white/20"
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projets.map((projet, index) => (
              <ScrollAnimationWrapper 
                key={projet.id} 
                animation="fade-in" 
                delay={`${index * 100}ms`}
              >
                <Card className="group overflow-hidden border-0 shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm h-[500px] flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={projet.image} 
                      alt={projet.titre}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={projet.lienDemo}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        aria-label="Voir la démo"
                      >
                        <ExternalLink size={16} className="text-gray-800" />
                      </a>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                        {projet.categorie}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-2" />
                        {projet.date}
                      </div>
                      <div className="text-sm font-medium text-primary">
                        {projet.client}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {projet.titre}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {projet.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto text-center">
          <ScrollAnimationWrapper animation="fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Prêt à lancer
              <span className="block gradient-text-accent">votre projet ?</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre vision et 
              découvrir comment nous pouvons la transformer en réalité.
            </p>
            <a 
              href="/contact" 
              className="btn-hero text-lg px-8 py-4 inline-block"
            >
              Démarrer mon projet
            </a>
          </ScrollAnimationWrapper>
        </div>
      </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projets;