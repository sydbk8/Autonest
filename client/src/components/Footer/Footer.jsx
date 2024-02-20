import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <Link to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
            <p className="body-medium footer-text">
              At our company, excellence, innovation, and your satisfaction
              drive our commitment to delivering a reliable and fulfilling
              automotive experience.
            </p>
          </div>
          <nav className="footer-nav" aria-labelledby="nav-label-1">
            <p className="title-small footer-list-title" id="nav-label-1">
              Quick link
            </p>
            <ul className="footer-list">
              <li>
                <Link to="/" className="body-medium footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/buy" className="body-medium footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/sell" className="body-medium footer-link">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/rent" className="body-medium footer-link">
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="footer-nav" aria-labelledby="nav-label-2">
            <p className="title-small footer-list-title" id="nav-label-2">
              Support
            </p>
            <ul className="footer-list">
              <li>
                <Link to="/about" className="body-medium footer-link">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="body-medium footer-link">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="body-medium footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="body-medium footer-link">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="footer-nav" aria-labelledby="nav-label-3">
            <p className="title-small footer-list-title" id="nav-label-3">
              Get in touch
            </p>
            <ul className="footer-list">
              <li>
                <a
                  href="mailto:hello@mail.com"
                  className="body-medium footer-link"
                >
                  example@mail.com
                </a>
              </li>
              <li>
                <address className="address body-medium">
                  45127 Rd. Beverly Hills, Los Angeles 151214
                </address>
              </li>
              <li>
                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <FaTelegram />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright body-medium">Copyright 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
