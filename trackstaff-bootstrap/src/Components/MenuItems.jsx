import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuItems = () => {
  const location = useLocation();

  return (
    <ul className="navbar-nav justify-content-end flex-grow-1 px-2">
      <li className="nav-item">
        <Link
          className={`nav-link ${
            location.pathname === "/dashboard" || location.pathname === "/"
              ? "active"
              : ""
          }`}
          aria-current="page"
          to="/dashboard"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-house"></i>
            <span style={{ fontSize: "15px" }}>Dashboard</span>
          </div>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          className={`nav-link ${
            location.pathname === "/employee" ? "active" : ""
          }`}
          aria-current="page"
          to="/employee"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-people"></i>
            <span style={{ fontSize: "15px" }}>Employee</span>
          </div>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          className={`nav-link ${
            location.pathname === "/attendence" ? "active" : ""
          }`}
          aria-current="page"
          to="/attendence"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-clock"></i>
            <span style={{ fontSize: "15px" }}>Attendence</span>
          </div>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          className={`nav-link ${
            location.pathname === "/emp-logs" ? "active" : ""
          }`}
          aria-current="page"
          to="/emp-logs"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-file-earmark-text"></i>
            <span style={{ fontSize: "15px" }}>Logs</span>
          </div>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          className={`nav-link ${
            location.pathname === "/tasks" ? "active" : ""
          }`}
          aria-current="page"
          to="/tasks"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-check2-circle"></i>
            <span style={{ fontSize: "15px" }}>Tasks</span>
          </div>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          className={`nav-link ${
            location.pathname === "/projects" ? "active" : ""
          }`}
          aria-current="page"
          to="/projects"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-suitcase-lg"></i>
            <span style={{ fontSize: "15px" }}>Projects</span>
          </div>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          className={`nav-link ${
            location.pathname === "/meetings" ? "active" : ""
          }`}
          aria-current="page"
          to="/meetings"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-camera-video"></i>
            <span style={{ fontSize: "15px" }}>Meetings</span>
          </div>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          className={`nav-link ${
            location.pathname === "/reminders" ? "active" : ""
          }`}
          aria-current="page"
          to="/reminders"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-calendar4-event"></i>
            <span style={{ fontSize: "15px" }}>Reminders</span>
          </div>
        </Link>
      </li>

      <li className="nav-item">
        <a
          className="nav-link dropdown-toggle d-flex align-items-center justify-content-between gap-2"
          href="#"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#chats"
          aria-expanded="false"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-chat-square"></i>
            <span style={{ fontSize: "15px" }}>Chats</span>
          </div>
        </a>

        <ul className="dropdown-menu collapse border-0 py-0" id="chats">
          <li>
            <Link className="dropdown-item" to="/chats">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-record-fill pt-1"></i>
                <span>Kamsansar Web</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/chats">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-record-fill pt-1"></i>
                <span>Cheap Flight</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/chats/new">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-plus pt-1"></i>
                <span>Add New Chat</span>
              </div>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default MenuItems;
