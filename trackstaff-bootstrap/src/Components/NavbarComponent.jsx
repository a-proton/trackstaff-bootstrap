// NavbarComponent.jsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import MenuItems from "./MenuItems";

const NavbarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      if (window.confirm("Are you sure you want to logout?")) {
        await logout();
        const role = user?.role?.toLowerCase();
        if (role === "admin" || role === "administrator") {
          navigate("/adminlogin");
        } else {
          navigate("/employeelogin");
        }
      }
    } catch (error) {
      console.error("Logout error:", error);
      navigate("/employeelogin");
    }
  };

  return (
    <header>
      <nav className="navbar bg-white fixed-top">
        <div className="container-fluid gap-2 py-1">
          <div className="d-flex align-items-center justify-content-between flex-fill">
            {/* Logo */}
            <div className="d-flex align-items-center gap-3 px-2">
              <Link className="navbar-brand fs-2" to="/dashboard">
                <img
                  src="/img/logo.png"
                  alt="Logo"
                  className="img-fluid"
                  style={{ width: "50px" }}
                />
                <span className="text-info fw-bold">Track</span>
                <span className="text-primary">Staff</span>
              </Link>
            </div>

            {/* Notifications and Profile */}
            <div className="d-flex align-items-center gap-4 notification">
              {/* Notification Bell */}
              <div className="dropdown notification-dropdown mt-2">
                <a
                  href="#"
                  className="d-flex align-items-center gap-1 position-relative"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="bi bi-bell fs-3 text-info"></i>
                  <span
                    className="position-absolute translate-middle badge rounded-pill bg-danger d-flex align-items-center justify-content-center"
                    style={{
                      width: "fit-content",
                      height: "20px",
                      left: "80%",
                      top: "5px",
                      paddingInline: "7px",
                    }}
                  >
                    3<span className="visually-hidden">unread messages</span>
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end rounded-4 notification-dropdown-menu border-0 shadow">
                  <li>
                    <a className="dropdown-item disabled py-0 text-black fw-semibold">
                      Notifications
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-start gap-3">
                        <i className="bi bi-check-circle text-primary fs-4"></i>
                        <div>
                          <div>
                            <span className="fw-bold">Task Completed: </span>
                            <span className="text-black-50">
                              Update home page design
                            </span>
                          </div>
                          <span className="text-primary">Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-start gap-3">
                        <i className="bi bi-box-arrow-in-right text-primary fs-5"></i>
                        <div>
                          <div>
                            <span className="fw-bold">Check-In: </span>
                            <span className="text-black-50">
                              You checked in at 10:00 AM
                            </span>
                          </div>
                          <span className="text-primary">Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-start gap-3">
                        <i className="bi bi-box-arrow-right text-danger fs-5"></i>
                        <div>
                          <div>
                            <span className="fw-bold">Check-Out: </span>
                            <span className="text-black-50">
                              You checked out at 10:00 AM
                            </span>
                          </div>
                          <span className="text-danger">05:00 PM</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-start gap-3">
                        <i className="bi bi-calendar text-warning fs-5"></i>
                        <div>
                          <div>
                            <span className="fw-bold">Reminder: </span>
                            <span className="text-black-50">
                              Making New Year Post is still pending
                            </span>
                          </div>
                          <span className="text-warning">Yesterday</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-start gap-3">
                        <i className="bi bi-clock text-info fs-5"></i>
                        <div>
                          <div>
                            <span className="fw-bold">Meeting: </span>
                            <span className="text-black-50">
                              Meeting with team is scheduled for today at 10:00
                              AM
                            </span>
                          </div>
                          <span className="text-info">2025-02-12</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <hr className="mb-2" />
                  <li className="text-center">
                    <Link
                      to="/notifications"
                      className="dropdown-item text-primary d-flex align-items-center gap-2"
                    >
                      View All Notifications{" "}
                      <i className="bi bi-arrow-right fs-4"></i>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Mobile User Dropdown */}
              <div className="d-flex d-md-none align-items-center gap-1 dropdown">
                <a
                  href="#"
                  className="d-flex align-items-center gap-1 position-relative"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    className="bg-dark-subtle rounded-circle"
                    src="../img/user.jpg"
                    alt=""
                  />
                  <span
                    className="position-absolute badge rounded-pill border border-white"
                    style={{
                      width: "10px",
                      height: "10px",
                      right: "0",
                      bottom: "0",
                      backgroundColor: "#56f000",
                    }}
                  ></span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end rounded-4 border-0 shadow">
                  <li>
                    <div className="d-flex align-items-center gap-1 px-3">
                      <img
                        className="bg-dark-subtle rounded-circle"
                        src="../img/user.jpg"
                        alt=""
                      />
                      <div className="d-flex flex-column px-3">
                        <h6 className="fw-bold m-0">{user?.name || "User"}</h6>
                        <p className="text-muted m-0">
                          {user?.role || "Employee"}
                        </p>
                      </div>
                    </div>
                  </li>
                  <hr />
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-person fs-5"></i>
                        <span>Profile</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/change-password" className="dropdown-item">
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-gear fs-5"></i>
                        <span>Change Password</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      <div className="d-flex align-items-center gap-2 text-danger">
                        <i className="bi bi-box-arrow-right fs-5"></i>
                        <span>Logout</span>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Desktop User Dropdown */}
              <div className="d-none d-md-flex align-items-center gap-1">
                <div className="d-flex align-items-center gap-1">
                  <div className="position-relative">
                    <img
                      className="bg-dark-subtle rounded-circle"
                      src="../img/user.jpg"
                      alt=""
                    />
                    <span
                      className="position-absolute badge rounded-pill border border-white"
                      style={{
                        width: "10px",
                        height: "10px",
                        right: "0",
                        bottom: "0",
                        backgroundColor: "#56f000",
                      }}
                    ></span>
                  </div>
                  <div className="d-flex flex-column justify-content-center px-3">
                    <h6 className="fw-bold m-0">
                      {user?.name || "Manish Shrestha"}
                    </h6>
                    <p className="text-muted m-0">{user?.role || "Employee"}</p>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center border border-secondary rounded-circle p-1 dropdown"
                  style={{ width: "30px", height: "30px" }}
                >
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end rounded-4 border-0 shadow">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        <div className="d-flex align-items-center gap-2">
                          <i className="bi bi-person fs-5"></i>
                          <span>Profile</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/change-password">
                        <div className="d-flex align-items-center gap-2">
                          <i className="bi bi-gear fs-5"></i>
                          <span>Change Password</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" onClick={handleLogout}>
                        <div className="d-flex align-items-center gap-2 text-danger">
                          <i className="bi bi-box-arrow-right fs-5"></i>
                          <span>Logout</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Offcanvas */}
          <button
            className="navbar-toggler bg-transparent border-0 d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i className="bi bi-list fs-2 text-info"></i>
          </button>

          <div
            className="offcanvas offcanvas-end shadow border-0"
            tabIndex="-1"
            id="offcanvasNavbar"
            style={{ width: "250px", outline: "none" }}
          >
            <div className="offcanvas-header p-2 gap-2">
              <img
                src="../img/logo.png"
                alt="Logo"
                className="img-fluid"
                style={{ width: "50px" }}
              />
              <Link className="navbar-brand fs-2" to="/dashboard">
                <span className="text-info fw-bold">Track</span>
                <span className="text-primary">Staff</span>
              </Link>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <MenuItems />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarComponent;
