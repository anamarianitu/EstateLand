import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
    return (
        <div className='services'>
            <div className='servicesTitle'>
                <h1>Our Services</h1>
            </div>
            <div className='container'>
                <div className='box'>
                    <h2>01</h2>
                    <h3>Lifestyle</h3>
                    <p>Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                    <br />
                    <Link to='/' className='link'>Read more...</Link>
                </div>
                <div className='box'>
                    <h2>02</h2>
                    <h3>Sell</h3>
                    <p>Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                    <br />
                    <Link to='/' className='link'>Read more...</Link>
                </div>
                <div className='box'>
                    <h2>03</h2>
                    <h3>Rent</h3>
                    <p>Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                    <br />
                    <Link to='/' className='link'>Read more...</Link>
                </div>

            </div>
        </div>


    )
}

export default Services
