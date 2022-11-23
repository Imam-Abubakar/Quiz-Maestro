import React from "react";
import DateFormat from "../../utils/DateFormat";

const QuizInfo = (props) => {
  return (
    <React.Fragment>
      <tr style={{}}>
        
        <td
          className="option-name"
          style={{
            fontFamily: `"Lexend Deca", sans-serif`,
            color: "dimgray",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {props.title}
        </td>
        <td
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "dimgray",
          }}
        >
          {DateFormat.getFormatedDateTime(props.date)}
        </td>
        <td
          className="option-dropdown"
          style={{ 
            fontSize: "14px",
          fontWeight: "bold",
          color: "dimgray" }}
        >
          {props.participated}
        </td>
        <td
          className="option-dropdown"
          style={{ 
            color: "dimgray", 
            fontSize: "14px",
          fontWeight: "bold",
         }}
        >
          {props.flawless}
        </td>
        <td
          style={{
            fontFamily: `"Lexend Deca", sans-serif`,
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
         
          {props.id}
        </td>
      </tr>
    </React.Fragment>
  );
};

export default QuizInfo;
