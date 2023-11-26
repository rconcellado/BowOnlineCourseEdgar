import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import bloggerImage from './blogger.png';
import studentImage from './student.png';

//Styling
import './Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate(); // initialize the navigate function

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  }

  const handleNextClick = () => {
    if(selectedRole === 'student' || selectedRole === 'admin'){
      
        navigate('/login',{state:{role:selectedRole}});
    }
  }

  return (
    <div class="form-container">
        <div className="login-container">
            <div class="form-header">
              <div><span>Login / Signup as</span></div>
              <div><span>Tell Us About You</span></div>
            </div>
            <div className="role-selection">
                  <div 
                    className={`role-card ${selectedRole === 'admin' ? 'selected' : ''}`}
                    onClick={() => handleRoleSelect('admin')}
                  >
                    <img src={bloggerImage} />
                    <p>Admin</p>
                  </div>

                  <div 
                    className={`role-card ${selectedRole === 'student' ? 'selected' : ''}`}
                    onClick={() => handleRoleSelect('student')}
                  >
                    <img src={studentImage} />
                    <p>Student</p>
                  </div>
            </div>

        </div>
        <div className="pagination-controls">   
              <button className="page-button" onClick={handleNextClick}>Next
                  <FontAwesomeIcon icon={faArrowRight} />       
              </button>
            </div>
        </div>   

  );
}

export default RoleSelection;

