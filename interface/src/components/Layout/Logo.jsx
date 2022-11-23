import React from "react";
import quizmaestroLogo from "../../assets/logo-nav.png";

const Logo = () => {
  return (
    <React.Fragment>
       <img
        src={quizmaestroLogo}
        alt="quizmaestro Logo"
      />
      <span
        style={{
          fontFamily: `'Lexend Deca', sans-serif`,
          fontSize: "24px",
          color: "#000000",
          display: "inline-block",
          verticalAlign: "middle",
          paddingLeft: "8px",
        }}
      >
        Quiz Maestro
      </span>
    </React.Fragment>
  );
};

export default Logo;
