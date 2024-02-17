const mongoose = require("mongoose")

const teacherSchema = mongoose.Schema({
    Id:{
        type: Number,
        required: true,

    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    }
},
{timestamps: true},
)

module.exports = mongoose.model("Teacher", teacherSchema)