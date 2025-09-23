import { Helmet } from 'react-helmet-async';
import { ArrowRight, Smartphone, Tablet, Watch, Zap, Users, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

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
      icon: Watch,
      title: "Applications Wearables",
      description: "Développement pour montres connectées et autres objets connectés."
    },
    {
      icon: Zap,
      title: "Progressive Web Apps",
      description: "Applications web progressives combinant le meilleur du web et du mobile."
    }
  ];

  const plateformes = [
    "React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin", "PWA", "Capacitor"
  ];

  const avantages = [
    {
      icon: Users,
      title: "Expérience Utilisateur Native",
      description: "Interface fluide et intuitive respectant les guidelines de chaque plateforme"
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Applications rapides et réactives avec une utilisation efficace des ressources"
    },
    {
      icon: Shield,
      title: "Sécurité Avancée",
      description: "Protection des données et authentification sécurisée selon les standards mobiles"
    }
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
    <>
      <Helmet>
        <title>Développement Applications Mobiles - iOS & Android | BiDev</title>
        <meta name="description" content="Expert en développement d'applications mobiles iOS et Android. Applications natives, cross-platform et PWA. React Native, Flutter, Swift, Kotlin." />
        <meta name="keywords" content="développement mobile, applications iOS, applications Android, React Native, Flutter, app mobile" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Développement Mobile
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            Créons des applications mobiles exceptionnelles pour iOS et Android
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link to="/contact">
              <Button size="lg" className="btn-hero">
                Lancer votre app <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 text-sm opacity-75">
            <p>📍 Basé en France | Applications sur mesure</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services Mobile</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solutions mobiles complètes pour toutes les plateformes
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

      {/* Plateformes Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies & Plateformes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise sur les principales technologies de développement mobile
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {plateformes.map((plateforme, index) => (
              <div key={index} className="bg-background border rounded-full px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                {plateforme}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir Nos Apps ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des applications mobiles qui se démarquent par leur qualité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <avantage.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{avantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {avantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Processus de Développement</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De l'idée à la publication sur les stores
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Conception UX/UI</h3>
              <p className="text-muted-foreground">Design d'interface optimisé pour mobile</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Développement</h3>
              <p className="text-muted-foreground">Codage avec tests en continu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tests & Debug</h3>
              <p className="text-muted-foreground">Tests sur différents appareils</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Publication</h3>
              <p className="text-muted-foreground">Déploiement sur App Store et Google Play</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Examples Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Applications Réalisées</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos dernières créations mobiles
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
                    Voir l'app <ArrowRight className="ml-2 h-4 w-4" />
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
            Votre Idée d'App Mérite d'Exister
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Transformons votre concept en application mobile à succès
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Commencer maintenant <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default DeveloppementMobile;