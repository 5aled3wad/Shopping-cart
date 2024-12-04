var express = require("express");
const { validationResult } = require("express-validator");
const userValidator = require("../validator/user_validator");

var router = express.Router();

/* GET users listing. */
router.get("/signup", function (req, res, next) {
  res.render("users/signup", { title: "userSignUp", errorMessage: null });
});

router.post("/signup", userValidator, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // console.log(errors);
    res.render("users/signup", {
      title: "error",
      errorMessage: errors.array()[0].msg,
    });
  }
  res.send("OK");
});

router.get("/login", (req, res, next) => {
  res.render("users/login", { title: "userLogin" });
});
module.exports = router;
