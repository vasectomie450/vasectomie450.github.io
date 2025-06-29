import React from 'react';
import { CheckCircle, Clock, Shield, Heart } from 'lucide-react';

const Vasectomy: React.FC = () => {
  const benefits = [
    'Technique sans bistouri moins invasive',
    'Procédure de 15 minutes seulement',
    'Anesthésie locale uniquement',
    'Récupération rapide (2-3 jours)',
    'Efficacité de 99.9%',
    'Aucune cicatrice visible'
  ];

  const steps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'Évaluation médicale et discussion des attentes'
    },
    {
      number: '2',
      title: 'Préparation',
      description: 'Instructions pré-opératoires et préparation locale'
    },
    {
      number: '3',
      title: 'Procédure',
      description: 'Vasectomie sans bistouri en 15 minutes'
    },
    {
      number: '4',
      title: 'Récupération',
      description: 'Suivi post-opératoire et instructions de soins'
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
                Qu'est-ce que la <span className="text-gradient">vasectomie sans bistouri</span>?
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                La vasectomie sans bistouri est une technique moderne et minimalement invasive 
                qui utilise des instruments spécialisés pour accéder aux canaux déférents sans 
                incision traditionnelle.
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
                  alt="Technique vasectomie sans bistouri"
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
              Le processus en 4 étapes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour votre confort et votre sécurité
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sécurité</h3>
              <p className="text-gray-600">
                Technique éprouvée avec plus de 30 ans d'utilisation mondiale. 
                Risques minimaux et complications rares.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapidité</h3>
              <p className="text-gray-600">
                Procédure complétée en 15 minutes. Retour aux activités normales 
                en 2-3 jours seulement.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-coral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-coral-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Confort</h3>
              <p className="text-gray-600">
                Anesthésie locale uniquement. Douleur minimale pendant et 
                après la procédure.
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
              Questions fréquentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                La vasectomie est-elle réversible?
              </h3>
              <p className="text-gray-600">
                Bien que techniquement possible, la vasectomie doit être considérée comme 
                permanente. Le taux de succès de la réversion varie et n'est pas garanti.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quand puis-je reprendre mes activités?
              </h3>
              <p className="text-gray-600">
                Activités légères après 2-3 jours, travail de bureau après 3-5 jours, 
                exercice intense après 2 semaines.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Y a-t-il des effets sur les hormones?
              </h3>
              <p className="text-gray-600">
                Non, la vasectomie n'affecte pas la production d'hormones masculines. 
                Seuls les spermatozoïdes sont bloqués.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vasectomy;
