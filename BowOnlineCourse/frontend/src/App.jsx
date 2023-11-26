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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<RoleSelection />}>
          {/* <Route index element={<Layout/>} /> */}

          <Route path="adminpanel" element={<AdminPanel/>}/>

          <Route path="login" element={<LoginForm/>}/>
          <Route path="newsignup" element={<NewSignupForm/>}/>

          {/* Course-related routes */}
          <Route path="courselist" element={<CourseList/>}/>
          <Route path="addcourse" element={<AddCourse/>}/>
          <Route path="editcourse" element={<EditCourse/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
