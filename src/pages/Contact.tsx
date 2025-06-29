import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-50 to-teal-50">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Prendre rendez-vous</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour planifier votre consultation de vasectomie sans bistouri. 
            Rendez-vous disponibles rapidement.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Téléphone</h3>
              <p className="text-gray-600 mb-4">
                Appelez-nous pour prendre rendez-vous ou poser vos questions
              </p>
              <a 
                href="tel:+14501234567"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>(450) 123-4567</span>
              </a>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Réservation en ligne</h3>
              <p className="text-gray-600 mb-4">
                Réservez votre consultation directement en ligne 24h/24
              </p>
              <button className="btn-primary inline-flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Réserver maintenant</span>
              </button>
              <p className="text-sm text-gray-500 mt-2">
                • TODO: Add Medexa booking integration here •
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-coral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-coral-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chat en direct</h3>
              <p className="text-gray-600 mb-4">
                Obtenez des réponses instantanées à vos questions
              </p>
              <button className="btn-secondary inline-flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Démarrer le chat</span>
              </button>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre clinique
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Saint-Eustache, QC<br />
                      Région des Laurentides
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <a href="tel:+14501234567" className="text-teal-600 hover:text-teal-700 transition-colors duration-200">
                      (450) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Heures d'ouverture
              </h2>
              
              <div className="card">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Horaires</h3>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Informations importantes
                </h3>
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
                <h3 className="text-xl font-semibold text-teal-900 mb-3">
                  Urgences post-opératoires
                </h3>
                <p className="text-teal-800 mb-3">
                  Ligne d'urgence 24h/24 pour les patients opérés
                </p>
                <a 
                  href="tel:+14501234567"
                  className="btn-primary bg-teal-600 hover:bg-teal-700 inline-flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Urgence: (450) 123-4567</span>
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
            Prêt à prendre rendez-vous?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour planifier votre consultation de vasectomie sans bistouri
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+14501234567"
              className="btn-coral text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Appeler maintenant</span>
            </a>
            <button className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 inline-flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Réserver en ligne</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
