const User = require("../models/userSchema")
const bcyptjs = ("bcryptjs")

// adding a user


const addUser = async (req, res,)=> {
    // encrypting a password
    const salt = await bcyptjs.genSalt(10)
    const hashedPassward = await bcyptjs.hash(req.body.password, shas)

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    await newUser.save();
    res.stutus(201).json({
        id: newUser._id,
        username: newUser.username,
        email:newUser.email
    })
}
module.exports={addUser}