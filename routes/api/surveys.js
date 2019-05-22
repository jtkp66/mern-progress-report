const express = require("express");
const router = express.Router();

//Survey model
const Survey = require("../../models/Survey");
const User = require("../../models/User");

// @route GET api/surveys
// @desc Get ALL surveys
// @access Public
router.get("/", (req, res) => {
  Survey.find()
    .sort({ date: -1 })
    .then(surveys => res.json(surveys));
});

// @route POST api/surveys
// @desc create a Survey
// @access Public
router.post("/", (req, res) => {
  const newSurvey = new Survey({
    date: req.body.date,
    coordinator: req.body.coordinator,
    student: req.body.student,
    host: req.body.host,
    engname: req.body.engname,
    q1: req.body.q1,
    q1a: req.body.q1a,
    q2: req.body.q2,
    q3: req.body.q3,
    q4: req.body.q4,
    q4a: req.body.q4a,
    q4b: req.body.q4b,
    q5: req.body.q5,
    q5a: req.body.q5a,
    q6: req.body.q6,
    q6a: req.body.q6a,
    q6b: req.body.q6b,
    q7: req.body.q7,
    q7a: req.body.q7a,
    q7b: req.body.q7b,
    q8: req.body.q8
  });

  newSurvey.save().then(survey => res.json(survey));
});

// @route GET api/posts/:id
// @descr Get Post by id
// @access Public
router.get("/:id", (req, res) => {
  Survey.findById(req.params.id)
    .then(survey => res.json(survey))
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found with that ID" })
    );
});

// @route DELETE api/surveys
// @desc Delete an survey
// @access Public
router.delete("/:id", (req, res) => {
  Survey.findById(req.params.id)
    .then(survey => survey.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});

module.exports = router;
