"use client";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { isAuthenticated, userRole, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <div
            className="spinner-border text-primary mb-3"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to appropriate login page
  if (!isAuthenticated) {
    // Determine which login page to redirect to based on the attempted route
    const isEmployeeRoute = location.pathname.includes("employee-");
    const redirectTo = isEmployeeRoute ? "/employeelogin" : "/adminlogin";
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // If allowedRoles is specified and user role is not in allowed roles
  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    // Redirect to appropriate unauthorized page based on user role
    if (userRole === "admin") {
      return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="alert alert-danger" style={{ maxWidth: "500px" }}>
              <h4 className="alert-heading">Access Denied</h4>
              <p>You don't have permission to access employee routes.</p>
              <hr />
              <p className="mb-0">
                <Navigate to="/dashboard" replace />
              </p>
            </div>
          </div>
        </div>
      );
    } else if (userRole === "employee") {
      return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="alert alert-danger" style={{ maxWidth: "500px" }}>
              <h4 className="alert-heading">Access Denied</h4>
              <p>You don't have permission to access admin routes.</p>
              <hr />
              <p className="mb-0">
                <Navigate to="/employee-dashboard" replace />
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  return children;
};

// Higher-order components for specific role protection
export const AdminProtectedRoute = ({ children }) => {
  return <ProtectedRoute allowedRoles={["admin"]}>{children}</ProtectedRoute>;
};

export const EmployeeProtectedRoute = ({ children }) => {
  return (
    <ProtectedRoute allowedRoles={["employee"]}>{children}</ProtectedRoute>
  );
};

export default ProtectedRoute;
