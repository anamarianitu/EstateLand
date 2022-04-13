import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import '../../css/SignIn.css'
import InputSignIn from './InputSignIn';

const baseURL = "http://localhost:8080/user/register";

function SignIn() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    const newValue = event.target.value;
    setValues({ ...values, firstName: newValue })
  }

  const handleLastNameInputChange = (event) => {
    const newValue = event.target.value;
    setValues({ ...values, lastName: newValue })
  }

  const handleEmailInputChange = (event) => {
    const newValue = event.target.value;
    setValues({ ...values, email: newValue })
  }

  const handleUsernameInputChange = (event) => {
    const newValue = event.target.value;
    setValues({ ...values, username: newValue })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.username && values.email.includes('@')) {
      setValid(true);
    }
    setSubmitted(true);
    console.log(values);

    axios({
      method: 'post',
      url: baseURL,
      headers: {},
      data: {
        // This is the body part
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        email: values.email
      }
    })
      .then(res => {
        console.log(res.data);
      })
  }

  return (
    <div className="sign-in-container">
      <div class="form-container">
        <h2>Sign Up</h2>
        <form class="register-form" onSubmit={handleSubmit}>
          {/* success message */}
          {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}

          <InputSignIn
            id="first-name"
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleFirstNameInputChange}
          />
          {/* first name error message */}
          {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}

          <InputSignIn
            id="last-name"
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleLastNameInputChange}
          />
          {/* last name error message */}
          {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}

          <InputSignIn
            id="email"
            class="form-field"
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleEmailInputChange}
          />
          {/* email error message */}
          {(submitted && !values.email) || (submitted && !values.email.includes('@')) ? <span id="email-error">Please enter an email address</span> : null}

          <InputSignIn
            id="username"
            class="form-field"
            type="text"
            placeholder="Username"
            name="username"
            value={values.username}
            onChange={handleUsernameInputChange}
          />
          {/* password error message */}
          {submitted && !values.username ? <span id="password-error">Please enter an username!</span> : null}

          <label>Already have an account?</label>
          <Link className='linkSign'
            to='/login'
          >
            Click here to Login
          </Link>
          <button className='buttonSign' type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn
