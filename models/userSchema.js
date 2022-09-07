const mongoose = require("mongoose")

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
    passward: {
        type: String,
        require: true,

    }




});

const User = mongoose.model("user", useSchema)
module.exports = User;