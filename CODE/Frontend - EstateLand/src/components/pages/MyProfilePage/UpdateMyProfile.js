import React, { useState } from 'react';
import "./MyProfile.css";
import AuthService from "../../../services/auth.service";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import UserService from "../../../services/UserService";

function UpdateMyProfile() {

    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
    const [message, setMessage] = useState("");

    const [valid, setValid] = useState(false);
    const [values, setValues] = useState({
        currentUsername: currentUser.username,
        newFirstName: currentUser.firstName,
        newLastName: currentUser.lastName,
        newEmail: currentUser.email,
        newUsername: currentUser.username
    });

    const handleFirstNameInputChange = (event) => {
        const newValue = event.target.value;
        setValues({ ...values, newFirstName: newValue })
    }

    const handleLastNameInputChange = (event) => {
        const newValue = event.target.value;
        setValues({ ...values, newLastName: newValue })
    }

    const handleEmailInputChange = (event) => {
        const newValue = event.target.value;
        setValues({ ...values, newEmail: newValue })
    }

    const handleUsernameInputChange = (event) => {
        const newValue = event.target.value;
        setValues({ ...values, newUsername: newValue })
    }

    const triggerUpdate = (event) => {
        event.preventDefault();

        if (values.newUsername && values.newEmail && values.newFirstName && values.newLastName) {
            setValid(true);
            UserService.updatePersonal(values.currentUsername, values.newUsername, values.newEmail, values.newFirstName, values.newLastName).
                then(
                    () => {
                        setMessage("Successfully updated!:)")
                    },
                    error => {
                        const resMessage =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();

                        setMessage(resMessage);
                    }
                );
        }
    }





return (
    <div className="myProfilePage">
        <div className="myProfileContainer">
            <div className="profileLeft">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Crystal_Clear_kdm_user_female.svg"
                    alt="user" width="100"></img>
                <h4>{currentUser.firstName} {currentUser.lastName}</h4>
                <p>User</p>
            </div>
            <div className="profileRight">
                <div className="profileInfo">
                    <h3>Update Information</h3>
                    <div className="info_data">
                        <div className="data">
                            <TextField value={values.newFirstName} onChange={handleFirstNameInputChange} id="filled-basic" variant="filled" />
                        </div>
                        <div className="data">
                            <TextField value={values.newLastName} onChange={handleLastNameInputChange} id="filled-basic" variant="filled" />
                        </div>

                    </div>
                </div>

                <div className="projects">
                    <h3>Info</h3>
                    <div className="projects_data">
                        <div className="data">
                            <TextField value={values.newUsername} onChange={handleUsernameInputChange} id="filled-basic" variant="filled" />
                        </div>
                        <div className="data">
                            <TextField value={values.newEmail} onChange={handleEmailInputChange} id="filled-basic"  variant="filled" />
                        </div>
                    </div>
                </div>

                <div className="social_media">
                    <ul>
                        <Button onClick={triggerUpdate} variant="contained" href="/myProfile/update" color="success" className="profileButton">
                            Save Changes
                        </Button>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
}

export default UpdateMyProfile
