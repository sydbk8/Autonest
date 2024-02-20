import React, { useState } from "react";
import { FaSearch, FaHome, FaCar, FaMapMarkerAlt } from "react-icons/fa";
import carData from "../../../carData.js";
import desktopImage from "../../../assets/bg-image-desktop.avif";
import tabletImage from "../../../assets/bg-image-tablet.avif";
import mobileImage from "../../../assets/bg-image-mobile.jpg";
import "./Hero.css";

const Hero = () => {
  const [make, setMake] = useState("");
  const [models, setModels] = useState([]);

  const handleMakeChange = (selectedMake) => {
    setMake(selectedMake);
    setModels(carData[selectedMake] || []);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="headline-large hero-title">
            The car of your dream is just click away
          </h1>
          <p className="body-large hero-text">Affordable - Modern - Reliable</p>
          <form action="./" method="get" className="search-bar">
            <label className="search-item">
              <span className="label-medium label">Make</span>
              <select
                name="make"
                className="search-item-field body-medium"
                onChange={(e) => handleMakeChange(e.target.value)}
              >
                <option value="" selected>
                  Any
                </option>
                {Object.keys(carData).map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </select>
              <span className="material-symbols-rounded" aria-hidden="true">
                <FaCar className="icon" />
              </span>
            </label>
            <label className="search-item">
              <span className="label-medium label">Model</span>
              <select name="model" className="search-item-field body-medium">
                <option value="" selected>
                  Any
                </option>
                {models.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
              <span className="material-symbols-rounded" aria-hidden="true">
                <FaHome className="icon" />
              </span>
            </label>
            <label className="search-item">
              <span className="label-medium label">Miles</span>
              <select name="miles" className="search-item-field body-medium">
                <option value="" selected>
                  Any
                </option>
                <option value="10">10000</option>
              </select>
              <span className="material-symbols-rounded" aria-hidden="true">
                <FaMapMarkerAlt className="icon" />
              </span>
            </label>
            <button type="submit" className="search-btn">
              <span className="material-symbols-rounded" aria-hidden="true">
                <FaSearch className="icon" />
              </span>

              <span className="label-medium">Search</span>
            </button>
          </form>
          {/* <button className="btn">Check Out</button> */}
        </div>
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopImage} />
          <source media="(min-width: 768px)" srcSet={tabletImage} />
          <img
            src={mobileImage}
            role="presentation"
            className="bg-pattern"
            alt="Background Pattern"
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
