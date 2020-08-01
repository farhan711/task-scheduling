const mongoose = require("mongoose");
const validator = require("validator");

const jobSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Name is required"],
  },
});

const Job = mongoose.model("Job", jobSchema, "jobs");

module.exports = Job;
