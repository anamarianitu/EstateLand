import React from 'react'
import { Link } from 'react-router-dom'
import "./css/PropertyBox.css"
import image1 from "./images/property1.jpg"

function PropertyBox(props) {

    return (
        <div className="cardProperty">
            <div className="cardPropertyHero">
                <img className="cardPropertyImg" src={image1} alt='property' />
                {props.rentSale==="rent" ? <div className='divRentSale'>Rent</div> : <div className='divRentSale'>Sale</div>}
                
                <div className="cardPropertyMiddle">
                    <p className="cardPropertyMiddle-text">{props.title} </p>
                </div>
            </div>
            <div className="cardPropertyContent">
                <div className="cardPropertyInfo">
                    <h1>{props.title}</h1>
                    {props.rentSale === "rent" ? <h5 className="cardPropertyPrice">${props.price} /month</h5> : <h5 className="cardPropertyPrice">${props.price}</h5>}

                    <p className="cardPropertyAddress">Address: {props.country}, {props.city}, {props.street}, {props.number}, {props.postcode}</p>
                    <p className="cardPropertyDetails">{props.nrBedrooms} Bedrooms; {props.nrBathrooms} Bathrooms; {props.squareMeters} m2</p>
                </div>

                <div className="cardPropertyButtons">
                    <Link to={{
                        pathname: `/property/${props.idProperty}`,
                        state: { id: props.idProperty }
                    }} className="cardPropertyMiddle-text extraButtonsLink">View More</Link>
                    <Link to="/contact" className="cardPropertyMiddle-text extraButtonsLink">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default PropertyBox
