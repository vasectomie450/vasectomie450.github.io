import React from 'react';
import { Award, Users, Clock, Heart, Shield, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = t('language') === 'fr' ? [
    { number: '550+', label: 'Procédures par année' },
    { number: '15+', label: 'Années d\'expérience' },
    { number: '20 min', label: 'Durée de la procédure' }
  ] : [
    { number: '550+', label: 'Procedures per year' },
    { number: '15+', label: 'Years of experience' },
    { number: '20 min', label: 'Procedure duration' }
  ];

  const values = t('language') === 'fr' ? [
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Respect des plus hauts standards de sécurité et d\'hygiène pour chaque intervention.',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Bienveillance',
      description: 'Approche humaine et empathique, à l\'écoute des besoins de chaque patient.',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Formation continue et utilisation des techniques les plus avancées du domaine.',
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Efficacité',
      description: 'Procédures rapides et efficaces, avec un temps de récupération minimal.',
      color: 'yellow'
    }
  ] : [
    {
      icon: Shield,
      title: 'Safety',
      description: 'Adherence to the highest safety and hygiene standards for every procedure.',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Human and empathetic approach, listening to each patient\'s needs.',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Continuous training and use of the most advanced techniques in the field.',
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Efficiency',
      description: 'Fast and efficient procedures with minimal recovery time.',
      color: 'yellow'
    }
  ];

  const steps = t('language') === 'fr' ? [
    { number: '1', title: 'Consultation', description: 'Évaluation complète et discussion des attentes avec le patient.' },
    { number: '2', title: 'Anesthésie', description: 'Anesthésie locale pour un confort optimal durant la procédure.' },
    { number: '3', title: 'Procédure', description: 'Technique sans bistouri, rapide et précise, durée de 20 minutes.' }
  ] : [
    { number: '1', title: 'Consultation', description: 'Complete evaluation and discussion of expectations with the patient.' },
    { number: '2', title: 'Anesthesia', description: 'Local anesthesia for optimal comfort during the procedure.' },
    { number: '3', title: 'Procedure', description: 'No-scalpel technique, fast and precise, 20-minute duration.' }
  ];

  const certifications = t('language') === 'fr' ? [
    'Certifiée par le Collège des médecins du Québec',
    'Approche bienveillante et personnalisée',
    'Taux de satisfaction de 99%'
  ] : [
    'Certified by the College of Physicians of Quebec',
    'Compassionate and personalized approach',
    '99% satisfaction rate'
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-50 to-teal-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">{t('about.title')}</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
                <div className={`bg-${index === 0 ? 'blue' : index === 1 ? 'green' : 'purple'}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {index === 0 && <Users className="w-8 h-8 text-blue-600" />}
                  {index === 1 && <Award className="w-8 h-8 text-green-600" />}
                  {index === 2 && <Clock className="w-8 h-8 text-purple-600" />}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('about.doctor.name')}
              </h2>
              <p className="text-xl text-gray-700 mb-6 font-medium">
                {t('about.doctor.title')}
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.doctor.description')}
              </p>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    {index === 0 && <Shield className="w-6 h-6 text-blue-600 mr-3" />}
                    {index === 1 && <Heart className="w-6 h-6 text-red-500 mr-3" />}
                    {index === 2 && <Star className="w-6 h-6 text-yellow-500 mr-3" />}
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 text-white">
                <img 
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt={t('about.doctor.name')}
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <blockquote className="text-lg italic">
                  {t('language') === 'fr' 
                    ? '"Mon objectif est d\'offrir à chaque patient une expérience confortable et sécuritaire, avec des résultats optimaux."'
                    : '"My goal is to provide each patient with a comfortable and safe experience, with optimal results."'
                  }
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technique Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('about.technique.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.technique.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {values.slice(0, 2).map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className={`bg-${value.color}-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <value.icon className={`w-6 h-6 text-${value.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {values.slice(2, 4).map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className={`bg-${value.color}-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <value.icon className={`w-6 h-6 text-${value.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('language') === 'fr' ? 'Prêt à nous rencontrer?' : 'Ready to meet us?'}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('language') === 'fr' 
              ? 'Découvrez pourquoi tant de patients nous font confiance pour leur vasectomie'
              : 'Discover why so many patients trust us for their vasectomy'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/rendez-vous"
              className="btn-coral text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>{t('language') === 'fr' ? 'Prendre rendez-vous' : 'Book appointment'}</span>
            </a>
            <a 
              href="/contact"
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
            >
              {t('language') === 'fr' ? 'Nous contacter' : 'Contact us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
