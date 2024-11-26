import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


//import company logo without background 
import homeImage from '../images/cloudWareNoBackground.png';
import cloudwareImage from '../images/cloudWareLogoImg.png';

//Import mission statement diagram
import missionStatement from '../images/missionStatementDiagramNoBackground.png';

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
            <Link to="/about" className="btn">See More</Link>

            {/*Create mission statement*/}
            <div className="missionContainer">
                <h3>CloudWare's Mission</h3>

                {/*Create mission statement infographic */}
                <div className="missionStatement">

                    {/*Create mission statement img */}
                    <img src={missionStatement} alt="Cloud Ware mission Statement"/>
                </div>
            </div>

            {/*Create program mission statement and over*/}
            <div className="overviewContainer">
                <h3>Why Cloud Ware?</h3>

                {/*Create overview paragraph */}
                <p>
                    Here at Cloud Ware, we are committed to the future of IT.
                    Our mission is to guide students towards a future where they can harness the power of cloud-based solutions to transform their businesses and solve complex challenges.
                    We have been a proud partner for over 10 years, and take pride in our commitment to our students.
                    We guarantee that our programs will provide students with the skills to outperform the competition and be a force to be reckoned with in the tech industry.
                </p>

                {/*Create overview img*/}
                <img src={cloudwareImage} alt="Cloud ware Industries"/>

                {/*Create key highlights list*/}

                <h3>Key highlights:</h3>
                <ul>
                    <li>Cloud-based solutions</li>
                    <li>IT Training</li>
                    <li>Interactive Workshops</li>
                    <li>Cloud Security</li>
                    <li>Cutting-Edge tools</li>
                    <li>Personalized Learning Paths</li>
                    <li>Career Support Services</li>
                </ul>
            </div>

            

            {/*Create programs section*/}
            <div className="programsContainer">
                <h3>Featured Programs</h3>

                {/*Create programs container */}
                <div className="programs">

                    {/*Create program items */}
                    <div className="programItem">
                        <i class='bx bx-cloud' ></i>
                        <h4>Cloud Solutions</h4>
                        <p>Empower your students with cloud-based IT solutions.</p>
                        <a href="#" target="_blank">Learn More</a>
                    </div>
                    <div className="programItem">
                    <i class='bx bx-shield' ></i>
                        <h4>Cybersecurity Services</h4>
                        <p>Have your students learn the fundamentals of cybersecurity.</p>
                        <a href="#" target="_blank">Learn More</a>
                    </div>
                    <div className="programItem">
                        <i class='bx bx-layout' ></i>
                        <h4>Web Design</h4>
                        <p>Build reponsive and user-friendly websites for businesses.</p>
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

export default Home;