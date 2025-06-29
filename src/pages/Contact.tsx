import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-50 to-teal-50">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">{t('contact.title')}</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.methods.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact.methods.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('contact.phone.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('contact.phone.desc')}
              </p>
              <a 
                href="tel:+14509992973"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>(450) 999-2973</span>
              </a>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('contact.email.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('contact.email.desc')}
              </p>
              <a 
                href="mailto:info@vasectomie450.com"
                className="btn-primary bg-primary-600 hover:bg-primary-700 inline-flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>info@vasectomie450.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clinics Locations */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.clinics.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact.clinics.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Clinic - Saint-Eustache */}
            <div>
              <div className="card mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  <h4 className="text-xl font-bold text-gray-900">{t('contact.main.clinic')}</h4>
                </div>
                
                <h5 className="text-lg font-semibold text-teal-600 mb-4">
                  {t('contact.main.clinic.name')}
                </h5>

                {/* Clinic Images Gallery */}
                <div className="mb-6">
                  {/* Exterior View */}
                  <div className="mb-4">
                    <img 
                      src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/blob-a9c8d58.png"
                      alt={t('contact.main.exterior.alt')}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 mt-2 text-center">{t('contact.main.exterior.caption')}</p>
                  </div>

                  {/* Interior and Team Photos Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <img 
                        src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/IMG_3069.jpg"
                        alt={t('contact.main.interior.alt')}
                        className="w-full h-32 object-cover rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 mt-2 text-center">{t('contact.main.interior.caption')}</p>
                    </div>
                    <div>
                      <img 
                        src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/IMG_5428%201.JPEG"
                        alt={t('contact.main.team.alt')}
                        className="w-full h-32 object-cover object-top rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 mt-2 text-center">{t('contact.main.team.caption')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">102 Rue Dubois</p>
                      <p className="text-gray-600">Saint-Eustache, Quebec J7P 4W9</p>
                      <p className="text-gray-600">Canada</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <a href="tel:+14509992973" className="text-teal-600 hover:text-teal-700 transition-colors duration-200">
                      (450) 999-2973
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div className="text-sm text-gray-600">
                      <p>{t('contact.hours.weekdays')}</p>
                      <p>{t('contact.hours.saturday')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map for Saint-Eustache */}
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.8234567890123!2d-73.9123456789!3d45.5654321098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654c9ec0a319d52d!2s102%20Rue%20Dubois%2C%20Saint-Eustache%2C%20QC%20J7P%204W9%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('contact.main.map.title')}
                ></iframe>
              </div>
            </div>

            {/* Second Clinic - Huntingdon */}
            <div>
              <div className="card mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <h4 className="text-xl font-bold text-gray-900">{t('contact.secondary.clinic')}</h4>
                </div>
                
                <h5 className="text-lg font-semibold text-primary-600 mb-4">
                  {t('contact.secondary.clinic.name')}
                </h5>

                {/* Clinic Images Gallery */}
                <div className="mb-6">
                  {/* Exterior View */}
                  <div className="mb-4">
                    <img 
                      src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/IMG_2474.jpg"
                      alt={t('contact.secondary.exterior.alt')}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 mt-2 text-center">{t('contact.secondary.exterior.caption')}</p>
                  </div>

                  {/* Reception and Room Photos Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <img 
                        src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/huntingdon%20reception_1921.JPG"
                        alt={t('contact.secondary.reception.alt')}
                        className="w-full h-32 object-cover rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 mt-2 text-center">{t('contact.secondary.reception.caption')}</p>
                    </div>
                    <div>
                      <img 
                        src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/bureau%20huntingdon_IMG_2889.jpg"
                        alt={t('contact.secondary.room.alt')}
                        className="w-full h-32 object-cover rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 mt-2 text-center">{t('contact.secondary.room.caption')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">60 Rue F. Cleyn</p>
                      <p className="text-gray-600">Huntingdon, Québec J0S 1H0</p>
                      <p className="text-gray-600">Canada</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <a href="tel:+14509992973" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                      (450) 999-2973
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <div className="text-sm text-gray-600">
                      <p>{t('contact.hours.weekdays')}</p>
                      <p>{t('contact.hours.saturday')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map for Huntingdon */}
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.1234567890123!2d-74.1654321098!3d45.0876543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9876543210fed%3A0x123456789abcdef0!2s60%20Rue%20F.%20Cleyn%2C%20Huntingdon%2C%20QC%20J0S%201H0%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('contact.secondary.map.title')}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('contact.info.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{t('contact.info.phone.main')}</p>
                    <a href="tel:+14509992973" className="text-teal-600 hover:text-teal-700">
                      (450) 999-2973
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{t('contact.email.title')}</p>
                    <a href="mailto:info@vasectomie450.com" className="text-primary-600 hover:text-primary-700">
                      info@vasectomie450.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 mb-1">{t('contact.info.hours.title')}</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>{t('contact.hours.weekdays')}</p>
                      <p>{t('contact.hours.saturday')}</p>
                      <p>{t('contact.hours.sunday')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="card bg-teal-50 border-teal-200">
              <h3 className="text-2xl font-semibold text-teal-900 mb-4">
                {t('contact.emergency.title')}
              </h3>
              <p className="text-teal-800 mb-6">
                {t('contact.emergency.desc')}
              </p>
              <a 
                href="tel:+14509992973"
                className="btn-primary bg-teal-600 hover:bg-teal-700 inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t('contact.emergency.button')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('contact.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('contact.cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+14509992973"
              className="btn-coral text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>{t('contact.cta.call')}</span>
            </a>
            <a 
              href="mailto:info@vasectomie450.com"
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>{t('contact.cta.email')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
