import { useState, useEffect } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export const useMarkdownContent = (language: 'fr' | 'en') => {
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
        const parsedFAQ = parseMarkdownFAQ(markdownText);
        setFaqItems(parsedFAQ);
      } catch (err) {
        console.error('Error loading FAQ content:', err);
        setError(err instanceof Error ? err.message : 'Failed to load FAQ content');
        // Fallback to empty array if content fails to load
        setFaqItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadFAQContent();
  }, [language]);

  return { faqItems, loading, error };
};

const parseMarkdownFAQ = (markdown: string): FAQItem[] => {
  const items: FAQItem[] = [];
  const lines = markdown.split('\n');
  
  let currentQuestion = '';
  let currentAnswer = '';
  let isCollectingAnswer = false;
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Skip empty lines and main title
    if (!trimmedLine || trimmedLine.startsWith('# ')) {
      continue;
    }
    
    // Check if this is a question (starts with ##)
    if (trimmedLine.startsWith('## ')) {
      // Save previous Q&A if exists
      if (currentQuestion && currentAnswer) {
        items.push({
          question: currentQuestion,
          answer: currentAnswer.trim()
        });
      }
      
      // Start new question
      currentQuestion = trimmedLine.substring(3).trim();
      currentAnswer = '';
      isCollectingAnswer = true;
    } else if (isCollectingAnswer && trimmedLine) {
      // Collect answer lines, preserving markdown formatting
      if (currentAnswer) {
        currentAnswer += '\n\n';
      }
      currentAnswer += trimmedLine;
    }
  }
  
  // Don't forget the last Q&A
  if (currentQuestion && currentAnswer) {
    items.push({
      question: currentQuestion,
      answer: currentAnswer.trim()
    });
  }
  
  return items;
};
