const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveySchema = new mongoose.Schema({
  date: {
    type: String,
    required: false
  },
  coordinator: {
    type: String,
    required: false
  },
  student: {
    type: String,
    required: false
  },
  host: {
    type: String,
    required: false
  },
  engname: {
    type: String,
    required: false
  },
  q1: {
    type: String,
    required: false
  },
  q1a: {
    type: String,
    required: false
  },
  q2: {
    type: String,
    required: false
  },
  q3: {
    type: String,
    required: false
  },
  q4: {
    type: String,
    required: false
  },
  q4a: {
    type: String,
    required: false
  },
  q4b: {
    type: String,
    required: false
  },
  q5: {
    type: String,
    required: false
  },
  q5a: {
    type: String,
    required: false
  },
  q6: {
    type: String,
    required: false
  },
  q6a: {
    type: String,
    required: false
  },
  q6b: {
    type: String,
    required: false
  },
  q7: {
    type: String,
    required: false
  },
  q7a: {
    type: String,
    required: false
  },
  q7b: {
    type: String,
    required: false
  },
  q8: {
    type: String,
    required: false
  }
});

module.exports = Survey = mongoose.model("survey", SurveySchema);
