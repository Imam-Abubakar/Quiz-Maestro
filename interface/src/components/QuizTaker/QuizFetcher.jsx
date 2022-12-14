import React, { Component } from "react";
import NavBar from "../Layout/NavBar";
import { Link, Redirect } from "react-router-dom";
import Emoji from "../Layout/Emoji";
import QuizService from "../../service/QuizService";
import QuizHeader from "./QuizHeader";
import ToolTip from "../Dashboard/ToolTip";

class QuizFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizCode: "",
      quiz: null,
      error: false,
    };
  }

  handleQuizCodeInput = (e) => {
    this.setState({ quizCode: e.target.value, error: false });
  };

  handleFindQuiz = () => {
    if (this.state.quizCode.length === 0) {
      this.setState({ error: true });
      return;
    }
    QuizService.findById(this.state.quizCode).then((response) => {
      if (response === false) {
        this.setState({ error: true });
      } else {
        this.setState({ quiz: response });
        this.props.onQuizFetch(response);
      }
    });
  };

  render() {
    if (!this.props.checkLogin()) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <React.Fragment>
        <NavBar
          isLoggedIn={this.props.isLoggedIn}
          checkLogin={this.props.checkLogin}
          onLogout={this.props.onLogout}
        />
        <div className="container-fluid">
          <div className="row mt-5">
            <div
              className="curated-dashboard-section section"
              style={{
                textAlign: "center",
              }}
            >
              <div className="profile-name">Enter Quiz ID</div>
              <div className="profile-email pb-3">
                Simply paste your given quiz ID to get started
              </div>
              <input
                className="quiz-code-input"
                type="text"
                spellCheck="false"
                value={this.state.quizCode}
                onChange={this.handleQuizCodeInput}
              />
              <button className="tool-button" onClick={this.handleFindQuiz}>
                Find Quiz
              </button>
              {this.state.error && (
                <div className="profile-email pb-3" style={{}}>
                  Quiz Not Found
                </div>
              )}
              {!this.state.error && this.state.quiz && (
                <>
                  <QuizHeader
                    title={this.state.quiz.title}
                    description={this.state.quiz.description}
                  />
                  <div className="tooltip-wrapper">
                    <Link to="/quiz-taker">
                      <button className="tool-button">
                         Proceed To Quiz
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default QuizFetcher;
