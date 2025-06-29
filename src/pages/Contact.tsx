import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, FileText, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
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
            <span className="text-gradient">Contact & Rendez-vous</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Contactez-nous ou planifiez votre consultation de vasectomie sans bistouri. 
            Rendez-vous disponibles rapidement dans nos deux cliniques.
          </p>
        </div>
      </section>

      {/* Rendez-vous Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Prendre rendez-vous
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Suivez ces étapes simples pour planifier votre consultation et procédure
            </p>
          </div>

          {/* Process Steps */}
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
                Compléter le Questionnaire Santé
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Questionnaire médical obligatoire (15 minutes)
              </p>
              <button 
                onClick={handleQuestionnaireClick}
                className="btn-primary w-full inline-flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Commencer le questionnaire</span>
              </button>
              
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-amber-800">
                    <p className="font-medium mb-1">Important:</p>
                    <p>Ce questionnaire doit idéalement être complété avant la prise de rendez-vous pour permettre une consultation et vasectomie en une seule visite.</p>
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
                Réservation en ligne
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Réservez votre consultation directement en ligne 24h/24
              </p>
              <button 
                onClick={handleBookingClick}
                className="btn-primary bg-teal-600 hover:bg-teal-700 w-full inline-flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Réserver maintenant</span>
              </button>
            </div>
          </div>

          {/* Appointment Options */}
          <div className="card bg-gradient-to-r from-teal-50 to-primary-50 border-teal-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Options de rendez-vous
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Consultation + Vasectomie (même visite)
                </h4>
                <p className="text-gray-600 mb-4">
                  Après avoir complété le questionnaire santé, vous pouvez avoir votre consultation et procédure le même jour.
                </p>
                <div className="flex items-center space-x-2 text-teal-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Questionnaire santé requis</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Consultation virtuelle
                </h4>
                <p className="text-gray-600 mb-4">
                  Rencontrez le médecin virtuellement pour discuter de la procédure avant de planifier l'intervention.
                </p>
                <div className="flex items-center space-x-2 text-primary-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Flexible et pratique</span>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Option */}
          <div className="card mt-8 bg-amber-50 border-amber-200">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              Questionnaire sur place
            </h3>
            <p className="text-amber-800 mb-3">
              Si vous ne pouvez pas compléter le questionnaire en ligne, il est possible de le faire sur place lors d'une visite de consultation.
            </p>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-amber-800 text-sm">
                <strong>Note importante:</strong> Dans ce cas, la vasectomie pourrait ne pas avoir lieu le jour même.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nous contacter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pour toute question ou information supplémentaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Téléphone</h3>
              <p className="text-gray-600 mb-4">
                Appelez-nous pour poser vos questions ou obtenir des informations
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600 mb-4">
                Écrivez-nous pour toute demande d'information
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

          {/* Clinics Locations */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Nos cliniques
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Main Clinic - Saint-Eustache */}
              <div>
                <div className="card mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                    <h4 className="text-xl font-bold text-gray-900">Clinique principale</h4>
                  </div>
                  
                  <h5 className="text-lg font-semibold text-teal-600 mb-4">
                    Cliniques Infirmières des Laurentides
                  </h5>

                  {/* Clinic Images Gallery */}
                  <div className="mb-6">
                    {/* Exterior View */}
                    <div className="mb-4">
                      <img 
                        src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/blob-a9c8d58.png"
                        alt="Vue extérieure - Cliniques Infirmières des Laurentides"
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 mt-2 text-center">Vue extérieure de la clinique</p>
                    </div>

                    {/* Interior and Team Photos Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <img 
                          src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/IMG_3069.jpg"
                          alt="Vue intérieure - Cliniques Infirmières des Laurentides"
                          className="w-full h-32 object-cover rounded-lg shadow-md"
                        />
                        <p className="text-sm text-gray-600 mt-2 text-center">Intérieur moderne</p>
                      </div>
                      <div>
                        <img 
                          src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/IMG_5428%201.JPEG"
                          alt="Équipe médicale - Cliniques Infirmières des Laurentides"
                          className="w-full h-32 object-cover object-top rounded-lg shadow-md"
                        />
                        <p className="text-sm text-gray-600 mt-2 text-center">Notre équipe</p>
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
                        <p>Lun-Ven: 8h00-17h00</p>
                        <p>Sam: 9h00-15h00</p>
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
                    title="Cliniques Infirmières des Laurentides - Saint-Eustache"
                  ></iframe>
                </div>
              </div>

              {/* Second Clinic - Huntingdon */}
              <div>
                <div className="card mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                    <h4 className="text-xl font-bold text-gray-900">Clinique secondaire</h4>
                  </div>
                  
                  <h5 className="text-lg font-semibold text-primary-600 mb-4">
                    Complexe de Santé Huntingdon
                  </h5>

                  {/* Clinic Images Gallery */}
                  <div className="mb-6">
                    {/* Exterior View */}
                    <div className="mb-4">
                      <img 
                        src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/IMG_2474.jpg"
                        alt="Vue extérieure - Complexe de Santé Huntingdon"
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                      <p className="text-sm text-gray-600 mt-2 text-center">Vue extérieure de la clinique</p>
                    </div>

                    {/* Reception and Room Photos Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <img 
                          src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/huntingdon%20reception_1921.JPG"
                          alt="Accueil - Complexe de Santé Huntingdon"
                          className="w-full h-32 object-cover rounded-lg shadow-md"
                        />
                        <p className="text-sm text-gray-600 mt-2 text-center">Accueil chaleureux</p>
                      </div>
                      <div>
                        <img 
                          src="https://img1.wsimg.com/isteam/ip/8f5ff2e6-294e-4680-8498-e7775cfdc4f0/bureau%20huntingdon_IMG_2889.jpg"
                          alt="Salle de consultation - Complexe de Santé Huntingdon"
                          className="w-full h-32 object-cover rounded-lg shadow-md"
                        />
                        <p className="text-sm text-gray-600 mt-2 text-center">Salle de consultation</p>
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
                        <p>Lun-Ven: 8h00-17h00</p>
                        <p>Sam: 9h00-15h00</p>
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
                    title="Complexe de Santé Huntingdon"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Important Information */}
            <div className="card">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Informations importantes
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Rendez-vous disponibles sous 14 jours</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Aucune référence médicale requise</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Consultation et procédure le même jour possible</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Stationnement gratuit disponible dans les deux cliniques</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Services disponibles dans les deux emplacements</span>
                </li>
              </ul>
            </div>

            {/* Emergency Contact */}
            <div className="card bg-teal-50 border-teal-200">
              <h4 className="text-xl font-semibold text-teal-900 mb-3">
                Urgences post-opératoires
              </h4>
              <p className="text-teal-800 mb-4">
                Ligne d'urgence 24h/24 pour les patients opérés dans nos deux cliniques
              </p>
              <a 
                href="tel:+14509992973"
                className="btn-primary bg-teal-600 hover:bg-teal-700 inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Urgence: (450) 999-2973</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à commencer?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Commencez par compléter le questionnaire santé, puis réservez votre consultation dans la clinique de votre choix
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleQuestionnaireClick}
              className="btn-coral text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>Questionnaire santé</span>
            </button>
            <a 
              href="tel:+14509992973"
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Appeler maintenant</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
