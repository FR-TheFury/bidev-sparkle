import { ArrowRight, Play } from 'lucide-react';
import heroBackground from '@/assets/hero-background-neutral.jpg';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <ScrollAnimationWrapper animation="fade-in" delay="100ms">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Agence
              <span className="block gradient-text-accent">
                Web Marketing
              </span>
            </h1>
          </ScrollAnimationWrapper>
          
          {/* Subtitle */}
          <ScrollAnimationWrapper animation="fade-in" delay="300ms">
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Notre promesse : "vous accompagner jusqu'à l'atteinte de vos objectifs!"
            </p>
          </ScrollAnimationWrapper>
          
          {/* CTA Buttons */}
          <ScrollAnimationWrapper animation="fade-in" delay="500ms">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <button className="btn-hero group flex items-center">
                Démarrer votre projet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="btn-outline-hero group flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Voir nos réalisations
              </button>
            </div>
          </ScrollAnimationWrapper>
          
          {/* Stats */}
          <ScrollAnimationWrapper animation="fade-in" delay="700ms">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-white/70 text-sm md:text-base">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-white/70 text-sm md:text-base">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">63%</div>
                <div className="text-white/70 text-sm md:text-base">Partage vidéo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/70 text-sm md:text-base">Accompagnement</div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;