// React hooks for state management
import { useState, useEffect } from 'react';

/**
 * Interface for individual FAQ item structure
 */
export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Interface for FAQ section containing multiple items
 */
export interface FAQSection {
  title: string;
  items: FAQItem[];
}

/**
 * Custom hook for loading and parsing markdown FAQ content
 * Fetches markdown files from public/content directory and parses them into structured data
 * Supports both French and English content with automatic language switching
 * 
 * @param language - Language code ('fr' or 'en') to determine which markdown file to load
 * @returns Object containing parsed FAQ data, loading state, and error state
 */
export const useMarkdownContent = (language: 'fr' | 'en') => {
  // State for parsed FAQ sections (organized by category)
  const [faqSections, setFaqSections] = useState<FAQSection[]>([]);
  // State for all FAQ items in a flat array (for search functionality)
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  // Loading state for UI feedback
  const [loading, setLoading] = useState(true);
  // Error state for error handling
  const [error, setError] = useState<string | null>(null);

  // Effect to load and parse FAQ content when language changes
  useEffect(() => {
    /**
     * Loads FAQ markdown content from public directory
     * Parses the markdown into structured FAQ sections and items
     */
    const loadFAQContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Construct filename based on selected language
        const filename = `faq-${language}.md`;
        const response = await fetch(`/content/${filename}`);
        
        if (!response.ok) {
          throw new Error(`Failed to load FAQ content: ${response.statusText}`);
        }
        
        // Parse markdown text into structured data
        const markdownText = await response.text();
        const { sections, allItems } = parseMarkdownFAQ(markdownText);
        setFaqSections(sections);
        setFaqItems(allItems);
      } catch (err) {
        console.error('Error loading FAQ content:', err);
        setError(err instanceof Error ? err.message : 'Failed to load FAQ content');
        // Reset state on error
        setFaqSections([]);
        setFaqItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadFAQContent();
  }, [language]); // Re-run when language changes

  return { faqSections, faqItems, loading, error };
};

/**
 * Parses markdown text into structured FAQ data
 * Expects markdown format with # for sections and ## for questions
 * 
 * @param markdown - Raw markdown text content
 * @returns Object containing organized sections and flat array of all items
 */
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
