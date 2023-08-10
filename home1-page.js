import React from 'react';
import Home1 from './home1/home1'; // Adjust the path accordingly
import Header from './Header';
import styles from './app.module.css'; // Import your app's CSS

const Home1Page = () => {
  return (
    <div className={styles.app}>
      <Header />
    <section id="home1">
      <Home1 />
    </section></div>
  );
};

export default Home1Page;
