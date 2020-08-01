const sendEmail = require("../../utils/email");

module.exports = (agenda) => {
  agenda.define("Email Scheduling", async (job, done) => {
    const data = job.attrs.data;
    const email = data.email;
    const message = data.message;
    await sendEmail({
      email,
      subject: "An Email by Scheduled Emails",
      message,
    });
    done();
  });
};
