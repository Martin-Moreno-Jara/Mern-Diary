const mongoose = require("mongoose");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_STRING, { expiresIn: "3d" });
};
//login use

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await User.login(email, password);
    const token = createToken(login._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCreated = await User.signup(email, password);
    const token = createToken(userCreated._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
