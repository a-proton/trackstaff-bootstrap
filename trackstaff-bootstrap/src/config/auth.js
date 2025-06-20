// Alternative approach: Create a separate config file for credentials
export const AUTH_CONFIG = {
  adminEmail: process.env.REACT_APP_ADMIN_EMAIL || "admin@trackstaff.com",
  adminPassword: process.env.REACT_APP_ADMIN_PASSWORD || "admin123",
};

// You can also add multiple admin accounts
export const ADMIN_ACCOUNTS = [
  {
    email: "admin@company.com",
    password: "admin123",
    role: " admin",
  },
  {
    email: "manager@company.com",
    password: "manager123",
    role: "admin",
  },
];
