import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import Swiper from 'swiper';
import Link from 'next/link';
import swiperStyles from './home1/swiper-bundle.module.css';
import { useRouter } from 'next/router';
import styles from './header.module.css';
import Home2 from './home2/home2';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li><Link href="/home3-page">Home</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
<div className={` ${styles['icon-container']}`}>
        <Home2 /> {/* Render the Home2 component */}
      </div>
    </header>
  );
};

export default Header;
