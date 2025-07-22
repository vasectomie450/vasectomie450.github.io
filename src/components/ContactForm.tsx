import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { sanitizeText, isValidEmail, isValidPhone, RateLimiter } from '../utils/security';

// Rate limiter for form submissions
const formRateLimiter = new RateLimiter(3, 10 * 60 * 1000); // 3 attempts per 10 minutes

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.nameRequired');
    } else if (formData.name.length < 2 || formData.name.length > 50) {
      newErrors.name = t('contact.form.errors.nameLength');
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.emailRequired');
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid');
    }

    // Validate phone (optional but if provided, must be valid)
    if (formData.phone.trim() && !isValidPhone(formData.phone)) {
      newErrors.phone = t('contact.form.errors.phoneInvalid');
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.form.errors.subjectRequired');
    } else if (formData.subject.length < 5 || formData.subject.length > 100) {
      newErrors.subject = t('contact.form.errors.subjectLength');
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired');
    } else if (formData.message.length < 10 || formData.message.length > 1000) {
      newErrors.message = t('contact.form.errors.messageLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Sanitize input in real-time
    const sanitizedValue = sanitizeText(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    const clientId = `${formData.email}-${Date.now()}`;
    if (!formRateLimiter.isAllowed(clientId)) {
      setErrors({ submit: t('contact.form.errors.rateLimited') });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Sanitize all form data before submission
      const sanitizedData = {
        name: sanitizeText(formData.name),
        email: sanitizeText(formData.email),
        phone: sanitizeText(formData.phone),
        subject: sanitizeText(formData.subject),
        message: sanitizeText(formData.message),
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent.slice(0, 200) // Limit user agent length
      };

      // In a real application, you would send this to your secure backend
      console.log('Secure form submission:', sanitizedData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrors({ submit: t('contact.form.errors.submitFailed') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {t('contact.form.title')}
        </h3>
        <p className="text-gray-600">
          {t('contact.form.subtitle')}
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            {t('contact.form.success')}
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">
            {errors.submit || t('contact.form.errors.submitFailed')}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            maxLength={50}
            required
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
              errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder={t('contact.form.namePlaceholder')}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            maxLength={254}
            required
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
              errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder={t('contact.form.emailPlaceholder')}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            maxLength={20}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
              errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder={t('contact.form.phonePlaceholder')}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.subject')} *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            maxLength={100}
            required
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
              errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder={t('contact.form.subjectPlaceholder')}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.message')} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            maxLength={1000}
            rows={5}
            required
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical ${
              errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder={t('contact.form.messagePlaceholder')}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.message}
            </p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            {formData.message.length}/1000 {t('contact.form.charactersRemaining')}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary-600 to-teal-600 hover:from-primary-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:hover:shadow-lg"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>{t('contact.form.sending')}</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>{t('contact.form.send')}</span>
            </>
          )}
        </button>
      </form>

      {/* Contact Information */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          {t('contact.info.title')}
        </h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-primary-600" />
            <a href="tel:+14509992973" className="text-gray-700 hover:text-primary-600 transition-colors">
              (450) 999-2973
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-primary-600" />
            <a href="mailto:info@vasectomie450.com" className="text-gray-700 hover:text-primary-600 transition-colors">
              info@vasectomie450.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-primary-600" />
            <span className="text-gray-700">
              {t('contact.info.address')}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-primary-600" />
            <span className="text-gray-700">
              {t('contact.info.hours')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
