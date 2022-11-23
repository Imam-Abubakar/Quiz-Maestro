import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../Layout/NavBar";
import Profile from "./Profile";
import Tools from "./Tools";
import CuratedQuizList from "./CuratedQuizList";
import QuizService from "../../service/QuizService";
import QuizzerService from "../../service/QuizzerService";
import Footer from "../Layout/Footer"

const Dashboard = (props) => {
  const [user, setUser] = useState({ user: props.user });

  const getQuizzes = () => {
    const user_id = sessionStorage.getItem("quizmaestro-user-id");
    QuizService.findByUser(user_id).then((response) => {
      if (response === false) {
        console.log("none")
      } else {
        props.onQuizLoad(response);
      }
    });
  };

  useEffect((props) => {
    const authToken = sessionStorage.getItem("quizmaestro-authToken");
    const user_id = sessionStorage.getItem("quizmaestro-user-id");

    QuizzerService.getQuizzer(user_id, authToken).then((response) => {
      if (response === false) {
      } else {
        setUser({ user: response });
        console.log(response)
        props.onUserUpdate(response);
      }
    });

    getQuizzes();

    
  }, []);

 
 

  return (
    <>
      {!props.checkLogin() ? (
        <Redirect to={{ pathname: "/login" }} />
      ) : (
        <React.Fragment>
          <NavBar
            isLoggedIn={props.isLoggedIn}
            checkLogin={props.checkLogin}
            onLogout={props.onLogout}
          />
          <div className="container-fluid">
            <div className="row mt-5">
              <Profile
                classes="curated-dashboard-section section"
                props={user.user}
              />
            </div>
            <div className="row mt-5">
              {/* Tools section  */}
              <Tools
                classes="curated-dashboard-section section tools"
                title="Maestro Tools"
                subtitle="Some tools are currently in development"
              />
              {/* Tools section  end*/}
            </div>
            <div
              className="row mt-5 mb-5"
              // very important code
              // to (roughly) algin this with upper sections
            >
              <CuratedQuizList
                // use this class only if you're desperate: curated-quiz-section
                classes="curated-quiz-section section"
                quizzes={props.quizzes}
              />

              {/* Tools section  end*/}
            </div>
          </div>
          <Footer />
        </React.Fragment>
      )}
    </>
  );
};

export default Dashboard;
