const router = require("express").Router()
const userRoutes = require("./user-routes")
const emailRoutes = require("./email-routes")

router.use("/users", userRoutes)
router.use("/emails", emailRoutes)

module.exports = router