import React from 'react';
import Link from 'next/link';
import styles from './gallery.module.scss';
import style from './video.module.scss';
import containerStyles from './styles.module.css';
import buttonStyles from './button.module.css';
import VideoGallery from './VideoGallery';
import Header from './Header';
import styls from './app.module.css';
const images = [
  {
    url:
      'https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d3832363039373939',
    description: 'Batroun Municipality',
  },
  {
    url:
      'https://th.bing.com/th/id/R.0ab773bc748cf345a84575f3df685a63?rik=%2fdSKgdKhdNOroQ&pid=ImgRaw&r=0',
    description: 'Jbeil Municipality',
  },
  {
    url:
      'https://th.bing.com/th/id/OIP.ZJHhmQCDnO0yX0K-0xLZHwHaE_?pid=ImgDet&w=1069&h=720&rs=1',
    description: 'Himlaya Municipality',
  },
  // Add more images and their descriptions here
];

  const videos = [
    'https://www.youtube.com/embed/lGDsb9PU1iY',
    'https://www.youtube.com/watch?v=2pq_mdm1VlY',
    'https://youtu.be/nrWry5i3TBU',
  ];
const Gallery = () => {
  return (
    <div className={styls.app}>
      <Header />

    <div className={styles['gallery-body']}>

      <h1>Photo Gallery</h1>

      <div className={styles['grid']}>
      {images.map((image, index) => (
         <figure
           key={index}
           className={`${styles['item']} ${styles['item--medium']}`}
           style={{ backgroundImage: `url(${image.url})` }}
         >
           <div className={styles['item__details']}>
             {/* Render the image description */}
             {image.description}
           </div>
         </figure>
        ))}
      </div>

      <div className={style['video-body']}>

          <h1>Video Gallery</h1>
        <div style={{ marginLeft: '300px', marginTop: '100px' }}>
          <div className={style['clearfix']}>
             <VideoGallery />

          </div>
        </div>
      </div>

      <br />
      <br />
</div>
        </div>
  );
};


export default Gallery;





/*<div className={containerStyles.buttonContainer}>
  <Link href="/home">
    <div className={`${buttonStyles['button-container']}`}>
      <div className={`${buttonStyles.button} ${buttonStyles.leftButton}`}>Go to Home</div>
    </div>
  </Link>
    <br />
  <Link href="/about">
    <div className={`${buttonStyles['button-container']}`}>
      <div className={`${buttonStyles.button} ${buttonStyles.rightButton}`}>Go to About</div>
    </div>
  </Link>
</div>
</div>*/
