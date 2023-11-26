const mongoose = require('mongoose')

const CourseRegisterSchema = new mongoose.Schema({
    courseTerm:String,
    courseCode:String,
    courseName:String,
    startDate:String,
    endDate:String,
    courseFee:String,
    description:String
})
const CourseModel = mongoose.model('Course',CourseRegisterSchema)
module.exports = CourseModel