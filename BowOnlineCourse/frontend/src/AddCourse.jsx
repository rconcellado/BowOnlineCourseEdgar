import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//Styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaBackward } from "@fortawesome/free-solid-svg-icons";

import './Style.css'
import { FaBackward } from "react-icons/fa";

function AddCourse() {
  const [courseTerm, setCourseTerm] = useState('1st Term')
  const [courseCode, setCourseCode] = useState()
  const [courseName, setCourseName] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [courseFee, setCourseFee] = useState()
  const [description, setDescription] = useState()
 
  const navigate = useNavigate();

  const AddCourse = (e) => {
    axios.post('http://localhost:3001/newcourse', {
        courseTerm,
        courseCode,
        courseName,
        startDate,
        endDate,
        courseFee,
        description
      })
      .then(result => {
      // if(result.data === "Success"){
        alert("Courses added successfully!");
        navigate('/CourseList') 
      // }
    })
      .catch(error => {
      // console.log(err));
      alert('There was an error adding the course', error);
  });

//   const HandleBackAdmin = () => {
//         navigate('/adminpanel');
//     };
}

  
  return (
    <div class="form-container">

      <div class="form-header">       
        <div>
          {/* <FaBackward className="icon" onClick={HandleBackAdmin} /> */}
          <span>Add New Course Details</span>
        </div>
      </div>
          
        <label htmlFor="courseTerm">Course Term:</label>
          <select className="textbox" onChange={(e) => setCourseTerm(e.target.value)}>
            <option value="Term1">1st Term</option>
            <option value="Term2">2nd Term</option>
            <option value="Term3">3rd Term</option>
            <option value="Term4">4th Term</option>
          </select>
          <br />

          <label htmlFor="courseCode">Course Code:</label>
          <input
            type="text"
            name="courseCode"
            className="textbox"
            placeholder="Enter course code"
            onChange={(e) => setCourseCode(e.target.value)}
          />
          <br />

          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            name="courseName"
            className="textbox"
            placeholder="Enter course name"
            onChange={(e) => setCourseName(e.target.value)}
          />
          <br />
          <label htmlFor="startDate">Starting Date:</label>
          <input
            type="date"
            name="startDate"
            className="datepicker"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <br />
          <label htmlFor="endDate">Ending Date:</label>
          <input
            type="date"
            name="endDate"
            className="datepicker"
            onChange={(e) => setEndDate(e.target.value)}
          />
          <br />
          <label htmlFor="courseFee">Fees:</label>
          <input
            type="text"
            name="courseFee"
            className="textbox"
            placeholder="Enter course fee"
            onChange={(e) => setCourseFee(e.target.value)}
          />
          <br />
          <label htmlFor="description">Description:</label>
          <textarea 
            rows="5"
            name="description"
            className="textbox"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <button onClick={AddCourse} className="signin-button">
            Submit
          </button>
        {/* </form> */}
      </div>
  );
}

export default AddCourse;
