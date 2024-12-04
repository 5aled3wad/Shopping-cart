const { check, body } = require("express-validator");

// custom() use to compare between two values

signUp = [
  // body('email').notEmpty().trim().withMessage('please enter your email'),
  body("email").isEmail().trim().withMessage("Invalid email."),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Please enter password more than 5 char"),
  body("confirm-password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password and confirm-password not matching");
    }
    return true;
  }),
];

login = [
  check("email").isEmail().trim().withMessage("Invalid email."),
  check("password")
    .isLength({ min: 1 })
    .withMessage("Please enter your password"),
];

module.exports = { signUp: signUp, login: login };
