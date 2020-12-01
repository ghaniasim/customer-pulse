import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

import Feedbacks from "./dbFeedbacks.js";

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:BwE7UjGu7F36Efq@cluster0.6f0ye.mongodb.net/feedbackdb?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API endpoints
app.get("/", (req, res) => res.status(200).send("Hello Feedback Backend!"));

// Find all feedbacks
app.get("/feedbacks", (req, res) => {
  Feedbacks.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Find surveys by teacher name
app.get("/feedbacks/:teacherName", (req, res) => {
  Feedbacks.find({ teacherName: req.params.teacherName }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//fetch by survey object id
app.get("/feedbacks/id/:surveyId", (req, res) => {
  Feedbacks.findById(req.params.surveyId, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Post a survey
app.post("/feedbacks/survey", (req, res) => {
  const dbSurvey = req.body;

  Feedbacks.create(dbSurvey, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Submit answers by student
app.patch("/feedbacks/questions/:id", (req, res) => {
  Feedbacks.updateOne(
    { "questions._id": req.params.id },
    {
      $push: { "questions.$.answers": req.body },
    },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    }
  );
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
