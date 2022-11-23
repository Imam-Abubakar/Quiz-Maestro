import axios from "axios";

const QuizService = {
  submit: async (request) => {
    const user_id = sessionStorage.getItem("quizmaestro-user-id");
    const authToken = sessionStorage.getItem("quizmaestro-authToken");
    return await axios
      .post("https://quiz-maestro-server.vercel.app//quizzes/create/" + user_id, request, {
        headers: {
          "auth-token": authToken,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return false;
      });
  },
  findByUser: async (user_id) => {
    const authToken = sessionStorage.getItem("quizmaestro-authToken");
    return await axios
      .get("https://quiz-maestro-server.vercel.app//quizzes/quizzer/" + user_id, {
        headers: {
          "auth-token": authToken,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return false;
      });
  },
  findById: async (quiz_id) => {
    const authToken = sessionStorage.getItem("quizmaestro-authToken");
    return await axios
      .get("https://quiz-maestro-server.vercel.app//quizzes/" + quiz_id, {
        headers: {
          "auth-token": authToken,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return false;
      });
  },
  submitAnswer: async (request) => {
    const user_id = sessionStorage.getItem("quizmaestro-user-id");
    const authToken = sessionStorage.getItem("quizmaestro-authToken");
    const uri = "https://quiz-maestro-server.vercel.app//quizzes/submit/" + user_id;
    return await axios
      .post(uri, request, {
        headers: {
          "auth-token": authToken,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return false;
      });
  },
};

export default QuizService;
