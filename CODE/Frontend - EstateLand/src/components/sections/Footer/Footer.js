import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa'
import './Footer.css'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer>
            <div className='footerContainer'>
                <div className='sec aboutUs'>
                    <h2>About us</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining</p>
                    <ul className='sci'>
                        <li><FaFacebook className='fLogo' /></li>
                        <li><FaInstagram className='fLogo' /></li>
                        <li><FaTwitter className='fLogo' /></li>
                        <li><FaYoutube className='fLogo' /></li>
                    </ul>
                </div>

                <div className='sec quickLinks'>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to='/' className='quickL'>FAQ</Link></li>
                        <li><Link to='/' className='quickL'>Privacy Policy</Link></li>
                        <li><Link to='/' className='quickL'>Help</Link></li>
                        <li><Link to='/' className='quickL'>Terms & Conditions</Link></li>
                        <li><Link to='/' className='quickL'>Contact</Link></li>
                    </ul>
                </div>

                <div className='sec contact'>
                    <h2>Contact Info</h2>
                    <ul className='footerInfo'>
                        <li>
                            <div>
                                <span><FaMapMarker /></span>
                                <span> Strationsweg 243, 7623AB, Eindhoven, <br /> The Netherlands
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span><FaPhone /></span>
                                <p>+31 765 434 567</p> <br />
                                <p>+31 765 434 555</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span><FaEnvelope /></span>
                                <p>estateland @gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

        </footer>
    )
}

export default Footer
