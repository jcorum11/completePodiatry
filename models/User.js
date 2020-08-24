const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  emails: [],
});

const User = model("User", UserSchema);

module.exports = User;
