import React from 'react';
import { CheckCircle, Clock, Shield, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Vasectomy: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    t('vasectomy.benefits.scalpel'),
    t('vasectomy.benefits.duration'),
    t('vasectomy.benefits.anesthesia'),
    t('vasectomy.benefits.recovery'),
    t('vasectomy.benefits.effectiveness'),
    t('vasectomy.benefits.scarring')
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
      question: t('vasectomy.faq.reversible.question'),
      answer: t('vasectomy.faq.reversible.answer')
    },
    {
      question: t('vasectomy.faq.activities.question'),
      answer: t('vasectomy.faq.activities.answer')
    },
    {
      question: t('vasectomy.faq.hormones.question'),
      answer: t('vasectomy.faq.hormones.answer')
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
                  alt={t('vasectomy.technique.title')}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('vasectomy.technique.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('vasectomy.technique.subtitle')}
            </p>
          </div>

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
