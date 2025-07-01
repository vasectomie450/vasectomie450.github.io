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

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
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

      const placeId = 'ChIJT54XLeovyUwRfvEzDQoAEbE';
      const apiKey = 'AIzaSyByyuoo6VdCdBV8HeVbBClTMOIszYaYMCk';
      
      // Direct API call with JSONP to bypass CORS
      const script = document.createElement('script');
      const callbackName = `googleReviewsCallback_${Date.now()}`;
      
      // Create a promise that resolves when the JSONP callback is called
      const jsonpPromise = new Promise((resolve, reject) => {
        // Set up the callback
        (window as any)[callbackName] = (data: any) => {
          resolve(data);
          // Clean up
          document.head.removeChild(script);
          delete (window as any)[callbackName];
        };

        // Set up error handling
        script.onerror = () => {
          reject(new Error('Failed to load Google Places API'));
          document.head.removeChild(script);
          delete (window as any)[callbackName];
        };

        // Set timeout
        setTimeout(() => {
          if ((window as any)[callbackName]) {
            reject(new Error('Request timeout'));
            document.head.removeChild(script);
            delete (window as any)[callbackName];
          }
        }, 10000);
      });

      // Make the JSONP request
      script.src = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}&callback=${callbackName}`;
      document.head.appendChild(script);

      const data = await jsonpPromise as any;

      if (data.status !== 'OK') {
        throw new Error(`Google Places API error: ${data.status}`);
      }

      // Filter and format reviews (4.5+ stars only)
      const filteredReviews = data.result.reviews
        ?.filter((review: any) => review.rating >= 4.5)
        ?.map((review: any) => ({
          id: `google-${review.time}`,
          author: review.author_name,
          rating: review.rating,
          text: review.text,
          date: new Date(review.time * 1000).toISOString().split('T')[0],
          avatar: review.profile_photo_url,
          source: 'Google',
          relativeTime: review.relative_time_description
        })) || [];

      // Set business info
      setBusinessInfo({
        name: data.result.name,
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total
      });

      setReviews(filteredReviews);
      
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
          
          {businessInfo && (
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {renderStars(5)}
              </div>
              <span className="text-lg font-semibold text-gray-900">
                {businessInfo.rating}/5
              </span>
              <span className="text-gray-600">
                • {businessInfo.totalReviews} avis Google
              </span>
              <span className="text-teal-600 text-sm">
                {reviews.length} avis excellents (4.5★+)
              </span>
            </div>
          )}
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

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=vasectomie+450+avis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
          >
            <span>Voir tous les avis sur Google</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Google Reviews Summary */}
        {businessInfo && (
          <div className="mt-12 bg-gradient-to-r from-teal-50 to-primary-50 rounded-xl p-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <span className="text-2xl font-bold text-gray-900">
                    {businessInfo.rating}/5
                  </span>
                </div>
                <div className="text-gray-600">
                  Basé sur <strong>{businessInfo.totalReviews} avis</strong>
                </div>
                <div className="text-teal-600 font-medium">
                  {reviews.length} avis excellents (4.5★+)
                </div>
              </div>
              <p className="text-gray-700">
                Nos patients apprécient notre approche professionnelle et nos résultats exceptionnels.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GoogleReviews;
