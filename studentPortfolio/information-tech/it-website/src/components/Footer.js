import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

//Import company logo
import cloudwareImage from '../images/Cloudware.png';

//Create wavy footer function
function Footer () {
    return (
        <footer>
            <div className="footerLogo">
                <img src={cloudwareImage} alt="Cloud Ware" />    

                <div className="socialIconContainer">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-youtube"></i></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/Daniel1000c/website-Portfolio" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
                </div>
            </div>
            <div className="footerInfo">
                <div className="contactInformation">
                    <h4>Contact Us</h4>
                    <p><span>Phone:</span> 305-527-0765</p>
                    <p><span>Email:</span> velezdaniel516@gmail</p>
                    <p><span>Address:</span> 123 Cloud Street, Sky City</p>
                    <p></p>
                </div>
                <div className="quickLinks">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/faculty">Faculty</Link></li>
                        <li><Link to="/program">Programs</Link></li>
                    </ul>
                </div>
            </div>

            <p>&copy; Cloud Ware 2024 | All Rights Reserved</p>
        </footer>
    );
}

export default Footer;