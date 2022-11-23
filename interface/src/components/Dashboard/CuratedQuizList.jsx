import React from "react";
import QuizInfo from "./QuizInfo";

const CuratedQuizList = (props) => {
  console.log(props);
  return (
    <div className={props.classes}>
      <div className="profile-name">My Quizzes</div>
      <div className="profile-email">
        Quizzes created by you. Copy and share the ID.
      </div>

      <div>
        {props.quizzes.length === 0 ? (
          <p className="count-title">No Quizzes has been created</p>
        ) : (
          <div className="quizzes-table">
             <table className="table mt-4">
            <thead className="count-title">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Created at</th>
                <th scope="col">Total Submissions</th>
                <th scope="col">Total 100% Score</th>
                <th scope="col">Quiz ID</th>
              </tr>
            </thead>
            <tbody>
              {props.quizzes.map((quiz) => (
                <QuizInfo
                  key={quiz._id}
                  title={quiz.title}
                  id={quiz._id}
                  participated={quiz.participated}
                  flawless={quiz.flawless}
                  date={quiz.date}
                />
              ))}
            </tbody>
          </table>
          </div>
         
        )}
      </div>
    </div>
  );
};

export default CuratedQuizList;
