import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from 'recharts';
import { useLocation } from 'react-router-dom'
import { Publish } from "@material-ui/icons";
import img from "../../../components/images/property1.jpg"
import "./Viewing.css"
import ViewingsService from "../../../services/ViewingsService";
import Moment from 'moment';


function Viewing() {

    const location = useLocation();
    const { id } = location.state;
    const [property, setProperty] = useState(Object);
    const [viewing, setViewing] = useState(Object);
    const [nrViewingsForProperty, setNrViewingsForProperty] = useState(0);

    const dataProperty = [
        {
            name: property.title,
            numberOfViewings: nrViewingsForProperty
        }]
        console.log(nrViewingsForProperty);

    useEffect(() => {
        ViewingsService.getViewingById(id, setViewing);
        ViewingsService.getPropertyFromViewing(id, setProperty);
        ViewingsService.getNrViewingsForProperty(id, setNrViewingsForProperty);
    }, []);

    const contactUser = () => {
        alert('USER EMAIL: ' + viewing.userEmail + '\nUSER PHONE: ' + viewing.userPhone);
    };
    return (
        <div className='singleViewingPageContainer'>
            <div className="propertyTitleContainer">
                <h1 className="propertyTitle">Viewing Plan</h1>
            </div>
            <div className="propertyTop">
                <div className="propertyTopLeft">
                    <div className="chart">
                        <h3 className="chartTitle">Viewings Performance for this Property</h3>
                        <ResponsiveContainer width="100%" aspect={1.7 / 1}>
                            <BarChart
                                width={500}
                                height={300}
                                data={dataProperty}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="numberOfViewings" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="propertyTopRight">
                    <div className="propertyInfoTop">
                        <img src={img} alt="" className="propertyInfoImg" />
                        <span className="propertyName">{property.title}</span>
                    </div>

                    <div className="propertyInfoBottom">
                        <div className="propertyInfoItem">
                            <span className="propertyInfoKey">id:</span>
                            <span className="propertyInfoValue">{property.id}</span>
                        </div>
                        <div className="propertyInfoItem">
                            <span className="propertyInfoKey">Available:</span>
                            {
                                property.available ? <span className="propertyInfoValue">YES</span> :
                                    <span className="propertyInfoValue">NO</span>
                            }

                        </div>
                        <div className="propertyInfoItem">
                            <span className="propertyInfoKey">Offered for:</span>
                            <span className="propertyInfoValue">{property.rentSale}</span>
                        </div>
                        <div className="propertyInfoItem">
                            <span className="propertyInfoKey">Price:</span>
                            <span className="propertyInfoValue">{property.price} $</span>
                        </div>
                        <div className="propertyInfoAddress">
                            <span className="propertyInfoKey">Address: </span>
                            <span className="propertyInfoAddressValue">{property.country}, {property.city}, {property.street}, {property.number}</span>
                        </div>
                        <div className="propertyInfoItem">
                            <span className="propertyInfoKey">Type:</span>
                            <span className="propertyInfoValue">{property.type}</span>
                        </div>
                        <div className="propertyInfoItem">
                            <span className="propertyInfoKey">Capacity:</span>
                            <span className="propertyInfoValue">{property.capacity}</span>
                        </div>
                        <div className="propertyInfoItem">
                            <span className="propertyInfoKey">Floor:</span>
                            <span className="propertyInfoValue">{property.floor}</span>
                        </div>
                        <div className="propertyInfoItem">
                            <span className="propertyInfoKey">Square Meters:</span>
                            <span className="propertyInfoValue">{property.squareMeters} m2</span>
                        </div>

                    </div>

                </div>
            </div>
            <div className="propertyBottom">
                <div className="propertyForm">
                    <div className="propertyFormLeft">
                        <label>Viewing id</label>
                        <input className="viewingInfoInputs" type="text" value={viewing.id} readOnly />
                        <label>Viewing date</label>
                        <input className="viewingInfoInputs" type="text" value={Moment(viewing.date).format('d MMM YYYY')} readOnly />
                        <label>Viewing Preference</label>
                        <input className="viewingInfoInputs" type="text" value={viewing.timeDisponibility} readOnly />
                        <label>Message</label>
                        <textarea className="viewingInfoInputs" type="text" value={viewing.message} readOnly />
                    </div>
                    <div className="propertyFormRight">
                        <div className="propertyUpload">
                            <img src={img} alt="" className="propertyUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button onClick={contactUser} className="propertyButton">Contact User</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewing
