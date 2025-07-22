// React imports
import React, { useState } from 'react';

// Context for internationalization
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Custom YouTube video player component with thumbnail preview
 * Shows a thumbnail with play button overlay, then loads the actual YouTube video when clicked
 * Provides better performance and user control compared to auto-embedded videos
 */
const CustomVideoPlayer: React.FC = () => {
  // State to control whether to show thumbnail or actual video
  const [showVideo, setShowVideo] = useState(false);
  const { t } = useLanguage();
  
  // YouTube video ID for the vasectomy technique demonstration
  const videoId = 'kBxIINrMWd0';

  /**
   * Handles click on video thumbnail to load the actual YouTube video
   * Switches from thumbnail view to embedded YouTube player
   */
  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="video-container">
      <div className="video-wrapper">
        {/* Conditional rendering: show thumbnail or actual video */}
        {!showVideo ? (
          // Thumbnail view with play button overlay
          <div 
            className="video-thumbnail" 
            onClick={handlePlayClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePlayClick();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Play video"
          >
            {/* YouTube thumbnail image */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Video thumbnail"
              className="thumbnail-image"
            />
            
            {/* Play button overlay */}
            <div className="play-button-overlay">
              <div className="play-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            
            {/* Video information overlay */}
            <div className="video-info">
              <span className="video-label">{t('home.video.watch')}</span>
              <span className="video-subtitle">{t('home.video.technique')}</span>
            </div>
          </div>
        ) : (
          // Actual YouTube video player
          <div className="youtube-player">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="youtube-iframe"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
