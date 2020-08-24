const {
  getEmailById,
  getAllEmails,
  createEmail,
  updateEmail,
  deleteEmail,
} = require("../../controllers/email-controllers");

const router = require("express").Router();

router.route("/").get(getAllEmails).post(createEmail);

router.route("/:id").get(getEmailById).put(updateEmail).delete(deleteEmail);

module.exports = router;
