import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import './AgentsSection.css'
import agent1 from '../../images/agent-1.jpg'
import agent4 from '../../images/agent-4.jpg'
import agent5 from '../../images/agent-5.jpg'

function AgentsSection() {
    return (
        <div className='agentsSection'>
            <div className='agentsTitle'>
                <h1>Top Agents</h1>
            </div>
            <div className="boxArea">
                <div className="card">
                    <div className="content">
                        <div className="imgBx">
                            <img src={agent1} alt=""></img>
                        </div>
                        <div className="contentBx">
                            <h4>James Ford</h4>
                            <h5>Director General</h5>
                        </div>
                        <div className="sci">
                            <FaFacebook className='linkSocialAgent' />
                            <FaInstagram className='linkSocialAgent' />
                            <FaTwitter className='linkSocialAgent' />
                            {/* <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a> */}
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <div className="imgBx">
                            <img src={agent4} alt=""></img>
                        </div>
                        <div className="contentBx">
                            <h4>James Ford</h4>
                            <h5>Director General</h5>
                        </div>
                        <div className="sci">
                            <FaFacebook className='linkSocialAgent' />
                            <FaInstagram className='linkSocialAgent' />
                            <FaTwitter className='linkSocialAgent' />
                            {/* <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a> */}
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <div className="imgBx">
                            <img src={agent5} alt=""></img>
                        </div>
                        <div className="contentBx">
                            <h4>James Ford</h4>
                            <h5>Director General</h5>
                        </div>
                        <div className="sci">
                            <FaFacebook className='linkSocialAgent' />
                            <FaInstagram className='linkSocialAgent' />
                            <FaTwitter className='linkSocialAgent' />
                            {/* <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a> */}
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <div className="imgBx">
                            <img src={agent1} alt=""></img>
                        </div>
                        <div className="contentBx">
                            <h4>James Ford</h4>
                            <h5>Director General</h5>
                        </div>
                        <div className="sci">
                            <FaFacebook className='linkSocialAgent' />
                            <FaInstagram className='linkSocialAgent' />
                            <FaTwitter className='linkSocialAgent' />
                            {/* <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AgentsSection
