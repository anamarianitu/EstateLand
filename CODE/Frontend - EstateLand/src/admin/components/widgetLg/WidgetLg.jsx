import "./WidgetLg.css";
import WidgetLgTableItem from "./WidgetLgTableItem";
import React, { useState, useEffect } from "react";
import ViewingsService from "../../../services/ViewingsService";
import Moment from 'moment';

function WidgetLg() {

  const [viewings, setViewings] = useState(null);

  useEffect(() => {
      ViewingsService.getLast5Viewings(setViewings);
  }, []);

  if (!viewings) return null; 

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Viewings Plannings</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Phone</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {viewings.map(item => <WidgetLgTableItem email={item.userEmail} date={Moment(item.date).format('d MMM YYYY')} phone={item.userPhone} status='Pending'/>)}
      </table>
    </div>
  );
}

export default WidgetLg