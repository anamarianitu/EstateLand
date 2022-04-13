import React from 'react'
import './WidgetSm.css'
import { Link } from 'react-router-dom'
import { Visibility } from "@material-ui/icons";

function WidgetSmItem(props) {
    return (
        <li className="widgetSmListItem">
            <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetSmImg"
            />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">{props.username}</span>
                <span className="widgetSmUserTitle">{props.usertitle}</span>
            </div>
            <button className="widgetSmButton">
                <Link to={{
                    pathname: `/admin/admins/${props.idAdmin}`,
                    state: { id: props.idAdmin }
                }} className='linkHomeAdminDisplay'><Visibility className="widgetSmIcon" />
                    Display</Link>

            </button>
        </li>
    )
}

export default WidgetSmItem
