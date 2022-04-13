import React, { useState } from 'react'
import '../../css/SignIn.css'
import InputSignIn from './InputSignIn';
import UserService from "../../../services/UserService";

function ResetPasswordLogin() {

    const [email, setEmail] = useState("");

    const handleEmailInputChange = (event) => {
        const newValue = event.target.value;
        setEmail(newValue);
    }

    const resetPassword = () => {
        UserService.resetPasswordWithEmail(email);
    }

    return (
        <div className="sign-in-container">
            <div class="form-container">
                <h2>Reset Password</h2>
                <form class="register-form" onSubmit={resetPassword}>
                    <InputSignIn
                        id="email"
                        class="form-field"
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        onChange={handleEmailInputChange}
                    />
                    <button className='buttonSign' type="submit">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ResetPasswordLogin
