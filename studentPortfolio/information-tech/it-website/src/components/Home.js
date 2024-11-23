import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


//import company logo without background 
import homeImage from '../images/cloudWareNoBackground.png';

//Create home Function
function Home() {
    return(
        
        <section className="homeIntro">
            {/*insert home company logo */}
            <img src={homeImage} alt="Cloud ware logo"/>

            {/*Create home intro section */}
            <h2>Cloud ware: The Future of IT</h2>

            {/*Create intro home paragraph */}
            <p>We are a leading provider of cloud-based IT solutions for businesses of all sizes. Our mission is to empower organizations with the tools they need to succeed in the digital age.</p>

            {/*Create about us button */}
            <Link to="/about" className="btn">About Us</Link>

            {/*Create programs section*/}
            <div className="programsContainer">
                <h3>Featured Programs</h3>

                {/*Create programs container */}
                <div className="programs">

                    {/*Create program items */}
                    <div className="programItem">
                        <i class='bx bx-cloud' ></i>
                        <h4>Cloud Solutions</h4>
                        <p>Empower your business with secure and scalable cloud infrastructures.</p>
                        <a href="#" target="_blank">Learn More</a>
                    </div>
                    <div className="programItem">
                    <i class='bx bx-shield' ></i>
                        <h4>Cybersecurity Services</h4>
                        <p>Protect your digital assets with our advanced cybersecurity solutions.</p>
                        <a href="#" target="_blank">Learn More</a>
                    </div>
                    <div className="programItem">
                        <i class='bx bx-layout' ></i>
                        <h4>Web Design</h4>
                        <p>Build reponsive and user-friendly websites for your business.</p>
                        <a href="#" target="_blank">Learn More</a>
                    </div>
                    <div className="programItem">
                        <i class='bx bx-brain' ></i>
                        <h4>IT Training & Support</h4>
                        <p>Empower your team with the skills and support to excel in the digital landscape.</p>
                        <a href="#" target="_blank">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home