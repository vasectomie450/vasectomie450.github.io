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
    'nav.appointments': 'Rendez-vous',
    
    // Hero Section
    'hero.title': 'Vasectomie Sans Bistouri',
    'hero.subtitle': 'Technique moderne et sécuritaire avec Dr Mélanie Savard-Côté',
    'hero.description': 'Plus de 10 ans d\'expérience • Procédure de 15 minutes • 640$ tout inclus • Rendez-vous rapide',
    'hero.cta.primary': 'Réserver maintenant',
    'hero.cta.secondary': 'En savoir plus',
    'hero.phone': '(450) 999-2973',
    
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
    'cta.phone': 'Ou appelez: (450) 999-2973',
    
    // Footer
    'footer.hours': 'Heures d\'ouverture',
    'footer.location': 'Localisation',
    'footer.contact': 'Contact',
    'footer.privacy': 'Politique de confidentialité',
    'footer.copyright': '© 2024 Vasectomie 450. Tous droits réservés.',
    
    // Vasectomy Page
    'vasectomy.hero.title': 'Qu\'est-ce que la vasectomie sans bistouri?',
    'vasectomy.hero.description': 'La vasectomie sans bistouri est une technique moderne et minimalement invasive qui utilise des instruments spécialisés pour accéder aux canaux déférents sans incision traditionnelle.',
    'vasectomy.process.title': 'Le processus en 4 étapes',
    'vasectomy.process.subtitle': 'Une approche structurée pour votre confort et votre sécurité',
    'vasectomy.step1.title': 'Consultation',
    'vasectomy.step1.desc': 'Évaluation médicale et discussion des attentes',
    'vasectomy.step2.title': 'Préparation',
    'vasectomy.step2.desc': 'Instructions pré-opératoires et préparation locale',
    'vasectomy.step3.title': 'Procédure',
    'vasectomy.step3.desc': 'Vasectomie sans bistouri en 15 minutes',
    'vasectomy.step4.title': 'Récupération',
    'vasectomy.step4.desc': 'Suivi post-opératoire et instructions de soins',
    'vasectomy.safety.title': 'Sécurité',
    'vasectomy.safety.desc': 'Technique éprouvée avec plus de 30 ans d\'utilisation mondiale. Risques minimaux et complications rares.',
    'vasectomy.speed.title': 'Rapidité',
    'vasectomy.speed.desc': 'Procédure complétée en 15 minutes. Retour aux activités normales en 2-3 jours seulement.',
    'vasectomy.comfort.title': 'Confort',
    'vasectomy.comfort.desc': 'Anesthésie locale uniquement. Douleur minimale pendant et après la procédure.',
    'vasectomy.faq.title': 'Questions fréquentes',
    
    // Pricing Page
    'pricing.hero.title': 'Prix transparent et abordable',
    'pricing.hero.description': 'Investissement unique pour une solution contraceptive permanente. Aucun frais caché, prix tout inclus.',
    'pricing.main.title': 'Vasectomie sans bistouri',
    'pricing.main.price': '640$',
    'pricing.main.subtitle': 'Taxes incluses • Paiement unique',
    'pricing.main.cta': 'Réserver maintenant',
    'pricing.payment.title': 'Options de paiement',
    'pricing.payment.subtitle': 'Plusieurs façons de payer pour votre confort',
    'pricing.cards.title': 'Cartes de crédit',
    'pricing.cards.desc': 'Visa, MasterCard, American Express acceptées',
    'pricing.tax.title': 'Crédit d\'impôt',
    'pricing.tax.desc': 'Déductible comme frais médicaux au Québec et Canada',
    'pricing.insurance.title': 'Assurance privée',
    'pricing.insurance.desc': 'Certaines assurances couvrent partiellement',
    'pricing.comparison.title': 'Comparaison des coûts contraceptifs',
    'pricing.comparison.subtitle': 'La vasectomie: l\'investissement le plus rentable à long terme',
    'pricing.cta.title': 'Prêt à faire le meilleur investissement contraceptif?',
    'pricing.cta.description': 'Un seul paiement de 640$ pour une solution permanente et efficace',
    
    // FAQ Page
    'faq.title': 'Questions fréquemment posées',
    'faq.subtitle': 'Tout ce que vous devez savoir sur la vasectomie sans bistouri',
    
    // Blog Page
    'blog.title': 'Actualités et informations',
    'blog.subtitle': 'Restez informé sur la vasectomie et la santé masculine',
    
    // About Page
    'about.title': 'À Propos de Vasectomie450',
    'about.subtitle': 'Votre clinique spécialisée en vasectomie sans bistouri, offrant des soins professionnels et personnalisés dans un environnement moderne et sécuritaire.',
    'about.doctor.name': 'Dre. Marie-Claude Tremblay',
    'about.doctor.title': 'Médecin spécialisée en urologie',
    'about.doctor.description': 'Médecin spécialisée en urologie avec plus de 15 années d\'expérience dans les procédures de vasectomie sans bistouri. Diplômée de l\'Université de Montréal, elle s\'est perfectionnée dans les techniques les plus modernes et les moins invasives.',
    'about.technique.title': 'Technique Sans Bistouri',
    'about.technique.subtitle': 'Nous utilisons la technique de vasectomie sans bistouri, plus moderne et moins invasive que les méthodes traditionnelles.',
    'about.values.title': 'Nos Valeurs',
    'about.values.subtitle': 'Ce qui nous guide dans notre pratique quotidienne',
    
    // Contact Page
    'contact.title': 'Nous contacter',
    'contact.subtitle': 'Contactez-nous pour toute question ou information supplémentaire. Notre équipe est là pour vous accompagner.',
    'contact.methods.title': 'Comment nous joindre',
    'contact.methods.subtitle': 'Plusieurs moyens pour nous contacter selon vos préférences',
    'contact.phone.title': 'Téléphone',
    'contact.phone.desc': 'Appelez-nous pour poser vos questions ou obtenir des informations',
    'contact.email.title': 'Email',
    'contact.email.desc': 'Écrivez-nous pour toute demande d\'information',
    'contact.clinics.title': 'Nos cliniques',
    'contact.clinics.subtitle': 'Deux emplacements pour mieux vous servir',
    'contact.main.clinic': 'Clinique principale',
    'contact.main.clinic.name': 'Cliniques Infirmières des Laurentides',
    'contact.main.exterior.alt': 'Vue extérieure - Cliniques Infirmières des Laurentides',
    'contact.main.exterior.caption': 'Vue extérieure de la clinique',
    'contact.main.interior.alt': 'Vue intérieure - Cliniques Infirmières des Laurentides',
    'contact.main.interior.caption': 'Intérieur moderne',
    'contact.main.team.alt': 'Équipe médicale - Cliniques Infirmières des Laurentides',
    'contact.main.team.caption': 'Notre équipe',
    'contact.main.map.title': 'Cliniques Infirmières des Laurentides - Saint-Eustache',
    'contact.secondary.clinic': 'Clinique secondaire',
    'contact.secondary.clinic.name': 'Complexe de Santé Huntingdon',
    'contact.secondary.exterior.alt': 'Vue extérieure - Complexe de Santé Huntingdon',
    'contact.secondary.exterior.caption': 'Vue extérieure de la clinique',
    'contact.secondary.reception.alt': 'Accueil - Complexe de Santé Huntingdon',
    'contact.secondary.reception.caption': 'Accueil chaleureux',
    'contact.secondary.room.alt': 'Salle de consultation - Complexe de Santé Huntingdon',
    'contact.secondary.room.caption': 'Salle de consultation',
    'contact.secondary.map.title': 'Complexe de Santé Huntingdon',
    'contact.hours.weekdays': 'Lun-Ven: 8h00-17h00',
    'contact.hours.saturday': 'Sam: 9h00-15h00',
    'contact.hours.sunday': 'Dimanche: Fermé',
    'contact.info.title': 'Informations de contact',
    'contact.info.phone.main': 'Téléphone principal',
    'contact.info.hours.title': 'Heures d\'ouverture',
    'contact.emergency.title': 'Urgences post-opératoires',
    'contact.emergency.desc': 'Ligne d\'urgence 24h/24 pour les patients opérés dans nos deux cliniques. N\'hésitez pas à nous contacter si vous avez des préoccupations après votre intervention.',
    'contact.emergency.button': 'Urgence: (450) 999-2973',
    'contact.cta.title': 'Prêt à nous contacter?',
    'contact.cta.description': 'Notre équipe est disponible pour répondre à toutes vos questions sur la vasectomie sans bistouri',
    'contact.cta.call': 'Appeler maintenant',
    'contact.cta.email': 'Envoyer un email',
    
    // Appointments Page (formerly Rendez-vous)
    'appointments.title': 'Prendre rendez-vous',
    'appointments.subtitle': 'Planifiez votre consultation de vasectomie sans bistouri. Rendez-vous disponibles rapidement dans nos deux cliniques.',
    'appointments.steps.title': 'Étapes simples pour votre rendez-vous',
    'appointments.steps.subtitle': 'Suivez ces étapes simples pour planifier votre consultation et procédure',
    'appointments.questionnaire.title': 'Compléter le Questionnaire Santé',
    'appointments.questionnaire.desc': 'Questionnaire médical obligatoire (15 minutes)',
    'appointments.questionnaire.cta': 'Commencer le questionnaire',
    'appointments.questionnaire.important.title': 'Important',
    'appointments.questionnaire.important.desc': 'Ce questionnaire doit idéalement être complété avant la prise de rendez-vous pour permettre une consultation et vasectomie en une seule visite.',
    'appointments.questionnaire.required': 'Questionnaire santé requis',
    'appointments.booking.title': 'Réservation en ligne',
    'appointments.booking.desc': 'Réservez votre consultation directement en ligne 24h/24',
    'appointments.booking.cta': 'Réserver maintenant',
    'appointments.options.title': 'Options de rendez-vous',
    'appointments.same.day.title': 'Consultation + Vasectomie (même visite)',
    'appointments.same.day.desc': 'Après avoir complété le questionnaire santé, vous pouvez avoir votre consultation et procédure le même jour.',
    'appointments.virtual.title': 'Consultation virtuelle',
    'appointments.virtual.desc': 'Rencontrez le médecin virtuellement pour discuter de la procédure avant de planifier l\'intervention.',
    'appointments.virtual.flexible': 'Flexible et pratique',
    'appointments.onsite.title': 'Questionnaire sur place',
    'appointments.onsite.desc': 'Si vous ne pouvez pas compléter le questionnaire en ligne, il est possible de le faire sur place lors d\'une visite de consultation.',
    'appointments.onsite.note.title': 'Note importante',
    'appointments.onsite.note.desc': 'Dans ce cas, la vasectomie pourrait ne pas avoir lieu le jour même.',
    'appointments.info.title': 'Informations importantes',
    'appointments.info.available': 'Rendez-vous disponibles sous 14 jours',
    'appointments.info.no.referral': 'Aucune référence médicale requise',
    'appointments.info.same.day': 'Consultation et procédure le même jour possible',
    'appointments.info.parking': 'Stationnement gratuit disponible',
    'appointments.info.both.clinics': 'Services disponibles dans les deux cliniques',
    'appointments.info.emergency': 'Ligne d\'urgence 24h/24 post-opératoire',
    'appointments.cta.title': 'Prêt à commencer?',
    'appointments.cta.description': 'Commencez par compléter le questionnaire santé, puis réservez votre consultation',
    'appointments.cta.questionnaire': 'Questionnaire santé',
    'appointments.cta.booking': 'Réserver en ligne',
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
    'nav.appointments': 'Appointments',
    
    // Hero Section
    'hero.title': 'No-Scalpel Vasectomy',
    'hero.subtitle': 'Modern and safe technique with Dr Mélanie Savard-Côté',
    'hero.description': '10+ years experience • 15-minute procedure • $640 all-inclusive • Fast appointments',
    'hero.cta.primary': 'Book Now',
    'hero.cta.secondary': 'Learn More',
    'hero.phone': '(450) 999-2973',
    
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
    'cta.phone': 'Or call: (450) 999-2973',
    
    // Footer
    'footer.hours': 'Opening Hours',
    'footer.location': 'Location',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2024 Vasectomy 450. All rights reserved.',
    
    // Vasectomy Page
    'vasectomy.hero.title': 'What is no-scalpel vasectomy?',
    'vasectomy.hero.description': 'No-scalpel vasectomy is a modern and minimally invasive technique that uses specialized instruments to access the vas deferens without traditional incision.',
    'vasectomy.process.title': 'The 4-step process',
    'vasectomy.process.subtitle': 'A structured approach for your comfort and safety',
    'vasectomy.step1.title': 'Consultation',
    'vasectomy.step1.desc': 'Medical evaluation and discussion of expectations',
    'vasectomy.step2.title': 'Preparation',
    'vasectomy.step2.desc': 'Pre-operative instructions and local preparation',
    'vasectomy.step3.title': 'Procedure',
    'vasectomy.step3.desc': 'No-scalpel vasectomy in 15 minutes',
    'vasectomy.step4.title': 'Recovery',
    'vasectomy.step4.desc': 'Post-operative follow-up and care instructions',
    'vasectomy.safety.title': 'Safety',
    'vasectomy.safety.desc': 'Proven technique with over 30 years of worldwide use. Minimal risks and rare complications.',
    'vasectomy.speed.title': 'Speed',
    'vasectomy.speed.desc': 'Procedure completed in 15 minutes. Return to normal activities in just 2-3 days.',
    'vasectomy.comfort.title': 'Comfort',
    'vasectomy.comfort.desc': 'Local anesthesia only. Minimal pain during and after the procedure.',
    'vasectomy.faq.title': 'Frequently asked questions',
    
    // Pricing Page
    'pricing.hero.title': 'Transparent and affordable pricing',
    'pricing.hero.description': 'One-time investment for a permanent contraceptive solution. No hidden fees, all-inclusive price.',
    'pricing.main.title': 'No-scalpel vasectomy',
    'pricing.main.price': '$640',
    'pricing.main.subtitle': 'Taxes included • One-time payment',
    'pricing.main.cta': 'Book now',
    'pricing.payment.title': 'Payment options',
    'pricing.payment.subtitle': 'Multiple ways to pay for your convenience',
    'pricing.cards.title': 'Credit cards',
    'pricing.cards.desc': 'Visa, MasterCard, American Express accepted',
    'pricing.tax.title': 'Tax credit',
    'pricing.tax.desc': 'Deductible as medical expenses in Quebec and Canada',
    'pricing.insurance.title': 'Private insurance',
    'pricing.insurance.desc': 'Some insurance plans provide partial coverage',
    'pricing.comparison.title': 'Contraceptive cost comparison',
    'pricing.comparison.subtitle': 'Vasectomy: the most cost-effective long-term investment',
    'pricing.cta.title': 'Ready to make the best contraceptive investment?',
    'pricing.cta.description': 'A single payment of $640 for a permanent and effective solution',
    
    // FAQ Page
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about no-scalpel vasectomy',
    
    // Blog Page
    'blog.title': 'News and Information',
    'blog.subtitle': 'Stay informed about vasectomy and men\'s health',
    
    // About Page
    'about.title': 'About Vasectomy450',
    'about.subtitle': 'Your specialized no-scalpel vasectomy clinic, offering professional and personalized care in a modern and safe environment.',
    'about.doctor.name': 'Dr. Marie-Claude Tremblay',
    'about.doctor.title': 'Urologist specialist physician',
    'about.doctor.description': 'Urologist specialist physician with over 15 years of experience in no-scalpel vasectomy procedures. Graduate of the University of Montreal, she has specialized in the most modern and least invasive techniques.',
    'about.technique.title': 'No-Scalpel Technique',
    'about.technique.subtitle': 'We use the no-scalpel vasectomy technique, which is more modern and less invasive than traditional methods.',
    'about.values.title': 'Our Values',
    'about.values.subtitle': 'What guides us in our daily practice',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Contact us for any questions or additional information. Our team is here to support you.',
    'contact.methods.title': 'How to reach us',
    'contact.methods.subtitle': 'Multiple ways to contact us according to your preferences',
    'contact.phone.title': 'Phone',
    'contact.phone.desc': 'Call us to ask questions or get information',
    'contact.email.title': 'Email',
    'contact.email.desc': 'Write to us for any information request',
    'contact.clinics.title': 'Our clinics',
    'contact.clinics.subtitle': 'Two locations to better serve you',
    'contact.main.clinic': 'Main clinic',
    'contact.main.clinic.name': 'Laurentides Nursing Clinics',
    'contact.main.exterior.alt': 'Exterior view - Laurentides Nursing Clinics',
    'contact.main.exterior.caption': 'Clinic exterior view',
    'contact.main.interior.alt': 'Interior view - Laurentides Nursing Clinics',
    'contact.main.interior.caption': 'Modern interior',
    'contact.main.team.alt': 'Medical team - Laurentides Nursing Clinics',
    'contact.main.team.caption': 'Our team',
    'contact.main.map.title': 'Laurentides Nursing Clinics - Saint-Eustache',
    'contact.secondary.clinic': 'Secondary clinic',
    'contact.secondary.clinic.name': 'Huntingdon Health Complex',
    'contact.secondary.exterior.alt': 'Exterior view - Huntingdon Health Complex',
    'contact.secondary.exterior.caption': 'Clinic exterior view',
    'contact.secondary.reception.alt': 'Reception - Huntingdon Health Complex',
    'contact.secondary.reception.caption': 'Warm reception',
    'contact.secondary.room.alt': 'Consultation room - Huntingdon Health Complex',
    'contact.secondary.room.caption': 'Consultation room',
    'contact.secondary.map.title': 'Huntingdon Health Complex',
    'contact.hours.weekdays': 'Mon-Fri: 8:00 AM - 5:00 PM',
    'contact.hours.saturday': 'Sat: 9:00 AM - 3:00 PM',
    'contact.hours.sunday': 'Sunday: Closed',
    'contact.info.title': 'Contact information',
    'contact.info.phone.main': 'Main phone',
    'contact.info.hours.title': 'Opening hours',
    'contact.emergency.title': 'Post-operative emergencies',
    'contact.emergency.desc': '24/7 emergency line for patients operated at our two clinics. Don\'t hesitate to contact us if you have concerns after your procedure.',
    'contact.emergency.button': 'Emergency: (450) 999-2973',
    'contact.cta.title': 'Ready to contact us?',
    'contact.cta.description': 'Our team is available to answer all your questions about no-scalpel vasectomy',
    'contact.cta.call': 'Call now',
    'contact.cta.email': 'Send email',
    
    // Appointments Page (formerly Rendez-vous)
    'appointments.title': 'Book an Appointment',
    'appointments.subtitle': 'Schedule your no-scalpel vasectomy consultation. Appointments available quickly at both our clinics.',
    'appointments.steps.title': 'Simple steps for your appointment',
    'appointments.steps.subtitle': 'Follow these simple steps to plan your consultation and procedure',
    'appointments.questionnaire.title': 'Complete the Health Questionnaire',
    'appointments.questionnaire.desc': 'Mandatory medical questionnaire (15 minutes)',
    'appointments.questionnaire.cta': 'Start questionnaire',
    'appointments.questionnaire.important.title': 'Important',
    'appointments.questionnaire.important.desc': 'This questionnaire should ideally be completed before booking to allow consultation and vasectomy in a single visit.',
    'appointments.questionnaire.required': 'Health questionnaire required',
    'appointments.booking.title': 'Online booking',
    'appointments.booking.desc': 'Book your consultation directly online 24/7',
    'appointments.booking.cta': 'Book now',
    'appointments.options.title': 'Appointment options',
    'appointments.same.day.title': 'Consultation + Vasectomy (same visit)',
    'appointments.same.day.desc': 'After completing the health questionnaire, you can have your consultation and procedure on the same day.',
    'appointments.virtual.title': 'Virtual consultation',
    'appointments.virtual.desc': 'Meet with the doctor virtually to discuss the procedure before scheduling the intervention.',
    'appointments.virtual.flexible': 'Flexible and convenient',
    'appointments.onsite.title': 'On-site questionnaire',
    'appointments.onsite.desc': 'If you cannot complete the questionnaire online, it is possible to do it on-site during a consultation visit.',
    'appointments.onsite.note.title': 'Important note',
    'appointments.onsite.note.desc': 'In this case, the vasectomy might not take place on the same day.',
    'appointments.info.title': 'Important information',
    'appointments.info.available': 'Appointments available within 14 days',
    'appointments.info.no.referral': 'No medical referral required',
    'appointments.info.same.day': 'Consultation and procedure same day possible',
    'appointments.info.parking': 'Free parking available',
    'appointments.info.both.clinics': 'Services available at both clinics',
    'appointments.info.emergency': '24/7 post-operative emergency line',
    'appointments.cta.title': 'Ready to get started?',
    'appointments.cta.description': 'Start by completing the health questionnaire, then book your consultation',
    'appointments.cta.questionnaire': 'Health questionnaire',
    'appointments.cta.booking': 'Book online',
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
