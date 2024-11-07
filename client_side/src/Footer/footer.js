// src/components/Footer.js
import React from 'react';
import './footer.css';

function footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Minari Homes</h2>
        <p className="footer-tagline">Bringing warmth and style to your space</p>

        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Our Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://facebook.com" aria-label="Facebook" className="social-icon">📘</a>
          <a href="https://instagram.com" aria-label="Instagram" className="social-icon">📷</a>
          <a href="https://twitter.com" aria-label="Twitter" className="social-icon">🐦</a>
          <a href="https://pinterest.com" aria-label="Pinterest" className="social-icon">📌</a>
        </div>

        <p className="footer-copyright">© 2024 Minari Homes. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default footer;
