const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");

//Survey model
const Survey = require("../../models/Survey");
const User = require("../../models/User");

// @route GET api/surveys
// @desc Get ALL surveys
// @access Public
router.get("/", auth, (req, res) => {
  Survey.find({ user: req.user.id })
    .sort({ date: -1 })
    .then(surveys => res.json(surveys));
});

router.get("/all", auth, async (req, res) => {
  try {
    const surveys = await Survey.find().sort({ date: -1 });
    res.json(surveys);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/surveys
// @desc create a Survey
// @access Public
router.post("/", auth, (req, res) => {
  const newSurvey = new Survey({
    date: req.body.date,
    coordinator: req.body.coordinator,
    student: req.body.student,
    hostfamily: req.body.host,
    englishname: req.body.engname,
    question1: req.body.question1,
    question2: req.body.question2,
    question3: req.body.question3,
    user: req.user.id
  });

  newSurvey.save().then(survey => res.json(survey));
});

router.get("/me", auth, async (req, res) => {
  const surveys = await Survey.find({ user: req.user.id });

  res.json(surveys);
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
router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const survey = await Survey.findById({ _id: req.params.id });

    await survey.remove();

    res.json({ msg: "survey removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "survey not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route PUT api/surveys/:id
// @desc Update a Survey
// @access Private
router.patch("/:id", auth, function(req, res, next) {
  Survey.findOneAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Survey.findById({ _id: req.params.id }).then(function(survey) {
      res.send(survey);
    });
  });
});

module.exports = router;
