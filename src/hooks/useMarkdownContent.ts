import { useState, useEffect } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  items: FAQItem[];
}

export const useMarkdownContent = (language: 'fr' | 'en') => {
  const [faqSections, setFaqSections] = useState<FAQSection[]>([]);
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFAQContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const filename = `faq-${language}.md`;
        const response = await fetch(`/content/${filename}`);
        
        if (!response.ok) {
          throw new Error(`Failed to load FAQ content: ${response.statusText}`);
        }
        
        const markdownText = await response.text();
        const { sections, allItems } = parseMarkdownFAQ(markdownText);
        setFaqSections(sections);
        setFaqItems(allItems);
      } catch (err) {
        console.error('Error loading FAQ content:', err);
        setError(err instanceof Error ? err.message : 'Failed to load FAQ content');
        setFaqSections([]);
        setFaqItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadFAQContent();
  }, [language]);

  return { faqSections, faqItems, loading, error };
};

const parseMarkdownFAQ = (markdown: string): { sections: FAQSection[], allItems: FAQItem[] } => {
  const sections: FAQSection[] = [];
  const allItems: FAQItem[] = [];
  const lines = markdown.split('\n');
  
  let currentSection: FAQSection | null = null;
  let currentQuestion = '';
  let currentAnswer = '';
  let isCollectingAnswer = false;
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Skip empty lines and main title (first # line)
    if (!trimmedLine) {
      continue;
    }
    
    // Check if this is a section header (starts with single #, but not ##)
    if (trimmedLine.startsWith('# ') && !trimmedLine.startsWith('## ')) {
      // Save previous Q&A if exists
      if (currentQuestion && currentAnswer && currentSection) {
        const faqItem = {
          question: currentQuestion,
          answer: currentAnswer.trim()
        };
        currentSection.items.push(faqItem);
        allItems.push(faqItem);
      }
      
      // Start new section
      const sectionTitle = trimmedLine.substring(2).trim();
      
      // Skip the main title
      if (sectionTitle.toLowerCase().includes('questions fréquemment posées') || 
          sectionTitle.toLowerCase().includes('frequently asked questions')) {
        continue;
      }
      
      currentSection = {
        title: sectionTitle,
        items: []
      };
      sections.push(currentSection);
      
      // Reset question/answer state
      currentQuestion = '';
      currentAnswer = '';
      isCollectingAnswer = false;
    }
    // Check if this is a question (starts with ##)
    else if (trimmedLine.startsWith('## ')) {
      // Save previous Q&A if exists
      if (currentQuestion && currentAnswer && currentSection) {
        const faqItem = {
          question: currentQuestion,
          answer: currentAnswer.trim()
        };
        currentSection.items.push(faqItem);
        allItems.push(faqItem);
      }
      
      // Start new question
      currentQuestion = trimmedLine.substring(3).trim();
      currentAnswer = '';
      isCollectingAnswer = true;
    } 
    // Collect answer lines
    else if (isCollectingAnswer && trimmedLine && currentSection) {
      if (currentAnswer) {
        currentAnswer += '\n\n';
      }
      currentAnswer += trimmedLine;
    }
  }
  
  // Don't forget the last Q&A
  if (currentQuestion && currentAnswer && currentSection) {
    const faqItem = {
      question: currentQuestion,
      answer: currentAnswer.trim()
    };
    currentSection.items.push(faqItem);
    allItems.push(faqItem);
  }
  
  return { sections, allItems };
};
