import React from 'react';
import './about.css';

//Import group photo
import groupPhoto from '../images/workGroup.jpg';

//Import company faculty images
import devin from '../images/devin.jpg';
import evan from '../images/evan.jpg';
import fred from '../images/fred.jpg';

//Import company staff images
import christina from '../images/christina.jpg';
import josh from '../images/josh.jpg';
import katie from '../images/katie.jpg';
import yolonda from '../images/yolonda.jpg';


//Create about function element
function About() {
    return(
       <section className="aboutContainer">
           <h2>About Cloud Ware</h2>
            {/*Create our story div*/}
           <div className="storyContainer">
                <h3>Our Story</h3>

                <img src={groupPhoto} alt="Cloud Ware Team" />

                {/*Create our story paragraph*/}
                <p>
                    CloudWare is a leading provider of cloud-based IT solutions for businesses of all sizes. Our mission is to empower organizations with the tools they need to succeed in the digital age.
                    That is not all we do. We also provide mentor ship to young students in need that look to enroll with us for classes in their future.
                    Here at CloudWare, we take pride in being your local Floridian IT and academic institution.
                    We as an organization have a vision to provide the best experience to our students make sure they are fully prepared for the future that lies ahead with
                    up to date learning and practical real life experience.
                </p>
           </div>

            
           {/*Create video container first*/}
           <div className="videoContainer">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9VAIFBs8qDY?si=Hpkd6Bjl-GYkbmVz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
           </div>

           {/*Create goals container*/}
           <div className="goalsContainer">
                <h3>Our Goals</h3>

                {/*Create goals list*/}
                <ul>
                    <li>Empowering Innovation with CloudWare</li>
                    <li>Seamless Solutions in the Cloud</li>
                    <li>Empowering Innovation with CloudWare</li>
                    <li>Seamless Solutions in the Cloud</li>
                </ul>
           </div>

           {/*Create infinite scroll banner*/}
           <div className="scrollBanner">
                <div className="bannerContent" style={{'--marquee-speed': '25s', '--direction': 'scroll-left'}} role="marquee">
                    <div className="bannerText">
                        <div className="bannerItem">Empowering Innovation with CloudWare • Seamless Solutions in the Cloud • Empowering Innovation with CloudWare • Seamless Solutions in the Cloud •</div>
                        <div className="bannerItem">Empowering Innovation with CloudWare • Seamless Solutions in the Cloud • Empowering Innovation with CloudWare • Seamless Solutions in the Cloud •</div>
                    </div>
                </div>
           </div>

           {/*Create our team div*/}
           <div className="teamContainer">
                <h3>Faculty Spotlight</h3>

                {/*Create faculty intro slogan*/}
                <p>"Meet the dedicated team shaping our future leaders."</p>

                {/*Create faculty container */}
                <div className="facultyContainer">
                    <div className="facultyProfileCard">
                        <img src={evan} alt="Evan" />
                        <h4>Meet Evan Smith</h4>
                        <p>Dean of Faculty and Professor of Computer Science.</p>
                        <p>Ph.D. in Computer Science, University of Florida</p>
                        <a href="mailto:evan.smith@gmail.com">evan.smith@gmail.com</a>
                        <div className="socialLinks">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                        </div>
                    </div>
                    <div className="facultyProfileCard">
                        <img src={devin} alt="Devin" />
                        <h4>Meet Devin Myers</h4>
                        <p>Director of Research and Associate Professor of Mathematics.</p>
                        <p>Ph.D. in Machine Learning, University of Florida</p>
                        <a href="mailto:devin.myers@gmail.com">devin.myers@gmail.com</a>
                        <div className="socialLinks">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                        </div>
                    </div>
                    <div className="facultyProfileCard">
                        <img src={fred} alt="Fred" />
                        <h4>Meet Fred Blizerian</h4>
                        <p>Chair of Humanities and Senior Lecturer in Software Engineering.</p>
                        <p>Ph.D. in Cybersecurity, Ohio State University</p>
                        <a href="mailto:fred.blizerian@example.com">fred.blizerian@gmail.com</a>
                        <div className="socialLinks">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                        </div>
                    </div>
                </div>

                {/*Create staff container*/}
                <div className="staffContainer">
                    <h3>Staff Spotlight</h3>

                    <div className="staffProfileCard">
                        <img src={josh} alt="Josh Alvarez" />
                        <h4>Josh Alvarez</h4>
                        <p>&ldquo;Success is the sum of small efforts, repeated day-in and day-out.&rdquo;</p> 
                        <div className="socialLinks">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                        </div>
                    </div>
                    <div className="staffProfileCard">
                        <img src={katie} alt="Katie Smith" />
                        <h4>Katie Smith</h4>
                        <p>&ldquo;The best way to predict the future is to create it.&rdquo;</p>
                        <div className="socialLinks">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                        </div>
                    </div>
                    <div className="staffProfileCard">
                        <img src={yolonda} alt="Yolonda Hernandez" />
                        <h4>Yolonda Hernandez</h4>
                        <p>&ldquo;Alone we can do so little; together we can do so much.&rdquo;</p>
                        <div className="socialLinks">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                        </div>
                    </div>
                    <div className="staffProfileCard">
                        <img src={christina} alt="Christina Gonzalez" />
                        <h4>Christina Gonzalez</h4>
                        <p>&ldquo;Great things are not done by impulse, but by a series of small things brought together.&rdquo;</p>
                        <div className="socialLinks">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                        </div>
                    </div>
                </div>
           </div>
       </section>
    );
}
export default About;
