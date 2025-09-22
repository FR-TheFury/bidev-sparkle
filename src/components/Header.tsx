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
    { name: 'Développement', href: '/developpement-web' },
    { name: 'Référencement', href: '/referencement' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between min-h-[60px] sm:min-h-[80px]">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <img 
              src={logoBidev} 
              alt="BiDev Logo" 
              className={`w-auto animate-fade-in transition-all duration-300 ${
                isScrolled 
                  ? 'h-10 sm:h-12 md:h-16' 
                  : 'h-16 sm:h-20 md:h-28 lg:h-36'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center max-w-2xl mx-8">
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
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
            <Link 
              to="/contact" 
              className={`px-3 xl:px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 text-sm xl:text-base ${
                isScrolled 
                  ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-primary'
              }`}
            >
              Devis gratuit
            </Link>
            <Link to="/contact" className="btn-hero text-sm xl:text-base px-3 xl:px-4">
              Commencer
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 flex-shrink-0 ${
              isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden mt-3 sm:mt-4 pb-4 pt-4 transition-colors duration-300 ${
            isScrolled 
              ? 'border-t border-gray-200' 
              : 'border-t border-white/20'
          }`}>
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-300 text-sm sm:text-base ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-primary' 
                      : 'text-white/90 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-3 sm:pt-4">
                <Link 
                  to="/contact" 
                  className={`px-4 py-2.5 sm:py-3 rounded-lg border-2 font-medium transition-all duration-300 text-center text-sm sm:text-base ${
                    isScrolled 
                      ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                      : 'border-white text-white hover:bg-white hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Devis gratuit
                </Link>
                <Link to="/contact" className="btn-hero text-sm sm:text-base" onClick={() => setIsMenuOpen(false)}>
                  Commencer
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