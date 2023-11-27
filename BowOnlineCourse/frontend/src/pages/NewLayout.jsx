import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseList from '../CourseList';
import AddCourse from '../AddCourse';
import EditCourse from '../EditCourse';
import './css/Dashboard.css'

function NewLayout() {
    const [activeComponent, setActiveComponent] = useState('Dashboard');
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col sidebar'>
                <ul className="nav-menu">
                   
                    <li onClick={() => setActiveComponent('AddCourse')}>Add Course</li>
                    <li onClick={() => setActiveComponent('UpdateCourse')}>Update Course</li>
                    <li onClick={() => setActiveComponent('Viewcourse')}>View course</li>
                   
                </ul>
            </div>
            <div className='col-8 main-content'>
                
                {activeComponent === 'AddCourse' && <AddCourse />}
                {activeComponent === 'UpdateCourse' && <EditCourse />}
                {activeComponent === 'Viewcourse' && <CourseList />}
            </div>

        </div>
    </div>
  )
}

export default NewLayout