const { Email } = require("../models");
const { db } = require("../models/User");

const emailController = {
  // get all emails
  getAllEmails(req, res) {
    Email.find({})
      .then((dbEmailData) => res.json(dbEmailData))
      .catch((err) => res.status(500).json(err));
  },

  // get one email by id
  getEmailById({ params }, res) {
    Email.findOne({ _id: params.id })
      .then((dbEmailData) => {
        // if no email is found
        if (!dbEmailData) {
          res.status(404).json({ message: "No pizza found with this id!" });
          return;
        }
        res.json(dbEmailData);
      })
      .catch((err) => res.status(500).json(err));
  },

  //create an email
  createEmail({ body }, res) {
    Email.create(body)
      .then((dbEmailData) => res.json(dbEmailData))
      .catch((err) => res.status(400).json(err));
  },

  //update one pizza by id
  updateEmail({ params, body }, res) {
    Email.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbEmailData) => {
        if (!dbEmailData) {
          res.status(404).json({ message: "No pizza found with this id!" });
          return;
        }
        res.json(dbEmailData);
      })
      .catch((err) => res.status(404).json(err));
  },

  // delete one pizza by id
  deleteEmail({ params }, res) {
    Email.findOneAndDelete({ _id: params.id })
      .then((dbEmailData) => {
        if (!dbPizzaData) {
          res.status(404).json({ message: "No pizza found with this id!" });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = emailController;
