import React from 'react'
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
} from "@material-ui/icons";

function ShowDetailsCard(props) {
    return (
        <div className="userShow">
            <div className="userShowTop">
                <img
                    src={props.image}
                    alt=""
                    className="userShowImg"
                />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">{props.fName + ' ' + props.lName}</span>
                    <span className="userShowUserTitle">{props.job}</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                    <PermIdentity className="userShowIcon" />
                    <span className="userShowInfoTitle">{props.username}</span>
                </div>
                <div className="userShowInfo">
                    <CalendarToday className="userShowIcon" />
                    <span className="userShowInfoTitle">{props.dateOfBirth}</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon" />
                    <span className="userShowInfoTitle">{props.phone}</span>
                </div>
                <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfoTitle">{props.email}</span>
                </div>
                {/* <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">{props.city} | {props.country}</span>
                </div> */}
            </div>
        </div>
    )
}

export default ShowDetailsCard
