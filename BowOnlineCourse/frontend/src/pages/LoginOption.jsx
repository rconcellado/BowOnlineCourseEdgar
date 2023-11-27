import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function LoginOption() {
  return (
    <div className='background-image d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-light p-3 rounded w-25 border-2 shadow-lg'>
        <h2 className="text-center mb-4">Choose for Login</h2>
        <div className='mb-3'>
          <Link to="/login" className="btn btn-primary btn-lg w-100 text-uppercase fw-bold">Student</Link>
        </div>

        <div className='mb-3'>
          <Link to="/employee-login" className="btn btn-primary btn-lg w-100 text-uppercase fw-bold">Employee</Link>
        </div>
       
      </div>
    </div>
  )
}

export default LoginOption