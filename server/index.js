import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Google Reviews endpoint
app.get('/api/google-reviews', async (req, res) => {
  try {
    const placeId = process.env.VITE_GOOGLE_PLACE_ID || 'ChIJT54XLeovyUwRfvEzDQoAEbE';
    const apiKey = process.env.VITE_GOOGLE_PLACES_API_KEY || 'AIzaSyByyuoo6VdCdBV8HeVbBClTMOIszYaYMCk';

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
    
    console.log('Fetching Google reviews from:', url.replace(apiKey, 'API_KEY_HIDDEN'));
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    // Filter for high-rating reviews (4.5+ stars)
    const filteredReviews = data.result.reviews
      ?.filter(review => review.rating >= 4.5)
      ?.map(review => ({
        id: `google-${review.time}`,
        author: review.author_name,
        rating: review.rating,
        text: review.text,
        date: new Date(review.time * 1000).toISOString().split('T')[0],
        avatar: review.profile_photo_url,
        source: 'Google',
        relativeTime: review.relative_time_description,
        language: review.language,
        originalLanguage: review.original_language,
        translated: review.translated
      })) || [];

    console.log(`Successfully fetched ${filteredReviews.length} high-rating reviews`);

    res.json({
      success: true,
      data: {
        businessName: data.result.name,
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total,
        reviews: filteredReviews,
        filteredCount: filteredReviews.length
      }
    });

  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch Google reviews',
      message: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Google Reviews API endpoint: http://localhost:3001/api/google-reviews');
});
