import React from 'react';
import { CheckCircle, CreditCard, Calculator, TrendingUp, Calendar } from 'lucide-react';

const Pricing: React.FC = () => {
  const included = [
    'Consultation pré-opératoire',
    'Procédure vasectomie sans bistouri',
    'Anesthésie locale',
    'Suivi post-opératoire',
    'Instructions de soins',
    'Ligne d\'urgence 24/7'
  ];

  const comparisons = [
    {
      method: 'Pilule contraceptive',
      monthly: 25,
      yearly: 300,
      total10years: 3000
    },
    {
      method: 'Condoms',
      monthly: 20,
      yearly: 240,
      total10years: 2400
    },
    {
      method: 'DIU (stérilet)',
      monthly: 0,
      yearly: 0,
      total10years: 800
    },
    {
      method: 'Vasectomie',
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
            <span className="text-gradient">Prix transparent</span> et abordable
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Investissement unique pour une solution contraceptive permanente. 
            Aucun frais caché, prix tout inclus.
          </p>

          {/* Main Price Card */}
          <div className="max-w-md mx-auto">
            <div className="card bg-gradient-to-br from-teal-500 to-primary-600 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-coral-500 text-white px-4 py-2 rounded-bl-lg text-sm font-semibold">
                Tout inclus
              </div>
              
              <div className="pt-8">
                <h2 className="text-2xl font-bold mb-4">Vasectomie sans bistouri</h2>
                <div className="mb-6">
                  <span className="text-5xl font-bold">640$</span>
                  <p className="text-white/80 mt-2">Taxes incluses • Paiement unique</p>
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
                  <span>Réserver maintenant</span>
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
              Options de paiement
            </h2>
            <p className="text-xl text-gray-600">
              Plusieurs façons de payer pour votre confort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cartes de crédit</h3>
              <p className="text-gray-600 mb-4">
                Visa, MasterCard, American Express acceptées
              </p>
              <div className="text-sm text-gray-500">
                Paiement sécurisé • Reçu immédiat
              </div>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Crédit d'impôt</h3>
              <p className="text-gray-600 mb-4">
                Déductible comme frais médicaux au Québec et Canada
              </p>
              <div className="text-sm text-gray-500">
                Jusqu'à 30% de remboursement possible
              </div>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-coral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-coral-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assurance privée</h3>
              <p className="text-gray-600 mb-4">
                Certaines assurances couvrent partiellement
              </p>
              <div className="text-sm text-gray-500">
                Vérifiez avec votre assureur
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
              Comparaison des coûts contraceptifs
            </h2>
            <p className="text-xl text-gray-600">
              La vasectomie: l'investissement le plus rentable à long terme
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-teal-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Méthode contraceptive
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        Coût mensuel
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        Coût annuel
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        Coût sur 10 ans
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisons.map((item, index) => (
                      <tr key={index} className={item.method === 'Vasectomie' ? 'bg-teal-50' : ''}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {item.method}
                          {item.method === 'Vasectomie' && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                              Recommandé
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
                          <span className={item.method === 'Vasectomie' ? 'text-teal-600' : 'text-gray-900'}>
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
                  Économies potentielles: jusqu'à 2,360$ sur 10 ans
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
            Prêt à faire le meilleur investissement contraceptif?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Un seul paiement de 640$ pour une solution permanente et efficace
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleBookingClick}
              className="btn-coral text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Réserver ma consultation</span>
            </button>
            <a 
              href="tel:+14509992973"
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
            >
              Poser une question
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
