import { Helmet } from 'react-helmet-async';
import { ArrowRight, Globe, Code, Zap, Shield, Smartphone, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const DeveloppementWebSpecialisee = () => {
  const services = [
    {
      icon: Globe,
      title: "Sites Web Responsives",
      description: "Création de sites web adaptatifs qui s'affichent parfaitement sur tous les appareils et écrans."
    },
    {
      icon: Code,
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

  const technologies = [
    "React", "Vue.js", "Angular", "Node.js", "PHP", "Python", "TypeScript", "JavaScript"
  ];

  const projetsExemples = [
    {
      title: "E-commerce Moderne",
      description: "Plateforme de vente en ligne avec gestion des stocks, paiements sécurisés et tableau de bord administrateur.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "Stripe"],
      category: "E-commerce"
    },
    {
      title: "Application SaaS",
      description: "Solution logicielle en tant que service avec authentification, abonnements et analytics avancés.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      category: "SaaS"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Développement Web Spécialisé - Sites & Applications Web | BiDev</title>
        <meta name="description" content="Expert en développement web spécialisé. Création de sites web modernes, applications web complexes et solutions sur mesure. Technologies React, Vue.js, Node.js." />
        <meta name="keywords" content="développement web, sites web, applications web, React, Vue.js, Node.js, développeur web" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Développement Web Spécialisé
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            Créons ensemble des expériences web exceptionnelles avec les dernières technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link to="/contact">
              <Button size="lg" className="btn-hero">
                Démarrer votre projet <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 text-sm opacity-75">
            <p>📍 Basé en France | Service personnalisé</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services Web</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions web complètes adaptées à vos besoins spécifiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies Maîtrisées</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous utilisons les technologies les plus modernes et performantes
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-background border rounded-full px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Processus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une approche structurée pour garantir le succès de votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyse & Conception</h3>
              <p className="text-muted-foreground">Étude approfondie de vos besoins et conception de l'architecture technique</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Développement</h3>
              <p className="text-muted-foreground">Développement itératif avec tests continus et validation régulière</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Déploiement & Suivi</h3>
              <p className="text-muted-foreground">Mise en production sécurisée et maintenance continue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Examples Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets Réalisés</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez quelques exemples de nos réalisations web
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projetsExemples.map((projet, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow h-[500px] flex flex-col">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <img 
                    src={projet.image} 
                    alt={projet.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {projet.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{projet.title}</CardTitle>
                  <CardDescription className="flex-grow">
                    {projet.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Voir le projet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Créer Votre Projet Web ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Demander un devis <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default DeveloppementWebSpecialisee;