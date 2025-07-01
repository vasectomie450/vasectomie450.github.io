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
      question: t('faq.duration.question'),
      answer: t('faq.duration.answer')
    },
    {
      question: t('faq.risks.question'),
      answer: t('faq.risks.answer')
    },
    {
      question: t('faq.effectiveness.question'),
      answer: t('faq.effectiveness.answer')
    },
    {
      question: t('faq.work.question'),
      answer: t('faq.work.answer')
    },
    {
      question: t('faq.performance.question'),
      answer: t('faq.performance.answer')
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
            {t('faq.cta.more.questions')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('faq.cta.contact.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="btn-coral text-lg px-8 py-4"
            >
              {t('faq.cta.contact.button')}
            </a>
            <a 
              href="/appointments"
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
            >
              {t('faq.cta.appointment.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
