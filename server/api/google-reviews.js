// Backend endpoint to fetch Google Reviews (avoiding CORS)
import fetch from 'node-fetch';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const placeId = process.env.VITE_GOOGLE_PLACE_ID || 'ChIJT54XLeovyUwRfvEzDQoAEbE';
    const apiKey = process.env.VITE_GOOGLE_PLACES_API_KEY || 'AIzaSyByyuoo6VdCdBV8HeVbBClTMOIszYaYMCk';

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
    
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

    res.status(200).json({
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
}
