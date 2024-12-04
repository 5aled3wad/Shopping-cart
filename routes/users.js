var express = require("express");
const { validationResult } = require("express-validator");
const userValidator = require("../validator/user_validator");
const UserData = require("../models/users");
const bcrypt = require("bcrypt");

var router = express.Router();

// GET SignUp
router.get("/signup", function (req, res, next) {
  res.render("users/signup", { title: "userSignUp", errorMessage: null });
});

// post SignUp
router.post("/signup", userValidator.signUp, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // console.log(errors);
    return res.render("users/signup", {
      title: "userSignUp",
      errorMessage: errors.array()[0].msg,
    });
  }
  const saltRounds = 10;
  const hashPassword = bcrypt.hashSync(req.body.password, saltRounds);

  try {
    const findEmail = await UserData.findOne({
      email: req.body.email,
    });
    if (findEmail) {
      return res.render("users/signup", {
        title: "userSignUp",
        errorMessage: "Invalid email or password",
      });
    }
    const userData = new UserData({
      email: req.body.email,
      password: hashPassword,
    });
    userData.save();
    res.render("users/login", { title: "userLogin", errorMessage: null });
  } catch (error) {
    console.log(error);
  }
});

// get Login
router.get("/login", (req, res, next) => {
  res.render("users/login", { title: "userLogin", errorMessage: null });
});

// post Login
router.post("/login", userValidator.login, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("users/login", {
      title: "userLogin",
      errorMessage: errors.array()[0].msg,
    });
  }
  const { email } = req.body;
  const findUser = await UserData.findOne({
    email: email,
  });
  if (!findUser) {
    return res.render("users/login", {
      title: "userLogin",
      errorMessage: "Invalid email or password",
    });
  }
  const matchPassword = bcrypt.compareSync(
    req.body.password,
    findUser.password
  );
  if (!matchPassword) {
    return res.render("users/login", {
      title: "userLogin",
      errorMessage: "Invalid email or password",
    });
  }
  res.render("users/profile", { title: "userProfile" });
});

module.exports = router;
