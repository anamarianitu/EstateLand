import React, { useEffect, useState } from "react";
import ContactService from "../../../services/ContactService";
import "./ContactForm.css"
import { useLocation } from 'react-router-dom'

function ContactForm() {

    const location = useLocation();
    const { id } = location.state;
    const [contactForm, setContactForm] = useState(Object);

    useEffect(() => {
        ContactService.getContactFormById(id, setContactForm);
    }, []);

    return (
        <div className='contactFormSinglePage'>
            <div className="contactFormSinglePageContainer">
                <div className="propertyFormLeft">
                    <label>Contact Form Id</label>
                    <input className="contactFprmInputs" value={contactForm.id} type="text" readOnly />
                    <label>Contact Form Title</label>
                    <input className="contactFprmInputs" value={contactForm.title} type="text" readOnly />
                    <label>Contact Form User Email</label>
                    <input className="contactFprmInputs" value={contactForm.userEmail} type="text" readOnly />
                    <label>Contact Form User Phone Number</label>
                    <input className="contactFprmInputs" value={contactForm.userPhone} type="text" readOnly />
                    <label>Message</label>
                    <textarea rows={10} className="contactFprmInputs" value={contactForm.message} type="text" readOnly />
                </div>
            </div>
            <a className="contactFormSendEmail" href={"mailto:" + contactForm.userEmail}>Send Email</a>

        </div>
    )
}

export default ContactForm
