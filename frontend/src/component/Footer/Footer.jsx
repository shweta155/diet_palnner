import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Diet Planner. All Rights Reserved.</p>
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} /> {/* Facebook Icon */}
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} /> {/* Twitter Icon */}
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} /> {/* Instagram Icon */}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
