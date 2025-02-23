import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-left-header">
            <h3 className="footer-left-title">CamSoori's Teashop</h3>
            <p className="footer-left-sub-title">Savor the artistry where every dish is a culinary masterpiece</p>
          </div>
          <div className="footer-left-links">
            <a href="" className="footer-left-link">
              <FaInstagram />
            </a>
            <a href="" className="footer-left-link">
              <FaTwitter />
            </a>
            <a href="" className="footer-left-link">
              <FaFacebook />
            </a>
            <a href="" className="footer-left-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-section">
            <h3 className="footer-right-title">Useful Links</h3>
            <ul className="footer-right-links">
              <li><a href="" className="footer-right-link">Home</a></li>
              <li><a href="" className="footer-right-link">About</a></li>
              <li><a href="" className="footer-right-link">Contact</a></li>
              <li><a href="" className="footer-right-link">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-right-section">
            <h3 className="footer-right-title">Follow Us</h3>
            <ul className="footer-right-links">
              <li><a href="" className="footer-right-link">Facebook</a></li>
              <li><a href="" className="footer-right-link">Instagram</a></li>
              <li><a href="" className="footer-right-link">Twitter</a></li>
            </ul>
          </div>
          <div className="footer-right-section">
            <h3 className="footer-right-title">Contact Us</h3>
            <ul className="footer-right-links">
              <li><a href="" className="footer-right-link">Email: [info@camsoori.com]</a></li>
              <li><a href="" className="footer-right-link">Phone: 123-456-789</a></li>
              <li><a href="" className="footer-right-link">Address: 123 Main St, Saudi.</a></li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <p className="footer-copyright">Copyright 2023 CamSoori's Teashop | All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
