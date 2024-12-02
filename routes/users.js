var express = require("express");
const { check, validationResult } = require("express-validator");

var router = express.Router();

/* GET users listing. */
router.get("/signup", function (req, res, next) {
  res.render("users/signup", { title: "userSignUp" });
});

router.post("/signup", [], (req, res, next) => {
  res.send("OK");
});

router.get("/login", (req, res, next) => {
  res.render("users/login", { title: "userLogin" });
});
module.exports = router;
