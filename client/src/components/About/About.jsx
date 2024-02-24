import React from "react";
import mobileImage from "../../assets/about-mobile.avif";
import tabletImage from "../../assets/about-tablet.avif";
import desktopImage from "../../assets/about-desktop.avif";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div>
      <Header />
      <div>
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopImage} />
          <source media="(min-width: 768px)" srcSet={tabletImage} />
          <img
            src={mobileImage}
            alt="Team at work, discussing ideas"
          />
        </picture>
      </div>
      <Footer />
    </div>
  );
};

export default About;
