import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './style1.module.css'; // Correct path to the CSS module
import $ from 'jquery'; // Import jQuery

const usePreloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const runPreloader = () => {
      // Your preloader animations here
      setTimeout(() => {
        setLoaded(true);
      }, 2000); // Simulating a delay, you can replace this with your actual animations
    };

    runPreloader();
  }, []);

  return { loaded };
};

const Home = () => {
  const { loaded } = usePreloader();

  useEffect(() => {
    // Preloader animations using jQuery
    var main = $('.main'),
      btn = $('.enter'),
      page = $('.page');

    var preloader = {
      run: function () {
        // show on load
        main.show();
        // append and prepend html
        main.prepend(this.tmpl.tl + this.tmpl.tr);
        main.append(this.tmpl.bl + this.tmpl.br);
        // on click open site
        this.click_btn();
      },

      tmpl: {
        'tl': '<span className="tl"></span>',
        'tr': '<span className="tr"></span>',
        'bl': '<span className="bl"></span>',
        'br': '<span className="br"></span>'
      },

      click_btn: function () {
        btn.on('click', function () {
          page.addClass('loaded');
          btn.addClass('hideThis');
          preloader.animations();
        });
      },

      animations: function () {
        var tl = $('.loaded .tl'),
          tr = $('.loaded .tr'),
          bl = $('.loaded .bl'),
          br = $('.loaded .br');

        tl.delay(800).animate({ top: '-100%', left: '-100%' }, 500);
        tr.delay(600).animate({ top: '-100%', left: '100%' }, 500);
        bl.delay(400).animate({ top: '100%', left: '100%' }, 500);
        br.delay(200).animate({ top: '100%', left: '-100%' }, 500);
        btn.remove();
      }
    };

    preloader.run();
  }, []);

  return (
    <div>
      <Head>
        {/* google fonts lato */}
        <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css' />
      </Head>

      {loaded ? (
        <div>
          <a href="#fake" className="enter">ENTER</a>
          <div className="page">
            <div className="main">
              {/*  Content of page */}
              <header className="clearfix">
                <div className='container'>
                  <div className="intro">
                    <a href="/grid"><h1>WELCOME</h1></a>
                    <p>To my World</p>
                  </div>
                </div>
              </header>

              {/* Use the local class */}
              <section className={styles['Home-html-body']}>
                <div className="container">
                  <h3>Et quidem, inquit, vehementer errat;</h3>
                  {/* ... */}
                </div>
              </section>

              {/* ... */}

            </div>
          </div>
        </div>
      ) : (
        // Render a loader or loading state here
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
