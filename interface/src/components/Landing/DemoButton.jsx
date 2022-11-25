import React from "react";
import { Link } from "react-router-dom";

const DemoButton = () => {
  return (
    <React.Fragment>
      <Link to="/login">
      <button
        className="button demo-button mb-5"
        style={{
          fill: "blue",
        }}
      >
        Get Started
      </button>
      </Link>
    </React.Fragment>
  );
};

export default DemoButton;
