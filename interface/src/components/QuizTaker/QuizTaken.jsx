import React from "react";
import NavBar from "../Layout/NavBar";
import { Link, Redirect } from "react-router-dom";

const QuizTaken = (props) => {
  const { quiz } = props.location.state;
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
            You solved {quiz.solved} out of {quiz.total_questions}
            
          </div>
        </div>
        <div className="row pt-3">
          <div
            className="col-sm-12"
            style={{
              fontSize: "18px",
              color: "#000000",
              textAlign: "center",
            }}
          >
            You have completed the quiz
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

export default QuizTaken;
