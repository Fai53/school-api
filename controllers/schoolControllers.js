const school = require("../models/schoolSchema")
const createSchool=(req,res) =>{
    const newSchool = new school({
        schoolname:req.body.schoolname,
        location:req.body.location,
        Adress: req.body.adress,
        category: req.body.category,
        facility: req.body.facility,
        numOfStudents: req.body.numOfStudents,
        contact: req.body.contact,
    })
    newSchool.save();
    res.status(200).json(newSchool)
}
//getting a school
const getSchools= async (req, res)=>{
    const schools= await school.find();
    res.status(200).json(schools)
}













module.exports={createSchool, getSchools}