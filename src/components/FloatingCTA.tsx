import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingCTA: React.FC = () => {
  const { t } = useLanguage();

  const handleBookingClick = () => {
    window.open('https://secure.medexa.com/onlineAppointmentInformation?APIKey=4464897914164F578AB5C6131D74ADF3&flowColor=1a1d1e&backgroundColor=9ecbd8', '_blank');
  };

  return (
    <div className="floating-cta">
      <div className="flex flex-col space-y-2">
        {/* Book Appointment Button */}
        <button
          onClick={handleBookingClick}
          className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Calendar className="w-5 h-5" />
          <span className="font-semibold text-sm">{t('nav.appointment')}</span>
        </button>
        
        {/* Phone Button */}
        <a
          href="tel:+14509992973"
          className="flex items-center justify-center bg-coral-500 hover:bg-coral-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
