const jwt = require('jsonwebtoken')

exports.genrateToken = (id) => {
    return jwt.sign({id}, process.env.LWT_SECRET,{expiresIn:"30d"})

    
}