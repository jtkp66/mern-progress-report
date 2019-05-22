const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// User Model
const User = require("../../models/User");

// @route POST api/auth
// @descr Authenticate user
// @access Public

router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Simple Validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields " });
  }

  // check for existing user
  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User Does not exist" });

    // validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            }
          });
        }
      );
    });
  });
});

// @route GET api/auth/user
// @descr Get user data
// @access Private

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;
