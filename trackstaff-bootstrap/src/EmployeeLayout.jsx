import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import EmployeeMenu from "./Components/EmployeeMenu";

const EmployeeLayout = () => {
  return (
    <div>
      <NavbarComponent />

      <EmployeeMenu />
      <div style={{ backgroundColor: "#F5F6FA" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default EmployeeLayout;
