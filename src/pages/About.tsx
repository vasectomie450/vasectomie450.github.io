import React from 'react';
import { Award, Users, Clock, Heart, Shield, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              À Propos de <span className="text-blue-600">Vasectomie450</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Votre clinique spécialisée en vasectomie sans bistouri, offrant des soins 
              professionnels et personnalisés dans un environnement moderne et sécuritaire.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">550+</h3>
              <p className="text-gray-600">Procédures par année</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Années d'expérience</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">20 min</h3>
              <p className="text-gray-600">Durée de la procédure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Dre. Marie-Claude Tremblay
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Médecin spécialisée en urologie avec plus de 15 années d'expérience 
                dans les procédures de vasectomie sans bistouri. Diplômée de l'Université 
                de Montréal, elle s'est perfectionnée dans les techniques les plus 
                modernes et les moins invasives.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Certifiée par le Collège des médecins du Québec</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-red-500 mr-3" />
                  <span className="text-gray-700">Approche bienveillante et personnalisée</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-gray-700">Taux de satisfaction de 99%</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 text-white">
                <img 
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Dre. Marie-Claude Tremblay"
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <blockquote className="text-lg italic">
                  "Mon objectif est d'offrir à chaque patient une expérience 
                  confortable et sécuritaire, avec des résultats optimaux."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technique Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technique Sans Bistouri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous utilisons la technique de vasectomie sans bistouri, 
              plus moderne et moins invasive que les méthodes traditionnelles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">
                Évaluation complète et discussion des attentes avec le patient.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Anesthésie</h3>
              <p className="text-gray-600">
                Anesthésie locale pour un confort optimal durant la procédure.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Procédure</h3>
              <p className="text-gray-600">
                Technique sans bistouri, rapide et précise, durée de 20 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">
              Ce qui nous guide dans notre pratique quotidienne
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sécurité</h3>
                  <p className="text-gray-600">
                    Respect des plus hauts standards de sécurité et d'hygiène 
                    pour chaque intervention.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bienveillance</h3>
                  <p className="text-gray-600">
                    Approche humaine et empathique, à l'écoute des besoins 
                    de chaque patient.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    Formation continue et utilisation des techniques les plus 
                    avancées du domaine.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Efficacité</h3>
                  <p className="text-gray-600">
                    Procédures rapides et efficaces, avec un temps de récupération 
                    minimal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
