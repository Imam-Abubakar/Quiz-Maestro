import axios from "axios";

const AuthService = {
  register: async (request) => {
    return await axios
      .post("https://quiz-maestro-server.vercel.app/auth/registration", request)
      .then((response) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  },
  login: async (request) => {
    return await axios
      .post("https://quiz-maestro-server.vercel.app/auth/login", request)
      .then((response) => {
        const authToken = response.headers["auth-token"];
        sessionStorage.setItem("quizmaestro-token", authToken);
        return { ...response.data, authToken };
      })
      .catch((err) => {
        console.log("Error", err);
        return false;
      });
  },
  logout: (request) => {
    sessionStorage.clear();
  },
};

export default AuthService;
