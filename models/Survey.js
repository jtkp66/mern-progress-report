const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  coordinator: {
    type: String,
    required: true
  },
  student: {
    type: String,
    required: true
  },
  host: {
    type: String,
    required: true
  },
  q1: {
    type: String,
    required: true
  },
  q1a: {
    type: String,
    required: true
  },
  q2: {
    type: String,
    required: true
  },
  q3: {
    type: String,
    required: true
  },
  q4: {
    type: String,
    required: true
  },
  q4a: {
    type: String,
    required: true
  },
  q4b: {
    type: String,
    required: true
  },
  q5: {
    type: String,
    required: true
  },
  q5a: {
    type: String,
    required: true
  },
  q6: {
    type: String,
    required: true
  },
  q6a: {
    type: String,
    required: true
  },
  q6b: {
    type: String,
    required: true
  },
  q7: {
    type: String,
    required: true
  },
  q7a: {
    type: String,
    required: true
  },
  q7b: {
    type: String,
    required: true
  },
  q8: {
    type: String,
    required: true
  }
});

module.exports = Survey = mongoose.model("survey", SurveySchema);
