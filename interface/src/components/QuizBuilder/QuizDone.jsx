import React from "react";
import NavBar from "../Layout/NavBar";
import { Link } from "react-router-dom";

const QuizDone = (props) => {
  return (
    <React.Fragment>
      <NavBar
        isLoggedIn={props.isLoggedIn}
        checkLogin={props.checkLogin}
        onLogout={props.onLogout}
      />
      <div className="container fluid">
        <div className="row">
          <div
            className="col-sm-12"
            style={{
              fontFamily: `'Lexend Deca', sans-serif`,
              fontSize: "36px",
              color: "var(--quizmaestro-btn-bg)",
              marginTop: "10vh",
              textAlign: "center",
            }}
          >
            Quiz Created Succesfully{" "}
            
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm-12"
            style={{
              fontSize: "18px",
              color: "#000000",
              textAlign: "center",
            }}
          >
            Copy the Quiz ID and share.
          </div>
        </div>
        <div className="row mt-5">
          <div
            className="col-sm-12"
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: `'Lexend Deca', sans-serif`,
                fontSize: "22px",
                color: "var(--quizmaestro-btn-bg)",
                padding: "1.4em",
                border: "2px solid var(--quizmaestro-btn-bg)",
                margin: "auto",
                width: "fit-content",
                backgroundColor: "var(--quizmaestro-light)",
              }}
            >
              {props.location.state.quiz_id}
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm-12 mt-5"
            style={{
              textAlign: "center",
            }}
          >
            <Link to="/dashboard">
              <span className="back-to-home ">
                Go to Dashboard
              </span>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuizDone;
