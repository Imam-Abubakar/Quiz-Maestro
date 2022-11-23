import React from "react";
import quizmaestroLogo from "../../assets/logo.png";

const Icon = (props) => {
  return (
    <React.Fragment>
      <img
        src={quizmaestroLogo}
        className="dance"
        style={{
          width: props.size,
        }}
        alt="quizmaestro Logo"
      />
    </React.Fragment>
  );
};

export default Icon;
