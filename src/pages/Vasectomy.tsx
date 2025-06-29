import React from 'react';
import { CheckCircle, Clock, Shield, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Vasectomy: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    t('language') === 'fr' ? 'Technique sans bistouri moins invasive' : 'Less invasive no-scalpel technique',
    t('language') === 'fr' ? 'Procédure de 15 minutes seulement' : '15-minute procedure only',
    t('language') === 'fr' ? 'Anesthésie locale uniquement' : 'Local anesthesia only',
    t('language') === 'fr' ? 'Récupération rapide (2-3 jours)' : 'Fast recovery (2-3 days)',
    t('language') === 'fr' ? 'Efficacité de 99.9%' : '99.9% effectiveness',
    t('language') === 'fr' ? 'Aucune cicatrice visible' : 'No visible scarring'
  ];

  const steps = [
    {
      number: '1',
      title: t('vasectomy.step1.title'),
      description: t('vasectomy.step1.desc')
    },
    {
      number: '2',
      title: t('vasectomy.step2.title'),
      description: t('vasectomy.step2.desc')
    },
    {
      number: '3',
      title: t('vasectomy.step3.title'),
      description: t('vasectomy.step3.desc')
    },
    {
      number: '4',
      title: t('vasectomy.step4.title'),
      description: t('vasectomy.step4.desc')
    }
  ];

  const faqItems = [
    {
      question: t('language') === 'fr' ? 'La vasectomie est-elle réversible?' : 'Is vasectomy reversible?',
      answer: t('language') === 'fr' 
        ? 'Bien que techniquement possible, la vasectomie doit être considérée comme permanente. Le taux de succès de la réversion varie et n\'est pas garanti.'
        : 'Although technically possible, vasectomy should be considered permanent. The success rate of reversal varies and is not guaranteed.'
    },
    {
      question: t('language') === 'fr' ? 'Quand puis-je reprendre mes activités?' : 'When can I resume my activities?',
      answer: t('language') === 'fr' 
        ? 'Activités légères après 2-3 jours, travail de bureau après 3-5 jours, exercice intense après 2 semaines.'
        : 'Light activities after 2-3 days, office work after 3-5 days, intense exercise after 2 weeks.'
    },
    {
      question: t('language') === 'fr' ? 'Y a-t-il des effets sur les hormones?' : 'Are there effects on hormones?',
      answer: t('language') === 'fr' 
        ? 'Non, la vasectomie n\'affecte pas la production d\'hormones masculines. Seuls les spermatozoïdes sont bloqués.'
        : 'No, vasectomy does not affect male hormone production. Only sperm are blocked.'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-50 to-teal-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-gradient">{t('vasectomy.hero.title')}</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('vasectomy.hero.description')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-teal-100 to-primary-100 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={t('language') === 'fr' ? 'Technique vasectomie sans bistouri' : 'No-scalpel vasectomy technique'}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('vasectomy.process.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('vasectomy.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technique Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('vasectomy.safety.title')}</h3>
              <p className="text-gray-600">
                {t('vasectomy.safety.desc')}
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('vasectomy.speed.title')}</h3>
              <p className="text-gray-600">
                {t('vasectomy.speed.desc')}
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-coral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-coral-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('vasectomy.comfort.title')}</h3>
              <p className="text-gray-600">
                {t('vasectomy.comfort.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('vasectomy.faq.title')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vasectomy;
