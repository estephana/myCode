import React, { useState } from 'react';
import Home1 from '../home1/home1';
import Link from 'next/link';
import styles from './style3.module.css';
import Header from '../Header';
import styls from '../app.module.css';


const Home3 = () => {
  const [showEnterButton, setShowEnterButton] = useState(true);
  const [showHomeSection, setShowHomeSection] = useState(false);

  const click_btn = () => {
    setShowEnterButton(false);
    setShowHomeSection(true);
  };

  return (
    <div className={styls.app}>
      <Header />
    <div className={styles['my-code3']}>
      <Link href="/home1-page"> {/* Use the Link component for navigation */}
        <div className={styles['enter']} onClick={click_btn}>
          <div className="enter">
            ENTER
          </div>
        </div>
      </Link>
      <div className={styles['page']}>
        <div className={styles['main']}>
          <header className={styles['clearfix']}>
            <div className={styles['container']}>
              <div className="intro">
                <a href="/grid">
                  <h1>WELCOME</h1>
                </a>
                <p>To my World</p>
              </div>
            </div>
          </header>
          {showHomeSection && (
            <section id="home1">
              <Home1 />
            </section>
          )}
          {/* Rest of your content */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home3;
