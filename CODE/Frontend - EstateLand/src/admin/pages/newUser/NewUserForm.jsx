import React from 'react'
import InputItem from '../../components/generalComponents.jsx/InputItem'
import './NewUser.css'

function NewUserForm() {
    return (
        <form className="newUserForm">
            <InputItem divClassName='newUserItem' labelTitle='Username' inputType='text' placeholder='johnSmith07' />
            <InputItem divClassName='newUserItem' labelTitle='Full Name' inputType='text' placeholder='John Smith' />
            <InputItem divClassName='newUserItem' labelTitle='Email' inputType='email' placeholder='john@gmail.com' />
            <InputItem divClassName='newUserItem' labelTitle='Password' inputType='password' placeholder='password' />
            <InputItem divClassName='newUserItem' labelTitle='Phone' inputType='text' placeholder='+567 898 543' />
            <InputItem divClassName='newUserItem' labelTitle='Address' inputType='text' placeholder='Eindhoven' />
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other" />
                    <label for="other">Other</label>
                </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
    )
}

export default NewUserForm
