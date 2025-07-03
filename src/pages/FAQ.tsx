import React, { useState, useEffect } from 'react';
import { Plus, Minus, AlertCircle, Loader2, ExternalLink, Sparkles, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useMarkdownContent } from '../hooks/useMarkdownContent';

const FAQ: React.FC = () => {
  const { t, language } = useLanguage();
  const { faqSections, faqItems, loading, error } = useMarkdownContent(language);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  // Stagger animation for sections and items
  useEffect(() => {
    if (faqSections.length > 0) {
      // Animate sections first
      faqSections.forEach((_, sectionIndex) => {
        setTimeout(() => {
          setVisibleSections(prev => [...prev, sectionIndex]);
        }, sectionIndex * 200);
      });

      // Then animate items within each section
      let itemDelay = 0;
      faqSections.forEach((section, sectionIndex) => {
        section.items.forEach((_, itemIndex) => {
          const itemId = `${sectionIndex}-${itemIndex}`;
          setTimeout(() => {
            setVisibleItems(prev => [...prev, itemId]);
          }, 400 + itemDelay * 100);
          itemDelay++;
        });
      });
    }
  }, [faqSections]);

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const itemId = `${sectionIndex}-${itemIndex}`;
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const parseMarkdownContent = (text: string) => {
    const paragraphs = text.split('\n\n');
    
    return paragraphs.map((paragraph, paragraphIndex) => {
      const elements: React.ReactNode[] = [];
      let lastIndex = 0;
      
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let match;
      
      while ((match = linkRegex.exec(paragraph)) !== null) {
        if (match.index > lastIndex) {
          elements.push(paragraph.slice(lastIndex, match.index));
        }
        
        const linkText = match[1];
        const linkUrl = match[2];
        const isExternal = linkUrl.startsWith('http') || linkUrl.startsWith('https');
        
        elements.push(
          <a
            key={`link-${paragraphIndex}-${match.index}`}
            href={linkUrl}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="text-teal-600 hover:text-teal-700 underline decoration-2 underline-offset-2 transition-all duration-300 inline-flex items-center gap-1 hover:gap-2"
          >
            {linkText}
            {isExternal && <ExternalLink className="w-3 h-3 transition-transform duration-300 hover:scale-110" />}
          </a>
        );
        
        lastIndex = match.index + match[0].length;
      }
      
      if (lastIndex < paragraph.length) {
        elements.push(paragraph.slice(lastIndex));
      }
      
      if (elements.length === 0) {
        elements.push(paragraph);
      }
      
      return (
        <p key={paragraphIndex} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
          {elements}
        </p>
      );
    });
  };

  const renderAnswer = (answer: string) => {
    return parseMarkdownContent(answer);
  };

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/15 to-pink-200/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-coral-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="section-padding relative z-10">
        <div className="container-max text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-200/50 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-700">
              {language === 'fr' ? 'Questions & Réponses' : 'Questions & Answers'}
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {language === 'fr' ? 'Vous avez des questions ?' : 'Got questions?'}
            </span>
            <br />
            <span className="text-gray-800 text-3xl lg:text-4xl font-normal">
              {language === 'fr' ? 'Nous avons les réponses' : "We've got answers"}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding relative z-10">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                  <Loader2 className="w-8 h-8 animate-spin text-teal-600 mr-3 mx-auto mb-4" />
                  <span className="text-gray-600 block text-center">
                    {language === 'fr' ? 'Chargement des questions...' : 'Loading questions...'}
                  </span>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-white/90 backdrop-blur-sm border border-red-200/50 rounded-2xl p-6 mb-8 shadow-lg animate-fade-in">
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

            {!loading && !error && faqSections.length === 0 && (
              <div className="bg-white/90 backdrop-blur-sm border border-yellow-200/50 rounded-2xl p-6 mb-8 shadow-lg animate-fade-in">
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

            {!loading && !error && faqSections.length > 0 && (
              <div className="space-y-12">
                {faqSections.map((section, sectionIndex) => {
                  const isSectionVisible = visibleSections.includes(sectionIndex);
                  
                  return (
                    <div 
                      key={sectionIndex}
                      className={`
                        transition-all duration-700 transform
                        ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                      `}
                      style={{ transitionDelay: `${sectionIndex * 200}ms` }}
                    >
                      {/* Section Header */}
                      <div className="mb-8">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 via-blue-600/10 to-purple-600/10 rounded-2xl blur-xl"></div>
                          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
                            <h2 className="text-2xl lg:text-3xl font-bold text-center">
                              <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {section.title}
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>

                      {/* Section Items */}
                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => {
                          const itemId = `${sectionIndex}-${itemIndex}`;
                          const isOpen = openItems.includes(itemId);
                          const isItemVisible = visibleItems.includes(itemId);
                          const isEven = itemIndex % 2 === 0;
                          
                          return (
                            <div 
                              key={itemIndex} 
                              className={`
                                group relative transition-all duration-700 transform
                                ${isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                ${isEven ? 'lg:translate-x-4' : 'lg:-translate-x-4'}
                                hover:translate-x-0 hover:scale-[1.02]
                              `}
                              style={{ 
                                transitionDelay: `${400 + (sectionIndex * section.items.length + itemIndex) * 100}ms`,
                                background: isEven 
                                  ? 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,253,250,0.8) 100%)'
                                  : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(239,246,255,0.8) 100%)'
                              }}
                            >
                              {/* Gradient Border Effect */}
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-200/50 via-blue-200/50 to-purple-200/50 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-full h-full rounded-2xl bg-white/95 backdrop-blur-sm"></div>
                              </div>
                              
                              {/* Content */}
                              <div className="relative backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <button
                                  onClick={() => toggleItem(sectionIndex, itemIndex)}
                                  className="w-full text-left flex items-center justify-between p-6 lg:p-8 hover:bg-white/50 transition-all duration-300 group"
                                >
                                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-4 group-hover:text-teal-700 transition-colors duration-300">
                                    {item.question}
                                  </h3>
                                  
                                  <div className={`
                                    flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                                    transition-all duration-300 transform
                                    ${isOpen 
                                      ? 'bg-teal-600 text-white rotate-180 scale-110' 
                                      : 'bg-teal-100 text-teal-600 hover:bg-teal-200 group-hover:scale-110'
                                    }
                                  `}>
                                    {isOpen ? (
                                      <Minus className="w-4 h-4" />
                                    ) : (
                                      <Plus className="w-4 h-4" />
                                    )}
                                  </div>
                                </button>
                                
                                <div className={`
                                  overflow-hidden transition-all duration-500 ease-in-out
                                  ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
                                `}>
                                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                                    <div className="border-t border-gradient-to-r from-teal-200/50 to-blue-200/50 pt-6">
                                      <div className="prose prose-gray max-w-none">
                                        {renderAnswer(item.answer)}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding relative z-10">
        <div className="container-max">
          <div className="relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 rounded-3xl opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/20 rounded-3xl"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-8 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute bottom-8 left-12 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            
            {/* Content */}
            <div className="relative text-center py-16 px-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-6">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white/90">
                  {language === 'fr' ? 'Besoin d\'aide ?' : 'Need Help?'}
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                {t('faq.cta.more.questions')}
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                {t('faq.cta.contact.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="group relative bg-white text-teal-700 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl transform"
                >
                  <span className="relative z-10">{t('faq.cta.contact.button')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-coral-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    {t('faq.cta.contact.button')}
                  </span>
                </a>
                <a 
                  href="/appointments"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl transform"
                >
                  {t('faq.cta.appointment.button')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
