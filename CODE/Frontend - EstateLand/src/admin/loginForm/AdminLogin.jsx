import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import authService from '../../services/auth.service';
import "./AdminLogin.css"

function AdminLogin() {

    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleUsernameInputChange = (event) => {
        const newValue = event.target.value;
        setValues({ ...values, username: newValue })
    }

    const handlePasswordInputChange = (event) => {
        const newValue = event.target.value;
        setValues({ ...values, password: newValue })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (values.username && values.password) {
            setValid(true);

            authService.loginAdmin(values.username, values.password).then(
                () => {
                    window.location.reload(false);
                    setMessage("Logged in successfully!");
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
        setSubmitted(true);
    }


    return (
        <div className='adminLoginContainer'>
            <form className="login-form" action="./" method="POST">
                <div className="login-form__content">
                    <div className="login-form__header">Login to your account</div>
                    <input className="login-form__input" type="text" name="dc_username" placeholder="Username" value={values.username} onChange={handleUsernameInputChange}></input>
                    <input className="login-form__input" type="password" name="dc_username" placeholder="Password" value={values.password} onChange={handlePasswordInputChange}></input>
                    <button className="login-form__button" type="submit" onClick={handleSubmit}>Login</button>
                    <div className="login-form__links">
                        <Link className="login-form__link"
                            to='/login/reset'
                        >
                            Forgot your password?
                        </Link>
                    </div>
                    {message}
                </div>
            </form>
        </div>
    )
}

export default AdminLogin
