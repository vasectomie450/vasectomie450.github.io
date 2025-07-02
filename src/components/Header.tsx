import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.vasectomy'), href: '/vasectomy' },
    { name: t('nav.pricing'), href: '/pricing' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.appointments'), href: '/appointments' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-28 lg:h-32 flex items-center">
              <img
                src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/Vasectomie%20450.png"
                alt="Vasectomie 450"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-teal-600 ${
                  location.pathname === item.href
                    ? 'text-teal-600 border-b-2 border-teal-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="lang-toggle flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>

            {/* Phone (Desktop) */}
            <a
              href="tel:+14509992973"
              className="hidden lg:flex items-center space-x-2 text-teal-600 hover:text-teal-700 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(450) 999-2973</span>
            </a>

            {/* CTA Button */}
            <Link
              to="/appointments"
              className="hidden lg:flex items-center space-x-2 btn-primary text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('nav.appointment')}</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="px-4 pt-4 border-t border-gray-200">
                <Link
                  to="/appointments"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 btn-primary w-full"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t('nav.appointment')}</span>
                </Link>
                
                <a
                  href="tel:+14509992973"
                  className="flex items-center justify-center space-x-2 mt-3 py-3 text-teal-600 hover:text-teal-700 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(450) 999-2973</span>
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
