// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img 
          src="/person.jpg" 
          alt="Profile"
        />
        <span className="text">CodeThunder</span>
        <span className="divider">|</span>
        <span className="text">Copyright © 2024 CodeThunder.com</span>
      </div>
      <div className="footer-right">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"><FaFacebookF/></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"><FaXTwitter/></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"><RiInstagramFill/></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"><FaGithub/></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
