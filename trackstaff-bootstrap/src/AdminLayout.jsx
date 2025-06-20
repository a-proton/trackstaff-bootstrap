import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import Menu from "./Components/Menu";
const AdminLayout = () => {
  return (
    <div>
      <NavbarComponent />
      <Menu />
      <div style={{ backgroundColor: "#F5F6FA" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
