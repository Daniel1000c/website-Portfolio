import React from 'react';
import './programs.css';

//Import program images
import cloud from '../images/cloud.jpg';
import cybersecurity from '../images/cybersecurity.jpg';
import engineering from '../images/engineer.jpg';
import itTraining from '../images/itTraining.jpg';
import webDevelopment from '../images/webDesign.jpg';
import dataAnalytics from '../images/dataAnalytics.png';

//Create programs functions
function Programs() {
    return (
        <section className="programContainer">
            <h2>Our Programs</h2>

            {/*Create programs intro statement*/}
            <p>
                At CloudWare, our adoption, youth education programs, and IT services aim to foster a deep and founding
                connection between pets and their families. We're thrilled to share CloudWare's mission and happily introduce you to the wonderful animals in 
                facility care. The nature of these programs is to help nurture, inspire and have the community engage with the active process of taking care of the welfare of our precious animals.
            </p>

            {/*Create program cards*/}
            <div className="programCardContainer">
                <div className="programCard" id="cloudComputing">
                    <img src={cloud} alt="Cloud Computing"/>
                    <h3>Cloud Computing</h3>
                    <p>Duration: 4 Years</p>
                    <p>Learn cloud infrastructure, networking, and security using platforms like AWS and Azure.</p>
                    <div className="btnContainer">
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="programCard" id="cybersecurity">
                    <img src={cybersecurity} alt="Cybersecurity"/>
                    <h3>Cybersecurity</h3>
                    <p>Duration: 4 Years</p>
                    <p>Protect systems and data with skills in ethical hacking, cryptography, and risk management.</p>
                    <div className="btnContainer">
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="programCard">
                    <img src={engineering} alt="Engineering"/>
                    <h3>Engineering</h3>
                    <p>Duration: 4 Years</p>
                    <p>Study core engineering principles with options to specialize in mechanical, electrical, or civil fields.</p>
                    <div className="btnContainer">
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="programCard" id="itTraining">
                    <img src={itTraining} alt="IT Training"/>
                    <h3>IT Training</h3>
                    <p>Duration: 4 Years</p>
                    <p>Hands-on training in IT support, systems administration, and network troubleshooting.</p>
                    <div className="btnContainer">
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="programCard" id="webDevelopment">
                    <img src={webDevelopment} alt="Web Development"/>
                    <h3>Web Development</h3>
                    <p>Duration: 4 Years</p>
                    <p>Build responsive websites using HTML, CSS, and JavaScript, and modern frameworks like React.</p>
                    <div className="btnContainer">
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="programCard">
                    <img src={dataAnalytics} alt="Data Analytics"/>
                    <h3>Data Analytics</h3>
                    <p>Duration: 4 Years</p>
                    <p>Analyze data trends, visualize insights, and apply predictive models using tools like Python and SQL.</p>
                    <div className="btnContainer">
                        <button>Learn More</button>
                    </div>
                </div>
            </div>

            {/*Create apply form container*/}
            <div className="applyFormContainer">
                <h3>Apply Now</h3>

                {/*Create apply form*/}
                <form className="applyForm">
                    {/*Prompt user for first name and last name*/}
                    <label htmlFor="firstName">First Name<span>*</span></label> <br />
                    <input type="text" placeholder="First Name" id="firstName" name="firstName" /> <br />

                    <label htmlFor="lastName">Last Name<span>*</span></label> <br />
                    <input type="text" placeholder="Last Name" id="lastName" name="lastName" /> <br />

                    {/*Prompt user for email and phone number*/}
                    <label htmlFor="email">Email<span>*</span></label><br />
                    <input type="email" placeholder="Email" id="email" name="email" /> <br />

                    <label htmlFor="phoneNumber">Phone Number<span>*</span></label> <br />
                    <input type="text" placeholder="Phone Number" id="phoneNumber" name="phoneNumber" /> <br />

                    {/*Create select option */}
                    <label htmlFor="program">Program<span>*</span></label> <br />
                    <select name="program" id="program">
                        <option value="cloud">Cloud Computing</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="engineering">Engineering</option>
                        <option value="itTraining">IT Training</option>
                        <option value="webDevelopment">Web Development</option>
                        <option value="dataAnalytics">Data Analytics</option>
                    </select> <br />
                    
                    <button>Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Programs;