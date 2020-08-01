const Job = require("../models/job");
const User = require("../models/user");
const agenda = require("../jobs/agenda");

exports.createScheduleForUser = async (req, res) => {
  try {
    const { userId, message, scheduleTime } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        status: "False",
        message: "user not found against this id",
      });
    }

    agenda.schedule(scheduleTime, "Email Scheduling", {
      email: user.email,
      message: message,
    });
    res.status(201).json({
      status: "Success",
      message: "Schedule added successfully",
    });
  } catch (error) {
    res.status(400).json({ status: "False", message: error.message });
  }
};

exports.createSimpleSchedule = async (req, res) => {
  try {
    const { email, scheduleTime, message } = req.body;
    console.log(`==================${scheduleTime}========================`);

    const scheduleAgenda = agenda.create("Email Scheduling", {
      email: email,
      message: message,
    });
    scheduleAgenda.repeatEvery(scheduleTime).save();
    agenda.every(scheduleTime, "Email Scheduling", {
      email: email,
      message: message,
    });
    res.status(201).json({
      status: "Success",
      message: "Schedule added successfully",
    });
  } catch (error) {
    res.status(400).json({ status: "False", message: error.message });
  }
};


exports.updateSchedule = async (req, res) => {
  try {
    const { scheduleTime, jobId } = req.body;
    const updatedJob = await Job.findByIdAndUpdate(jobId, {
      nextRunAt: scheduleTime,
    });
    if (!updatedJob) {
      return res.status(404).json({
        status: "False",
        message: "Job not found against this id",
      });
    }
    res.status(201).json({
      status: "Success",
      message: "Schedule added successfully",
    });
  } catch (error) {
    res.status(400).json({ status: "False", message: error.message });
  }
};

exports.getAllSchedules = async (req, res) => {
  try {
    let jobs = await Job.find();
    res.status(200).json({
      status: "Success",
      message: "Here are your scheduled jobs",
      jobs,
    });
  } catch (error) {
    res.status(400).json({ status: "False", message: error.message });
  }
};

exports.deleteSchedule = async (req, res) => {
  try {
    const result = await Job.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({
        status: "False",
        message: "Schedule not found against this id",
      });
    }
    return res.status(200).json({
      status: "Success",
      message: "Schedule deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ status: "False", message: error.message });
  }
};
