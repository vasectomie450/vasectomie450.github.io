import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, Shield, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = t('language') === 'fr' ? [
    {
      category: 'Procédure',
      icon: HelpCircle,
      questions: [
        {
          question: 'Qu\'est-ce que la vasectomie sans bistouri?',
          answer: 'La vasectomie sans bistouri est une technique moderne qui utilise des instruments spécialisés pour accéder aux canaux déférents sans faire d\'incision traditionnelle au scalpel. Cette méthode est moins invasive, réduit les saignements et accélère la guérison.'
        },
        {
          question: 'Combien de temps dure la procédure?',
          answer: 'La procédure de vasectomie sans bistouri dure généralement entre 15 à 20 minutes. C\'est une intervention rapide qui se fait en consultation externe.'
        },
        {
          question: 'La procédure est-elle douloureuse?',
          answer: 'La procédure se fait sous anesthésie locale, donc vous ne devriez ressentir qu\'un léger inconfort. La plupart des patients décrivent la douleur comme minime pendant et après l\'intervention.'
        },
        {
          question: 'Quels sont les risques et complications possibles?',
          answer: 'Les complications sont rares avec la technique sans bistouri. Les risques incluent: saignement mineur, infection (moins de 1%), douleur chronique (très rare), et échec de la procédure (moins de 1%).'
        }
      ]
    },
    {
      category: 'Récupération',
      icon: Clock,
      questions: [
        {
          question: 'Combien de temps dure la récupération?',
          answer: 'La récupération initiale prend 2-3 jours. Vous pouvez reprendre le travail de bureau après 3-5 jours et les activités physiques intenses après 2 semaines. La guérison complète prend environ 2-3 semaines.'
        },
        {
          question: 'Que puis-je faire pour accélérer la guérison?',
          answer: 'Appliquez de la glace les premières 48h, portez des sous-vêtements de soutien, évitez les efforts physiques intenses, prenez les médicaments prescrits et suivez toutes les instructions post-opératoires.'
        },
        {
          question: 'Quand puis-je reprendre les relations sexuelles?',
          answer: 'Vous pouvez reprendre les relations sexuelles après une semaine, mais utilisez une contraception alternative pendant 2-3 mois jusqu\'à confirmation de l\'absence de spermatozoïdes par spermogramme.'
        },
        {
          question: 'Quand puis-je faire de l\'exercice?',
          answer: 'Marche légère: immédiatement. Exercice modéré: après 1 semaine. Exercice intense, levage de poids, sports de contact: après 2 semaines avec approbation médicale.'
        }
      ]
    },
    {
      category: 'Efficacité',
      icon: Shield,
      questions: [
        {
          question: 'Quelle est l\'efficacité de la vasectomie?',
          answer: 'La vasectomie est efficace à plus de 99,9%. C\'est l\'une des méthodes contraceptives les plus fiables disponibles. Le taux d\'échec est inférieur à 1 sur 1000.'
        },
        {
          question: 'Quand la vasectomie devient-elle effective?',
          answer: 'La vasectomie n\'est pas immédiatement effective. Il faut 2-3 mois et 2 spermogrammes négatifs consécutifs pour confirmer l\'absence totale de spermatozoïdes.'
        },
        {
          question: 'Dois-je faire des tests de suivi?',
          answer: 'Oui, des spermogrammes sont nécessaires à 8-12 semaines et 12-16 semaines post-opératoire pour confirmer l\'absence de spermatozoïdes avant d\'arrêter toute autre contraception.'
        },
        {
          question: 'La vasectomie affecte-t-elle les hormones?',
          answer: 'Non, la vasectomie n\'affecte pas la production d\'hormones masculines (testostérone). Seuls les spermatozoïdes sont bloqués, représentant moins de 5% du volume de l\'éjaculat.'
        }
      ]
    },
    {
      category: 'Considérations',
      icon: Heart,
      questions: [
        {
          question: 'La vasectomie est-elle réversible?',
          answer: 'Bien que techniquement possible, la vasectomie doit être considérée comme permanente. La réversion est une chirurgie complexe avec des taux de succès variables (30-90%) et n\'est pas couverte par l\'assurance.'
        },
        {
          question: 'Quel est le meilleur âge pour une vasectomie?',
          answer: 'Il n\'y a pas d\'âge idéal, mais la plupart des hommes ont entre 25-45 ans. L\'important est d\'être certain de ne plus vouloir d\'enfants et d\'avoir une relation stable.'
        },
        {
          question: 'Dois-je en discuter avec ma partenaire?',
          answer: 'Bien que la décision finale vous appartienne, il est fortement recommandé de discuter avec votre partenaire car cela affecte votre vie reproductive commune.'
        },
        {
          question: 'Puis-je avoir des enfants après une vasectomie?',
          answer: 'Après une vasectomie réussie, la conception naturelle n\'est plus possible. Les options incluent la réversion (succès variable) ou la fécondation in vitro avec extraction de spermatozoïdes.'
        }
      ]
    }
  ] : [
    {
      category: 'Procedure',
      icon: HelpCircle,
      questions: [
        {
          question: 'What is no-scalpel vasectomy?',
          answer: 'No-scalpel vasectomy is a modern technique that uses specialized instruments to access the vas deferens without making a traditional scalpel incision. This method is less invasive, reduces bleeding, and speeds up healing.'
        },
        {
          question: 'How long does the procedure take?',
          answer: 'The no-scalpel vasectomy procedure typically takes 15 to 20 minutes. It\'s a quick outpatient procedure.'
        },
        {
          question: 'Is the procedure painful?',
          answer: 'The procedure is done under local anesthesia, so you should only feel slight discomfort. Most patients describe the pain as minimal during and after the procedure.'
        },
        {
          question: 'What are the possible risks and complications?',
          answer: 'Complications are rare with the no-scalpel technique. Risks include: minor bleeding, infection (less than 1%), chronic pain (very rare), and procedure failure (less than 1%).'
        }
      ]
    },
    {
      category: 'Recovery',
      icon: Clock,
      questions: [
        {
          question: 'How long is the recovery time?',
          answer: 'Initial recovery takes 2-3 days. You can return to office work after 3-5 days and intense physical activities after 2 weeks. Complete healing takes about 2-3 weeks.'
        },
        {
          question: 'What can I do to speed up healing?',
          answer: 'Apply ice for the first 48 hours, wear supportive underwear, avoid intense physical exertion, take prescribed medications, and follow all post-operative instructions.'
        },
        {
          question: 'When can I resume sexual relations?',
          answer: 'You can resume sexual relations after one week, but use alternative contraception for 2-3 months until confirmation of sperm absence through semen analysis.'
        },
        {
          question: 'When can I exercise?',
          answer: 'Light walking: immediately. Moderate exercise: after 1 week. Intense exercise, weight lifting, contact sports: after 2 weeks with medical approval.'
        }
      ]
    },
    {
      category: 'Effectiveness',
      icon: Shield,
      questions: [
        {
          question: 'How effective is vasectomy?',
          answer: 'Vasectomy is over 99.9% effective. It\'s one of the most reliable contraceptive methods available. The failure rate is less than 1 in 1000.'
        },
        {
          question: 'When does vasectomy become effective?',
          answer: 'Vasectomy is not immediately effective. It takes 2-3 months and 2 consecutive negative semen analyses to confirm complete absence of sperm.'
        },
        {
          question: 'Do I need follow-up tests?',
          answer: 'Yes, semen analyses are required at 8-12 weeks and 12-16 weeks post-operative to confirm sperm absence before stopping other contraception.'
        },
        {
          question: 'Does vasectomy affect hormones?',
          answer: 'No, vasectomy does not affect male hormone production (testosterone). Only sperm are blocked, representing less than 5% of ejaculate volume.'
        }
      ]
    },
    {
      category: 'Considerations',
      icon: Heart,
      questions: [
        {
          question: 'Is vasectomy reversible?',
          answer: 'Although technically possible, vasectomy should be considered permanent. Reversal is complex surgery with variable success rates (30-90%) and is not covered by insurance.'
        },
        {
          question: 'What is the best age for vasectomy?',
          answer: 'There\'s no ideal age, but most men are between 25-45 years old. The important thing is being certain about not wanting more children and having a stable relationship.'
        },
        {
          question: 'Should I discuss it with my partner?',
          answer: 'While the final decision is yours, it\'s strongly recommended to discuss with your partner as it affects your shared reproductive life.'
        },
        {
          question: 'Can I have children after vasectomy?',
          answer: 'After successful vasectomy, natural conception is no longer possible. Options include reversal (variable success) or in vitro fertilization with sperm extraction.'
        }
      ]
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-50 to-teal-50">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">{t('faq.title')}</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const globalIndex = categoryIndex * 100 + index;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={index} className="card border border-gray-200 hover:border-teal-200 transition-colors duration-200">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full flex items-center justify-between text-left"
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
                            <p className="text-gray-600 leading-relaxed">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('language') === 'fr' ? 'Vous avez d\'autres questions?' : 'Do you have other questions?'}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('language') === 'fr' 
              ? 'Notre équipe est disponible pour répondre à toutes vos préoccupations'
              : 'Our team is available to answer all your concerns'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+14509992973"
              className="btn-coral text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>{t('language') === 'fr' ? 'Appelez-nous' : 'Call us'}</span>
            </a>
            <a 
              href="mailto:info@vasectomie450.com"
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
            >
              {t('language') === 'fr' ? 'Écrivez-nous' : 'Email us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
