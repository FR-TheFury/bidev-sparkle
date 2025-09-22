import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, Globe, Tablet, Code2, Zap, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';

const DeveloppementWeb = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Sites Web sur Mesure",
      description: "Développement de sites web modernes, rapides et entièrement personnalisés selon vos besoins spécifiques.",
      features: ["Design responsive", "SEO optimisé", "Performance maximale", "Interface intuitive"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Applications Mobile",
      description: "Création d'applications mobiles natives et hybrides pour iOS et Android avec une expérience utilisateur exceptionnelle.",
      features: ["React Native", "Performance native", "Design moderne", "Compatible iOS/Android"]
    },
    {
      icon: <Tablet className="w-12 h-12" />,
      title: "Progressive Web Apps",
      description: "Applications web progressives qui offrent une expérience mobile native directement dans le navigateur.",
      features: ["Fonctionnement hors-ligne", "Installation sur mobile", "Notifications push", "Rapide et fluide"]
    }
  ];

  const technologies = [
    { name: "React", color: "text-blue-500" },
    { name: "Vue.js", color: "text-green-500" },
    { name: "Angular", color: "text-red-500" },
    { name: "Node.js", color: "text-green-600" },
    { name: "TypeScript", color: "text-blue-600" },
    { name: "React Native", color: "text-cyan-500" },
    { name: "Flutter", color: "text-blue-400" },
    { name: "Python", color: "text-yellow-500" }
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
                Développement Web & Mobile
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Créons ensemble des solutions digitales performantes qui propulsent votre entreprise vers le succès.
              </p>
              <div className="flex justify-center">
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
                Nos Solutions de Développement
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Des technologies de pointe pour des résultats exceptionnels
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
                Notre Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Spécialisés en WordPress, nous maîtrisons également le développement sur mesure pour répondre à tous vos besoins
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-up" delay="300ms">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50">
                <h3 className="text-2xl font-bold text-primary mb-4">WordPress Expert</h3>
                <p className="text-muted-foreground mb-4">
                  Notre spécialité principale avec plus de 10 ans d'expérience dans la création de sites WordPress performants et sécurisés.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <Zap className="w-4 h-4 text-accent mr-2" />
                    Sites vitrine et e-commerce
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <Zap className="w-4 h-4 text-accent mr-2" />
                    Thèmes sur mesure
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <Zap className="w-4 h-4 text-accent mr-2" />
                    Extensions personnalisées
                  </li>
                </ul>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50">
                <h3 className="text-2xl font-bold text-primary mb-4">Développement Sur Mesure</h3>
                <p className="text-muted-foreground mb-4">
                  Pour les projets nécessitant des solutions spécifiques, nous développons également des applications web personnalisées.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <Zap className="w-4 h-4 text-accent mr-2" />
                    Applications web complexes
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <Zap className="w-4 h-4 text-accent mr-2" />
                    API et intégrations
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <Zap className="w-4 h-4 text-accent mr-2" />
                    Solutions sur mesure
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Notre Processus de Développement
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Une méthodologie éprouvée pour garantir la réussite de votre projet
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollAnimationWrapper key={index} animation="slide-up" delay={`${index * 150}ms`}>
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
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

      <Footer />
    </div>
  );
};

export default DeveloppementWeb;