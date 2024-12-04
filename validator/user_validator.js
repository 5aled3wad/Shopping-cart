const { body } = require("express-validator");

// custom() use to compare between two values

signUp = [
  // body('email').notEmpty().trim().withMessage('please enter your email'),
  body("email").isEmail().trim().withMessage("email is not valid."),
  body("password")
    .isLength({ min: 5 })
    .withMessage("please enter password more than 5 char"),
  body("confirm-password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("password and confirm-password not matching");
    }
    return true;
  }),
];

module.exports = signUp;
