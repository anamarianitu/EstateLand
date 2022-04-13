import React, { useState } from 'react';
import "./MyProfile.css";
import AuthService from "../../../services/auth.service";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import UserService from '../../../services/UserService';

function ResetPasswordMyProfile() {
    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
    const [email, setEmail] = useState("");

    const handleEmailInputChange = (event) => {
        const newValue = event.target.value;
        setEmail(newValue);
    }

    const resetPassword = () => {
        UserService.resetPasswordWithEmail(email);
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
                        <h3>Reset Password</h3>
                        <div className="resetPassword">
                            <div className="resetPasswordData">
                                <p>Enter your email to receive the new password</p>
                                <TextField id="filled-basic" label="Your email" variant="filled" onChange={handleEmailInputChange} />
                            </div>
                        </div>
                    </div>

                    <div className="social_media">
                        <ul>
                            <Button variant="contained" href="/myProfile/update" color="success" className="profileButton" onClick={resetPassword}>
                                Reset Password
                            </Button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ResetPasswordMyProfile;
