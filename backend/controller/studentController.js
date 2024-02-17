const adminModel = require("../model/adminModel")
const studentModel = require("../model/studentModel")


//create new student data
const createStudent = async (req, res) => {
    const newStudent = studentModel(req.body)
    const saveStudent = await newStudent.save()
    if(saveStudent){
        res.send(saveStudent)
    }
}

// read data 
const readStudent = async (req, res) => {
    const perPage = req.query.page || 0
    const numberOfStudents = 10
    const getStudent = await studentModel.find().skip(numberOfStudents * perPage).limit(numberOfStudents)
    if(getStudent){
        res.send(getStudent)
    }
}


// read sigle Data by ID
const readSingleStudent = async (req, res) => {
    const getSingleStudent = await studentModel.find({_id: req.params.id})
    if(getSingleStudent){
        res.send(getSingleStudent)
    }
}


// update student Data
const updateStudent = async (req, res) => {
    const putStudent = await studentModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(putStudent){
        res.send(putStudent)
    }
}





// delete data
const deleteStudent = async (req, res) => {
    const removeStudent = await studentModel.deleteOne({_id: req.params.id})
    if(removeStudent){
        res.send("Student Deleted")
    }
}

// search student 
const searchStudent = async (req, res) => {
    const searchData = await studentModel.find({
        $or: [
            {name: {$regex: req.params.key}}
        ]
    })

    if(searchData){
        res.send(searchData)
    }
}

// get all student
const getAllofStudent = async (req, res) =>{
    const total = await studentModel.find().countDocuments()
    if(total){
        res.send({total})
    }
}

module.exports = {createStudent, readStudent, deleteStudent, readSingleStudent, updateStudent, searchStudent, getAllofStudent}