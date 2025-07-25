import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, CheckCircle, Clock, DollarSign, Award, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import GoogleReviews from '../components/GoogleReviews';
import CustomVideoPlayer from '../components/CustomVideoPlayer';

const Home: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: t('features.experience.title'),
      description: t('features.experience.desc'),
      color: 'text-teal-600'
    },
    {
      icon: CheckCircle,
      title: t('features.technique.title'),
      description: t('features.technique.desc'),
      color: 'text-primary-600'
    },
    {
      icon: DollarSign,
      title: t('features.price.title'),
      description: t('features.price.desc'),
      color: 'text-coral-600'
    },
    {
      icon: Clock,
      title: t('features.appointment.title'),
      description: t('features.appointment.desc'),
      color: 'text-teal-600'
    }
  ];

  const stats = [
    { number: '550+', label: t('home.stats.procedures') },
    { number: '15+', label: t('home.stats.experience') },
    { number: '15 min', label: t('home.stats.duration') },
    { number: '99%', label: t('home.stats.satisfaction') }
  ];

  const handleBookingClick = () => {
    window.open('https://secure.medexa.com/onlineAppointmentInformation?APIKey=4464897914164F578AB5C6131D74ADF3&flowColor=1a1d1e&backgroundColor=9ecbd8', '_blank');
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ivory-50 via-white to-teal-50 overflow-hidden hero-with-background">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url(https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/happy%20sperm.jpg)'
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-primary-500/5"></div>
        
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80"></div>
        
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-on-scroll">
              <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>{t('features.experience.desc')}</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-gradient">{t('hero.title')}</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-4 font-medium">
                {t('hero.subtitle')}
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handleBookingClick}
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t('hero.cta.primary')}</span>
                </button>
                <Link to="/vasectomy" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                  <span>{t('hero.cta.secondary')}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-teal-600" />
                  <a href="tel:+14509992973" className="hover:text-teal-600 transition-colors duration-200 font-medium">
                    {t('hero.phone')}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>{t('features.appointment.desc')}</span>
                </div>
              </div>
            </div>

            {/* Hero Video Section */}
            <div className="animate-on-scroll relative">
              <CustomVideoPlayer />
              
              {/* Floating Stats - Moved to bottom right to avoid video overlap */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2000+</p>
                    <p className="text-sm text-gray-600">
                      {t('home.patients.satisfied')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.approach.modern')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-on-scroll card text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 ${feature.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="section-padding bg-gradient-to-r from-teal-50 to-primary-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-teal-200 to-primary-200 rounded-2xl overflow-hidden">
                  <img 
                    src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/DSCF0348%20(1).jpeg" 
                    alt="Dr Mélanie Savard-Côté"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-teal-600">CMIQ</p>
                    <p className="text-sm text-gray-600">
                      {t('home.certified')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>{t('doctor.subtitle')}</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('doctor.title')}
              </h2>
              
              <p className="text-xl text-gray-700 mb-4 font-medium">
                {t('doctor.subtitle')}
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('doctor.description')}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-bold text-teal-600 mb-1">{stat.number}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <Link to="/about" className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200">
                <span>
                  {t('home.doctor.learn.more')}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-primary-600 text-white">
        <div className="container-max text-center">
          <div className="animate-on-scroll max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleBookingClick}
                className="btn-coral text-lg px-8 py-4 flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>{t('cta.button')}</span>
              </button>
              
              <div className="flex items-center space-x-2 text-white/90">
                <Phone className="w-5 h-5" />
                <span>{t('hero.phone')}</span>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-white/80 text-sm">
                {t('cta.booking.info')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
