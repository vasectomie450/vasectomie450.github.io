import React from 'react';
import { Award, Users, Clock, Heart, Shield, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '550+', label: t('home.stats.procedures') },
    { number: '15+', label: t('home.stats.experience') },
    { number: '20 min', label: t('home.stats.duration') }
  ];

  const values = [
    {
      icon: Shield,
      title: t('about.values.safety.title'),
      description: t('about.values.safety.desc'),
      color: 'blue'
    },
    {
      icon: Heart,
      title: t('about.values.compassion.title'),
      description: t('about.values.compassion.desc'),
      color: 'green'
    },
    {
      icon: Award,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.desc'),
      color: 'purple'
    },
    {
      icon: Clock,
      title: t('about.values.efficiency.title'),
      description: t('about.values.efficiency.desc'),
      color: 'yellow'
    }
  ];

  const steps = [
    { 
      number: '1', 
      title: t('about.steps.consultation.title'), 
      description: t('about.steps.consultation.desc') 
    },
    { 
      number: '2', 
      title: t('about.steps.anesthesia.title'), 
      description: t('about.steps.anesthesia.desc') 
    },
    { 
      number: '3', 
      title: t('about.steps.procedure.title'), 
      description: t('about.steps.procedure.desc') 
    }
  ];

  const certifications = [
    t('about.certifications.cmq'),
    t('about.certifications.approach'),
    t('about.certifications.satisfaction')
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
              <div className="bg-gradient-to-br from-teal-400 to-primary-500 rounded-2xl p-8 text-white">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/2020-02-28-vasectomie%20phillipine-msc.jpg" 
                  alt="Dr Mélanie Savard-Côté"
                  className="w-full h-80 object-cover object-top rounded-xl mb-6"
                />
                <blockquote className="text-lg italic">
                  {t('about.doctor.description')}
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
            {t('about.cta.meet')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('about.cta.trust')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/appointments"
              className="btn-coral text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>{t('about.cta.appointment')}</span>
            </a>
            <a 
              href="/contact"
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
            >
              {t('about.cta.contact')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
