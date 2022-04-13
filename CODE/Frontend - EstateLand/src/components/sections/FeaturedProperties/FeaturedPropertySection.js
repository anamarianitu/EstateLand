import React from 'react'
import './FeaturedProperty.css'
import img1 from '../../images/property1.jpg'
import img2 from '../../images/property2.jpg'
import img3 from '../../images/property3.jpg'
import { FaFilm, FaCamera } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function FeaturedPropertySection() {
    return (
        <>
            <div className='agentsTitle'>
                <h1>Top Listings</h1>
            </div>
            <div className='boxArea'>
                <div className='singleBox'>
                    <div className="imageArea">
                        <img src={img1} alt=""></img>
                        <div className="info">
                            <h3>3 days ago</h3>
                            <h3>for rent</h3>
                        </div>
                        <div className="icons">
                            <div className='singleIcon'>
                                <FaFilm />
                                <h3>1</h3>
                            </div>
                            <div className='singleIcon'>
                                <FaCamera />
                                <h3>4</h3>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h3>$25,000/mo</h3>
                            {/* <div className='priceIcon'>
                            <FaHeart />
                        </div>
                        <div className='priceIcon'>
                            <FaEnvelope />
                        </div>
                        <div className='priceIcon'>
                            <FaPhone />
                        </div> */}
                        </div>
                        <div className="location">
                            <h3>Modern Apartments</h3>
                            <p>Jogeshwari west, mumbai, india - 400104</p>
                        </div>
                        <div className="buttons">
                            <Link to='/' className="btnFeatured">Request Info</Link>
                            <Link to='/' className="btnFeatured">View Details</Link>
                        </div>
                    </div>

                </div>


                <div className='singleBox'>
                    <div className="imageArea">
                        <img src={img2} alt=""></img>
                        <div className="info">
                            <h3>3 days ago</h3>
                            <h3>for rent</h3>
                        </div>
                        <div className="icons">
                            <div className='singleIcon'>
                                <FaFilm />
                                <h3>1</h3>
                            </div>
                            <div className='singleIcon'>
                                <FaCamera />
                                <h3>4</h3>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h3>$25,000/mo</h3>
                            <a href="/" className="fas fa-heart"></a>
                            <a href="/" className="fas fa-envelope"></a>
                            <a href="/" className="fas fa-phone"></a>
                        </div>
                        <div className="location">
                            <h3>Modern Apartments</h3>
                            <p>Jogeshwari west, mumbai, india - 400104</p>
                        </div>
                        <div className="buttons">
                            <a href="/" className="btnFeatured">Request Info</a>
                            <a href="/" className="btnFeatured">View Details</a>
                        </div>
                    </div>


                </div>

                <div className='singleBox'>
                    <div className="imageArea">
                        <img src={img3} alt=""></img>
                        <div className="info">
                            <h3>3 days ago</h3>
                            <h3>for rent</h3>
                        </div>
                        <div className="icons">
                            <div className='singleIcon'>
                                <FaFilm />
                                <h3>1</h3>
                            </div>
                            <div className='singleIcon'>
                                <FaCamera />
                                <h3>4</h3>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h3>$25,000/mo</h3>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-envelope"></a>
                            <a href="#" className="fas fa-phone"></a>
                        </div>
                        <div className="location">
                            <h3>Modern Apartments</h3>
                            <p>Jogeshwari west, mumbai, india - 400104</p>
                        </div>
                        <div className="buttons">
                            <a href="#" className="btnFeatured">Request Info</a>
                            <a href="#" className="btnFeatured">View Details</a>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}

export default FeaturedPropertySection
