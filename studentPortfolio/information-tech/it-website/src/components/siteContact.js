import React from 'react';
import './sitecontact.css';

//Create contact us site function
function Contact() {
    return (
        <section className="contactUsContainer">
            <h2>Contact Us</h2>

            {/*Create contact container containing contact info and contact form*/}
            <div className="contactInfoContainer">
                <div className="contactItemText">
                    <h3>Contact Information</h3>

                    {/*Create contact info*/}

                    <p><i class='bx bxs-phone'></i><span>Phone:</span> 305-527-0765</p>
                    <p><i class='bx bx-envelope' ></i><span>Email:</span> velezdaniel516@gmail</p>
                    <p><i class='bx bx-current-location' ></i><span>Address:</span> 123 Cloud Street, Sky City</p>
                </div>

                <div className="contactFormContainer">
                    {/*Create contact form*/}
                    <form className="contactForm">
                        {/*Prompt user for first name*/}
                        <div class="form-floating">
                            <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name" />
                            <label for="firstName">First Name<span>*</span></label>
                        </div>

                        {/*Prompt user for last name*/}
                        <div class="form-floating">
                            <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name" />
                            <label for="lastName">Last Name<span>*</span></label>
                        </div>

                        {/*Prompt user for email*/}
                        <div class="form-floating">
                            <input type="email" class="form-control" id="userEmail" name="userEmail" placeholder="Email" />
                            <label for="userEmail">Email<span>*</span></label>
                        </div>

                        {/*Prompt user for phone number*/}
                        <div class="form-floating">
                            <input type="tel" class="form-control" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                            <label for="phoneNumber">Phone Number<span>*</span></label>
                        </div>

                        {/*Prompt user for studentYear*/}
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Choose Student Year</option>
                            <option value="Freshman">Freshman</option>
                            <option value="Sophomore">Sophomore</option>
                            <option value="Junior">Junior</option>
                            <option value="Senior">Senior</option>
                        </select>

                        {/*Create text area for message*/}
                        <div class="form-floating">
                            <textarea class="form-control" id="message" name="message" placeholder="Message"></textarea>
                            <label for="message">Message<span>*</span></label>
                        </div>

                        {/*Create submit button*/}
                        <input type="submit" value="Send" /> 
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;