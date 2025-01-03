import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="container-fluid footer max-width">
      <div className="footer-container">
        <div className="footer-section">
          <h2>MyCreativeSpace</h2>
          <p>Bringing ideas to life.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>

        {/* New Contact Information Section */}
        <div className="footer-section">
          <h3>Contact Information</h3>
          <ul>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@mycreativespace.com</li>
            <li>Address: 123 Creative St, City, Country</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
