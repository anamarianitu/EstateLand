import React, { useState } from 'react'
import UserService from '../../../services/UserService';

function NewAgent() {

    const [newAgent, setNewAgent] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        role: "ROLE_AGENT",
        isActive: true,
        isNotLocked: true
    });

    const addNewAgent = () => {
        UserService.addNewAgent(newAgent.firstName, newAgent.lastName, newAgent.username, newAgent.email, newAgent.isActive, newAgent.isNotLocked);
    }

    const handleFisrNameInputChange = (event) => {
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

    const handleIsActiveInputChange = (event) => {
        const newValue = event.target.checked;
        setNewAgent({ ...newAgent, isActive: newValue })
    }

    const handleIsNotLockedInputChange = (event) => {
        const newValue = event.target.checked;
        setNewAgent({ ...newAgent, isNotLocked: newValue })
    }

    return (
        <div className='newAdmin'>
            <h1 className="addPropertyTitle">Add New Agent</h1>
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
                        value={newAgent.firstName}
                        onChange={handleFisrNameInputChange}
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Last Name</label>
                    <input
                        type='text'
                        placeholder='Last Name'
                        value={newAgent.lastName}
                        onChange={handleLastNameInputChange}
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Username</label>
                    <input
                        type='text'
                        placeholder='Username'
                        value={newAgent.username}
                        onChange={handleUsernameInputChange}
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Email</label>
                    <input
                        type='text'
                        placeholder='Email'
                        value={newAgent.email}
                        onChange={handleEmailInputChange}
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Role</label>
                    <input
                        type='text'
                        readonly
                        placeholder='ROLE_AGENT'
                    />
                </div>
                <div className='addPropertyItem'>
                    <label>Is Active
                    <input
                        type='checkbox'
                        placeholder='Is Active'
                        onChange={handleIsActiveInputChange}
                        defaultChecked={newAgent.isActive}
                    />  {newAgent.isActive.toString()}</label>
                </div>
                <div className='addPropertyItem'>
                    <label>Is Not Locked
                    <input
                        type='checkbox'
                        placeholder='Is Not Locked'
                        defaultChecked={newAgent.isNotLocked}
                        onChange={handleIsNotLockedInputChange}
                    />  {newAgent.isNotLocked.toString()}</label>
                </div>

                <button onClick={addNewAgent} className="addPropertyButton" >Create</button>
            </form>
        </div>
    )
}

export default NewAgent
