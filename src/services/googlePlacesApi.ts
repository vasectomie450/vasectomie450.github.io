interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePlaceDetails {
  place_id: string;
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

interface GooglePlacesResponse {
  result: GooglePlaceDetails;
  status: string;
}

class GooglePlacesService {
  private apiKey: string;
  private placeId: string;
  private baseUrl = 'https://maps.googleapis.com/maps/api/place/details/json';

  constructor() {
    this.apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    this.placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;

    if (!this.apiKey || !this.placeId) {
      throw new Error('Google Places API key and Place ID are required');
    }
  }

  async fetchPlaceDetails(): Promise<GooglePlaceDetails> {
    try {
      // Note: In production, this should go through your backend to avoid CORS issues
      // For now, we'll use a CORS proxy or implement a backend endpoint
      const proxyUrl = 'https://api.allorigins.win/raw?url=';
      const targetUrl = `${this.baseUrl}?place_id=${this.placeId}&fields=name,rating,user_ratings_total,reviews&key=${this.apiKey}`;
      
      const response = await fetch(`${proxyUrl}${encodeURIComponent(targetUrl)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: GooglePlacesResponse = await response.json();
      
      if (data.status !== 'OK') {
        throw new Error(`Google Places API error: ${data.status}`);
      }

      return data.result;
    } catch (error) {
      console.error('Error fetching Google Places data:', error);
      throw error;
    }
  }

  filterHighRatingReviews(reviews: GoogleReview[], minRating: number = 4.5): GoogleReview[] {
    return reviews.filter(review => review.rating >= minRating);
  }

  formatReviewsForDisplay(reviews: GoogleReview[]) {
    return reviews.map(review => ({
      id: `google-${review.time}`,
      author: review.author_name,
      rating: review.rating,
      text: review.text,
      date: new Date(review.time * 1000).toISOString().split('T')[0],
      avatar: review.profile_photo_url,
      source: 'Google',
      relativeTime: review.relative_time_description,
      language: review.language
    }));
  }

  async getFilteredReviews(minRating: number = 4.5) {
    try {
      const placeDetails = await this.fetchPlaceDetails();
      const filteredReviews = this.filterHighRatingReviews(placeDetails.reviews, minRating);
      const formattedReviews = this.formatReviewsForDisplay(filteredReviews);
      
      return {
        reviews: formattedReviews,
        businessInfo: {
          name: placeDetails.name,
          rating: placeDetails.rating,
          totalReviews: placeDetails.user_ratings_total,
          filteredCount: filteredReviews.length
        }
      };
    } catch (error) {
      console.error('Error getting filtered reviews:', error);
      throw error;
    }
  }
}

export const googlePlacesService = new GooglePlacesService();
export type { GoogleReview };
