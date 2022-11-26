import React, { useState } from "react";
import "../styles/login.css";

function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false); 

    // user login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        }
    ];

    const errors = {
        username: "invalid username",
        password: "invalid password"
    };

    const handleSubmit = (event) => {
        // prevent page reload
        event.preventDefault();
        var { username, password } = document.forms[0];

        // find user login info
        const userData = database.findIndex((user) => user.username === username.vaule);

        // compare user info
        if (userData) {
            if (userData.password !== password.value) {
              // Invalid password
              setErrorMessages({ name: "password", message: errors.pass });
            } else {
              setIsSubmitted(true);
            }
          } else {
            // Username not found
            setErrorMessages({ name: "username", message: errors.uname });
          }
        
        }

        const renderErrorMessage = (name) =>
        name === errorMessages.name && (
          <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="label">
              <label>Username </label>
              <input type="text" className="input" required />
              {renderErrorMessage("username")}
            </div>
            <div className="label">
              <label>Password </label>
              <input type="password" className="input" required />
              {renderErrorMessage("password")}
            </div>
            <div className="btn">
              <input type="submit" />
            </div>
          </form>
        </div>
      );
    
      return (
        <div className="app">
          <div className="login-form">
            <div className="title">Login</div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          </div>
        </div>
      );
}

export default Login;