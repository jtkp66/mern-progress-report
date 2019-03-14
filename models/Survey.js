const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  Surveypw: {
    type: String,
    required: true
  },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  date: {
    type: Date,
    default: Date.now
  }
});

const Survey = mongoose.model("Survey", SurveySchema);

module.exports = Survey;
