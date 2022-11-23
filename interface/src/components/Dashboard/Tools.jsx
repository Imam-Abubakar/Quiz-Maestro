import React from "react";
import Emoji from "../Layout/Emoji";
import ToolTip from "./ToolTip";
import { Link } from "react-router-dom";

const Tools = (props) => {
  console.log(props.classes)
  return (
    <div className={props.classes}>
      <div className="profile-name">{props.title}</div>
      <div className="profile-email">{props.subtitle}</div>
      <div className="row mt-4">
        <div className="card col-sm-3 col-md-6 col-xl">
          <div className="tooltip-wrapper">
            <Link to="/quiz-builder">
              <button className="tool-button">
                Create Quiz
              </button>
            </Link>
            <ToolTip
              title="Quiz Creation Tool"
              description="You can create your basic quiz with this tool"
            />
          </div>
        </div>
        <div className="card col-sm-3 col-md-6 col-xl">
          <div className="tooltip-wrapper">
            <Link to="/quiz-fetcher">
              <button className="tool-button">
                Answer Quiz
              </button>
            </Link>
            <ToolTip
              title="Quiz Answering Tool"
              description="You can answer quizzes with this tool"
            />
          </div>
        </div>
        <div className="card col-sm-3 col-md-6 col-xl">
          <div className="tooltip-wrapper">
            <button disabled="disabled" className="tool-button grayed">
              Multi-Type Quiz
            </button>
            <ToolTip
              title="In Development"
              description=""
            />
          </div>
        </div>
        <div className="card col-sm-3 col-md-6 col-xl">
          <div className="tooltip-wrapper">
            <button disabled="disabled" className="tool-button grayed">
              Exam-Type Quiz
            </button>
            <ToolTip
              title="In Development"
              description=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
