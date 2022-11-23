import React, { useState } from "react";
import NavBar from "../Layout/NavBar";
import { Link, Redirect } from "react-router-dom";
import AuthService from "../../service/AuthService";
import AuthError from "../Layout/AuthError";
import Footer from "../Layout/Footer";

const Registration = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password }
    AuthService.register(user).then((response) => {
      if (response === false) {
        setError(true);
      } else {
        props.history.push("/done");
      }
    });
  };

  return (
    <>
      {props.checkLogin() ? (
        <Redirect to={{ pathname: "/dashboard" }} />
      ) : (
        <React.Fragment>
          <NavBar
            isLoggedIn={props.isLoggedIn}
            checkLogin={props.checkLogin}
            onLogout={props.onLogout}
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 offset-sm-4 mt-5">
                <Link to="/">
                  <span className="back-to-home ">Back to Home</span>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8 offset-sm-4">
                <div className="auth-title mt-1">Register</div>
              </div>
            </div>
            <form onSubmit={handleRegistrationSubmit}>
              <div className="form-group">
                {/* name */}
                <div className="row mt-4">
                  <div className="col-sm-4 offset-sm-4">
                    <label className="input-label" htmlFor="inputName">
                      Name
                    </label>
                    <input
                      required="required"
                      type="text"
                      className="form-control input-field"
                      aria-describedby="emailInput"
                      placeholder="Your Name"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                </div>

                {/* email */}
                <div className="row mt-4">
                  <div className="col-sm-4 offset-sm-4">
                    <label className="input-label" htmlFor="inputEmail">
                      Email Address
                    </label>
                    <input
                      required="required"
                      type="email"
                      className="form-control input-field"
                      aria-describedby="emailInput"
                      placeholder="someone@example.com"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>

                {/* password */}
                <div className="row mt-4">
                  <div
                    className="col-sm-4 offset-sm-4"
                  >
                    <label className="input-label" htmlFor="inputPassword">
                      Password
                    </label>
                    <input
                      required="required"
                      type="password"
                      className="form-control input-field"
                      aria-describedby="passwordInput"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
                {error && (
                  <AuthError text="The email is probably taken. Try using a different email" />
                )}
                <div className="row mt-4">
                  <div className="col-sm-2 offset-sm-4">
                    <button
                      type="submit"
                      className="button register-button"
                      style={{
                        width: "100%",
                        height: "50px",
                      }}
                      onClick={handleRegistrationSubmit}
                    >
                      Register
                    </button>
                  </div>
                  <div className="col-sm-2">
                    <Link to="/login">
                      <div className="back-to-home mt-2">
                        Already a User? Login
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <Footer />
        </React.Fragment>
      )}
    </>
  );
};

export default Registration;
