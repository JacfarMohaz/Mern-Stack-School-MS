const express = require("express")
const studentController = require("../controller/studentController")

const router = express.Router()


router.post("/create/student", studentController.createStudent)
router.get("/read/student", studentController.readStudent)
router.get("/read/singleStudent/:id", studentController.readSingleStudent)
router.put("/update/student/:id", studentController.updateStudent)
router.delete("/delete/student/:id", studentController.deleteStudent)
router.get("/student/search/:key", studentController.searchStudent)
router.get("/student/total", studentController.getAllofStudent)

module.exports = router