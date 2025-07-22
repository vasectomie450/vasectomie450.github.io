import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Google Places API proxy endpoint
app.get('/api/google-reviews', async (req, res) => {
  try {
    const { place_id } = req.query;
    const apiKey = process.env.VITE_GOOGLE_PLACES_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ error: 'Google Places API key not configured' });
    }
    
    if (!place_id) {
      return res.status(400).json({ error: 'place_id parameter is required' });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status !== 'OK') {
      return res.status(400).json({ error: `Google Places API error: ${data.status}` });
    }
    
    // Filter and format reviews (4.5+ stars only)
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
        relativeTime: review.relative_time_description
      })) ?? [];

    res.json({
      businessInfo: {
        name: data.result.name,
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total
      },
      reviews: filteredReviews
    });
    
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
