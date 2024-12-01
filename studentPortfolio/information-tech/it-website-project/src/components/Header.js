import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

//Import company logo
import cloudwareImage from '../images/Cloudware.png';

//Create header function
function Header() {

    //Create state to toggle menu
    const [menuOpen, setMenuOpen] = React.useState(false);

    //Function for menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    //Close menu if user clicks outside of it
    const closeMenuOnclickOutside = (e) => {
        if(e.target.closest('nav') || e.target.closest('.bx-menu')) return;
        setMenuOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', closeMenuOnclickOutside);

        return () => {
            document.removeEventListener('click', closeMenuOnclickOutside);  
        };
    }, []);
    
    return (
        //Create header container
        <header>
           <img src={cloudwareImage} alt="Cloud Ware" />
            
            <i className="bx bx-menu" onClick={toggleMenu}></i>

            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/program">Programs</Link></li>
                </ul>
            </nav>    
        </header>
    );
}

export default Header;