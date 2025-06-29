import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.vasectomy': 'Vasectomie',
    'nav.pricing': 'Prix',
    'nav.faq': 'Questions',
    'nav.blog': 'Actualités',
    'nav.contact': 'Contact',
    'nav.about': 'À propos',
    'nav.appointment': 'Prendre rendez-vous',
    
    // Hero Section
    'hero.title': 'Vasectomie Sans Bistouri',
    'hero.subtitle': 'Technique moderne et sécuritaire avec Dr Mélanie Savard-Côté',
    'hero.description': 'Plus de 10 ans d\'expérience • Procédure de 15 minutes • 640$ tout inclus • Rendez-vous rapide',
    'hero.cta.primary': 'Réserver maintenant',
    'hero.cta.secondary': 'En savoir plus',
    'hero.phone': '(450) 123-4567',
    
    // Features
    'features.title': 'Pourquoi choisir Vasectomie 450?',
    'features.experience.title': '10+ ans d\'expérience',
    'features.experience.desc': 'Expertise reconnue en vasectomie sans bistouri',
    'features.technique.title': 'Technique moderne',
    'features.technique.desc': 'Sans bistouri, moins invasive, récupération rapide',
    'features.price.title': '640$ tout inclus',
    'features.price.desc': 'Prix transparent, aucun frais caché',
    'features.appointment.title': 'Rendez-vous rapide',
    'features.appointment.desc': 'Évitez les listes d\'attente du système public',
    
    // About Doctor
    'doctor.title': 'Dr Mélanie Savard-Côté',
    'doctor.subtitle': 'Médecin spécialisée en vasectomie',
    'doctor.description': 'Seule femme médecin offrant la vasectomie dans la région des Laurentides. Plus de 10 ans d\'expérience avec la technique sans bistouri.',
    
    // Testimonials
    'testimonials.title': 'Ce que disent nos patients',
    'testimonials.loading': 'Chargement des avis...',
    
    // CTA
    'cta.title': 'Prêt à prendre rendez-vous?',
    'cta.description': 'Contactez-nous dès aujourd\'hui pour planifier votre consultation',
    'cta.button': 'Prendre rendez-vous',
    'cta.phone': 'Ou appelez: (450) 123-4567',
    
    // Footer
    'footer.hours': 'Heures d\'ouverture',
    'footer.location': 'Localisation',
    'footer.contact': 'Contact',
    'footer.privacy': 'Politique de confidentialité',
    'footer.copyright': '© 2024 Vasectomie 450. Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.vasectomy': 'Vasectomy',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.blog': 'News',
    'nav.contact': 'Contact',
    'nav.about': 'About',
    'nav.appointment': 'Book Appointment',
    
    // Hero Section
    'hero.title': 'No-Scalpel Vasectomy',
    'hero.subtitle': 'Modern and safe technique with Dr Mélanie Savard-Côté',
    'hero.description': '10+ years experience • 15-minute procedure • $640 all-inclusive • Fast appointments',
    'hero.cta.primary': 'Book Now',
    'hero.cta.secondary': 'Learn More',
    'hero.phone': '(450) 123-4567',
    
    // Features
    'features.title': 'Why choose Vasectomy 450?',
    'features.experience.title': '10+ years experience',
    'features.experience.desc': 'Recognized expertise in no-scalpel vasectomy',
    'features.technique.title': 'Modern technique',
    'features.technique.desc': 'No-scalpel, less invasive, fast recovery',
    'features.price.title': '$640 all-inclusive',
    'features.price.desc': 'Transparent pricing, no hidden fees',
    'features.appointment.title': 'Fast appointments',
    'features.appointment.desc': 'Avoid public system waiting lists',
    
    // About Doctor
    'doctor.title': 'Dr Mélanie Savard-Côté',
    'doctor.subtitle': 'Vasectomy specialist physician',
    'doctor.description': 'The only female doctor offering vasectomy in the Laurentides region. Over 10 years of experience with the no-scalpel technique.',
    
    // Testimonials
    'testimonials.title': 'What our patients say',
    'testimonials.loading': 'Loading reviews...',
    
    // CTA
    'cta.title': 'Ready to book your appointment?',
    'cta.description': 'Contact us today to schedule your consultation',
    'cta.button': 'Book Appointment',
    'cta.phone': 'Or call: (450) 123-4567',
    
    // Footer
    'footer.hours': 'Opening Hours',
    'footer.location': 'Location',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2024 Vasectomy 450. All rights reserved.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
