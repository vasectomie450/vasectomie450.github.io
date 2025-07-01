import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Declare Google Maps types
declare global {
  interface Window {
    google: any;
    initGoogleMaps: () => void;
  }
}

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
    loadGoogleMapsAPI();
  }, []);

  const loadGoogleMapsAPI = () => {
    // Check if Google Maps is already loaded
    if (window.google?.maps) {
      fetchGoogleReviews();
      return;
    }

    // Create callback function
    window.initGoogleMaps = () => {
      fetchGoogleReviews();
    };

    // Load Google Maps JavaScript API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyByyuoo6VdCdBV8HeVbBClTMOIszYaYMCk&libraries=places&callback=initGoogleMaps`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      console.error('Failed to load Google Maps API');
      setHasError(true);
      setLoading(false);
    };
    document.head.appendChild(script);
  };

  const fetchGoogleReviews = () => {
    try {
      setLoading(true);
      setHasError(false);

      const placeId = 'ChIJT54XLeovyUwRfvEzDQoAEbE';
      
      // Create a PlacesService instance
      const service = new window.google.maps.places.PlacesService(
        document.createElement('div')
      );

      // Request place details
      const request = {
        placeId: placeId,
        fields: ['name', 'rating', 'user_ratings_total', 'reviews']
      };

      service.getDetails(request, (place: any, status: any) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
          // Filter and format reviews (4.5+ stars only)
          const filteredReviews = place.reviews
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
            })) ?? [];

          // Set business info
          setBusinessInfo({
            name: place.name,
            rating: place.rating,
            totalReviews: place.user_ratings_total
          });

          setReviews(filteredReviews);
        } else {
          console.error('Places service failed:', status);
          setHasError(true);
        }
        setLoading(false);
      });
      
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      setHasError(true);
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
