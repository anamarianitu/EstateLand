import React from 'react'
import "../../pages/user/User.css";
import { Publish } from "@material-ui/icons";
import InputItem from './InputItem';

function UpdateDetails(props) {
    return (
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <InputItem labelTitle='Username' placeholder={props.username} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                    <InputItem labelTitle='Full Name' placeholder={props.fName + ' ' + props.lName} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                    <InputItem labelTitle='Email' placeholder={props.email} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                    <InputItem labelTitle='Phone' placeholder={props.phone} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                    {/* <InputItem labelTitle='Street' placeholder={props.street} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                    <InputItem labelTitle='Number' placeholder={props.number} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                    <InputItem labelTitle='PostCode' placeholder={props.postCode} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                    <InputItem labelTitle='City' placeholder={props.city} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                    <InputItem labelTitle='Country' placeholder={props.country} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' /> */}
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img
                            className="userUpdateImg"
                            src={props.image}
                            alt=""
                        />
                        <label htmlFor="file">
                            <Publish className="userUpdateIcon" />
                        </label>
                        <input type="file" id="file" style={{ display: "none" }} />
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateDetails
