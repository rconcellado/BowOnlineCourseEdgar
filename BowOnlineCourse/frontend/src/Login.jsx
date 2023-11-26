import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import Signup from "./Signup";
import axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'

import AdminPanel from './AdminPanel';
import { Outlet } from 'react-router-dom';

function LoginForm () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role;

  const handleLogin = (e) => {
    axios.post("http://localhost:3001/loginstudent",{username,password})
      .then(result => {
        if(result.data === "Success"){
          LoginSuccessfulMsg(username)
          navigate('/Programs') 
        }
        else{
          LoginFailedMsg();
        }
    })
    .catch(err=> console.log(err))
  }

  const Layout = (e) => {
    return (
      <div style={{ display: 'flex' }}>
        <Sidebar /> 
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <Outlet /> {/* Nested routes will render here */}
        </div>
      </div>
    );
  };

  const handleLoginAdmin = (e) => {
    axios.post("http://localhost:3001/loginadmin",{username,password})
      .then(result => {
        if(result.data === "Success"){
          LoginSuccessfulMsg(username)
          navigate('/adminpanel')
        }
        else{
          LoginFailedMsg();
        }
    })
    .catch(err=> console.log(err))
  }

  function LoginSuccessfulMsg(user) {
    // Assume registration logic is here
  
    // After successful registration:
    alert(`Login successful! Welcome back : ${user}`);
  }

  function LoginFailedMsg() {
    // Assume registration logic is here
  
    // After successful registration:
    alert("Login failed! Try Again!");
  }

  return (
    <div className="form-container-login">
      
      <div className="form-header">
        <div><span>Ready to Connect?</span></div>
      </div>
      {/* <br/>

      <div>Please login to your account.</div>
      <br/> */}

      <label>Username : </label>
        <input type="text" 
        className ="sign-up-text"
        placeholder='Please enter username' 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        />
      <br/>

      <br/>
      <label>Password : </label>
      <input type="password" 
       className ="sign-up-text"
       placeholder='*********' 
       value={password} 
       onChange={(e) => setPassword(e.target.value)} 
       />
      <br/>
      <br/>  

      {
        role === 'student' &&
        <>
          <button onClick={handleLogin} className="signin-button">Student Signin</button>
          <Link to="/newsignup" className='help-text'>Need an account? Register here.</Link>
        </>
      }

      {role === 'admin' && <button onClick={handleLoginAdmin} className = "button-primary">Admin Signin</button>}
      
      </div>
  );
};

export default LoginForm;
