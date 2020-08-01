const express = require("express");
const userRoutes = require("./userRouter");
const scheduleRoutes = require("./scheduleRouter");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/schedule", scheduleRoutes);

module.exports = router;
