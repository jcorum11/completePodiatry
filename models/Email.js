const { Schema, model } = require("mongoose");

const EmailSchema = new Schema({
  subject: { type: String },
  message: { type: String },
  userId: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Email = model("Email", EmailSchema);

module.exports = Email;
