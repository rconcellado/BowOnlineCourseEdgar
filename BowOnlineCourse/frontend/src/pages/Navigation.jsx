import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./css/Navigation.css";

const Layout = () => {
  return (
    <>
      <div className="navbar">
            {/* <Link className="Home" to="/">Home</Link>
            <Link className ="Contact"to="/contact">Contact</Link>
            <Link className = "RoleSelection"to="/roleSelection">Login Portal</Link> */}
      </div>
      <Outlet />
    </>
  )
}; 


export default Layout;