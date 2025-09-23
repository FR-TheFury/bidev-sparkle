import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const Projets = () => {
  // Projets de démonstration - à remplacer par vos vrais projets
  const projets = [
    {
      id: 1,
      titre: "Site E-commerce Premium",
      description: "Plateforme e-commerce complète avec gestion des stocks, paiements sécurisés et tableau de bord administrateur.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      categorie: "E-commerce",
      date: "Mars 2024",
      client: "Boutique Mode",
      lienDemo: "#",
      lienGithub: "#"
    },
    {
      id: 2,
      titre: "Application SaaS Analytics",
      description: "Dashboard analytique avancé pour le suivi des performances business en temps réel avec graphiques interactifs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
      categorie: "SaaS",
      date: "Février 2024",
      client: "StartupTech",
      lienDemo: "#",
      lienGithub: "#"
    },
    {
      id: 3,
      titre: "Site Vitrine Corporate",
      description: "Site web moderne et responsive pour une entreprise de conseil avec animations fluides et optimisation SEO.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind", "Framer Motion", "Vercel"],
      categorie: "Vitrine",
      date: "Janvier 2024",
      client: "ConseilPro",
      lienDemo: "#",
      lienGithub: "#"
    },
    {
      id: 4,
      titre: "App Mobile React Native",
      description: "Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud et notifications push.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      categorie: "Mobile",
      date: "Décembre 2023",
      client: "ProductivityApp",
      lienDemo: "#",
      lienGithub: "#"
    },
    {
      id: 5,
      titre: "Plateforme EdTech",
      description: "Plateforme d'apprentissage en ligne avec cours vidéo, quiz interactifs et suivi des progrès étudiants.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Prisma", "MySQL", "AWS"],
      categorie: "EdTech",
      date: "Novembre 2023",
      client: "LearnOnline",
      lienDemo: "#",
      lienGithub: "#"
    },
    {
      id: 6,
      titre: "Système de Réservation",
      description: "Solution complète de réservation en ligne pour restaurants avec gestion des tables et notifications automatiques.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
      technologies: ["Laravel", "Vue.js", "MySQL", "Socket.io"],
      categorie: "Gestion",
      date: "Octobre 2023",
      client: "RestaurantPro",
      lienDemo: "#",
      lienGithub: "#"
    }
  ];

  const categories = ["Tout", "E-commerce", "SaaS", "Vitrine", "Mobile", "EdTech", "Gestion"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Nos
                <span className="block gradient-text-primary">Projets</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Découvrez nos réalisations et l'expertise que nous mettons au service 
                de nos clients pour créer des solutions digitales exceptionnelles
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {categories.map((cat) => (
                  <Badge 
                    key={cat} 
                    variant="secondary" 
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1.5 text-sm"
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
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projets.map((projet, index) => (
              <ScrollAnimationWrapper 
                key={projet.id} 
                animation="fade-in" 
                delay={`${index * 100}ms`}
              >
                <Card className="group overflow-hidden border-0 shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
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
                      <a 
                        href={projet.lienGithub}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        aria-label="Voir le code"
                      >
                        <Github size={16} className="text-gray-800" />
                      </a>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                        {projet.categorie}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
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

      <Footer />
    </div>
  );
};

export default Projets;