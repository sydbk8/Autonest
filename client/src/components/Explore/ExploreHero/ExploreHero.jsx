import React from 'react'
import mobileImage from "../../../assets/explore-mobile.avif";
import tabletImage from "../../../assets/explore-tablet.avif";
import desktopImage from "../../../assets/explore-desktop.avif";
import './ExploreHero.css'

const ExploreHero = () => {
  return (
    <picture className='bg-image'>
        <source media="(min-width: 1024px)" srcSet={desktopImage} />
        <source media="(min-width: 768px)" srcSet={tabletImage} />
        <img src={mobileImage} alt="Responsive Background" />
      </picture>
  )
}

export default ExploreHero