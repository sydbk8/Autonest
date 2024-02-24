import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("token"); // Check if user is logged in

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${scrolled && "active"}`} data-header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <Link
                to="/"
                className={`navbar-link label-medium ${
                  location.pathname === "/" && "active"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`navbar-link label-medium ${
                  location.pathname === "/about" && "active"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/explore"
                className={`navbar-link label-medium ${
                  location.pathname === "/explore" && "active"
                }`}
              >
                Explore
              </Link>
            </li>
          </ul>
          <div>
            {isLoggedIn ? (
              <Link to="/profile" className="btn label-medium">
                Profile
              </Link>
            ) : (
              <Link to="/login" className="btn label-medium">
                Login
              </Link>
            )}
          </div>
        </nav>
        <button
          className={`nav-toggle-btn icon-btn ${isMenuOpen ? "open" : "close"}`}
          aria-label="toggle navbar"
          data-nav-toggle
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
