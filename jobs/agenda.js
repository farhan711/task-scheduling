let agenda = require("../configs/agenda");

// list the different jobs availale throughout your app
// if you are adding the job types dynamically and saving them in the database you will get it here
let jobTypes = ["emailSchedule"];

// loop through the job_list folder and pass in the agenda instance
jobTypes.forEach((type) => {
  // the type name should match the file name in the jobs_list folder
  require("./jobs_list/" + type)(agenda);
});

if (jobTypes.length) {
  // if there are jobs in the jobsTypes array set up
  agenda.on("ready", async () => await agenda.start());
}

let graceful = () => {
  agenda.stop(() => process.exit(0));
};

process.on("SIGTERM", graceful);
process.on("SIGINT", graceful);

module.exports = agenda;
