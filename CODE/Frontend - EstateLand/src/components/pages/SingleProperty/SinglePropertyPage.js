import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import PhotoSlider from '../../generalComponents/photoSlider/PhotoSlider'
import './SinglePropertyPage.css'
import propertyService from "../../../services/property.service";
import TextField from '@mui/material/TextField';
import authService from "../../../services/auth.service";
import UserService from "../../../services/UserService";
import ViewingsService from "../../../services/ViewingsService";

function SinglePropertyPage() {

    const location = useLocation();
    const { id } = location.state;
    const [property, setProperty] = useState(Object);
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [viewing, setViewing] = useState({
        email: "",
        phone: "",
        message: "",
        date: "",
        timeDisponibility: "morning"
    });

    const handleEmailChange = (event) => {
        const newValue = event.target.value;
        setViewing({ ...viewing, email: newValue })
    }

    const handlePhoneChange = (event) => {
        const newValue = event.target.value;
        setViewing({ ...viewing, phone: newValue })
    }

    const handleMessageChange = (event) => {
        const newValue = event.target.value;
        setViewing({ ...viewing, message: newValue })
    }

    const handleDateChange = (event) => {
        const newValue = event.target.value;
        setViewing({ ...viewing, date: newValue })
    }

    const handleTimeDisponibilityChange = (event) => {
        const newValue = event.target.value;
        setViewing({ ...viewing, timeDisponibility: newValue })
    }

    const addViewing = () => {
        ViewingsService.addViewing(property.id, viewing.email, viewing.phone, viewing.date, viewing.timeDisponibility, viewing.message).then(
            () => {
                setMessage("The viewing was submitted successfully! An admin will contact you shortly.")
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
        setSubmitted(true);
    }

    function addToFavourite() {
        UserService.addPropertyToFavourites(property.id, authService.getCurrentUser().id);
    }

    useEffect(() => {
        propertyService.getPropertyById(id, setProperty);
    }, []);



    return (
        <div>
            <div className='overviewPropertyContainer'>
                <div className='imageSliderContainer'>
                    <PhotoSlider />
                </div>

                <div className='generalDetailsContainer'>
                    <h2 className='generalDetailsTitle'>{property.title}</h2>
                    <h3 className='generalDetailsPrice'>${property.price}</h3>
                    <p className='generalDetailsShortDesc'>{property.description}</p>
                    <p className='generalDetailsShortDesc'>Address: {property.country}, {property.city}, {property.street}, nr. {property.number}, {property.postcode}</p>
                    {authService.getCurrentUser() !== null ? <button className="savePropertyToFavourites" type='submit' onClick={addToFavourite}>❤️Save</button> : ''}
                </div>

            </div>

            <div className='overviewTitle'>
                <h1>Overview Property</h1>
            </div>

            <table className="customTable">
                <thead>
                    <tr>
                        <th>Property Specifications</th>
                        <th>Values</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Available for:</td>
                        <td>{property.rentSale}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>{property.price}</td>
                    </tr>
                    <tr>
                        <td>Property Type</td>
                        <td>{property.type}</td>
                    </tr>
                    <tr>
                        <td>Maximum Capacity</td>
                        <td>{property.capacity} people</td>
                    </tr>
                    <tr>
                        <td>Number of rooms</td>
                        <td>{property.nrRooms} rooms</td>
                    </tr>
                    <tr>
                        <td>Number of bathrooms</td>
                        <td>{property.nrBathrooms} bathrooms</td>
                    </tr>
                    <tr>
                        <td>Floor</td>
                        <td>{property.floor}</td>
                    </tr>
                    <tr>
                        <td>Square meters</td>
                        <td>{property.squareMeters} m2</td>
                    </tr>
                </tbody>
            </table>

            <div className='overviewTitle'>
                <h1>Plan a viewing for this property</h1>
            </div>

            <div className="planViewingForm">
                <TextField sx={{ width: 900 }} style={{ margin: '15px' }} id="outlined-basic" label="Email" variant="outlined" onChange={handleEmailChange} required />
                <TextField sx={{ width: 900 }} style={{ margin: '15px' }} id="outlined-basic" label="Phone Number" variant="outlined" onChange={handlePhoneChange} required />
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    label="Message"
                    sx={{ width: 900 }}
                    variant="outlined"
                    style={{ margin: '15px' }}
                    onChange={handleMessageChange}
                    required
                />
                <input value={viewing.date} className="planViewingCalendarTime" type='date' onChange={handleDateChange}></input>
                <select id="timeDisponibility" className="planViewingCalendarTime" onChange={handleTimeDisponibilityChange}>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>

                {submitted ? <div className="success-message">{message}</div> : null}

                <button onClick={addViewing} type='submit' className="addPropertyButton">Request Viewing</button>
            </div>

        </div>
    )
}

export default SinglePropertyPage
