import React from "react";

const ToolTip = (props) => {
  return (
    <div className="tool-tip">
      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
        }}
      > {props.title}
      </p>
      <p
        style={{
          fontSize: "16px",
        }}
      >
        {props.description}
      </p>
    </div>
  );
};

export default ToolTip;
