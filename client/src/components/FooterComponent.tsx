import React from 'react';
import './Footer.css'; 
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,  faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        {/* Company name */}
        <span className="company-name">E-Ticket</span>
      </div>
      <div className="footer-right">

      <span className="compliance-disclaimer">This website is compliant with all relevant laws and regulations.</span>

        {/* Social media icons */}
        
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://api.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
