// import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

//Styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSearch,
  faPlus,
  faArrowLeft,
  faArrowRight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Style.css";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedAction, setselectedAction] = useState(0);
  const [selectedCourse, setselectedCourse] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  // const role = location.state?.role;

  useEffect(() => {
    fetchDataForPage(currentPage);
  }, [currentPage]);

  const fetchDataForPage = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/getAllCourse?page=${page}`
      );
      setCourses(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteCourse = (courseCode) => {
    const confirmation = window.confirm(`Are you sure you want to delete the course with code ${courseCode}?`);
  
    if (confirmation) {
      fetch("http://localhost:3001/deleteCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          courseCode: courseCode,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          alert(data.data);
          fetchDataForPage(); // Assuming getAllUser is a function to refresh the user list
        })
        .catch((error) => {
          //console.error("Error deleting course:", error);
          //alert("Error deleting course. Please try again later.");
        });
    }
  };

  const handleCourseSelect = (courseCode) => {
    setselectedCourse(courseCode);
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <div class="form-container">

      <div class="form-header">
        <div><span>Course List</span></div>
      </div>

      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Search by Course Name"
        />

        {/* <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button> */}

        {/* <button
          className="plus-button"
          onClick={() => navigate("/AddCourse")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button> */}
      </div>

      <div class="table-responsive">
        <div class="table">
          <table>
            <thead>
              <tr>
              <th>Course Term</th>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Course Fee</th>
                {/* <th>Description</th> */}
                <th>Action</th>
                {/* <th>Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course._id}>
                  <td>{course.courseTerm}</td>
                  <td>{course.courseCode}</td>
                  <td>{course.courseName}</td>
                  <td>{course.startDate}</td>
                  <td>{course.endDate}</td>
                  <td>{course.courseFee}</td>
                  <td style={{ textAlign: "center" }}>
                        <FontAwesomeIcon
                          className="edit-icon"
                          icon={faEdit}
                          onClick={() => navigate('/EditCourse',{state:course})}
                          title="Edit"
                        />
                  {/* </td>
                  <td style={{ textAlign: "center" }}> */}
                    <FontAwesomeIcon
                          className="trash-icon"
                          icon={faTrashAlt}
                          title="Delete"
                          onClick={() => deleteCourse(course.courseCode)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination-controls">    
      <button className="page-button" onClick={goToPrevPage}>
                <FontAwesomeIcon icon={faArrowLeft} />       
            </button>        
            <button className="page-button" onClick={goToNextPage}>
                <FontAwesomeIcon icon={faArrowRight} />       
            </button>   
        </div> 
</div>
  );
}

export default CourseList;
