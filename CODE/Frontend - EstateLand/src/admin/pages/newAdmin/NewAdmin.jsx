import React, { useState } from 'react'
import UserService from '../../../services/UserService';
import "./NewAdmin.css"

function NewAdmin() {

    const [newAdmin, setNewAdmin] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        role: "ROLE_ADMIN",
        isActive: true,
        isNotLocked: true
    });

    const addNewAdmin = () => {
        UserService.addNewAdmin(newAdmin.firstName, newAdmin.lastName, newAdmin.username, newAdmin.email, newAdmin.isActive, newAdmin.isNotLocked);
    }

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

    const handleIsActiveInputChange = (event) => {
        const newValue = event.target.checked;
        setNewAdmin({ ...newAdmin, isActive: newValue })
    }

    const handleIsNotLockedInputChange = (event) => {
        const newValue = event.target.checked;
        setNewAdmin({ ...newAdmin, isNotLocked: newValue })
    }

    return (
        <div className='newAdmin'>
            <h1 className="addPropertyTitle">Add New Admin</h1>
            <form className="addPropertyForm">

                <div className='addPropertyItem'>
                    <label>Image</label>
                    <input
                        type='file'
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>First Name</label>
                    <input
                        type='text'
                        placeholder='First Name'
                        value={newAdmin.firstName}
                        onChange={handleFisrNameInputChange}
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Last Name</label>
                    <input
                        type='text'
                        placeholder='Last Name'
                        value={newAdmin.lastName}
                        onChange={handleLastNameInputChange}
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Username</label>
                    <input
                        type='text'
                        placeholder='Username'
                        value={newAdmin.username}
                        onChange={handleUsernameInputChange}
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Email</label>
                    <input
                        type='text'
                        placeholder='Email'
                        value={newAdmin.email}
                        onChange={handleEmailInputChange}
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Role</label>
                    <input
                        type='text'
                        readOnly
                        placeholder='ROLE_ADMIN'
                    />
                </div>
                <div className='addPropertyItem'>
                    <label className='labelCheckbox'>Is Active  
                    <input
                        className='inputCheckboxUser'
                        type='checkbox'
                        placeholder='Is Active'
                        onChange={handleIsActiveInputChange}
                        defaultChecked={newAdmin.isActive}
                    />    {newAdmin.isActive.toString()}</label>
                </div>
                <div className='addPropertyItem'>
                    <label className='labelCheckbox'>Is Not Locked  
                    <input
                        className='inputCheckboxUser'
                        type='checkbox'
                        placeholder='Is Not Locked'
                        onChange={handleIsNotLockedInputChange}
                        defaultChecked={newAdmin.isNotLocked}
                    />    {newAdmin.isNotLocked.toString()}</label>
                </div>

                <button onClick={addNewAdmin} className="addPropertyButton" >Create</button>
            </form>
        </div>
    )
}

export default NewAdmin
