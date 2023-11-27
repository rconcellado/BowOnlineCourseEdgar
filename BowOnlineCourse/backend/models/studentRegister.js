const mongoose = require('mongoose')

const StudentRegisterSchema = new mongoose.Schema({
    firstName:String,
    lastName: String,
    email: String,
    password:String,
    username: String,
    department: String,
    program: String,
    dateOfBirth: String,
    phone: String

})
const StudentRegisterModel = mongoose.model('Student', StudentRegisterSchema)
module.exports = StudentRegisterModel