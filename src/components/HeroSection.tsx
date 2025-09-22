import { ArrowRight, Play, Code, Smartphone } from 'lucide-react';
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <ScrollAnimationWrapper animation="fade-in" delay="100ms">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              Agence
              <span className="block gradient-text-accent drop-shadow-xl">
                Web Marketing
              </span>
            </h1>
          </ScrollAnimationWrapper>
          
          {/* Subtitle */}
          <ScrollAnimationWrapper animation="fade-in" delay="300ms">
             <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
               Notre promesse : "vous accompagner vers le succès digital !"
             </p>
          </ScrollAnimationWrapper>
          
          {/* CTA Buttons */}
          <ScrollAnimationWrapper animation="fade-in" delay="500ms">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl group flex items-center">
                Démarrer votre projet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg border border-white/30 font-semibold hover:bg-white/30 transition-all duration-300 group flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Voir nos réalisations
              </button>
            </div>
          </ScrollAnimationWrapper>
          
          {/* Stats */}
          <ScrollAnimationWrapper animation="fade-in" delay="700ms">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">10+</div>
                <div className="text-white/90 text-sm md:text-base drop-shadow-md">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">100+</div>
                <div className="text-white/90 text-sm md:text-base drop-shadow-md">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">63%</div>
                <div className="text-white/90 text-sm md:text-base drop-shadow-md">Partage vidéo</div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
        
        {/* Services Encarts */}
        <ScrollAnimationWrapper animation="fade-in" delay="900ms">
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16 mt-12">
            <div className="flex items-center p-5 bg-white/95 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white transition-all duration-300 shadow-lg">
              <div className="p-3 rounded-lg bg-primary/10 mr-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  Développement Web
                </h3>
                <p className="text-sm text-gray-600">
                  Sites internet modernes
                </p>
              </div>
            </div>
            <div className="flex items-center p-5 bg-white/95 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white transition-all duration-300 shadow-lg">
              <div className="p-3 rounded-lg bg-primary/10 mr-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  Développement Application
                </h3>
                <p className="text-sm text-gray-600">
                  Applications sur mesure
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
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