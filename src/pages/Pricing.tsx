import React from 'react';
import { Check, CreditCard, Receipt, Shield, DollarSign } from 'lucide-react';
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

  const handleBookingClick = () => {
    window.open('https://secure.medexa.com/onlineAppointmentInformation?APIKey=4464897914164F578AB5C6131D74ADF3&flowColor=1a1d1e&backgroundColor=9ecbd8', '_blank');
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-50 to-teal-50">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">{t('pricing.hero.title')}</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {t('pricing.hero.description')}
          </p>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="card text-center bg-gradient-to-br from-teal-50 to-primary-50 border-2 border-teal-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6 mx-auto">
                <DollarSign className="w-8 h-8 text-teal-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('pricing.main.title')}
              </h2>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-teal-600">{t('pricing.main.price')}</span>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                {t('pricing.main.subtitle')}
              </p>
              
              <button 
                onClick={handleBookingClick}
                className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
              >
                {t('pricing.main.cta')}
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
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('pricing.main.title')}
                  </h4>
                  <p className="text-2xl font-bold text-teal-600 mb-1">640$</p>
                  <p className="text-sm text-gray-600">
                    {t('language') === 'fr' ? 'Une fois' : 'One time'}
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('language') === 'fr' ? 'Pilule contraceptive' : 'Birth control pill'}
                  </h4>
                  <p className="text-2xl font-bold text-gray-600 mb-1">
                    {t('language') === 'fr' ? '3,600$' : '$3,600'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t('language') === 'fr' ? '10 ans' : '10 years'}
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('language') === 'fr' ? 'Condoms' : 'Condoms'}
                  </h4>
                  <p className="text-2xl font-bold text-gray-600 mb-1">
                    {t('language') === 'fr' ? '2,400$' : '$2,400'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t('language') === 'fr' ? '10 ans' : '10 years'}
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">DIU</h4>
                  <p className="text-2xl font-bold text-gray-600 mb-1">
                    {t('language') === 'fr' ? '1,200$' : '$1,200'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t('language') === 'fr' ? '10 ans' : '10 years'}
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
