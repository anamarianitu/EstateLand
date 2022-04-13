import "../user/User.css";
import "./Admin.css"
import ShowDetailsCard from "../../components/generalComponents.jsx/ShowDetailsCard";
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import UserService from "../../../services/UserService";
import { Publish } from "@material-ui/icons";
import InputItem from "../../components/generalComponents.jsx/InputItem"

function Admin() {

    const location = useLocation();
    const { id } = location.state;
    const [admin, setAdmin] = useState(Object);
    const [newAdmin, setNewAdmin] = useState(Object);


    // const [newAdmin, setNewAdmin] = useState({
    //     currentUsername: "",
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     username: "",
    //     role: "",
    //     active: false,
    //     notLocked: false
    // });


    useEffect(() => {
        UserService.getUserById(id, setAdmin);
        UserService.getUserById(id, setNewAdmin);

        // setNewAdmin({
        //     currentUsername: admin.username,
        //     firstName: admin.firstName,
        //     lastName: admin.lastName,
        //     email: admin.email,
        //     username: admin.username,
        //     role: admin.role,
        //     active: admin.active,
        //     notLocked: admin.notLocked
        // });

        // setFunctionForAdmin();
    }, []);

    // const [newAdmin, setNewAdmin] = useState({
    //     currentUsername: admin.username,
    //     firstName: admin.firstName,
    //     lastName: admin.lastName,
    //     email: admin.email,
    //     username: admin.username,
    //     role: admin.role,
    //     active: admin.active,
    //     notLocked: admin.notLocked
    // });

    const handleFisrNameInputChange = (event) => {
        const newValue = event.target.value;
        setNewAdmin({ ...newAdmin, firstName: newValue })
    }

    const handleLastNameInputChange = (event) => {
        const newValue = event.target.value;
        setNewAdmin({ ...newAdmin, lastName: newValue })
    }

    const handleUsernameInputChange = (event) => {
        const newValue = event.target.value;
        setNewAdmin({ ...newAdmin, username: newValue })
    }

    const handleEmailInputChange = (event) => {
        const newValue = event.target.value;
        setNewAdmin({ ...newAdmin, email: newValue })
    }

    const handleRoleInputChange = (event) => {
        const newValue = event.target.value;
        setNewAdmin({ ...newAdmin, role: newValue })
    }

    const handleIsActiveInputChange = (event) => {
        const newValue = event.target.checked;
        setNewAdmin({ ...newAdmin, active: newValue })
    }

    const handleIsNotLockedInputChange = (event) => {
        const newValue = event.target.checked;
        setNewAdmin({ ...newAdmin, notLocked: newValue })
    }

    const updateAdminDetails = (event) => {
        event.preventDefault();
        console.log(newAdmin);
        UserService.updateUserComplex(admin.username, newAdmin.firstName, newAdmin.lastName, newAdmin.username, newAdmin.email, newAdmin.role, newAdmin.active, newAdmin.notLocked);
    }

    return (

        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit Admin</h1>
            </div>

            <div className="userContainer">
                <ShowDetailsCard image='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' fName={admin.firstName} lName={admin.lastName} job={admin.jobPosition}
                    username={admin.username} dateOfBirth='10.12.1999' phone={admin.phone} email={admin.email}
                />
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit Personal Details</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <InputItem onChange={handleUsernameInputChange} value={newAdmin.username} labelTitle='Username' placeholder={admin.username} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                            <InputItem onChange={handleFisrNameInputChange} value={newAdmin.firstName} labelTitle='First Name' placeholder={admin.firstName} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                            <InputItem onChange={handleLastNameInputChange} value={newAdmin.lastName} labelTitle='Last Name' placeholder={admin.lastName} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                            <InputItem onChange={handleEmailInputChange} value={newAdmin.email} labelTitle='Email' placeholder={admin.email} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                            <InputItem onChange={handleRoleInputChange} value={newAdmin.role} labelTitle='Role' placeholder={admin.role} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                            <div className="singleAdminCheckbox">
                                <label className='labelAdminCheck'>Is Active
                                    <input
                                        className='inputCheckboxUser'
                                        type='checkbox'
                                        placeholder='Is Active'
                                        checked={newAdmin.active}
                                        onChange={handleIsActiveInputChange}
                                    /> {newAdmin.active}</label>
                            </div>
                            <div className="singleAdminCheckbox">
                                <label className='labelAdminCheck'>Is Not Locked
                                    <input
                                        className='inputCheckboxUser'
                                        type='checkbox'
                                        placeholder='Is Not Locked'
                                        checked={newAdmin.notLocked}
                                        onChange={handleIsNotLockedInputChange}
                                    /> {newAdmin.notLocked}</label>
                            </div>

                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src={admin.image}
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button onClick={updateAdminDetails} className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Admin