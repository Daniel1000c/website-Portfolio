import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

//Import company logo
import cloudwareImage from '../images/Cloudware.png';

//Create header function
function Header() {
    return (
        //Create header container
        <header>
           <img src={cloudwareImage} alt="Cloud Ware" />
            
            <i className='bx bx-menu'></i>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/faculty">Faculty</Link></li>
                    <li><Link to="/program">Programs</Link></li>
                </ul>
            </nav>    
        </header>
    );
}

export default Header;