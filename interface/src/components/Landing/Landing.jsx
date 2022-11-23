import React from "react";
import DemoButton from "./DemoButton";
import Icon from "../Layout/Icon";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer"

const Landing = (props) => {
  return (
    <React.Fragment>
      <NavBar
        isLoggedIn={props.isLoggedIn}
        checkLogin={props.checkLogin}
        onLogout={props.onLogout}
      />
      <div className="container-fluid bg">
        <div className="" style={{ textAlign: "center", marginTop: "10vh" }}>
          <Icon size="240px" />
        </div>
        <div className="jumbo">Minimalistic Quiz Creation Platform</div>
        <div className=" jumbo-subtitle">
          Create simple quizzes on the fly, receive answers and analyze results, 
          <br />
          all in Quiz Maestro.
        </div>
        <div className="mt-5" style={{ textAlign: "center" }}>
          <DemoButton />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
