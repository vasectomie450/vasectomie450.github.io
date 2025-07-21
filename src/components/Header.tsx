import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Globe, Home, Stethoscope, DollarSign, HelpCircle, FileText, User, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/', icon: Home },
    { name: t('nav.vasectomy'), href: '/vasectomy', icon: Stethoscope },
    { name: t('nav.pricing'), href: '/pricing', icon: DollarSign },
    { name: t('nav.faq'), href: '/faq', icon: HelpCircle },
    { name: t('nav.blog'), href: '/blog', icon: FileText },
    { name: t('nav.about'), href: '/about', icon: User },
    { name: t('nav.contact'), href: '/contact', icon: MapPin },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const currentIndex = navigation.findIndex(item => item.href === location.pathname);

  // Smooth position calculation with requestAnimationFrame
  const updateIndicatorPosition = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (currentIndex >= 0 && itemRefs.current[currentIndex] && navRef.current) {
        const activeItem = itemRefs.current[currentIndex];
        const navContainer = navRef.current;
        
        if (activeItem) {
          const navRect = navContainer.getBoundingClientRect();
          const itemRect = activeItem.getBoundingClientRect();
          
          const left = itemRect.left - navRect.left;
          const width = itemRect.width;
          
          setIndicatorStyle(prev => {
            // Only update if position actually changed to prevent unnecessary re-renders
            if (Math.abs(prev.left - left) > 1 || Math.abs(prev.width - width) > 1 || prev.opacity !== 1) {
              return {
                left,
                width,
                opacity: 1
              };
            }
            return prev;
          });
        }
      } else {
        setIndicatorStyle(prev => prev.opacity !== 0 ? { ...prev, opacity: 0 } : prev);
      }
    });
  }, [currentIndex]);

  // Update indicator position when route changes
  useEffect(() => {
    // Add a small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      updateIndicatorPosition();
    }, 50);

    return () => clearTimeout(timer);
  }, [currentIndex, updateIndicatorPosition]);

  // Handle window resize with debouncing
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateIndicatorPosition();
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateIndicatorPosition]);

  // Handle transition state
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400); // Slightly less than transition duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 z-10">
            <div className="h-28 lg:h-32 flex items-center">
              <img
                src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/Vasectomie%20450.png"
                alt="Vasectomie 450"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Sophisticated Navigation */}
          <nav className="hidden lg:flex items-center">
            <div 
              ref={navRef}
              className="relative bg-gradient-to-r from-teal-500/10 via-primary-500/10 to-coral-500/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20 shadow-xl"
            >
              {/* Animated Background Indicator */}
              <div 
                className={`absolute top-2 bottom-2 bg-white rounded-xl shadow-lg ${
                  isTransitioning ? 'transition-all duration-500 ease-out' : ''
                }`}
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.opacity,
                  transform: `scale(${indicatorStyle.opacity > 0 ? 1 : 0.8})`,
                  willChange: 'transform, left, width, opacity'
                }}
              />
              
              {/* Navigation Items */}
              <div className="relative flex items-center">
                {navigation.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  
                  return (
                    <Link
                      key={item.name}
                      ref={(el) => (itemRefs.current[index] = el)}
                      to={item.href}
                      className={`relative flex flex-col items-center justify-center px-4 py-3 rounded-xl transition-all duration-300 group ${
                        isActive 
                          ? 'text-teal-600 z-10' 
                          : 'text-gray-600 hover:text-teal-500 hover:bg-white/30'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-1 transition-all duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`} />
                      <span className={`text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                        isActive ? 'font-semibold' : ''
                      }`}>
                        {item.name}
                      </span>
                      
                      {/* Hover effect */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-primary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="lang-toggle flex items-center space-x-1 px-3 py-2 rounded-lg bg-gradient-to-r from-teal-50 to-primary-50 hover:from-teal-100 hover:to-primary-100 border border-teal-200/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Globe className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-medium uppercase text-teal-700">{language}</span>
            </button>

            {/* Phone (Desktop) */}
            <a
              href="tel:+14509992973"
              className="hidden lg:flex items-center space-x-2 text-teal-600 hover:text-teal-700 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-teal-50"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(450) 999-2973</span>
            </a>

            {/* CTA Button */}
            <Link
              to="/appointments"
              className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-primary-500 hover:from-teal-600 hover:to-primary-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{t('nav.appointment')}</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative z-10"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Sophisticated Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl">
            <div className="p-4">
              {/* Mobile Navigation Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {navigation.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`relative flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 group ${
                        isActive 
                          ? 'bg-gradient-to-br from-teal-500 to-primary-500 text-white shadow-lg transform scale-105' 
                          : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 hover:from-teal-50 hover:to-primary-50 hover:text-teal-600 hover:shadow-md hover:scale-102'
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      <Icon className={`w-6 h-6 mb-2 transition-all duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`} />
                      <span className={`text-sm font-medium text-center transition-all duration-300 ${
                        isActive ? 'font-semibold' : ''
                      }`}>
                        {item.name}
                      </span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-coral-400 rounded-full animate-pulse" />
                      )}
                    </Link>
                  );
                })}
              </div>
              
              {/* Mobile CTA Section */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <Link
                  to="/appointments"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500 to-primary-500 hover:from-teal-600 hover:to-primary-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t('nav.appointment')}</span>
                </Link>
                
                <a
                  href="tel:+14509992973"
                  className="flex items-center justify-center space-x-2 bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-50 py-3 px-4 rounded-xl font-semibold transition-all duration-300 w-full"
                >
                  <Phone className="w-5 h-5" />
                  <span>(450) 999-2973</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
