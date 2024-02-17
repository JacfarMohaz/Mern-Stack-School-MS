const express = require("express")


const router = express.Router()
const {createFile, upload, getDocument} = require("../controller/documentController")

router.post("/teacher/file", upload.single("file"), createFile)
router.get("/read/file", getDocument )

module.exports = router