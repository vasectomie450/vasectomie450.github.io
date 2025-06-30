import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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

  const faqItems = [
    {
      question: t('vasectomy.faq.reversible.question'),
      answer: t('vasectomy.faq.reversible.answer')
    },
    {
      question: t('vasectomy.faq.activities.question'),
      answer: t('vasectomy.faq.activities.answer')
    },
    {
      question: t('vasectomy.faq.hormones.question'),
      answer: t('vasectomy.faq.hormones.answer')
    },
    {
      question: t('language') === 'fr' ? 'Combien de temps dure la procédure?' : 'How long does the procedure take?',
      answer: t('language') === 'fr' 
        ? 'La vasectomie sans bistouri prend généralement entre 15 à 20 minutes. C\'est une procédure ambulatoire, vous pouvez rentrer chez vous le jour même.'
        : 'The no-scalpel vasectomy typically takes 15 to 20 minutes. It\'s an outpatient procedure, so you can go home the same day.'
    },
    {
      question: t('language') === 'fr' ? 'Y a-t-il des risques ou complications?' : 'Are there any risks or complications?',
      answer: t('language') === 'fr' 
        ? 'Comme toute intervention médicale, la vasectomie comporte des risques minimes. Les complications sont rares (moins de 1%) et incluent saignement, infection ou douleur persistante.'
        : 'Like any medical procedure, vasectomy carries minimal risks. Complications are rare (less than 1%) and include bleeding, infection, or persistent pain.'
    },
    {
      question: t('language') === 'fr' ? 'Quand la vasectomie devient-elle effective?' : 'When does the vasectomy become effective?',
      answer: t('language') === 'fr' 
        ? 'La vasectomie n\'est pas immédiatement effective. Il faut attendre 8-12 semaines et faire un spermogramme de contrôle pour confirmer l\'absence de spermatozoïdes.'
        : 'Vasectomy is not immediately effective. You need to wait 8-12 weeks and have a semen analysis to confirm the absence of sperm.'
    },
    {
      question: t('language') === 'fr' ? 'Puis-je reprendre le travail immédiatement?' : 'Can I return to work immediately?',
      answer: t('language') === 'fr' 
        ? 'Pour un travail de bureau, vous pouvez généralement reprendre après 2-3 jours. Pour un travail physique, il est recommandé d\'attendre 1-2 semaines.'
        : 'For office work, you can usually return after 2-3 days. For physical work, it\'s recommended to wait 1-2 weeks.'
    },
    {
      question: t('language') === 'fr' ? 'La vasectomie affecte-t-elle la performance sexuelle?' : 'Does vasectomy affect sexual performance?',
      answer: t('language') === 'fr' 
        ? 'Non, la vasectomie n\'affecte pas la performance sexuelle, la libido ou la capacité d\'érection. L\'éjaculation reste normale, seuls les spermatozoïdes sont absents.'
        : 'No, vasectomy does not affect sexual performance, libido, or erectile function. Ejaculation remains normal, only sperm are absent.'
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

      {/* FAQ Items */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="card">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
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
            {t('language') === 'fr' ? 'D\'autres questions?' : 'More questions?'}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('language') === 'fr' 
              ? 'N\'hésitez pas à nous contacter pour toute question supplémentaire'
              : 'Don\'t hesitate to contact us for any additional questions'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="btn-coral text-lg px-8 py-4"
            >
              {t('language') === 'fr' ? 'Nous contacter' : 'Contact us'}
            </a>
            <a 
              href="/appointments"
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
            >
              {t('language') === 'fr' ? 'Prendre rendez-vous' : 'Book appointment'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
