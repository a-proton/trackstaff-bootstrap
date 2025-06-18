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
import NotFound from "./pages/NotFound";
import EmployeeManagement from "./pages/Employee";
import AddEmployee from "./pages/AddEmployee";
import Logs from "./pages/Logs";
import ScreenProofs from "./pages/ScreenProofs";
import EmployeeAttendence from "./pages/EmployeeAttendence";
import Tasks from "./pages/Tasks";
import SubTask from "./pages/SubTask";
import Projects from "./pages/Projects";
import Meetings from "./pages/Meetings";
import Reminders from "./pages/Reminders";
import ViewEmployeeDetails from "./pages/ViewEmployeeDetails";
import EditEmployee from "./pages/EditEmployee";
import EmpDashboard from "./employee-pages/emp-dashboard";
import EmpLogs from "./employee-pages/emp-logs";
import EmpTasks from "./employee-pages/emp-tasks";
import EmpProjects from "./employee-pages/emp-projects";
import EmpMeetings from "./employee-pages/emp-meetings";
import EmpReminders from "./employee-pages/emp-reminders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employee" element={<EmployeeManagement />} />
          <Route path="add-employee" element={<AddEmployee />} />
          <Route path="attendence" element={<EmployeeAttendence />} />
          <Route path="emp-logs" element={<Logs />} />
          <Route path="screen-proofs" element={<ScreenProofs />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="sub-tasks" element={<SubTask />} />
          <Route path="projects" element={<Projects />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="view-employee" element={<ViewEmployeeDetails />} />
          <Route path="edit-employee" element={<EditEmployee />} />
          {/* <Route path="notifications" element={<Notifications />} /> */}
          {/* Employee Route Paths */}
          <Route path="employee-dashboard" element={<EmpDashboard />} />
          <Route path="employee-logs" element={<EmpLogs />} />
          <Route path="employee-tasks" element={<EmpTasks />} />
          <Route path="employee-projects" element={<EmpProjects />} />
          <Route path="employee-meetings" element={<EmpMeetings />} />
          <Route path="employee-reminders" element={<EmpReminders />} />
        </Route>
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
