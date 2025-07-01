import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <span className="text-xl font-bold">Vasectomie</span>
                <span className="text-xl font-bold text-teal-400 ml-1">450</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/vasectomie450" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/vasectomie450" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/vasectomie450" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/vasectomie450" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@vasectomie450" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Saint-Eustache, QC</p>
                  <p>Laurentides</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+14509992973" className="text-sm text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  (450) 999-2973
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:info@vasectomie450.com" className="text-sm text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  info@vasectomie450.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t('footer.hours')}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>{t('footer.hours.weekdays')}</span>
                <span>{t('footer.hours.weekdays.time')}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('footer.hours.saturday')}</span>
                <span>{t('footer.hours.saturday.time')}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('footer.hours.sunday')}</span>
                <span>{t('footer.hours.closed')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t('footer.quick.links')}</h3>
            <div className="space-y-2">
              <Link to="/vasectomy" className="block text-sm text-gray-300 hover:text-teal-400 transition-colors duration-200">
                {t('footer.vasectomy.link')}
              </Link>
              <Link to="/pricing" className="block text-sm text-gray-300 hover:text-teal-400 transition-colors duration-200">
                {t('footer.pricing.link')}
              </Link>
              <Link to="/faq" className="block text-sm text-gray-300 hover:text-teal-400 transition-colors duration-200">
                {t('footer.faq.link')}
              </Link>
              <Link to="/appointments" className="block text-sm text-gray-300 hover:text-teal-400 transition-colors duration-200">
                {t('footer.appointment.link')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
