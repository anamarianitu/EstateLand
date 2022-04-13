import "./FeaturedInfo.css";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import propertyService from "../../../services/property.service";
import UserService from "../../../services/UserService";
import ViewingsService from "../../../services/ViewingsService";


export default function FeaturedInfo() {

  const [totalAvailableProperties, setTotalAvailableProperties] = useState(0);
  const [totalViewings, setTotalViewings] = useState(0);
  const [totalRegisteredUsers, setTotalRegisteredUsers] = useState(0);

  useEffect(() => {
    propertyService.getTotalNrAvailableProperties(setTotalAvailableProperties);
    UserService.getTotalNrRegisteredUsers(setTotalRegisteredUsers);
    ViewingsService.getTotalNrViewings(setTotalViewings);

  }, []);



  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Active Properties</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalAvailableProperties}</span>
        </div>
        <Link to="/admin/properties" className="featuredSub">Manage Properties</Link>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Total Registered Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalRegisteredUsers}</span>
        </div>
        <Link to="/admin/users" className="featuredSub">Manage Users</Link>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Total Viewings Request</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalViewings}</span>
        </div>
        <Link to="/admin/viewings" className="featuredSub">Manage Viewings</Link>
      </div>

    </div>
  );
}