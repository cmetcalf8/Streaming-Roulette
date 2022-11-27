import React, { useState } from "react";
import { css } from '@emotion/react';

function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false); 

    // user login info
    const database = [
        {
            email: "email1",
            password: "pass1"
        }
    ];

    const errors = {
        email: "Invalid Email",
        password: "Invalid Password"
    };

    const handleSubmit = (event) => {
        // prevent page reload
        event.preventDefault();
        var { email, password } = document.forms[0];

        // find user login info
        const userData = database.findIndex((user) => user.email === email.value);

        // compare user info
        if (userData) {
            if (userData.password !== password.value) {
              // Invalid password
              setErrorMessages({ name: "password", message: errors.password });
            } else {
              setIsSubmitted(true);
            }
          } else {
            // email not found
            setErrorMessages({ name: "email", message: errors.email });
          }
        
        }

        const renderErrorMessage = (name) =>
        name === errorMessages.name && (
          <div className="login-error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="login-label">
              <label>Email:  </label>
              <input type="text" className="login-input" required />
              {renderErrorMessage("email")}
            </div>
            <div className="login-label">
              <label>Password:  </label>
              <input type="password" className="login-input" required />
              {renderErrorMessage("password")}
            </div>
            <button onClick={handleSubmit} className="login-btn" type="submit">
		        Submit
		    </button>
          </form>
        </div>
      );
    
      return (
        <div>
          <div className="login-form">
            <div className="login-title">Login</div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          </div>
        </div>
      );
}

export default Login;