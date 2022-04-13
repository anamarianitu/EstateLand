import React from 'react'
import { Link } from 'react-router-dom';
import image1 from "../../images/property4.jpg"
import "./SavedPropertyBox.css"

function SavedPropertyBox(props) {
    return (
        <div className="cardPropertySaved">
            <div className="cardPropertyHero">
                <img className="cardPropertyImg" src={image1} alt='property-show' />
                <div className="cardPropertyMiddle">
                    <p className="cardPropertyMiddle-text">{props.title} </p>
                </div>
            </div>
            <div className="cardPropertyContent">
                <div className="cardPropertyInfo">
                    <h1>{props.title}</h1>
                    <h5 className="cardPropertyPrice">${props.price}</h5>
                    <p className="cardPropertyAddress">{props.address}</p>
                    <p className="cardPropertyDetails">8 Bed &middot; 12 Bath &middot; 8,800 Sqft</p>
                </div>

                <div className="cardPropertyButtons">
                    <Link to={{
                        pathname: `/property/${props.idProperty}`,
                        state: { id: props.idProperty }
                    }} className="cardPropertyMiddle-text extraButtonsLink viewMoreSaved">View More</Link>
                    <button onClick={props.onClick} className='cardPropertyMiddle-text extraButtonsLink removeSavedProperty'>Remove from Saved</button>
                </div>
            </div>
        </div>
    )
}

export default SavedPropertyBox
