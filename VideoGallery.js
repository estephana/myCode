import React from 'react';
import styles from './video.module.scss';
import SwipeableViews from 'react-swipeable-views';

const videos = [
  'https://youtube.com/embed/3x8Dh4kmabw',
  'https://www.youtube.com/embed/fOaPuTg9GvU',
  'https://www.youtube.com/embed/45MPBTVQqqo',
  'https://www.youtube.com/embed/oRdxUFDoQe0',
  'https://www.youtube.com/embed/Zi_XLOBDo_Y',
  'https://www.youtube.com/embed/1-7ABIM2qjU',
  // Add more video URLs here
];

const VideoGallery = () => {
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <div style={{ display: 'flex', gap: '70px', padding: '10px', margin: '10px' }}>
        {videos.map((videoUrl, index) => (
          <div key={index} className={`${styles.videoContainer} box-shadow`} style={{ minWidth: '245px', margin: '5px' }}>
            <iframe className={styles.video} src={videoUrl} allowFullScreen />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
