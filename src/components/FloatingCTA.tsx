// React and icon imports
import React from 'react';
import { Calendar, Phone } from 'lucide-react';

// Context for internationalization
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Floating Call-to-Action component that appears after user scrolls
 * Provides quick access to appointment booking and phone contact
 */
const FloatingCTA: React.FC = () => {
  const { t } = useLanguage();

  /**
   * Opens the Medexa appointment booking system in a new tab
   * Uses custom branding colors (teal and dark gray)
   */
  const handleBookingClick = () => {
    window.open('https://secure.medexa.com/onlineAppointmentInformation?APIKey=4464897914164F578AB5C6131D74ADF3&flowColor=1a1d1e&backgroundColor=9ecbd8', '_blank');
  };

  return (
    <div className="floating-cta">
      <div className="flex flex-col space-y-2">
        {/* Primary CTA: Book Appointment Button */}
        <button
          onClick={handleBookingClick}
          className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          aria-label={t('nav.appointment')}
        >
          <Calendar className="w-5 h-5" />
          <span className="font-semibold text-sm">{t('nav.appointment')}</span>
        </button>
        
        {/* Secondary CTA: Direct phone call button */}
        <a
          href="tel:+14509992973"
          className="flex items-center justify-center bg-coral-500 hover:bg-coral-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          aria-label="Call clinic directly"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
