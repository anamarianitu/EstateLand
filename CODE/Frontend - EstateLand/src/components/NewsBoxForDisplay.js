import React from 'react'
import { Link } from 'react-router-dom'
import "./pages/NewsPage/News.css"
import image1 from "./images/property3.jpg"

function NewsBoxForDisplay(props) {
    return (
        <div className="cardNews">
            <div className="cardNewsHero">
                <img className="cardNewsImg" src={image1} alt='property-image'/>
                <div className="cardNewsMiddle">
                    <p className="cardNewsMiddle-text">{props.title} </p>
                </div>
            </div>
            <div className="cardNewsContent">
                <div className="cardNewsInfo">
                    <h1>{props.title}</h1>
                    <p className="cardNewsDetails">Category: {props.category}</p>
                    <h5 className="cardNewsPrice">{props.content}</h5>
                </div>

                <div className="cardNewsButtons">
                    <Link to={{
                        pathname: `/news/${props.idNews}`,
                        state: { id: props.idNews }
                    }} className="cardNewsMiddle-text extraButtonsLink">Read More</Link>
                    <Link to="" className="cardNewsMiddle-text extraButtonsLink likeButton">Like</Link>
                </div>
            </div>
        </div>
    )
}

export default NewsBoxForDisplay
