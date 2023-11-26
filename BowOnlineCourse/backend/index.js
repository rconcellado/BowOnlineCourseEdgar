const express = require ("express")
const mongoose = require("mongoose")
const cors = require("cors")

const StudentRegisterModel = require('./models/studentRegister.js')
const AdminModel = require('./models/admin.js')
const CourseModel = require("./models/course.js")
 
const app = express()
app.use(express.json())
app.use(cors())
 
mongoose.connect("mongodb://127.0.0.1:27017/BowOnlineCourseDB");

// This is login for student
app.post("/loginstudent", (req,res) => {
    const {username,password} = req.body;
    StudentRegisterModel.findOne({username:username})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Password is incorrect")
            }
        }else{
            res.json("No record found")
        }
    })
})

// This is login for Administrator
app.post("/loginadmin", (req,res) => {
    const {username,password} = req.body;
    AdminModel.findOne({username:username})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Password is incorrect")
            }
        }else{
            res.json("No record found")
        }
    })
})

//This is to register student
app.post('/register', (req, res) => {
    StudentRegisterModel.create(req.body)
    .then(Student => res.json(Student))
    .catch(err => res.json(err))
})

//This is to add new course
app.post('/newcourse',(req,res) => {
    CourseModel.create(req.body)
    .then(course => res.json({status: "Success", data:course}))
    .catch(err => res.json({status: "Error",message:err.message}))
})

//This is to get the course details via course code from Edit Course component
app.get("/getcourse/:courseCode", (req, res) => {
    const courseCode = req.params.courseCode;
    CourseModel.findOne({ courseCode: courseCode })
              .then(course => {
                if(course){
                    res.json(course);
                }else {
                    res.status(400).send('Course not found');
                }
                })
                .catch(err => {
                    res.status(500).send('Error: ' + err);
                });    
});

//This code is use to update the course information of the fetch course.
app.post("/updatecourse", async(req,res) => {
    const{id,courseTerm,courseCode,courseName,startDate,endDate,courseFee,description}=req.body

    try {
        await CourseModel.updateOne({_id:id}, {
            $set: {
                courseTerm: courseTerm,
                courseCode: courseCode,
                courseName: courseName,
                startDate: startDate,
                endDate: endDate,
                courseFee: courseFee,
                description: description
            }
        })
        return res.json({status: "ok", data: "updated"})
    } catch (error) {
        return res.json({status: "error", data: error})
    }
});

// Delete course from admin course list
app.post("/deleteCourse", async (req, res) => {
    const { courseCode } = req.body;
    
    try {
      // Assuming your CourseModel has a field named 'courseCode'
      const deletedCourse = await CourseModel.findOneAndDelete({ courseCode });
  
      if (deletedCourse) {
        res.send({ status: "Ok", data: "Deleted" });
      } else {
        res.status(404).send({ status: "Error", data: "Course not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: "Error", data: "Internal Server Error" });
    }
  });

//This code is use in Course List where we retrieve all course records.
app.get('/getAllCourse',async(req,res) => {
  try{
    const page = parseInt(req.query.page,10) || 1;
    const pageSize = parseInt(req.query.pageSize, 5) || 5;
    const skip = (page - 1) * pageSize;

    const allCourses = await CourseModel.find({}).skip(skip).limit(pageSize);
    const totalCount = await CourseModel.countDocuments();

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalCount/pageSize);

    // Create previous and next page URLs or numbers
    const prevPage = page - 1 > 0 ? page - 1 : null;
    const nextPage = page + 1 <= totalPages ? page + 1 : null;

    res.json({
        status: 'ok',
        data: allCourses,
        totalPages,
        currentPage: page,
        prevPage,
        nextPage,
    });    
  } catch(error){
    console.error('Failed to retrieve courses:',error);
  }

});

app.listen(3001, () => {
    console.log("Server running")
})
