import "./UpdateProperty.css"
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import propertyService from "../../../services/property.service";

function UpdateProperty() {
    const location = useLocation();
    const { id } = location.state;
    const [message, setMessage] = useState("");

    const [newProperty, setNewProperty] = useState({
        title: "",
        description: "",
        price: 1,
        available: true,
        capacity: 1,
        rentSale: "",
        type: "",
        nrRooms: 1,
        nrBathrooms: 1,
        floor: 1,
        squareMeters: 1,
        city: "",
        country: "",
        street: "",
        number: 1,
        postcode: ""
    });

    useEffect(() => {
        propertyService.getPropertyById(id, setNewProperty);
    }, []);

    const updateProperty = (event) => {
        event.preventDefault();
        console.log(newProperty);
        propertyService.updateProperty(id, newProperty.title, newProperty.description, newProperty.price, newProperty.available, newProperty.capacity, newProperty.rentSale, newProperty.type,
            newProperty.nrRooms, newProperty.nrBathrooms, newProperty.floor, newProperty.squareMeters, newProperty.country, newProperty.city, newProperty.street, newProperty.postcode, newProperty.number);
    }

    const handleTitleInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, title: newValue })
    }
    const handleDescriptionInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, description: newValue })
    }
    const handlePriceInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, price: newValue })
    }
    const handleTypeInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, type: newValue })
    }
    const handleCapacityInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, capacity: newValue })
    }
    const handleNrRoomsInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, nrRooms: newValue })
    }
    const handleNrBathroomsInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, nrBathrooms: newValue })
    }
    const handleFloorInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, floor: newValue })
    }
    const handleSquareMetersInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, squareMeters: newValue })
    }
    const handleCountryInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, country: newValue })
    }
    const handleCityInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, city: newValue })
    }
    const handleStreetInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, street: newValue })
    }
    const handleNumberInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, number: newValue })
    }
    const handlePostcodeInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, postcode: newValue })
    }
    const handleRentSaleInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, rentSale: newValue })
    }
    const handleAvailableInputChange = (event) => {
        const newValue = event.target.value;
        setNewProperty({ ...newProperty, available: newValue })
    }
    return (
        <div className="property">
            <h1 className="addPropertyTitle">Update The Current Property</h1>
            <form className="addPropertyForm">

                <div className='addPropertyItem'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={newProperty.title}
                        onChange={handleTitleInputChange}
                        required
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Description</label>
                    <input
                        type='text'
                        value={newProperty.description}
                        onChange={handleDescriptionInputChange}
                        required
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Price</label>
                    <input
                        type='number'
                        value={newProperty.price}
                        onChange={handlePriceInputChange}
                        required
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Capacity</label>
                    <input
                        type='number'
                        value={newProperty.capacity}
                        onChange={handleCapacityInputChange}
                        required
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Type</label>
                    <input
                        type='text'
                        value={newProperty.type}
                        onChange={handleTypeInputChange}
                        required
                    />
                </div>
                <div className="addPropertyItem">
                    <label>Rent/Sale</label>
                    <select name="rentSale" id="rentSale" onChange={handleRentSaleInputChange}>
                        <option value="rent">Rent</option>
                        <option value="sale">Sale</option>
                    </select>
                </div>
                <div className='addPropertyItem'>
                    <label>Number of Rooms</label>
                    <input
                        type='number'
                        value={newProperty.nrRooms}
                        onChange={handleNrRoomsInputChange}
                        required
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Number of Bathrooms</label>
                    <input
                        type='number'
                        value={newProperty.nrBathrooms}
                        onChange={handleNrBathroomsInputChange}
                        required
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Floor</label>
                    <input
                        type='number'
                        value={newProperty.floor}
                        onChange={handleFloorInputChange}
                        required
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Sqare Meters</label>
                    <input
                        type='number'
                        value={newProperty.squareMeters}
                        onChange={handleSquareMetersInputChange}
                        required
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Country</label>
                    <input
                        type='text'
                        value={newProperty.country}
                        onChange={handleCountryInputChange}
                        required
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>City</label>
                    <input
                        type='text'
                        value={newProperty.city}
                        onChange={handleCityInputChange}
                        required
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Street</label>
                    <input
                        type='text'
                        value={newProperty.street}
                        onChange={handleStreetInputChange}
                        required
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Number</label>
                    <input
                        type='number'
                        value={newProperty.number}
                        onChange={handleNumberInputChange}
                        required
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Postcode</label>
                    <input
                        type='text'
                        value={newProperty.postcode}
                        onChange={handlePostcodeInputChange}
                        required
                    />
                </div>
                <div className="addPropertyItem">
                    <label>Available</label>
                    <select name="available" id="available" onChange={handleAvailableInputChange}>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>
                <button className="addPropertyButton" onClick={updateProperty}>Create</button>
            </form>
        </div>
    )
}

export default UpdateProperty
