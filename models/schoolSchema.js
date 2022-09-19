const mongoose = require("mongoose")

const schoolschema= mongoose.Schema({
    schoolname: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    facilities: {
        type: Array,
        required: true
    },
    numOfstudents: {
        type: Number,
        required: true

    },
    address: {
        gps: String,
        box: String
    },
    contact: {
        phone: String,
        email: String
    }

}, {
    timestamps : true,
})

const school=mongoose.model("schoo", schoolschema)
module.exports=school