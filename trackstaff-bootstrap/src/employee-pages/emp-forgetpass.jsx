import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgetPassword = () => {
  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#f3f6fb" }}
    >
      <div
        className="bg-white p-5 rounded-4 shadow custom-card"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2
          className="text-center fw-bold mb-3"
          style={{ color: "#1AB189", fontSize: "28px" }}
        >
          Email Verification
        </h2>

        <p
          className="text-center text-muted mb-4"
          style={{ fontSize: "15px", lineHeight: "1.6" }}
        >
          Please enter your email address to receive
          <br />a verification code.
        </p>

        <div className="mb-3">
          <input
            type="email"
            className="form-control rounded-3 py-2"
            placeholder="Email"
            style={{ fontSize: "16px" }}
          />
        </div>

        <div className="mb-3">
          <button
            className="btn w-100 fw-bold py-2 rounded-3"
            style={{
              backgroundColor: "#1AB189",
              color: "#fff",
              fontSize: "16px",
            }}
          >
            Send Verification Code
          </button>
        </div>

        <div className="text-center">
          <a
            href="/employeelogin"
            className="btn w-100 fw-bold py-2 rounded-3 text-decoration-none"
            style={{
              backgroundColor: "#fff",
              color: "#1AB189",
              fontSize: "16px",
              border: "2px solid #1AB189",
            }}
          >
            Go to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
