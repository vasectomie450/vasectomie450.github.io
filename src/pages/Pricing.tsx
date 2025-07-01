import React from 'react';
import { Check, CreditCard, Receipt, Shield, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const paymentOptions = [
    {
      icon: CreditCard,
      title: t('pricing.cards.title'),
      description: t('pricing.cards.desc'),
      color: 'blue'
    },
    {
      icon: Receipt,
      title: t('pricing.tax.title'),
      description: t('pricing.tax.desc'),
      color: 'green'
    },
    {
      icon: Shield,
      title: t('pricing.insurance.title'),
      description: t('pricing.insurance.desc'),
      color: 'purple'
    }
  ];

  const includedFeatures = [
    t('pricing.features.consultation'),
    t('pricing.features.procedure'),
    t('pricing.features.anesthesia'),
    t('pricing.features.followup'),
    t('pricing.features.instructions'),
    t('pricing.features.emergency')
  ];

  const handleBookingClick = () => {
    window.open('https://secure.medexa.com/onlineAppointmentInformation?APIKey=4464897914164F578AB5C6131D74ADF3&flowColor=1a1d1e&backgroundColor=9ecbd8', '_blank');
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {t('pricing.hero.title')}
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {t('pricing.hero.description')}
          </p>
        </div>
      </section>

      {/* Main Pricing Card */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-lg mx-auto">
            <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 text-white shadow-2xl">
              {/* All Inclusive Badge */}
              <div className="absolute -top-3 right-6">
                <span className="bg-coral-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {t('pricing.badge.allinclusive')}
                </span>
              </div>
              
              {/* Service Title */}
              <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                {t('pricing.main.title')}
              </h2>
              
              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-6xl font-bold">640$</span>
              </div>
              
              {/* Subtitle */}
              <p className="text-center text-teal-100 mb-8 text-lg">
                {t('pricing.main.subtitle')}
              </p>
              
              {/* Features List */}
              <div className="space-y-4 mb-8">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-white bg-teal-400 rounded-full p-1" />
                    </div>
                    <span className="text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <button 
                onClick={handleBookingClick}
                className="w-full bg-coral-500 hover:bg-coral-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>
                  {t('pricing.main.cta')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.payment.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('pricing.payment.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentOptions.map((option, index) => (
              <div key={index} className="card text-center">
                <div className={`w-16 h-16 bg-${option.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <option.icon className={`w-8 h-8 text-${option.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.comparison.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('pricing.comparison.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-teal-50 to-primary-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-teal-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('pricing.main.title')}
                  </h4>
                  <p className="text-2xl font-bold text-teal-600 mb-1">640$</p>
                  <p className="text-sm text-gray-600">
                    {t('pricing.comparison.onetime')}
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('pricing.comparison.pill')}
                  </h4>
                  <p className="text-2xl font-bold text-gray-600 mb-1">3,600$</p>
                  <p className="text-sm text-gray-600">
                    {t('pricing.comparison.tenyears')}
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('pricing.comparison.condoms')}
                  </h4>
                  <p className="text-2xl font-bold text-gray-600 mb-1">2,400$</p>
                  <p className="text-sm text-gray-600">
                    {t('pricing.comparison.tenyears')}
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('pricing.comparison.iud')}
                  </h4>
                  <p className="text-2xl font-bold text-gray-600 mb-1">1,200$</p>
                  <p className="text-sm text-gray-600">
                    {t('pricing.comparison.tenyears')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('pricing.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('pricing.cta.description')}
          </p>
          
          <button 
            onClick={handleBookingClick}
            className="btn-coral text-lg px-8 py-4"
          >
            {t('pricing.main.cta')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
