// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout"; 
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";

// ... other imports
import LoginForm from "./Login";
import NewSignupForm from "./NewSignupForm";
import RoleSelection from "./RoleSelection";

//Course-related component
import CourseList from "./CourseList";
import AddCourse from "./AddCourse";
import EditCourse from "./EditCourse";

import AdminPanel from "./AdminPanel";
import LoginOption from "./pages/LoginOption";
import Home from "./pages/Home";
// import NewLayout from "./pages/NewLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        {/* <Route path="/" element={<RoleSelection />}> */}
       
          {/* <Route path = '/newlayout'element={<NewLayout/>} /> */}

          <Route exact path="/" element={<Home/>}/>
          <Route path="adminpanel" element={<AdminPanel/>}/>
          <Route path="login" element={<LoginForm/>}/>
          <Route path="/newsignup" element={<NewSignupForm/>}/>
          <Route path="/loginOption" element={<LoginOption/>}/>
          <Route path="/roleselection" element={<RoleSelection/>}/>


          {/* Course-related routes */}
          <Route path="courselist" element={<CourseList/>}/>
          <Route path="addcourse" element={<AddCourse/>}/>
          <Route path="editcourse" element={<EditCourse/>}/>
         

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
