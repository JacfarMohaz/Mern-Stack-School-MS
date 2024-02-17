const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    Id:{
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    className:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
},
{timestamps: true}
)

module.exports = mongoose.model("Student", studentSchema)