"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      const result = login(email, password);

      if (result.success) {
        // Small delay to show success state
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred during login. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#f3f6fb" }}
    >
      <div
        className="bg-white p-5 rounded-4 shadow custom-card"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center fw-bold mb-4" style={{ color: "#1AB189" }}>
          Admin Login
        </h2>

        {/* Debug info - remove in production */}
        <div className="alert alert-info" role="alert">
          <small>
            <strong>Demo Credentials:</strong>
            <br />
            Email: admin@trackstaff.com
            <br />
            Password: admin123
          </small>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control rounded-3 py-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ fontSize: "16px" }}
              required
              disabled={loading}
            />
          </div>

          <div className="mb-2 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control rounded-3 py-2 pe-5"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ fontSize: "16px" }}
              required
              disabled={loading}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
              style={{ cursor: "pointer" }}
            >
              <i
                className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
              ></i>
            </span>
          </div>

          <div className="text-center mb-4">
            <a
              href="/employeelogin"
              className="text-primary text-decoration-none"
              style={{ fontSize: "14px" }}
            >
              Employee Login
            </a>
          </div>

          <button
            type="submit"
            className="btn w-100 fw-bold py-2 rounded-3"
            style={{
              backgroundColor: loading ? "#6c757d" : "#1AB189",
              color: "#fff",
              fontSize: "18px",
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
