import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import "./Property.css";
import Chart from "../../components/chart/Chart"
import { propertyData } from "../../testData"
import { Publish } from "@material-ui/icons";
import img from "../../../components/images/property1.jpg"
import propertyService from "../../../services/property.service";

function Property() {

    const location = useLocation();
    const { id } = location.state;
    const [property, setProperty] = useState(Object);

    useEffect(() => {
        propertyService.getPropertyById(id, setProperty);
    }, []);
    return (
        <div className="property">
            <div className="propertyTitleContainer">
                <h1 className="propertyTitle">Property</h1>
                <Link to="/admin/newproperty">
                    <button className="propertyAddButton">Create</button>
                </Link>
            </div>
            <div className="propertyTop">
                <div className="propertyTopLeft">
                    <Chart data={propertyData} dataKey="Viewings" title="Viewings Performance" />
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
                <form className="propertyForm">
                    <div className="propertyFormLeft">
                        <label>Property Name</label>
                        <input type="text" value={property.title} readOnly />
                        <label>Available </label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="propertyFormRight">
                        <div className="propertyUpload">
                            <img src={img} alt="" className="propertyUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <Link to={{
                            pathname: `/admin/updateProperty/${property.id}`,
                            state: { id: property.id }
                        }}>
                            <button className="propertyButton">Update</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Property
