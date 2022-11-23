import React, { useState } from "react";
import NavBar from "../Layout/NavBar";
import { Link, Redirect } from "react-router-dom";
import AuthService from "../../service/AuthService";
import QuizzerService from "../../service/QuizzerService";
import AuthError from "../Layout/AuthError";
import Footer from "../Layout/Footer";

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const user = { email, password }
    console.log(user)
    AuthService.login(user).then((response) => {
      if (response === false) {
        setError(true);
      } else {
        sessionStorage.setItem("quizmaestro-authToken", response.authToken);
        sessionStorage.setItem("quizmaestro-user-id", response._id);

        // get Quizzer profile
        QuizzerService.getQuizzer(response._id, response.authToken).then(
          (response) => {
            if (response === false) {
              setError(true);
            } else {
              props.onLogin(response);
              props.history.push("/dashboard");
            }
          }
        );
      }
    });
  };

  if (props.checkLogin()) {
    return <Redirect to={{ pathname: "/dashboard" }} />;
  }
  
  return (
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
                <span className="back-to-home">Back to Home</span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 offset-sm-4">
              <div className="auth-title mt-1">Login</div>
            </div>
          </div>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <div className="row mt-4">
                <div className="col-sm-4 offset-sm-4">
                  <label className="input-label" htmlFor="inputEmail">
                    Email Address
                  </label>
                  <input
                    required="required"
                    type="text"
                    className="form-control input-field"
                    aria-describedby="emailInput"
                    placeholder="someone@example.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
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
                <AuthError text="Invalid credentials given!" />
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
                  >
                    Login
                  </button>
                </div>
                <div className="col-sm-2">
                  <Link to="/registration">
                    <div className="back-to-home mt-2">
                      New to Quiz Maestro? Register
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </React.Fragment>
  )
}

export default Login



