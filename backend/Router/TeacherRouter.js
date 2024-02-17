const express = require("express")
const teacherController = require("../controller/teacherController")


const router = express.Router()

router.post("/create/teacher", teacherController.createTeacher)
router.get("/allTeachers", teacherController.getAllTeachers)
router.get("/teacherID/:id", teacherController.getDataID)
router.put("/updateTeacher/:id", teacherController.updateTeacher)
router.delete("/delete/:id", teacherController.deleteTeacher)
router.get("/search/teacher/:key", teacherController.searchTeacher)
router.get("/teacher/total", teacherController.getAllofTeachers)
router.get("/totalsalary", teacherController.getTotalSalary)

module.exports = router