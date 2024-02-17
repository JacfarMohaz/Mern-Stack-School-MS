const mongoose =  require("mongoose")

const documentSchema = mongoose.Schema({
    file:{
        type: String,
        required: true
    }
},
{timestamps: true}
)

module.exports = mongoose.model("documents", documentSchema)