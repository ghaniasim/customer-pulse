import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
  teacherName: String,
  surveyName: String,
  questions: [
    {
      questionNumber: String,
      questionType: String,
      questionText: String,
      answers: [{ studentName: String, answer: String }],
    },
  ],
});

export default mongoose.model("feedbacks", feedbackSchema);
