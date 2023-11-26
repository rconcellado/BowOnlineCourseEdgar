// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminPanel from './AdminPanel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming you want Bootstrap to be available everywhere

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* <Sidebar />  */}
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
