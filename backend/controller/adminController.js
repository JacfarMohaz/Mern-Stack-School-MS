const adminModel = require("../model/adminModel")

// register Admin
const registerAdmin = async (req, res) => {
    const newAdmin = adminModel(req.body)
    const saveAdmin = await newAdmin.save()
    if(saveAdmin){
        res.send(saveAdmin)
    }
}

// find exsting user in the database
const loginAdmin = async (req, res) => {
    const adminData = await adminModel.findOne({
        userName: req.body.userName,
        password: req.body.password
    })
    if(adminData){
        res.send(adminData)
    }
    else{
        res.send({
            error: "Incorrect username or password"
        })
    }
}

module.exports = {registerAdmin, loginAdmin}