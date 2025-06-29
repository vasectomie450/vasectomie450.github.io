import React from 'react';
import { FileText, Calendar, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const RendezVous: React.FC = () => {
  const { t } = useLanguage();

  const handleBookingClick = () => {
    window.open('https://secure.medexa.com/onlineAppointmentInformation?APIKey=4464897914164F578AB5C6131D74ADF3&flowColor=1a1d1e&backgroundColor=9ecbd8', '_blank');
  };

  const handleQuestionnaireClick = () => {
    window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=yCbXlj9FSkOcHPldj5OVDTYNIErxoQZLs47MsHGcCS1UQUhNWkYyRVNVVzZQUU1ITjZOV01CVjhNSC4u', '_blank');
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-50 to-teal-50">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">{t('rendezvous.title')}</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {t('rendezvous.subtitle')}
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('rendezvous.steps.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('rendezvous.steps.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Step 1: Health Questionnaire */}
            <div className="card relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {t('rendezvous.questionnaire.title')}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {t('rendezvous.questionnaire.desc')}
              </p>
              <button 
                onClick={handleQuestionnaireClick}
                className="btn-primary w-full inline-flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>{t('rendezvous.questionnaire.cta')}</span>
              </button>
              
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-amber-800">
                    <p className="font-medium mb-1">{t('rendezvous.questionnaire.important.title')}:</p>
                    <p>{t('rendezvous.questionnaire.important.desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Online Booking */}
            <div className="card relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {t('rendezvous.booking.title')}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {t('rendezvous.booking.desc')}
              </p>
              <button 
                onClick={handleBookingClick}
                className="btn-primary bg-teal-600 hover:bg-teal-700 w-full inline-flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t('rendezvous.booking.cta')}</span>
              </button>
            </div>
          </div>

          {/* Appointment Options */}
          <div className="card bg-gradient-to-r from-teal-50 to-primary-50 border-teal-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t('rendezvous.options.title')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('rendezvous.same.day.title')}
                </h4>
                <p className="text-gray-600 mb-4">
                  {t('rendezvous.same.day.desc')}
                </p>
                <div className="flex items-center space-x-2 text-teal-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('rendezvous.questionnaire.required')}</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('rendezvous.virtual.title')}
                </h4>
                <p className="text-gray-600 mb-4">
                  {t('rendezvous.virtual.desc')}
                </p>
                <div className="flex items-center space-x-2 text-primary-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('rendezvous.virtual.flexible')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Option */}
          <div className="card bg-amber-50 border-amber-200">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              {t('rendezvous.onsite.title')}
            </h3>
            <p className="text-amber-800 mb-3">
              {t('rendezvous.onsite.desc')}
            </p>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-amber-800 text-sm">
                <strong>{t('rendezvous.onsite.note.title')}:</strong> {t('rendezvous.onsite.note.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t('rendezvous.info.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('rendezvous.info.available')}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('rendezvous.info.no.referral')}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('rendezvous.info.same.day')}</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('rendezvous.info.parking')}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('rendezvous.info.both.clinics')}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('rendezvous.info.emergency')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('rendezvous.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('rendezvous.cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleQuestionnaireClick}
              className="btn-coral text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>{t('rendezvous.cta.questionnaire')}</span>
            </button>
            <button 
              onClick={handleBookingClick}
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>{t('rendezvous.cta.booking')}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RendezVous;
