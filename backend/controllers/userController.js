const mongoose = require("mongoose");
const User = require("../models/userModel");
//login use

const loginUser = async (req, res) => {
  res.json({ msg: "login user" });
};

//signup user

const signupUser = async (req, res) => {
  res.json({ msg: "signup user" });
};

module.exports = { loginUser, signupUser };
