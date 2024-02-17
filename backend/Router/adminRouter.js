const express = require("express")
const adminController = require("../controller/adminController")

const router = express.Router()

router.post("/create/admin", adminController.registerAdmin)
router.post("/login/admin", adminController.loginAdmin)


module.exports = router