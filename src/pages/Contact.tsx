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
            Rendez-vous disponibles rapidement.
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

          {/* Location & Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Notre clinique
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">
                      Saint-Eustache, QC<br />
                      Région des Laurentides
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                    <a href="tel:+14509992973" className="text-teal-600 hover:text-teal-700 transition-colors duration-200">
                      (450) 999-2973
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:info@vasectomie450.com" className="text-teal-600 hover:text-teal-700 transition-colors duration-200">
                      info@vasectomie450.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-primary-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-teal-600 mx-auto mb-2" />
                    <p className="text-gray-700 font-medium">Carte interactive</p>
                    <p className="text-sm text-gray-500">Saint-Eustache, Laurentides</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours & Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Heures d'ouverture
              </h3>
              
              <div className="card">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-teal-600" />
                  <h4 className="text-xl font-semibold text-gray-900">Horaires</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Lundi - Vendredi</span>
                    <span className="text-gray-600">8h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Samedi</span>
                    <span className="text-gray-600">9h00 - 15h00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-900">Dimanche</span>
                    <span className="text-gray-600">Fermé</span>
                  </div>
                </div>
              </div>

              <div className="card mt-6">
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
                    <span>Stationnement gratuit disponible</span>
                  </li>
                </ul>
              </div>

              <div className="card mt-6 bg-teal-50 border-teal-200">
                <h4 className="text-xl font-semibold text-teal-900 mb-3">
                  Urgences post-opératoires
                </h4>
                <p className="text-teal-800 mb-3">
                  Ligne d'urgence 24h/24 pour les patients opérés
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à commencer?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Commencez par compléter le questionnaire santé, puis réservez votre consultation
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
