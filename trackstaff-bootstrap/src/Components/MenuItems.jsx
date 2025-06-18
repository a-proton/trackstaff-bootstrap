import React from "react";

const MenuItems = () => {
  return (
    <ul className="navbar-nav justify-content-end flex-grow-1 px-2">
      <li className="nav-item">
        <a
          className={`nav-link ${
            location.pathname === "/dashboard" ? "active" : ""
          }`}
          aria-current="page"
          href="dashboard"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-house"></i>
            <span>Dashboard</span>
          </div>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${
            location.pathname === "/employee" ? "active" : ""
          }`}
          aria-current="page"
          href="employee"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-people"></i>
            <span>Employee</span>
          </div>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${
            location.pathname === "/attendence" ? "active" : ""
          }`}
          aria-current="page"
          href="attendence"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-clock"></i>
            <span>Attendence</span>
          </div>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${
            location.pathname === "/emp-logs" ? "active" : ""
          }`}
          aria-current="page"
          href="/emp-logs"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-file-earmark-text"></i>
            <span>Logs</span>
          </div>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${
            location.pathname === "/tasks" ? "active" : ""
          }`}
          aria-current="page"
          href="/tasks"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-check2-circle"></i>
            <span>Tasks</span>
          </div>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${
            location.pathname === "/projects" ? "active" : ""
          }`}
          aria-current="page"
          href="/projects"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-suitcase-lg"></i>
            <span>Projects</span>
          </div>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${
            location.pathname === "/meetings" ? "active" : ""
          }`}
          aria-current="page"
          href="/meetings"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-camera-video"></i>
            <span>Meetings</span>
          </div>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${
            location.pathname === "/reminders" ? "active" : ""
          }`}
          aria-current="page"
          href="/reminders"
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-calendar4-event"></i>
            <span>Reminders</span>
          </div>
        </a>
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
            <span>Chats</span>
          </div>
        </a>

        <ul className="dropdown-menu collapse border-0 py-0" id="chats">
          <li>
            <a className="dropdown-item" href="chats.html">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-record-fill pt-1"></i>
                <span>Kamsansar Web</span>
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="chats.html">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-record-fill pt-1"></i>
                <span>Cheap Flight</span>
              </div>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="chats.html">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-plus pt-1"></i>
                <span>Add New Chat</span>
              </div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default MenuItems;
