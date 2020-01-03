const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("./authModel");

// Register New User
router.post("/register", async (req, res) => {
  const user = req.body;
  try {
    await User.addUser(user);
    res.status(201).json({ user: user, message: "Added User" });
  } catch (error) {
    res.status(500).json({ message: "User Could Not Be Added", error: error });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findUserBy({ username });

    if (user && password === user.password) {
      const token = genToken(user);
      res.status(200).json({
        message: "Login Successful",
        token
      });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: error, message: "Login Failed" });
  }
});

const genToken = user => {
  const payload = {
    subject: "user",
    user: user
  };

  const secret = process.env.JWT_SECRET;

  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secret, options);
};

module.exports = router;
