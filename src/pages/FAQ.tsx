import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Phone, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: 'Informations générales',
      questions: [
        {
          question: 'Qu\'est-ce que la vasectomie sans bistouri?',
          answer: 'La vasectomie sans bistouri est une technique moderne qui utilise des instruments spécialisés pour accéder aux canaux déférents sans faire d\'incision traditionnelle. Cette méthode est moins invasive, réduit les saignements et accélère la guérison.'
        },
        {
          question: 'Quelle est l\'efficacité de la vasectomie?',
          answer: 'La vasectomie a un taux d\'efficacité de plus de 99,9%. C\'est l\'une des méthodes contraceptives les plus fiables disponibles. Les échecs sont extrêmement rares et surviennent généralement dans les premiers mois suivant la procédure.'
        },
        {
          question: 'La vasectomie est-elle réversible?',
          answer: 'Bien que techniquement possible, la vasectomie doit être considérée comme une décision permanente. La réversion est une chirurgie plus complexe avec des taux de succès variables (30-90%) et n\'est pas couverte par l\'assurance maladie.'
        }
      ]
    },
    {
      category: 'Préparation et procédure',
      questions: [
        {
          question: 'Comment me préparer pour la vasectomie?',
          answer: 'Rasez la zone scrotale 24h avant la procédure, portez des sous-vêtements ajustés, évitez l\'aspirine 7 jours avant, et organisez un transport pour le retour. Des instructions détaillées vous seront fournies lors de la consultation.'
        },
        {
          question: 'Combien de temps dure la procédure?',
          answer: 'La vasectomie sans bistouri prend environ 15-20 minutes. Prévoyez environ 1 heure au total pour l\'accueil, la préparation, la procédure et les instructions post-opératoires.'
        },
        {
          question: 'Est-ce que ça fait mal?',
          answer: 'L\'anesthésie locale rend la procédure pratiquement indolore. Vous pourriez ressentir une légère pression ou tiraillement, mais pas de douleur aiguë. L\'inconfort post-opératoire est généralement léger et bien contrôlé avec des analgésiques en vente libre.'
        }
      ]
    },
    {
      category: 'Récupération et suivi',
      questions: [
        {
          question: 'Combien de temps pour récupérer?',
          answer: 'La plupart des hommes reprennent leurs activités légères après 2-3 jours et retournent au travail après 3-5 jours. Évitez les activités physiques intenses pendant 2 semaines. La guérison complète prend environ 2-3 semaines.'
        },
        {
          question: 'Quand puis-je reprendre les relations sexuelles?',
          answer: 'Vous pouvez reprendre les relations sexuelles après 7-10 jours, mais utilisez une contraception alternative pendant 3 mois. Deux spermogrammes négatifs consécutifs confirmeront l\'efficacité de la vasectomie.'
        },
        {
          question: 'Y a-t-il des complications possibles?',
          answer: 'Les complications sont rares (moins de 1%). Elles peuvent inclure: saignement mineur, infection, douleur chronique (très rare), ou granulome spermatique. La plupart se résolvent spontanément ou avec un traitement simple.'
        }
      ]
    },
    {
      category: 'Aspects financiers',
      questions: [
        {
          question: 'Combien coûte la vasectomie?',
          answer: 'Le coût est de 640$ taxes incluses, tout compris. Cela inclut la consultation, la procédure, le suivi et les instructions de soins. Aucun frais caché.'
        },
        {
          question: 'Est-ce couvert par l\'assurance?',
          answer: 'La vasectomie n\'est pas couverte par la RAMQ, mais elle est déductible d\'impôt comme frais médical. Certaines assurances privées offrent une couverture partielle. Vérifiez avec votre assureur.'
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  let questionIndex = 0;

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-50 to-teal-50">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Questions <span className="text-gradient">fréquentes</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur la vasectomie sans bistouri
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          {filteredFAQ.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-teal-100">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const currentIndex = questionIndex++;
                  const isOpen = openItems.includes(currentIndex);
                  
                  return (
                    <div key={itemIndex} className="card">
                      <button
                        onClick={() => toggleItem(currentIndex)}
                        className="w-full text-left flex items-center justify-between p-0"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {item.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredFAQ.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Aucune question trouvée pour "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vous ne trouvez pas votre réponse?
            </h2>
            <p className="text-xl text-gray-600">
              Notre équipe est là pour répondre à toutes vos questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="card text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Appelez-nous</h3>
              <p className="text-gray-600 mb-4">
                Parlez directement avec notre équipe médicale
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
                <MessageCircle className="w-8 h-8 text-primary-600" />
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
        </div>
      </section>
    </div>
  );
};

export default FAQ;
