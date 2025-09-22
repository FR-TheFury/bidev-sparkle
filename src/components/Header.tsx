import { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone } from 'lucide-react';
import logoBidev from '@/assets/logo-bidev.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'À propos', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoBidev} 
              alt="BiDev Logo" 
              className={`w-auto animate-fade-in transition-all duration-300 ${
                isScrolled ? 'h-16' : 'h-36'
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-primary' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${
              isScrolled 
                ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-primary'
            }`}>
              Devis gratuit
            </button>
            <button className="btn-hero">
              Commencer
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden mt-4 pb-4 pt-4 transition-colors duration-300 ${
            isScrolled 
              ? 'border-t border-gray-200' 
              : 'border-t border-white/20'
          }`}>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-primary' 
                      : 'text-white/90 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <button className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-primary'
                }`}>
                  Devis gratuit
                </button>
                <button className="btn-hero">
                  Commencer
                </button>
              </div>
            </nav>
          </div>
        )}
        
        {/* Services Encarts - Only show when not scrolled */}
        {!isScrolled && (
          <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="p-2 rounded-lg bg-white/20 mr-3">
                <Code className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Développement Web
                </h3>
                <p className="text-xs text-white/80">
                  Sites internet modernes
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="p-2 rounded-lg bg-white/20 mr-3">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Développement Application
                </h3>
                <p className="text-xs text-white/80">
                  Applications sur mesure
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;