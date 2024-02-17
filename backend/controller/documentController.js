const documentModel = require("../model/documentModel")
const multer = require("multer")


const storageLocation = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "documents")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})  

const upload = multer({
    storage: storageLocation
})

// create file
const createFile = async (req, res) => {
    const newData = documentModel({
        file: req.file.filename
    })
    const seveDocument = await newData.save()
    if(seveDocument){
        res.send(seveDocument)
    }
}


// read file
const getDocument = async (req, res) => {
    const readData = await documentModel.find()
    if(readData){
        res.send(readData)
    }
}

module.exports = {
    createFile, 
    upload, 
    getDocument
}