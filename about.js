// pages/about.js
import React from 'react';
import Link from 'next/link';
import styles from './gallery.module.scss';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
//import containerStyles from './styles.module.css'; // Rename to containerStyles
import buttonStyles from './button.module.css';    // Rename to buttonStyles
import Header from './Header';
import styls from './app.module.css';

const About = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 40.7128, // Replace with the actual latitude of your location
    lng: -74.0060, // Replace with the actual longitude of your location
  };

  return (
    <div className={styls.app}>
      <Header />
    <div>    <div className={styles['gallery-body']}>
        <div style={{color: '#4CAF50'}}> <h1>About Us</h1></div></div>
        <div style={{color: '#4CAF50'}}><p>Learn more about us here!</p></div>
      <LoadScript googleMapsApiKey="AIzaSyCGBMTgg4GhftxmzQAdd2Bp0qB2BwpW5tI">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14}></GoogleMap>
      </LoadScript>

      <br />

        </div>
      </div>

  );
};

export default About;


/*<div style={{ textAlign: 'center', marginTop: '0px', color: '#1B5E20' }}>
<Link href="/home">
   <div className={`${buttonStyles['button-container']}`}>
   <div className={`${buttonStyles.button}`}>
   Go to Home
</div></div>
</Link>
<br />
  <div style={{ textAlign: 'center', marginTop: '0px', color: '#1B5E20' }}>
  <Link href="/gallery">
           <div className={`${buttonStyles['button-container']}`}>
<div className={`${buttonStyles.button}`}>
Go to Gallery
</div></div>
</Link>
  </div></div>*/
