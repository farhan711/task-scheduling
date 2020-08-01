const User = require("../models/user");

exports.addUser = async (req, res) => {
  try {
    // check if email exists
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      res
        .status(400)
        .json({ status: "False", message: "Email already exists" });
    }

    user = await User.create(req.body);
    res
      .status(201)
      .json({ status: "Success", message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ status: "False", message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(201)
      .json({ status: "Success", message: "All users are", users });
  } catch (error) {
    res.status(400).json({ status: "False", message: error.message });
  }
};
