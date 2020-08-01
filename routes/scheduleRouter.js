const express = require("express");
const router = express.Router();
const scheduleController = require("../controllers/scheduleController");
const scheduleValidator = require("../validators/schedulerValidator");

router.get("/", scheduleController.getAllSchedules);
router.delete("/:id", scheduleController.deleteSchedule);
router.post(
  "/createScheduleForUser",
  scheduleValidator.creatScheduleForUserValidations(),
  scheduleValidator.validate,
  scheduleController.createScheduleForUser
);
router.post(
  "/createSimpleSchedule",
  scheduleValidator.creatSimpleScheduleValidations(),
  scheduleValidator.validate,
  scheduleController.createSimpleSchedule
);

router.patch(
  "/:jobId",
  scheduleValidator.updateScheduleValidations(),
  scheduleValidator.validate,
  scheduleController.updateSchedule
);
module.exports = router;
