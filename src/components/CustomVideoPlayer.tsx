import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CustomVideoPlayer: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { t } = useLanguage();
  const videoId = 'kBxIINrMWd0';

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="video-container">
      <div className="video-wrapper">
        <div className="video-thumbnail" onClick={handlePlayClick}>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video thumbnail"
            className="thumbnail-image"
          />
          <div className="play-button-overlay">
            <div className="play-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="video-info">
            <span className="video-label">{t('home.video.watch')}</span>
            <span className="video-subtitle">{t('home.video.technique')}</span>
          </div>
        </div>
        {showVideo && (
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
