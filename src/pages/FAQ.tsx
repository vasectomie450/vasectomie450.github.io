import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useMarkdownContent } from '../hooks/useMarkdownContent';

const FAQ: React.FC = () => {
  const { t, language } = useLanguage();
  const { faqItems, loading, error } = useMarkdownContent(language);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const parseMarkdownContent = (text: string) => {
    // Split by double newlines to create paragraphs
    const paragraphs = text.split('\n\n');
    
    return paragraphs.map((paragraph, paragraphIndex) => {
      const elements: React.ReactNode[] = [];
      let lastIndex = 0;
      
      // Regex to match markdown links: [text](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let match;
      
      while ((match = linkRegex.exec(paragraph)) !== null) {
        // Add text before the link
        if (match.index > lastIndex) {
          elements.push(paragraph.slice(lastIndex, match.index));
        }
        
        // Add the link
        const linkText = match[1];
        const linkUrl = match[2];
        const isExternal = linkUrl.startsWith('http') || linkUrl.startsWith('https');
        
        elements.push(
          <a
            key={`link-${paragraphIndex}-${match.index}`}
            href={linkUrl}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="text-teal-600 hover:text-teal-700 underline decoration-2 underline-offset-2 transition-colors duration-200 inline-flex items-center gap-1"
          >
            {linkText}
            {isExternal && <ExternalLink className="w-3 h-3" />}
          </a>
        );
        
        lastIndex = match.index + match[0].length;
      }
      
      // Add remaining text after the last link
      if (lastIndex < paragraph.length) {
        elements.push(paragraph.slice(lastIndex));
      }
      
      // If no links were found, just return the paragraph text
      if (elements.length === 0) {
        elements.push(paragraph);
      }
      
      return (
        <p key={paragraphIndex} className="text-gray-600 leading-relaxed mb-3 last:mb-0">
          {elements}
        </p>
      );
    });
  };

  const renderAnswer = (answer: string) => {
    return parseMarkdownContent(answer);
  };

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
            {loading && (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-teal-600 mr-3" />
                <span className="text-gray-600">
                  {language === 'fr' ? 'Chargement des questions...' : 'Loading questions...'}
                </span>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-red-800 font-semibold mb-2">
                      {language === 'fr' ? 'Erreur de chargement' : 'Loading Error'}
                    </h3>
                    <p className="text-red-700 text-sm">
                      {language === 'fr' 
                        ? 'Impossible de charger le contenu FAQ. Veuillez réessayer plus tard.'
                        : 'Unable to load FAQ content. Please try again later.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!loading && !error && faqItems.length === 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-yellow-800 font-semibold mb-2">
                      {language === 'fr' ? 'Aucun contenu disponible' : 'No Content Available'}
                    </h3>
                    <p className="text-yellow-700 text-sm">
                      {language === 'fr' 
                        ? 'Les questions FAQ ne sont pas encore disponibles dans cette langue.'
                        : 'FAQ questions are not yet available in this language.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!loading && !error && faqItems.length > 0 && (
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
                          {renderAnswer(item.answer)}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
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
