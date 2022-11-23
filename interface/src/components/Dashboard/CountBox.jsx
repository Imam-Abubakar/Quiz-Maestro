import React from "react";

const CountBox = (props) => {
  return (
    <React.Fragment>
      <div className="count-number">{props.number}</div>
      <div className="count-title">{props.title}</div>
    </React.Fragment>
  );
};

export default CountBox;
