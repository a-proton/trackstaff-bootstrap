import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
const EmployeeSideBar = () => {
  const location = useLocation();

  return (
    <ul className="navbar-nav justify-content-end flex-grow-1 px-2">
      <li className="nav-item">
        <NavLink
          className={`nav-link ${
            location.pathname === "/employee/dashboard" ? "active" : ""
          }`}
          aria-current="page"
          to="/employee/dashboard"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-house"></i>
            <span style={{ fontSize: "15px" }}>Dashboard</span>
          </div>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={`nav-link ${
            location.pathname === "/employee/attendence" ? "active" : ""
          }`}
          aria-current="page"
          to="/employee/attendence"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-clock"></i>
            <span style={{ fontSize: "15px" }}>Attendence</span>
          </div>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={`nav-link ${
            location.pathname === "/employee/logs" ? "active" : ""
          }`}
          aria-current="page"
          to="/employee/logs"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-file-earmark-text"></i>
            <span style={{ fontSize: "15px" }}>Logs</span>
          </div>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          className={`nav-link ${
            location.pathname === "/employee/tasks" ? "active" : ""
          }`}
          aria-current="page"
          to="/employee/tasks"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-check2-circle"></i>
            <span style={{ fontSize: "15px" }}>Tasks</span>
          </div>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          className={`nav-link ${
            location.pathname === "/employee/projects" ? "active" : ""
          }`}
          aria-current="page"
          to="/employee/projects"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-suitcase-lg"></i>
            <span style={{ fontSize: "15px" }}>Projects</span>
          </div>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          className={`nav-link ${
            location.pathname === "/employee/meetings" ? "active" : ""
          }`}
          aria-current="page"
          to="/employee/meetings"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-camera-video"></i>
            <span style={{ fontSize: "15px" }}>Meetings</span>
          </div>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          className={`nav-link ${
            location.pathname === "/employee/reminders" ? "active" : ""
          }`}
          aria-current="page"
          to="/employee/reminders"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-calendar4-event"></i>
            <span style={{ fontSize: "15px" }}>Reminders</span>
          </div>
        </NavLink>
      </li>

      {/* Chats Dropdown */}
      <li className="nav-item">
        <NavLink
          className="nav-link dropdown-toggle d-flex align-items-center justify-content-between gap-2"
          to="/chats"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#chats"
          aria-expanded="false"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-chat-square"></i>
            <span style={{ fontSize: "15px" }}>Chats</span>
          </div>
        </NavLink>

        <ul className="dropdown-menu collapse border-0 py-0" id="chats">
          <li>
            <NavLink className="dropdown-item" to="/employee/chats">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-record-fill pt-1"></i>
                <span>Kamsansar Web</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="/employee/chats">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-record-fill pt-1"></i>
                <span>Cheap Flight</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="chats.html">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-plus pt-1"></i>
                <span>Add New Chat</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default EmployeeSideBar;
