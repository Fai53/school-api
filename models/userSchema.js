const mongoose = require("mongoose");
const {string} = require("yup");

const useSchema = mongoose.Schema({
    username: {
       type: String,
       unique: true,
       require:true,
    },

    email: {
        type: String,
        require: true,
        unique: true,

    },
    password: {
        type: String,
        require: true,

    },
    isAdmin: {
        type: Boolean,
        default:false
    }
    
    
    
    

    





});

const User = mongoose.model("user", useSchema)
module.exports = User;