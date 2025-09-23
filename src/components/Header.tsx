import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoBidev from '@/assets/logo-bidev.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projets', href: '/projets' },
    { name: 'Développement', href: '/developpement-web' },
    { name: 'Référencement', href: '/referencement' },
    { name: 'Qui sommes nous', href: '/qui-sommes-nous' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
        <div className="flex items-center justify-between min-h-[50px] sm:min-h-[60px] lg:min-h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src={logoBidev} 
              alt="BiDev Logo" 
              className={`w-auto animate-fade-in transition-all duration-300 ${
                isScrolled 
                  ? 'h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16' 
                  : 'h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 flex-1 justify-center max-w-3xl mx-4 lg:mx-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-primary' 
                      : 'text-white/90 hover:text-white'
                  } ${isActive ? 'text-primary' : ''}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                    isActive ? 'w-full' : 'w-0'
                  }`}></span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-2 lg:space-x-3 xl:space-x-4 flex-shrink-0">
            <Link 
              to="/contact" 
              className="btn-hero text-xs lg:text-sm xl:text-base px-2 lg:px-3 xl:px-4 py-1.5 lg:py-2 whitespace-nowrap"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 flex-shrink-0 ${
              isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-2 sm:mt-3 pb-3 sm:pb-4 pt-3 sm:pt-4 transition-colors duration-300 bg-popover/95 backdrop-blur-md rounded-lg mx-2 sm:mx-4 border border-border/50 shadow-lg ${
            isScrolled 
              ? 'border-gray-200/50' 
              : 'border-white/20'
          }`}>
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="font-medium transition-colors duration-300 text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 sm:space-y-3 pt-2 sm:pt-3 px-3 sm:px-4">
                <Link 
                  to="/contact" 
                  className="btn-hero text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Devis gratuit
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;