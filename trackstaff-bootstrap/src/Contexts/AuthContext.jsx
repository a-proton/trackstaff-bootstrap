"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'admin' or 'employee'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const adminToken = localStorage.getItem("adminToken");
    const employeeToken = localStorage.getItem("employeeToken");
    const storedRole = localStorage.getItem("userRole");

    if (adminToken === "admin-authenticated" && storedRole === "admin") {
      setIsAuthenticated(true);
      setUserRole("admin");
    } else if (
      employeeToken === "employee-authenticated" &&
      storedRole === "employee"
    ) {
      setIsAuthenticated(true);
      setUserRole("employee");
    }
    setLoading(false);
  }, []);

  const adminLogin = (email, password) => {
    // Get admin credentials from environment variables
    let adminEmail, adminPassword;

    if (typeof import.meta !== "undefined" && import.meta.env) {
      adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
      adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    } else if (typeof process !== "undefined" && process.env) {
      adminEmail = process.env.REACT_APP_ADMIN_EMAIL;
      adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;
    }

    if (!adminEmail || !adminPassword) {
      console.error("Admin environment variables not found.");
      return {
        success: false,
        message: "Server configuration error. Please contact administrator.",
      };
    }

    if (email === adminEmail && password === adminPassword) {
      setIsAuthenticated(true);
      setUserRole("admin");
      localStorage.setItem("adminToken", "admin-authenticated");
      localStorage.setItem("userRole", "admin");
      localStorage.setItem("userEmail", email);
      return { success: true, message: "Admin login successful" };
    } else {
      return { success: false, message: "Invalid admin credentials" };
    }
  };

  const employeeLogin = (email, password) => {
    // Get employee credentials from environment variables (or implement your employee auth logic)
    let employeeEmail, employeePassword;

    if (typeof import.meta !== "undefined" && import.meta.env) {
      employeeEmail = import.meta.env.VITE_EMPLOYEE_EMAIL;
      employeePassword = import.meta.env.VITE_EMPLOYEE_PASSWORD;
    } else if (typeof process !== "undefined" && process.env) {
      employeeEmail = process.env.REACT_APP_EMPLOYEE_EMAIL;
      employeePassword = process.env.REACT_APP_EMPLOYEE_PASSWORD;
    }

    // For now, using default employee credentials - you can modify this logic
    const defaultEmployeeEmail = "employee@trackstaff.com";
    const defaultEmployeePassword = "employee123";

    const finalEmployeeEmail = employeeEmail || defaultEmployeeEmail;
    const finalEmployeePassword = employeePassword || defaultEmployeePassword;

    if (email === finalEmployeeEmail && password === finalEmployeePassword) {
      setIsAuthenticated(true);
      setUserRole("employee");
      localStorage.setItem("employeeToken", "employee-authenticated");
      localStorage.setItem("userRole", "employee");
      localStorage.setItem("userEmail", email);
      return { success: true, message: "Employee login successful" };
    } else {
      return { success: false, message: "Invalid employee credentials" };
    }
  };

  // Keep the old login method for backward compatibility (defaults to admin login)
  const login = (email, password) => {
    return adminLogin(email, password);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem("adminToken");
    localStorage.removeItem("employeeToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
  };

  const value = {
    isAuthenticated,
    userRole,
    login,
    adminLogin,
    employeeLogin,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
