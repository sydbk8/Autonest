import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import feature_1 from "../../../assets/feature_1.jpg";
import feature_2 from "../../../assets/feature_2.jpg";

const Feature = () => {
  return (
    <div>
      <section className="section feature" aria-labelledby="feature-label">
        <div className="container">
          <figure className="feature-banner">
            <img
              src={feature_1}
              alt="feature banner"
              width="1020"
              height="690"
              loading="lazy"
              className="img-cover"
            />
          </figure>
          <div className="feature-content" id="feature-label">
            <h2 className="headline-medium">
              Expert consultants at your service
            </h2>
            <p className="body-large feature-text">
              Count on our highly skilled consultants for personalized
              assistance, guiding you through a comprehensive selection process
              that perfectly aligns with your preferences, ensuring a tailored
              and informed decision-making experience.
            </p>
            <ul className="feature-list">
              <li className="feature-item">
                <span
                  className="material-symbols-rounded feature-icon"
                  aria-hidden="true"
                >
                  <FaCheckCircle />
                </span>
                <span className="body-medium">Expertise</span>
              </li>
              <li className="feature-item">
                <span
                  className="material-symbols-rounded feature-icon"
                  aria-hidden="true"
                >
                  <FaCheckCircle />
                  <FaCheckCircle />
                </span>
                <span className="body-medium">Personalized Guidance</span>
              </li>
              <li className="feature-item">
                <span
                  className="material-symbols-rounded feature-icon"
                  aria-hidden="true"
                >
                  <FaCheckCircle />
                  <FaCheckCircle />
                </span>
                <span className="body-medium">Comprehensive Support</span>
              </li>
              <li className="feature-item">
                <span
                  className="material-symbols-rounded feature-icon"
                  aria-hidden="true"
                >
                  <FaCheckCircle />
                  <FaCheckCircle />
                </span>
                <span className="body-medium">Customer-Centric Approach</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="section feature feature-2"
        aria-labelledby="feature-label-2"
      >
        <div className="container">
          <figure className="feature-banner">
            <img
              src={feature_2}
              alt="feature banner"
              width="1020"
              height="690"
              loading="lazy"
              className="img-cover"
            />
          </figure>
          <div className="feature-content" id="feature-label-2">
            <h2 className="headline-medium">
              Dive into a plethora of options with us
            </h2>
            <p className="body-large feature-text">
              Embark on a journey of limitless possibilities with our
              consultants, offering a meticulous and personalized approach to
              cater to your individual automotive preferences and requirements,
              ensuring an unparalleled selection experience.
            </p>
            <ul className="feature-list">
              <li className="feature-item">
                <span
                  className="material-symbols-rounded feature-icon"
                  aria-hidden="true"
                >
                  <FaCheckCircle />
                </span>
                <span className="body-medium">Diversity</span>
              </li>
              <li className="feature-item">
                <span
                  className="material-symbols-rounded feature-icon"
                  aria-hidden="true"
                >
                  <FaCheckCircle />
                </span>
                <span className="body-medium">Personalization</span>
              </li>
              <li className="feature-item">
                <span
                  className="material-symbols-rounded feature-icon"
                  aria-hidden="true"
                >
                  <FaCheckCircle />
                </span>
                <span className="body-medium">Comprehensive Selection</span>
              </li>
              <li className="feature-item">
                <span
                  className="material-symbols-rounded feature-icon"
                  aria-hidden="true"
                >
                  <FaCheckCircle />
                </span>
                <span className="body-medium">Flexibility</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
