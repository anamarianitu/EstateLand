import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import "./Contact.css"
import ContactService from '../../../services/ContactService';

function Contact() {

    const [contact, setContact] = useState({
        title: "",
        email: "",
        phone: "",
        message: ""
    });
    const [message, setMessage] = useState("");

    const handleTitleChange = (event) => {
        const newValue = event.target.value;
        setContact({ ...contact, title: newValue })
    }

    const handleEmailChange = (event) => {
        const newValue = event.target.value;
        setContact({ ...contact, email: newValue })
    }

    const handlePhoneChange = (event) => {
        const newValue = event.target.value;
        setContact({ ...contact, phone: newValue })
    }

    const handleMessageChange = (event) => {
        const newValue = event.target.value;
        setContact({ ...contact, message: newValue })
    }

    const addContactForm = () => {
            ContactService.addContactForm(contact.title, contact.email, contact.phone, contact.message).then(
                () => {
                    setMessage("Submitted successfully!")
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                }
            );
    }

    return (
        <div className='overviewContactPage'>

            <div className="contactForm">
                <div className="contactUsTitleContainer">
                    <h1>Contact Us</h1>
                </div>
                <TextField sx={{ width: '98%' }} style={{ margin: '15px', background: 'white' }} id="outlined-basic" label="Title" variant="outlined" onChange={handleTitleChange} required />
                <TextField sx={{ width: '98%' }} style={{ margin: '15px', background: 'white' }} id="outlined-basic" label="Email" variant="outlined" onChange={handleEmailChange} required />
                <TextField sx={{ width: '98%' }} style={{ margin: '15px', background: 'white' }} id="outlined-basic" label="Phone Number" variant="outlined" onChange={handlePhoneChange} required />
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    sx={{ width: '98%' }}
                    label="Message"
                    variant="outlined"
                    style={{ margin: '15px', background: 'white' }}
                    onChange={handleMessageChange}
                    required
                />

                <button onClick={addContactForm} type='submit' className="contactUsButton">Contact Us</button>
                <div className="messageContactForm">{message}</div>
            </div>

        </div>
    )
}

export default Contact
