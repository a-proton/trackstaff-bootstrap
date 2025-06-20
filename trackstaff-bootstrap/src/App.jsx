import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import ProtectedRoute, {
  AdminProtectedRoute,
  EmployeeProtectedRoute,
} from "./Components/ProtectedRoute";
import AdminLayout from "./AdminLayout";
import EmployeeLayout from "./EmployeeLayout";
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
import EmpAttendence from "./employee-pages/emp-attendence";
import AdminLogin from "./pages/AdminLogin";
import EmpLogin from "./employee-pages/emp-login";
import ForgetPassword from "./employee-pages/emp-forgetpass";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="employeelogin" element={<EmpLogin />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />

          {/* Admin Routes - Only accessible by admin */}
          <Route
            path="/"
            element={
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/dashboard" replace />} />

            {/* Admin-only routes */}
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
          </Route>

          {/* Employee Routes - Only accessible by employees - NOW WITH LAYOUT */}
          <Route
            path="/employee"
            element={
              <EmployeeProtectedRoute>
                <EmployeeLayout />
              </EmployeeProtectedRoute>
            }
          >
            <Route path="dashboard" element={<EmpDashboard />} />
            <Route path="logs" element={<EmpLogs />} />
            <Route path="tasks" element={<EmpTasks />} />
            <Route path="projects" element={<EmpProjects />} />
            <Route path="attendence" element={<EmpAttendence />} />
            <Route path="meetings" element={<EmpMeetings />} />
            <Route path="reminders" element={<EmpReminders />} />
          </Route>

          {/* Redirect old employee routes to new structure */}
          <Route
            path="/employee-dashboard"
            element={<Navigate to="/employee/dashboard" replace />}
          />
          <Route
            path="/employee-attendence"
            element={<Navigate to="/employee/attendence" replace />}
          />
          <Route
            path="/employee-logs"
            element={<Navigate to="/employee/logs" replace />}
          />
          <Route
            path="/employee-tasks"
            element={<Navigate to="/employee/tasks" replace />}
          />
          <Route
            path="/employee-projects"
            element={<Navigate to="/employee/projects" replace />}
          />
          <Route
            path="/employee-meetings"
            element={<Navigate to="/employee/meetings" replace />}
          />
          <Route
            path="/employee-reminders"
            element={<Navigate to="/employee/reminders" replace />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
