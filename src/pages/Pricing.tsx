import React from 'react';
import { CheckCircle, CreditCard, Calculator, TrendingUp, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const included = [
    t('language') === 'fr' ? 'Consultation pré-opératoire' : 'Pre-operative consultation',
    t('language') === 'fr' ? 'Procédure vasectomie sans bistouri' : 'No-scalpel vasectomy procedure',
    t('language') === 'fr' ? 'Anesthésie locale' : 'Local anesthesia',
    t('language') === 'fr' ? 'Suivi post-opératoire' : 'Post-operative follow-up',
    t('language') === 'fr' ? 'Instructions de soins' : 'Care instructions',
    t('language') === 'fr' ? 'Ligne d\'urgence 24/7' : '24/7 emergency line'
  ];

  const comparisons = [
    {
      method: t('language') === 'fr' ? 'Pilule contraceptive' : 'Birth control pill',
      monthly: 25,
      yearly: 300,
      total10years: 3000
    },
    {
      method: t('language') === 'fr' ? 'Condoms' : 'Condoms',
      monthly: 20,
      yearly: 240,
      total10years: 2400
    },
    {
      method: t('language') === 'fr' ? 'DIU (stérilet)' : 'IUD',
      monthly: 0,
      yearly: 0,
      total10years: 800
    },
    {
      method: t('language') === 'fr' ? 'Vasectomie' : 'Vasectomy',
      monthly: 0,
      yearly: 0,
      total10years: 640
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
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            {t('pricing.hero.description')}
          </p>

          {/* Main Price Card */}
          <div className="max-w-md mx-auto">
            <div className="card bg-gradient-to-br from-teal-500 to-primary-600 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-coral-500 text-white px-4 py-2 rounded-bl-lg text-sm font-semibold">
                {t('language') === 'fr' ? 'Tout inclus' : 'All inclusive'}
              </div>
              
              <div className="pt-8">
                <h2 className="text-2xl font-bold mb-4">{t('pricing.main.title')}</h2>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{t('pricing.main.price')}</span>
                  <p className="text-white/80 mt-2">{t('pricing.main.subtitle')}</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-left">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={handleBookingClick}
                  className="btn-coral w-full text-lg py-4 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t('pricing.main.cta')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.payment.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('pricing.payment.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pricing.cards.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('pricing.cards.desc')}
              </p>
              <div className="text-sm text-gray-500">
                {t('language') === 'fr' ? 'Paiement sécurisé • Reçu immédiat' : 'Secure payment • Immediate receipt'}
              </div>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pricing.tax.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('pricing.tax.desc')}
              </p>
              <div className="text-sm text-gray-500">
                {t('language') === 'fr' ? 'Jusqu\'à 30% de remboursement possible' : 'Up to 30% reimbursement possible'}
              </div>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-coral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-coral-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pricing.insurance.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('pricing.insurance.desc')}
              </p>
              <div className="text-sm text-gray-500">
                {t('language') === 'fr' ? 'Vérifiez avec votre assureur' : 'Check with your insurer'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.comparison.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('pricing.comparison.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-teal-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {t('language') === 'fr' ? 'Méthode contraceptive' : 'Contraceptive method'}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        {t('language') === 'fr' ? 'Coût mensuel' : 'Monthly cost'}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        {t('language') === 'fr' ? 'Coût annuel' : 'Annual cost'}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        {t('language') === 'fr' ? 'Coût sur 10 ans' : '10-year cost'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisons.map((item, index) => (
                      <tr key={index} className={item.method.includes('Vasectomy') || item.method.includes('Vasectomie') ? 'bg-teal-50' : ''}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {item.method}
                          {(item.method.includes('Vasectomy') || item.method.includes('Vasectomie')) && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                              {t('language') === 'fr' ? 'Recommandé' : 'Recommended'}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 text-center">
                          {item.monthly > 0 ? `${item.monthly}$` : '-'}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 text-center">
                          {item.yearly > 0 ? `${item.yearly}$` : '-'}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-center">
                          <span className={(item.method.includes('Vasectomy') || item.method.includes('Vasectomie')) ? 'text-teal-600' : 'text-gray-900'}>
                            {item.total10years}$
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-6 py-3 rounded-lg">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">
                  {t('language') === 'fr' 
                    ? 'Économies potentielles: jusqu\'à 2,360$ sur 10 ans'
                    : 'Potential savings: up to $2,360 over 10 years'
                  }
                </span>
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleBookingClick}
              className="btn-coral text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>
                {t('language') === 'fr' ? 'Réserver ma consultation' : 'Book my consultation'}
              </span>
            </button>
            <a 
              href="tel:+14509992973"
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
            >
              {t('language') === 'fr' ? 'Poser une question' : 'Ask a question'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
