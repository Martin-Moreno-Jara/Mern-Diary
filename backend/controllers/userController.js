const mongoose = require("mongoose");
const User = require("../models/userModel");
//login use

const loginUser = async (req, res) => {
  res.json({ msg: "login user" });
};

//signup user

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCreated = await User.signup(email, password);
    res.status(200).json({ email, userCreated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
