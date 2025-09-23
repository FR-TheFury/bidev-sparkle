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
      <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <ScrollAnimationWrapper animation="fade-in" delay="100ms">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-2xl leading-tight">
              Agence
              <span className="block gradient-text-accent drop-shadow-xl">
                Web Marketing
              </span>
            </h1>
          </ScrollAnimationWrapper>
          
          {/* Subtitle */}
          <ScrollAnimationWrapper animation="fade-in" delay="300ms">
             <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-2 sm:px-4 md:px-0">
                Notre promesse : "vous accompagner jusqu'à l'atteinte de vos objectifs!"
             </p>
          </ScrollAnimationWrapper>
          
          {/* CTA Buttons */}
          <ScrollAnimationWrapper animation="fade-in" delay="500ms">
            <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4 md:px-0">
              <button className="w-full xs:w-auto bg-white text-black px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl group flex items-center justify-center text-xs sm:text-sm md:text-base">
                Démarrer votre projet
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full xs:w-auto bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg border border-white/30 font-semibold hover:bg-white/30 transition-all duration-300 group flex items-center justify-center text-xs sm:text-sm md:text-base">
                <Play className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Voir nos réalisations
              </button>
            </div>
          </ScrollAnimationWrapper>
          
          {/* Stats */}
          <ScrollAnimationWrapper animation="fade-in" delay="700ms">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-2xl mx-auto px-2 sm:px-4 md:px-0">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 drop-shadow-lg">10+</div>
                <div className="text-white/90 text-xs sm:text-sm md:text-base drop-shadow-md leading-tight">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 drop-shadow-lg">100+</div>
                <div className="text-white/90 text-xs sm:text-sm md:text-base drop-shadow-md leading-tight">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 drop-shadow-lg">63%</div>
                <div className="text-white/90 text-xs sm:text-sm md:text-base drop-shadow-md leading-tight">Partage vidéo</div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
        
        {/* Services Encarts */}
        <ScrollAnimationWrapper animation="fade-in" delay="900ms">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 mt-6 sm:mt-8 md:mt-12 px-2 sm:px-4 md:px-0">
            <div className="flex items-center p-3 sm:p-4 md:p-5 bg-white/95 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white transition-all duration-300 shadow-lg">
              <div className="p-2 sm:p-3 rounded-lg bg-primary/10 mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 leading-tight">
                  Développement Web
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Sites internet modernes
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 sm:p-4 md:p-5 bg-white/95 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white transition-all duration-300 shadow-lg">
              <div className="p-2 sm:p-3 rounded-lg bg-primary/10 mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 leading-tight">
                  Développement Application
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Applications sur mesure
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
      
      {/* Animated elements */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;