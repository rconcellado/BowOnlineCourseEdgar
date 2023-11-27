import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import './Style.css'

function EditCourse() {
      const location = useLocation();
      const navigate = useNavigate();

      const[courseId, setcourseId]=useState("");
      const [courseTerm, setcourseTerm]=useState("");
      const [courseCode, setcourseCode]=useState("");
      const [courseName, setcourseName]=useState("");
      const [startDate, setstartDate]=useState("");
      const [endDate, setendDate]=useState("");
      const [courseFee, setcourseFee]=useState("");
      const [description, setdescription]=useState("");

      useEffect(() => {
         console.log(location); 
         setcourseId(location.state._id);
         setcourseTerm(location.state.courseTerm);
         setcourseCode(location.state.courseCode);
         setcourseName(location.state.courseName);
         setstartDate(location.state.startDate);
         setendDate(location.state.endDate);
         setcourseFee(location.state.courseFee);
         setdescription(location.state.description);
      },[])
      
      const updateCourse = (e) => {
        axios.post('http://localhost:3001/updatecourse', {
        id: courseId,
        courseTerm: courseTerm,
        courseCode: courseCode,
        courseName: courseName,
        startDate: startDate,
        endDate: endDate,
        courseFee: courseFee,
        description: description
      })
        .then(response => {
          // Handle the response from the server here
          // console.log(response.data);
          // Possibly navigate to another page or show a success message
          alert("Course updated successfully");
          navigate('/CourseList')
        })
        .catch(error => {
          // Handle any errors here
          // console.error('There was an error updating the course', error);
          alert('There was an error updating the course', error);
        });
      }

  return (
    <div class="form-container">
        <h2>Edit Course Details</h2>

          <label htmlFor="courseTerm">Course Term:</label>
          <input
            placeholder="Course Term e.g. Term1"
            className="textbox"
            defaultValue={courseTerm}
            onChange={(e)=>setcourseTerm(e.target.value)}
          />
          <br />

          
          <label htmlFor="courseCode">Course Code:</label>
          <input
            placeholder="Course Code"            
            className="textbox"
            defaultValue={courseCode}
            onChange={(e)=>setcourseCode(e.target.value)}
          />
          <br />

          <label htmlFor="courseName">Course Name:</label>
          <input
            placeholder="Course Name"           
            className="textbox"
            defaultValue={courseName}
            onChange={(e)=>setcourseName(e.target.value)}
          />
          <br />

          <label htmlFor="startDate">Starting Date:</label>
          <input
            placeholder="Start Date"           
            className="datepicker"
            defaultValue={startDate}
            onChange={(e)=>setstartDate(e.target.value)}
          />
          <br />

          <label htmlFor="endDate">Ending Date:</label>
          <input
            placeholder="End Date"          
            className="datepicker"
            defaultValue={endDate}
            onChange={(e)=>setendDate(e.target.value)}
          />
          <br />

          <label htmlFor="courseFee">Fees:</label>
          <input
            placeholder="Course Fee"           
            className="textbox"
            defaultValue={courseFee}
            onChange={(e)=>setcourseFee(e.target.value)}
          />
          <br />

          <label htmlFor="description">Description:</label>
          <textarea 
            rows="5"   
            placeholder="Description"        
            className="textbox"
            defaultValue={description}
            onChange={(e)=>setdescription(e.target.value)}
          ></textarea>
          <br />

          <button onClick={updateCourse} className="signin-button">
            Submit
          </button>
      </div>
  );
}

export default EditCourse;
