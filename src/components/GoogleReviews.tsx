import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';



interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
  source: string;
  relativeTime?: string;
}

interface BusinessInfo {
  name: string;
  rating: number;
  totalReviews: number;
}

interface GoogleReviewsResponse {
  businessInfo: BusinessInfo;
  reviews: Review[];
  error?: string;
}

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    fetchGoogleReviews();
  }, []);

  const fetchGoogleReviews = async () => {
    try {
      setLoading(true);
      setHasError(false);

      const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID || 'ChIJT54XLeovyUwRfvEzDQoAEbE';
      
      // Call our server endpoint instead of Google API directly
      const response = await fetch(`http://localhost:3001/api/google-reviews?place_id=${placeId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: GoogleReviewsResponse = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setReviews(data.reviews);
      
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  // Don't render anything if there's an error or no reviews
  if (hasError || (!loading && reviews.length === 0)) {
    return null;
  }

  // Show loading state
  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500 mx-auto"></div>
            <p className="mt-2 text-gray-600">Chargement des avis...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review) => (
            <div key={review.id} className="card relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-teal-100" />
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-primary-600 rounded-full flex items-center justify-center">
                  {review.avatar ? (
                    <img 
                      src={review.avatar} 
                      alt={review.author}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-semibold text-lg">
                      {review.author.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.author}</h4>
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{review.source}</span>
                <span>
                  {review.relativeTime || new Date(review.date).toLocaleDateString('fr-CA')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
