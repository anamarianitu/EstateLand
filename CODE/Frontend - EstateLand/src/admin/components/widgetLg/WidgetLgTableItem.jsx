import React from 'react'
import './WidgetLg.css'

function WidgetLgTableItem(props) {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
    return (
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                {/* <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLgImg"
                /> */}
                <span className="widgetLgName">{props.email}</span>
            </td>
            <td className="widgetLgDate">{props.date}</td>
            <td className="widgetLgAmount">{props.phone}</td>
            <td className="widgetLgStatus">
                <Button type={props.status} />
            </td>
        </tr>
    )
}

export default WidgetLgTableItem
