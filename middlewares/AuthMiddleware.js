const JWT = require("jsonwebtoken")
const User = require("../models/userSchema")




// is admin middleware

exports.admin = async function (req, res, next) {
    if (req.User && req.User.isAmin) {
        res.status(401).json ({
            message: "you are not an authorized admin"
        })
    }
}