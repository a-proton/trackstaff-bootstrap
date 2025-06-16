import React from "react";
import NavbarComponent from "./Components/NavbarComponent";
import {
  Routes,
  Route,
  BrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Dashboard from "./pages/Dashboard";
import Menu from "./Components/Menu";
import NotFound from "./pages/NotFound";
import EmployeeManagement from "./pages/Employee";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employee" element={<EmployeeManagement />} />
          {/* <Route path="notifications" element={<Notifications />} /> */}
          {/* Add more admin routes here */}
        </Route>
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
