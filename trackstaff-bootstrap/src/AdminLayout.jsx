import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import Menu from "./Components/Menu";
const AdminLayout = () => {
  return (
    <div>
      <NavbarComponent />
      <Menu />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
