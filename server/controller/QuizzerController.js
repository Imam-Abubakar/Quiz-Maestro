const Joi = require("joi");

const Quizzer = require("../model/Quizzer");

const QuizzerController = {
  createQuizzer: async (req, res, next) => {
    // console.log("From Quizzer", req.body);
    const { _id, name, email } = req.body;
    const quizzerSchema = Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    });

    try {

      // create Quizzer
      const quizzer = new Quizzer({
        _id: _id,
        name: name,
        email: email,
      });
      const savedQuizzer = await quizzer.save();
      return res.status(200).send(savedQuizzer);
    } catch (err) {
      console.log("Error", err);
      return res.status(400).send("Does not exist.");
    }
  },

  get: async (req, res, next) => {
    try {
      const quizzer = await Quizzer.findOne({ _id: req.params.id });
      if (quizzer) {
        const {
          _id,
          name,
          email,
          quizCurated,
          quizAttended,
          quizFlawless,
        } = quizzer;

        return res.status(200).send({
          _id,
          name,
          email,
          quizCurated,
          quizAttended,
          quizFlawless,
        });
      }
      return res.status(400).send("Invalid data given.");
    } catch (err) {
      console.log("Error", err);
      return res.status(400).send("Invalid data given.");
    }
  },

  findAll: async (req, res, next) => {
    try {
      const quizzers = await Quizzer.find();
      return res.status(200).send(quizzers);
    } catch (err) {
      console.log("Error", err);
      return res.status(400).send("DB Query failed.");
    }
  },

  incrementCuratedCount: async (user_id) => {
    try {
      const quzzier = await Quizzer.findByIdAndUpdate(user_id, {
        $inc: { quizCurated: 1 },
      });
      return quzzier;
    } catch (err) {
      console.log("Error", err);
      return false;
    }
  },
  
  incrementParticipationCount: async (user_id, flawless) => {
    try {
      const quizzer = await Quizzer.findById(user_id);

      quizzer.quizAttended++;
      quizzer.quizFlawless += flawless; // + 0 or 1

      const updatedQuizzer = await Quizzer.findByIdAndUpdate(user_id, quizzer);

      return updatedQuizzer;
    } catch (err) {
      console.log("Error", err);
      return false;
    }
  },
};
module.exports = QuizzerController;
