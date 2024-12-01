import React from 'react';
import { Link } from 'react-router-dom';
import './contactus.css';

//Create contact us function
function ContactUs() {
    return (
        <section className="contactContainer">
            <h2>Get in Touch</h2>
            <p>Have questions or need assistance? Reach out to us!</p>
            <Link to="/contact" className="contactBtn">Contact Us</Link>
        </section>
    );
}

export default ContactUs;