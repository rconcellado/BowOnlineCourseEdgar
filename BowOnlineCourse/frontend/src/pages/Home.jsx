//import React from 'react'
import React, { useState } from 'react';
import Login from '../Login/'
//import Signup from '../SignupBacjkend'
//import './design/App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
//import {Button } from 'react-bootstrap'

//import TermOneCourses from '../Colleges/Technology/Software/Term1/TermOneCourses'
//import ChooseTerm from '../Colleges/Technology/Software/ChooseTerms'
//import About from './About'
// import Signup from '../Signup'
//import Login from '../LoginwithBackend'
//import LoginForm from '../Login'
//import HomePictures from './css/HomePictures'
// import ControlledCarousel from './css/ControlledCarousel'
import backgroundImage from './website-feature.png';
import { Link } from 'react-router-dom';

function Home() {

  const [users, setUsers] = React.useState([])
  return (
          <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh'
           }}>
          {/* <div className='homeBackground'> */}
            {/* <div> */}
                <h1 class="jumbotron" className="welcomeToBow">Welcome to Bow Valley School's Course Enrollment!</h1>
                <Link to='/loginOption'>login</Link>
            {/* </div> */}
          {/* </div> */}
          </div>   
  )
}

export default Home
