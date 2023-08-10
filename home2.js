import React from 'react';
import styles from './style2.module.css'; // Import the CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebook, faGooglePlus, faDribbble, faPinterest, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTwitterSquare, faFacebook, faGooglePlus, faDribbble, faPinterest, faYoutube, faInstagram);

const Home2 = () => {
  return (
    <div>
    <a href="https://www.instagram.com/your_instagram_username" className={`${styles['icon-button']} ${styles['instagram']}`}>
    <FontAwesomeIcon icon={faInstagram} className={`circle ${styles['icon-instagram']}`} size="3x" style={{ color: '#E4405F' }} />
    <span></span>
    </a>
  
    <a href="https://twitter.com/minimalmonkey" className={`${styles['icon-button']} ${styles['twitter']}`}>
<FontAwesomeIcon icon={faTwitterSquare} className={`circle ${styles['icon-twitter']}`} size="3x" style={{ color: '#4099FF' }} />
<span></span>
</a>
        <a href="https://facebook.com" className={`${styles['icon-button']} ${styles['facebook']}`}>
          <FontAwesomeIcon icon={faFacebook} className={`circle ${styles['icon-facebook']}`} size="3x"style={{ color: '#3B5998' }} />
          <span></span>
        </a>
        <a href="https://plus.google.com" className={`${styles['icon-button']} ${styles['google-plus']}`}>
          <FontAwesomeIcon icon={faGooglePlus} className={`circle ${styles['icon-google-plus']}`} size="3x" style={{ color: '#dd4b39' }}/>
          <span></span>
        </a>
        <a href="https://dribbble.com" className={`${styles['icon-button']} ${styles['dribbble']}`}>
    <FontAwesomeIcon icon={faDribbble} className={`circle ${styles['icon-dribbble']}`} size="3x" style={{ color: '#ea4c89' }} />
    <span></span>
  </a>
  <a href="https://pinterest.com" className={`${styles['icon-button']} ${styles['pinterest']}`}>
    <FontAwesomeIcon icon={faPinterest} className={`circle ${styles['icon-pinterest']}`} size="3x" style={{ color: '#cb2027' }} />
    <span></span>
  </a>
  <a href="https://youtube.com" className={`${styles['icon-button']} ${styles['youtube']}`}>
    <FontAwesomeIcon icon={faYoutube} className={`circle ${styles['icon-youtube']}`} size="3x" style={{ color: '#bb0000' }} />
    <span></span>
  </a>
</div>
  );
};

export default Home2;
