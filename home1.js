import React, { useEffect } from 'react';
import styles from './style1.module.css'; // Import the CSS module
import Swiper from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';



const Home = () => {
  useEffect(() => {
    console.log("it's a swiper");

    var mySwiper = new Swiper(".swiper-container", {
      direction: "vertical",
      loop: true,
      pagination: ".swiper-pagination",
      parallax: true,
      autoplay: false,
      effect: "slide",
      mousewheelControl: true,
    });

    // Event listener for the up arrow button
    document.querySelector('.swiper-button-prev').addEventListener('click', function () {
      mySwiper.slidePrev();
    });

    // Event listener for the down arrow button
    document.querySelector('.swiper-button-next').addEventListener('click', function () {
      mySwiper.slideNext();
    });

  }, []);

  return (
    <div className={styles['page-wrap']}>
      <div className={`swiper-container ${styles['swiper-container']}`}>
        <div className={`swiper-wrapper ${styles['swiper-wrapper']}`}>
          {/* Slide One */}
          <div className={`swiper-slide ${styles['swiper-slide']} ${styles['swiper-slide-one']}`}>
            <div className={`${styles['swiper-image']} ${styles['swiper-image-inner']} ${styles['swiper-image-left']} ${styles['swiper-image-one']}`} data-swiper-parallax-y="-20%">
              <h1>
                A <span className={styles['emphasis']}>Breath</span>. <br />
                <span>Of Fresh Air.</span>
              </h1>
              <p>Chapter I, page XV</p>
            </div>
            <div className={`${styles['swiper-image']} ${styles['swiper-image-inner']} ${styles['swiper-image-right']} ${styles['swiper-image-two']}`} data-swiper-parallax-y="35%">
              <p>
                A Prophet sat in the market-place and told the fortunes of all who cared to engage his services. Suddenly there came running up one who told him that his house had been broken into by thieves, and that they had made off with everything they could lay hands on.
              </p>
            </div>
          </div>

          {/* Slide Two */}
          <div className={`swiper-slide ${styles['swiper-slide']} ${styles['swiper-slide-two']}`}>
            <div className={`${styles['swiper-image']} ${styles['swiper-image-inner']} ${styles['swiper-image-left']} ${styles['swiper-image-three']}`} data-swiper-parallax-y="-20%">
              <h1>
                The <span className={styles['emphasis']}>Drop</span>. <br />
                <span>Of Eternal life.</span>
              </h1>
              <p>Chapter II, page VII</p>
            </div>
            <div className={`${styles['swiper-image']} ${styles['swiper-image-inner']} ${styles['swiper-image-right']} ${styles['swiper-image-four']}`} data-swiper-parallax-y="35%">
              <p>
                A thirsty Crow found a Pitcher with some water in it, but so little was there that, try as she might, she could not reach it with her beak, and it seemed as though she would die of thirst within sight of the remedy.
              </p>
            </div>
          </div>

          {/* Slide Three */}
          <div className={`swiper-slide ${styles['swiper-slide']} ${styles['swiper-slide-three']}`}>
            <div className={`${styles['swiper-image']} ${styles['swiper-image-inner']} ${styles['swiper-image-left']} ${styles['swiper-image-five']}`} data-swiper-parallax-y="-20%">
              <h1>
                A <span className={styles['emphasis']}>Sense</span>. <br />
                <span>Of Things to Come.</span>
              </h1>
              <p>Chapter III, page XI</p>
            </div>
            <div className={`${styles['swiper-image']} ${styles['swiper-image-inner']} ${styles['swiper-image-right']} ${styles['swiper-image-six']}`} data-swiper-parallax-y="35%">
              <p className={styles['paragraph']}>
                Every man carries Two Bags about with him, one in front and one behind, and both are packed full of faults. The Bag in front contains his neighbours’ faults, the one behind his own. Hence it is that men do not see their own faults, but never fail to see those of others.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className={`swiper-button-next ${styles['swiper-button-next']}`}>

        </div>
        <div className={`swiper-button-prev ${styles['swiper-button-prev']}`}>

        </div>

        {/* Pagination */}
        <div className={`swiper-pagination ${styles['swiper-pagination']}`}></div>
      </div>
    </div>
  );
};

export default Home;
