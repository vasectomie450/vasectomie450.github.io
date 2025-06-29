import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="floating-cta">
      <div className="flex flex-col space-y-2">
        {/* Book Appointment Button */}
        <Link
          to="/contact"
          className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Calendar className="w-5 h-5" />
          <span className="font-semibold text-sm">{t('nav.appointment')}</span>
        </Link>
        
        {/* Phone Button */}
        <a
          href="tel:+14501234567"
          className="flex items-center justify-center bg-coral-500 hover:bg-coral-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
