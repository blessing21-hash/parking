



import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaPhone, FaApple, FaGooglePlay, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo + Description */}
        <div className="footer-section">
          <h2 className="footer-logo">
            <FaMapMarkerAlt className="icon" /> BlessyPark
          </h2>
          <p className="footer-description">
            We are the official providers of Harare CBD parking. You can't park closer!
          </p>
          <div className="app-buttons">
            <button className="app-btn">
              <FaApple />Download On The APP STORE
            </button>
            <button className="app-btn">
              <FaGooglePlay />Android App On GOOGLE PLAY
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li>Price Guide</li>
            <li>Car Wash</li>
            <li>Location</li>
            <li>Reservations</li>
            <li>Parking Options</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><FaMapMarkerAlt className="icon green" /> 1234 City Park Harare CBD, Harare 01001</p>
          <p><FaPhone className="icon blue" /> +263 779 054 714</p>
        </div>

        {/* Discover */}
        <div className="footer-section">
          <h3>Discover</h3>
          <ul>
            <li>Help</li>
            <li>How It Works</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 BlessyThemes. All rights reserved.</p>
        <div className="footer-icons">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
