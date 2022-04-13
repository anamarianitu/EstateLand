import { Link } from "react-router-dom";
import "../user/User.css";
import "../admin/Admin.css"
import ShowDetailsCard from "../../components/generalComponents.jsx/ShowDetailsCard";
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import UserService from "../../../services/UserService";
import { Publish } from "@material-ui/icons";
import InputItem from "../../components/generalComponents.jsx/InputItem"

function Agent() {

    const location = useLocation();
    const { id } = location.state;
    const [agent, setAgent] = useState(Object);
    const [newAgent, setNewAgent] = useState(Object);

    useEffect(() => {
        UserService.getUserById(id, setAgent);
        UserService.getUserById(id, setNewAgent);
    }, []);

    const handleFirstNameInputChange = (event) => {
        const newValue = event.target.value;
        setNewAgent({ ...newAgent, firstName: newValue })
    }

    const handleLastNameInputChange = (event) => {
        const newValue = event.target.value;
        setNewAgent({ ...newAgent, lastName: newValue })
    }

    const handleUsernameInputChange = (event) => {
        const newValue = event.target.value;
        setNewAgent({ ...newAgent, username: newValue })
    }

    const handleEmailInputChange = (event) => {
        const newValue = event.target.value;
        setNewAgent({ ...newAgent, email: newValue })
    }

    const handleRoleInputChange = (event) => {
        const newValue = event.target.value;
        setNewAgent({ ...newAgent, role: newValue })
    }

    const handleIsActiveInputChange = (event) => {
        const newValue = event.target.checked;
        setNewAgent({ ...newAgent, active: newValue })
    }

    const handleIsNotLockedInputChange = (event) => {
        const newValue = event.target.checked;
        setNewAgent({ ...newAgent, notLocked: newValue })
    }

    const updateAgentDetails = (event) => {
        event.preventDefault();
        UserService.updateUserComplex(agent.username, newAgent.firstName, newAgent.lastName, newAgent.username, newAgent.email, newAgent.role, newAgent.isActive, newAgent.isNotLocked);
    }

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit Agent</h1>

            </div>

            <div className="userContainer">
                <ShowDetailsCard image='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' fName={agent.firstName} lName={agent.lastName} job={agent.role}
                    username={agent.username} dateOfBirth='22.05.1976' email={agent.email}
                />
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <InputItem labelTitle='Username' value={newAgent.username} onChange={handleUsernameInputChange} placeholder={agent.username} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                            <InputItem labelTitle='First Name' value={newAgent.firstName} onChange={handleFirstNameInputChange} placeholder={agent.firstName} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                            <InputItem labelTitle='Last Name' value={newAgent.lastName} onChange={handleLastNameInputChange} placeholder={agent.lastName} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                            <InputItem labelTitle='Email' value={newAgent.email} onChange={handleEmailInputChange} placeholder={agent.email} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                            <InputItem labelTitle='Role' value={newAgent.role} onChange={handleRoleInputChange} placeholder={agent.role} divClassName='userUpdateItem' inputClass='userUpdateInput' inputType='text' />
                            <div className="singleAdminCheckbox">
                                <label className='labelAdminCheck'>Is Active
                                    <input
                                        className='inputCheckboxUser'
                                        type='checkbox'
                                        placeholder='Is Active'
                                        checked={agent.active}
                                        onChange={handleIsActiveInputChange}
                                    /> {agent.active}</label>
                            </div>
                            <div className="singleAdminCheckbox">
                                <label className='labelAdminCheck'>Is Not Locked
                                    <input
                                        className='inputCheckboxUser'
                                        type='checkbox'
                                        placeholder='Is Not Locked'
                                        checked={agent.notLocked}
                                        onChange={handleIsNotLockedInputChange}
                                    /> {agent.notLocked}</label>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src={agent.image}
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button onClick={updateAgentDetails} className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Agent