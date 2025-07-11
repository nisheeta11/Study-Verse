import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">

        <div className="footer-col">
          <h2 className="brand-name br-1">StudyVerse</h2>
          <p>Learn. Grow. Succeed.</p>
        </div>


        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>support@studyverse.com</p>
          <p>+977-9809877120</p>
          <p>Butwal, Nepal</p>
        </div>

        <div className="footer-col">
          <h4>Social Media</h4>
          <div className="social-icons">
            <Link to="#">Facebook</Link>
            <Link to="#"> Instagram</Link>
            <Link to="#"> LinkedIn</Link>
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
