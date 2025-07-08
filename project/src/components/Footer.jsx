import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">

        {/* Brand */}
        <div className="footer-col">
          <h2 className="brand-name">StudyVerse</h2>
          <p>Learn. Grow. Succeed.</p>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>support@studyverse.com</p>
          <p>+977-9809877120</p>
          <p>Butwal, Nepal</p>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h4>Social Media</h4>
          <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#"> Instagram</a>
            <a href="#"> LinkedIn</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 StudyVerse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
