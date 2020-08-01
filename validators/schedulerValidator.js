const {
  body,
  validationResult,
  query,
  checkSchema,
  param,
} = require("express-validator");

const creatSimpleScheduleValidations = () => {
  return [
    body("email", "valid email is required").notEmpty().isEmail(),
    body("scheduleTime", "scheduleTime is required").notEmpty(),
    body("message", "message is required").notEmpty(),
  ];
};

const creatScheduleForUserValidations = () => {
  return [
    body("userId", "userId is required").notEmpty(),
    body("scheduleTime", "scheduleTime is required").notEmpty(),
    body("message", "message is required").notEmpty(),
  ];
};

const updateScheduleValidations = () => {
  return [
    param("jobId", "jobId is required").notEmpty(),
    body("scheduleTime", "scheduleTime is required").notEmpty(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).send({
    status: false,
    errors: extractedErrors,
  });
};

module.exports = {
  creatScheduleForUserValidations,
  creatSimpleScheduleValidations,
  updateScheduleValidations,
  validate,
};
