// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaWpforms , FaNewspaper, FaClipboardList, FaPlus, FaSearch, FaPowerOff } from 'react-icons/fa';
import './Sidebar.css'; // Your CSS file for styling

const AdminPanel = () => {
  return (
    // <div class="main-content">
    <div className="sidebar">
      <div className="profile-content">
        <div className="profile-logo">
          CL 
        </div>
        <div className="profile-title">John Doe</div>
        <div className="profile-role">Administrator</div>
      </div>
      <nav className="navigation-menu">
        <Link to="/AddCourse" className="menu-item">
          <FaPlus className="icon" />
          <span>Add New Course</span>
        </Link>
        <Link to="/courselist" className="menu-item">
          <FaClipboardList className="icon" />
          <span>Course List</span>
        </Link>
        <Link to="/courselist" className="menu-item">
          <FaNewspaper className="icon" />
          <span>Registered Students</span>
        </Link>
        <Link to="/courselist" className="menu-item">
          <FaWpforms  className="icon" />
          <span>Students Form</span>
        </Link>
      </nav>
      <div className="sidebar-footer">
        <Link to="/roleselection" className="menu-item">
          <FaPowerOff className="icon" />
          <span>Logout</span>
         </Link>
      </div>  
    </div>
    // </div>
  );
};

export default AdminPanel;
