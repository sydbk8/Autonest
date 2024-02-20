import React from "react";
import "./Banners.css";
import banner1 from "../../../assets/banner_1.avif";
import banner2 from "../../../assets/banner_2.avif";
import { Link } from "react-router-dom";

const Banners = () => {
  return (
    <section className="section banner">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <h2 className="section-title headline-small">Liked by most</h2>
            <p className="section-text body-large">
              Discover a range of favorites, appealing to diverse tastes and
              budgets, ensuring you find the perfect car for you.
            </p>
          </div>
          <Link to="/explore" className="btn">
            <span className="label-medium">Explore more</span>
          </Link>
        </div>
        <div className="grid-list-banner">
          <li>
            <div
              className="offer-card"
              style={{ backgroundImage: `url(${banner1})` }}
            >
              <p className="card-subtitle">Future With EV</p>
              <h3 className="card-title">The IX</h3>
              <Link to="#" className="btn">
                Order Now
              </Link>
            </div>
          </li>
          <li>
            <div
              className="offer-card"
              style={{ backgroundImage: `url(${banner2})` }}
            >
              <p className="card-subtitle">Luxirious</p>
              <h3 className="card-title">Interior</h3>
              <Link to="#" className="btn">
                Order Now
              </Link>
            </div>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Banners;
