const express = require("express")
const mongoose = require("mongoose")
const teacherRoute = require("./Router/TeacherRouter")
const cors = require("cors")
const studentRouter = require("./Router/StudentRouter")
const adminRouter = require("./Router/adminRouter")
const documetRouter = require("./Router/documentRouter")

const app = express()

app.use(express.json())

app.use(cors())

mongoose.connect("mongodb://localhost:27017/SMS").then(() => {
    console.log("Database has been connected successfully")
}).catch((error) => console.log(error))

// teacher Router
app.use(teacherRoute)

// student Router
app.use(studentRouter)

// admin Router
app.use(adminRouter)

// document Router
app.use(documetRouter)

// custome routes for only documents
app.use("/alldocs", express.static("documents"))

app.listen(3000, () => console.log("Server is running on port 3000"))