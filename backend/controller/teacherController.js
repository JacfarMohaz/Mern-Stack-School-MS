const teacherModel = require("../model/teacherModel")

// create new data
const createTeacher = async (req, res) => {
    const newData = teacherModel(req.body)
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}

// get all data
const getAllTeachers = async (req, res) => {
    const allTeachers = await teacherModel.find()
    if(allTeachers){
        res.send(allTeachers)
    } 
}


// get data single one
const getDataID = async (req, res) => {
    const getDataID = await teacherModel.find({_id: req.params.id})
    if(getDataID){
        res.send(getDataID)
    }
}


// update data
const updateTeacher = async (req, res) => {
    const updateData = await teacherModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(updateData){
        res.send(updateData)
    }
}


// delete data
const deleteTeacher = async (req, res) => {
    const deleteData = await teacherModel.deleteOne({_id: req.params.id})
    if(deleteData){
        res.send("teacher deleted")
    }
}


// search teacher 
const searchTeacher = async (req, res) => {
    const searchData = await teacherModel.find({
        $or: [
            {name: {$regex: req.params.key}}
        ]
    })

    if(searchData){
        res.send(searchData)
    }
}


// get all teachers
const getAllofTeachers = async (req, res) =>{
    const total = await teacherModel.find().countDocuments()
    if(total){
        res.send({total})
    }
}


// get total salary
const getTotalSalary = async (req,res) => {
    const totalSalary = await teacherModel.aggregate([
        {
            $group: {_id: null, salary: {$sum: "$salary"}}
        }
    ])
    if(totalSalary){
        res.send(totalSalary)
    }
}



module.exports = {createTeacher, getAllTeachers, deleteTeacher, getDataID, updateTeacher, searchTeacher, getAllofTeachers, getTotalSalary}