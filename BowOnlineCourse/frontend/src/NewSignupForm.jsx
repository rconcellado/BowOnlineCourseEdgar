import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Style.css'

function NewSignupForm() {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUserName] = useState()
    const [department, setDepartment] =useState();
    const [program, setProgram] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [phone, setPhone] = useState();
    // const [showPassword, setShowPassword] = useState(false);

    // Generate a random number for the student ID
    const [studentId, setStudentId ] = useState('');
    useEffect(() => {
        setStudentId('BVC' + Math.floor(Math.random() * 10000));
    }, []);
   
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {studentId, firstName,lastName, email, username, password, department, program, dateOfBirth, phone})
        .then(result => console.log(result))
         handleRegistration()
         navigate('/login')
        .catch(err=> console.log(err))
    
}

function handleRegistration() {
  // Assume registration logic is here

  // After successful registration:
  alert("Registration successful! Welcome to our website.");
}

  return (
    <div class="form-container">
    {/* <div className='bg-white p-3 rounded w-75'> */}
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>

       <div className='mb-1'>
          <label htmlFor='studentId'><strong>Student ID:</strong></label>
          <input type='text' name='studentId'value={studentId}readOnly className='form-control rounded-0'/>
       </div>

      <div className='mb-1'>
              <label htmlFor='firstName'><strong>First Name:</strong></label>
              <input type="text" name= 'firstName' placeholder='Enter a firstname'className='form-control rounded-0'
              onChange={(e) => setFirstName(e.target.value)}/>
      </div>

          <div className='mb-1'>
              <label htmlFor='lastName'><strong>Last Name:</strong></label>
              <input type="text" name= 'lastName' placeholder='Enter a lastname'className='form-control rounded-0'
              onChange={(e) => setLastName(e.target.value)}/>
              
          </div>
          <div className='mb-1'>
              <label htmlFor='email'><strong>Email</strong></label>
              <input type="email" name= 'email' autoComplete= "off" placeholder='Enter a email'  className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}/>
             
          </div>
          <div className='mb-1'>
              <label htmlFor='phone'><strong>Phone:</strong></label>
            <input
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              className="form-control rounded-0"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-1">
          <label htmlFor="dateOfBirth">
            <strong>Date of Birth:</strong>
          </label>
          <input
            type="date"
            name="dateOfBirth"
            className="form-control rounded-0"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
          <div className='mb-1'>
              <label htmlFor='department'><strong>Department:</strong></label>
              <select
            name="department"
            className="form-control rounded-0"
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Select a department</option>
            <option value="School of Technology">School of Technology</option>
            <option value="Chiu School of Business Programs">Chiu School of Business Programs</option>
           
          </select>
              
          </div>
          <div className='mb-1'>
              <label htmlFor='program'><strong>Program:</strong></label>
              <select
            name="program"
            className="form-control rounded-0"
            onChange={(e) => setProgram(e.target.value)}
          >
            <option value="">Select a program</option>
            <option value="Software Development">Software Development</option>
            <option value="MSC">MSC</option>
            <option value="PhD">PhD</option>
           
          </select>

          </div>
          <div className='mb-1'>
              <label htmlFor='username'><strong>Username:</strong></label>
              <input type="text" name= 'username' placeholder='Enter a username'className='form-control rounded-0'
              onChange={(e) => setUserName(e.target.value)}/>
              
          </div>
          <div className='mb-1'>
              <label htmlFor='password'><strong>Password:</strong></label>
              <input type='password'    name= 'password' placeholder='Enter a name'className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}/>
        
          </div>
       
          {/* <button type='submit' className='btn btn-primary w-100'><strong>Register</strong></button> */}

          <button type='submit' className='signin-button w-100'><strong>Register</strong></button>
          
          </form>  
    </div>
// </div>
  )
}

export default NewSignupForm
