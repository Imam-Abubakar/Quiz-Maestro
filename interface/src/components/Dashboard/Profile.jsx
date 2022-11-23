import React from "react";
import CountBox from "./CountBox";

const Profile = (props) => {
  return (
    <React.Fragment>
      <div className={props.classes}>
        <div className="profile-name">{props.props.name}</div>
        <div className="profile-email">{props.props.email}</div>
        <div className="row mt-4">
          <div className="col-sm-4">
            <CountBox title="Quizzes Created" number={props.props.quizCurated} />
          </div>
          <div className="col-sm-4">
            <CountBox title="Quizzes Filled" number={props.props.quizAttended} />
          </div>
          <div className="col-sm-4">
            <CountBox title="Quiz Submissions (w/ 100% score)" number={props.props.quizFlawless} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
