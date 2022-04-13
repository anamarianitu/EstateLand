import "./WidgetSm.css";
import WidgetSmItem from "./WidgetSmItem";
import React, { useState, useEffect } from "react";
import UserService from "../../../services/UserService";

function WidgetSm() {

  const [admins, setAdmins] = useState(null);

  useEffect(() => {
      UserService.getAllAdmins(setAdmins);
  }, []);

  if (!admins) return null;

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Active Admins</span>
      <ul className="widgetSmList">
      {admins.map(item => <WidgetSmItem key={item.id} idAdmin={item.id} username= {item.firstName} usertitle={item.username}/>)}
      </ul>
    </div>
  );
}

export default WidgetSm