import DOMPurify from 'dompurify';

/**
 * Security utilities for sanitizing user input and preventing XSS attacks
 */

/**
 * Sanitize HTML content to prevent XSS attacks
 */
export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true,
    RETURN_DOM: false,
    RETURN_DOM_FRAGMENT: false,
    RETURN_DOM_IMPORT: false,
    SANITIZE_DOM: true
  });
};

/**
 * Sanitize text input to prevent injection attacks
 */
export const sanitizeText = (text: string): string => {
  if (typeof text !== 'string') return '';
  
  return text
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .slice(0, 1000); // Limit length to prevent DoS
};

/**
 * Validate email format securely
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Validate phone number format
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
  return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10 && cleanPhone.length <= 16;
};

/**
 * Validate URL to prevent malicious redirects
 */
export const isValidUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    // Only allow https and http protocols
    return ['https:', 'http:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
};

/**
 * Rate limiting helper for client-side
 */
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  
  constructor(
    private maxAttempts: number = 5,
    private windowMs: number = 15 * 60 * 1000 // 15 minutes
  ) {}
  
  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    validAttempts.push(now);
    this.attempts.set(identifier, validAttempts);
    return true;
  }
  
  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }
}

/**
 * Content Security Policy nonce generator
 */
export const generateNonce = (): string => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Secure local storage wrapper
 */
export const secureStorage = {
  setItem: (key: string, value: string): void => {
    try {
      const sanitizedKey = sanitizeText(key);
      const sanitizedValue = sanitizeText(value);
      localStorage.setItem(sanitizedKey, sanitizedValue);
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  },
  
  getItem: (key: string): string | null => {
    try {
      const sanitizedKey = sanitizeText(key);
      const value = localStorage.getItem(sanitizedKey);
      return value ? sanitizeText(value) : null;
    } catch (error) {
      console.warn('Failed to read from localStorage:', error);
      return null;
    }
  },
  
  removeItem: (key: string): void => {
    try {
      const sanitizedKey = sanitizeText(key);
      localStorage.removeItem(sanitizedKey);
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error);
    }
  }
};
