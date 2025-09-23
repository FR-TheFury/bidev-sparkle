import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';
import { Globe, MapPin, Users, Award, CheckCircle, Heart } from 'lucide-react';

const QuiSommesNous = () => {
  const values = [
    {
      icon: Globe,
      title: "Vision Internationale",
      description: "L'avenir du digital se joue aussi en Afrique. Nous avons ouvert un bureau à Tunis pour être au cœur de cet écosystème d'excellence.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Proximité Locale",
      description: "Une présence en Tunisie pour nos talents techniques et en France pour l'accompagnement client et le contrôle qualité.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Équipe Complémentaire",
      description: "Développeurs tunisiens performants + équipe française pour la relation client = une synergie parfaite.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Award,
      title: "Excellence Garantie",
      description: "Standards européens, talents africains : nous optimisons les coûts tout en garantissant des services premium.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const advantages = [
    "Une équipe de développeurs performants, passionnés et rigoureux",
    "Une présence locale pour accompagner nos clients africains au plus près", 
    "Une agilité renforcée pour répondre rapidement à des projets ambitieux",
    "Interlocuteurs dédiés basés en France",
    "Suivi rigoureux et méthodologie éprouvée",
    "Standards de qualité respectant les meilleures pratiques européennes"
  ];

  const engagements = [
    "Un partenaire digital agile et proche de vous",
    "Un savoir-faire international combinant rigueur française et excellence tunisienne", 
    "Des solutions sur mesure, performantes et accessibles"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 bg-gradient-to-br from-primary via-primary-glow to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                BI Développement
                <span className="block text-accent-foreground">Un partenaire digital tourné vers l'avenir</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                « L'avenir du digital est en Afrique, construisons-le ensemble »
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm opacity-90">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>France</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Tunisie</span>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Chez BI Développement, nous croyons que l'avenir du digital se joue aussi en Afrique.
                C'est pourquoi nous avons ouvert un bureau à Tunis, au cœur d'un écosystème reconnu mondialement 
                pour la qualité et l'excellence de ses développeurs.
              </p>
              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-base text-foreground">
                  👉 Cette implantation nous permet d'avoir un pied solide sur le continent africain, 
                  de nous rapprocher davantage de nos clients et de renforcer notre vision : 
                  accompagner les entreprises d'aujourd'hui dans leur transformation digitale, 
                  avec une expertise internationale.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <ScrollAnimationWrapper key={index} animation="slide-up" delay={`${index * 200}ms`}>
                  <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollAnimationWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deux bureaux section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Tunisie */}
            <ScrollAnimationWrapper animation="slide-left">
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <span className="text-2xl">🇹🇳</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Un bureau en Tunisie</h3>
                </div>
                <p className="text-lg mb-6 text-muted-foreground">
                  Proximité, talents et opportunités
                </p>
                <p className="text-muted-foreground mb-6">
                  Nous avons choisi la Tunisie pour une raison simple : ses talents digitaux sont parmi les plus reconnus au monde.
                </p>
                <p className="text-sm font-medium text-primary mb-4">Ce choix stratégique nous offre :</p>
                <div className="space-y-3">
                  {["Une équipe de développeurs performants, passionnés et rigoureux", 
                    "Une présence locale pour accompagner nos clients africains au plus près",
                    "Une agilité renforcée pour répondre rapidement à des projets ambitieux"].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* France */}
            <ScrollAnimationWrapper animation="slide-right">
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-2xl">🇫🇷</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Pilotage depuis la France</h3>
                </div>
                <p className="text-lg mb-6 text-muted-foreground">
                  Un contrôle qualité français
                </p>
                <p className="text-muted-foreground mb-6">
                  Si le développement technique est partagé, tout l'accompagnement client et le contrôle qualité sont assurés depuis notre bureau en France.
                </p>
                <p className="text-sm font-medium text-primary mb-4">C'est pour vous un gage de fiabilité et de satisfaction :</p>
                <div className="space-y-3">
                  {["Interlocuteurs dédiés basés en France",
                    "Suivi rigoureux et méthodologie éprouvée", 
                    "Standards de qualité respectant les meilleures pratiques européennes"].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Complémentarité */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">
                🤝 La complémentarité de notre <span className="gradient-text-primary">organisation</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Cette organisation hybride est notre force
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                  <Heart className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Équipe Tunisienne</h3>
                  <p className="text-sm text-muted-foreground">Développeurs performants apportant expertise et productivité</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                  <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Équipe Française</h3>
                  <p className="text-sm text-muted-foreground">Relation client, stratégie et qualité finale</p>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <p className="text-foreground">
                  👉 Cette complémentarité nous permet d'optimiser les coûts de production, 
                  tout en vous garantissant des services premium à des prix imbattables.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                ✨ Notre <span className="gradient-text-accent">Engagement</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Que vous soyez en France, en Belgique ou en Afrique, avec BI Développement vous bénéficiez :
              </p>
              
              <div className="grid gap-6 mb-12">
                {engagements.map((engagement, index) => (
                  <ScrollAnimationWrapper key={index} animation="slide-up" delay={`${index * 200}ms`}>
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0"></div>
                        <p className="text-foreground font-medium text-left">{engagement}</p>
                      </div>
                    </div>
                  </ScrollAnimationWrapper>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">💡 Notre Mission</h3>
                <p className="text-xl font-medium">
                  « L'avenir du digital est en Afrique, construisons-le ensemble »
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuiSommesNous;