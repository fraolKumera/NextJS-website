import React from 'react';
import Image from 'next/image';

import bitAppsTextImage from '../public/assets/img/bitapps.jpg';

/** @type {React.CSSProperties} */
const HeroDivStyle = {
  paddingLeft: '8px',
  paddingRight: '8px',
};

/** @type {React.CSSProperties} */
const HeroStartedBtnStyle = {
  marginTop: '2rem',
};

const HeroSection = (props) => (
  <section id="hero" style={{ marginTop: '120px' }}>
    <div className="hero-container" style={HeroDivStyle} data-aos="fade-in">
      <h1>
        Welcome to{' '}
        <img
          src={bitAppsTextImage.src}
          width="200px"
          style={{ marginTop: '30px' }}
        />
      </h1>
      <Image
        src="/assets/img/hero-img.png"
        alt="Hero Images"
        data-aos="zoom-out"
        data-aos-delay="100"
        height={400}
        width={711}
        unoptimized
      />
      <a
        href="#get-started"
        style={HeroStartedBtnStyle}
        className="btn-get-started scrollto"
      >
        Get Started
      </a>
      <div className="btns">
        <a href="#">
          <i className="fa fa-apple fa-3x"></i> App Store
        </a>
        <a href="#">
          <i className="fa fa-play fa-3x"></i> Google Play
        </a>
        <a href="#">
          <i className="fa fa-windows fa-3x"></i> windows
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
