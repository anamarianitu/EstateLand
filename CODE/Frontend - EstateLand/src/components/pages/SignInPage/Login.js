import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../css/SignIn.css'
import InputSignIn from './InputSignIn';
import AuthService from "../../../services/auth.service";

function Login() {
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

      AuthService.login(values.username, values.password).then(
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
    <div>

      <div className="sign-in-container">
        <div class="form-container">
          <h2>Login</h2>
          <form class="register-form" onSubmit={handleSubmit}>
            {/* success message */}
            {submitted && valid ? <div class="success-message">{message}</div> : null}

            <InputSignIn
              id="username"
              class="form-field"
              type="text"
              placeholder="Username"
              name="username"
              value={values.username}
              onChange={handleUsernameInputChange}
            />
            {/* username error message */}
            {submitted && !values.username ? <span id="email-error">Please enter your username</span> : null}

            <InputSignIn
              id="password"
              class="form-field"
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handlePasswordInputChange}
            />
            {/* password error message */}
            {submitted && !values.password ? <span id="password-error">Please enter a password</span> : null}


            <label>Don't have an account?</label>
            <Link className='linkSign'
              to='/signin'
            >
              Click here to Sign Up
            </Link>

            <button className='buttonSign' type="submit">
              Login
            </button>
            <Link className='linkSign'
              to='/login/reset'
            >
              Click here reset your password
            </Link>
          </form>
        </div>
      </div>
    </div>

  );
}


export default Login

