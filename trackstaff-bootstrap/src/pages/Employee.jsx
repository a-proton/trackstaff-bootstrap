import React, { useState, useEffect } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  Plus,
  House,
  People,
  Clock,
  FileEarmarkText,
  Check2Circle,
  SuitcaseLg,
  CameraVideo,
  Calendar4Event,
  ChatSquare,
  RecordFill,
  Person,
  Gear,
  BoxArrowRight,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const EmployeeManagement = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showChatsCollapse, setShowChatsCollapse] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate("/add-employee");
  };

  // Sample employee data
  const [employees, setEmployees] = useState([
    {
      id: "EMP001",
      name: "John Doe",
      email: "john.doe@company.com",
      phone: "+1234567890",
      role: "Admin",
      status: "Active",
    },
    {
      id: "EMP002",
      name: "Jane Smith",
      email: "jane.smith@company.com",
      phone: "+1234567891",
      role: "Employee",
      status: "Active",
    },
    {
      id: "EMP003",
      name: "Mike Johnson",
      email: "mike.johnson@company.com",
      phone: "+1234567892",
      role: "Employee",
      status: "Inactive",
    },
  ]);

  const notifications = [
    {
      icon: <Check2Circle className="text-primary fs-4" />,
      title: "Task Completed: ",
      description: "Update home page design",
      time: "Today",
      timeClass: "text-primary",
    },
    {
      icon: <BoxArrowRight className="text-primary fs-5" />,
      title: "Check-In: ",
      description: "You checked in at 10:00 AM",
      time: "Today",
      timeClass: "text-primary",
    },
    {
      icon: <BoxArrowRight className="text-danger fs-5" />,
      title: "Check-Out: ",
      description: "You checked out at 10:00 AM",
      time: "05:00 PM",
      timeClass: "text-danger",
    },
  ];

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRole = !roleFilter || employee.role === roleFilter;
    const matchesStatus = !statusFilter || employee.status === statusFilter;
    const matchesTab = activeTab === "All" || employee.status === activeTab;

    return matchesSearch && matchesRole && matchesStatus && matchesTab;
  });

  const handleSearch = () => {
    // Search is handled by the filter effect above
    console.log("Searching...");
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Active":
        return "badge bg-success";
      case "Inactive":
        return "badge bg-danger";
      case "On Leave":
        return "badge bg-warning";
      default:
        return "badge bg-secondary";
    }
  };

  return (
    <div style={{ backgroundColor: "#F5F6FA", minHeight: "100vh" }}>
      {/* Main Content */}
      <main className="p-3">
        <div className="bg-white p-3 rounded-3">
          {/* <!-- Logs Heading Start --> */}
          <div className="d-flex">
            <div className="px-3 pb-3">
              <h5 className="fs-2 fw-semibold">Employee Management</h5>
              {/* <!-- <p className="">Track your work performance</p> --> */}
            </div>
          </div>
          {/* <!-- Logs Heading End --> */}
          <div className="d-flex justify-content-between align-items-center mb-3 gap-2 flex-wrap bg-white p-1 rounded-3">
            {/* <!-- Tabs --> */}
            <ul className="nav nav-pills border rounded-3 border-1 border-secondary-subtle p-1">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  All
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inactive
                </a>
              </li>
            </ul>

            <button className="btn btn-primary" onClick={handleAddEmployee}>
              <i className="bi bi-plus fs-5"></i> Add Employee
            </button>
          </div>

          <div className="row g-3">
            <div className="col-12 d-flex align-items-stretch ">
              <div className="card border-0 h-100 w-100 rounded-3">
                <div className="card-body text-center h-100">
                  <div className="d-flex align-items-end justify-content-between gap-4 text-start flex-wrap">
                    <div className="flex-grow-1">
                      <label htmlFor="employeeSearch">Employee Name</label>
                      <input
                        type="text"
                        className="form-control multi-user-input py-2"
                        id="employeeSearch"
                        placeholder="Search by employee name..."
                        aria-label="Employee Name"
                      />
                    </div>

                    <div className="flex-grow-1">
                      <select name="" id="" className="form-select py-2">
                        <option value="">Role</option>
                        <option value="">Admin</option>
                        <option value="">Employee</option>
                      </select>
                    </div>
                    <div className="flex-grow-1">
                      <select name="" id="" className="form-select py-2">
                        <option value="">Status</option>
                        <option value="">Active</option>
                        <option value="">Inactive</option>
                        <option value="">On Leave</option>
                      </select>
                    </div>
                    <div className="flex-grow-0">
                      <button className="btn btn-primary py-2 px-3">
                        <i className="bi bi-search"></i> Search
                      </button>
                    </div>
                  </div>
                  <div className="table-responsive w-100 mt-3">
                    <table className="table" style={{ textWrap: "balance;" }}>
                      <thead className="table-light border border-light-subtle align-middle">
                        <tr>
                          <th>Emp. Id</th>
                          <th style={{ textAlign: "left" }}>Employee Name</th>
                          <th style={{ textAlign: "left" }}>Email Address</th>
                          <th style={{ textAlign: "left" }}>Phone no.</th>
                          <th style={{ textAlign: "left" }}>Role</th>
                          <th style={{ textAlign: "left" }}>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>001</td>
                          <td style={{ textAlign: "left" }}>Surya Poudel</td>
                          <td style={{ textAlign: "left" }}>
                            surya.poudel@trackstaff.com
                          </td>
                          <td style={{ textAlign: "left" }}>
                            +1 (296) 196-6013
                          </td>
                          <td style={{ textAlign: "left" }}>Admin</td>
                          <td style={{ textAlign: "left" }}>
                            <span className="bg-danger px-2 py-1 text-white rounded-1 text-nowrap">
                              Inactive
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="dropdown position-static">
                              <button
                                className="btn btn-link text-dark p-0"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bi bi-three-dots-vertical fs-5"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/add-employee"
                                  >
                                    <i className="bi bi-pencil-square me-2 text-primary"></i>
                                    Edit Employee
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/view-employee"
                                  >
                                    <i className="bi bi-eye me-2 text-progress"></i>
                                    View Details
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/employee-logs"
                                  >
                                    <i className="bi bi-file-text me-2 text-primary"></i>
                                    Log Reports
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/attendence"
                                  >
                                    <i className="bi bi-clock me-2 text-warning"></i>
                                    Attendance
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/sub-tasks"
                                  >
                                    <i className="bi bi-check2-circle me-2 text-primary"></i>
                                    Task Report
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="bi bi-trash me-2"></i>Delete
                                    Employee
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>002</td>
                          <td style={{ textAlign: "left" }}>Manish Shrestha</td>
                          <td style={{ textAlign: "left" }}>
                            manish.shrestha@trackstaff.com
                          </td>
                          <td style={{ textAlign: "left" }}>
                            +1 (535) 432-9081
                          </td>
                          <td style={{ textAlign: "left" }}>Developer</td>
                          <td style={{ textAlign: "left" }}>
                            <span className="bg-primary px-2 py-1 text-white rounded-1 text-nowrap">
                              Active
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="dropdown position-static">
                              <button
                                className="btn btn-link text-dark p-0"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bi bi-three-dots-vertical fs-5"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/edit-employee"
                                  >
                                    <i className="bi bi-pencil-square me-2 text-primary"></i>
                                    Edit Employee
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/view-employee"
                                  >
                                    <i className="bi bi-eye me-2 text-progress"></i>
                                    View Details
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="logs-employee.html"
                                  >
                                    <i className="bi bi-file-text me-2 text-primary"></i>
                                    Log Reports
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="attendance.html"
                                  >
                                    <i className="bi bi-clock me-2 text-warning"></i>
                                    Attendance
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="subtasks.html"
                                  >
                                    <i className="bi bi-check2-circle me-2 text-primary"></i>
                                    Task Report
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="bi bi-trash me-2"></i>Delete
                                    Employee
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>003</td>
                          <td style={{ textAlign: "left" }}>Kabita Subedi</td>
                          <td style={{ textAlign: "left" }}>
                            kabita.subedi@trackstaff.com
                          </td>
                          <td style={{ textAlign: "left" }}>
                            +1 (532) 293-7403
                          </td>
                          <td style={{ textAlign: "left" }}>Designer</td>
                          <td style={{ textAlign: "left" }}>
                            <span className="bg-primary px-2 py-1 text-white rounded-1 text-nowrap">
                              Active
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="dropdown position-static">
                              <button
                                className="btn btn-link text-dark p-0"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bi bi-three-dots-vertical fs-5"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="add-employee.html"
                                  >
                                    <i className="bi bi-pencil-square me-2 text-primary"></i>
                                    Edit Employee
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/view-employee"
                                  >
                                    <i className="bi bi-eye me-2 text-progress"></i>
                                    View Details
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="logs-employee.html"
                                  >
                                    <i className="bi bi-file-text me-2 text-primary"></i>
                                    Log Reports
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="attendance.html"
                                  >
                                    <i className="bi bi-clock me-2 text-warning"></i>
                                    Attendance
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="subtasks.html"
                                  >
                                    <i className="bi bi-check2-circle me-2 text-primary"></i>
                                    Task Report
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="bi bi-trash me-2"></i>Delete
                                    Employee
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>004</td>
                          <td style={{ textAlign: "left" }}>Sangam Giri</td>
                          <td style={{ textAlign: "left" }}>
                            sangam.giri@trackstaff.com
                          </td>
                          <td style={{ textAlign: "left" }}>
                            +1 (635) 717-6488
                          </td>
                          <td style={{ textAlign: "left" }}>Developer</td>
                          <td style={{ textAlign: "left" }}>
                            <span className="bg-danger px-2 py-1 text-white rounded-1 text-nowrap">
                              Inactive
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="dropdown position-static">
                              <button
                                className="btn btn-link text-dark p-0"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bi bi-three-dots-vertical fs-5"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="edit-employee"
                                  >
                                    <i className="bi bi-pencil-square me-2 text-primary"></i>
                                    Edit Employee
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/view-employee"
                                  >
                                    <i className="bi bi-eye me-2 text-progress"></i>
                                    View Details
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/employee-logs"
                                  >
                                    <i className="bi bi-file-text me-2 text-primary"></i>
                                    Log Reports
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/attendence"
                                  >
                                    <i className="bi bi-clock me-2 text-warning"></i>
                                    Attendance
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/sub-tasks"
                                  >
                                    <i className="bi bi-check2-circle me-2 text-primary"></i>
                                    Task Report
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="bi bi-trash me-2"></i>Delete
                                    Employee
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>005</td>
                          <td style={{ textAlign: "left" }}>Nirmal GC</td>
                          <td style={{ textAlign: "left" }}>
                            nirmal.gc@trackstaff.com
                          </td>
                          <td style={{ textAlign: "left" }}>
                            +1 (922) 696-3392
                          </td>
                          <td style={{ textAlign: "left" }}>Tester</td>
                          <td style={{ textAlign: "left" }}>
                            <span className="bg-warning px-2 py-1 text-white rounded-1 text-nowrap">
                              On Leave
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="dropdown position-static">
                              <button
                                className="btn btn-link text-dark p-0"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bi bi-three-dots-vertical fs-5"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="add-employee.html"
                                  >
                                    <i className="bi bi-pencil-square me-2 text-primary"></i>
                                    Edit Employee
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/view-employee"
                                  >
                                    <i className="bi bi-eye me-2 text-progress"></i>
                                    View Details
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="logs-employee.html"
                                  >
                                    <i className="bi bi-file-text me-2 text-primary"></i>
                                    Log Reports
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="attendance.html"
                                  >
                                    <i className="bi bi-clock me-2 text-warning"></i>
                                    Attendance
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="subtasks.html"
                                  >
                                    <i className="bi bi-check2-circle me-2 text-primary"></i>
                                    Task Report
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="bi bi-trash me-2"></i>Delete
                                    Employee
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>006</td>
                          <td style={{ textAlign: "left" }}>Susmita Poudel</td>
                          <td style={{ textAlign: "left" }}>
                            susmita.poudel@trackstaff.com
                          </td>
                          <td style={{ textAlign: "left" }}>
                            +1 (326) 916-6734
                          </td>
                          <td style={{ textAlign: "left" }}>Content Writer</td>
                          <td style={{ textAlign: "left" }}>
                            <span className="bg-danger px-2 py-1 text-white rounded-1 text-nowrap">
                              Inactive
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="dropdown position-static">
                              <button
                                className="btn btn-link text-dark p-0"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bi bi-three-dots-vertical fs-5"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="add-employee.html"
                                  >
                                    <i className="bi bi-pencil-square me-2 text-primary"></i>
                                    Edit Employee
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/view-employee"
                                  >
                                    <i className="bi bi-eye me-2 text-progress"></i>
                                    View Details
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="logs-employee.html"
                                  >
                                    <i className="bi bi-file-text me-2 text-primary"></i>
                                    Log Reports
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="attendance.html"
                                  >
                                    <i className="bi bi-clock me-2 text-warning"></i>
                                    Attendance
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="subtasks.html"
                                  >
                                    <i className="bi bi-check2-circle me-2 text-primary"></i>
                                    Task Report
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="bi bi-trash me-2"></i>Delete
                                    Employee
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>007</td>
                          <td style={{ textAlign: "left" }}>Rohan GC</td>
                          <td style={{ textAlign: "left" }}>
                            rohan.gc@trackstaff.com
                          </td>
                          <td style={{ textAlign: "left" }}>
                            +1 (229) 868-6664
                          </td>
                          <td style={{ textAlign: "left" }}>Developer</td>
                          <td style={{ textAlign: "left" }}>
                            <span className="bg-warning px-2 py-1 text-white rounded-1 text-nowrap">
                              On Leave
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="dropdown position-static">
                              <button
                                className="btn btn-link text-dark p-0"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bi bi-three-dots-vertical fs-5"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="add-employee.html"
                                  >
                                    <i className="bi bi-pencil-square me-2 text-primary"></i>
                                    Edit Employee
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/view-employee"
                                  >
                                    <i className="bi bi-eye me-2 text-progress"></i>
                                    View Details
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="logs-employee.html"
                                  >
                                    <i className="bi bi-file-text me-2 text-primary"></i>
                                    Log Reports
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="attendance.html"
                                  >
                                    <i className="bi bi-clock me-2 text-warning"></i>
                                    Attendance
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="subtasks.html"
                                  >
                                    <i className="bi bi-check2-circle me-2 text-primary"></i>
                                    Task Report
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="bi bi-trash me-2"></i>Delete
                                    Employee
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>008</td>
                          <td style={{ textAlign: "left" }}>Bisai Chhetri</td>
                          <td style={{ textAlign: "left" }}>
                            bisai.chhetri@trackstaff.com
                          </td>
                          <td style={{ textAlign: "left" }}>
                            +1 (650) 165-8710
                          </td>
                          <td style={{ textAlign: "left" }}>Designer</td>
                          <td style={{ textAlign: "left" }}>
                            <span className="bg-primary px-2 py-1 text-white rounded-1 text-nowrap">
                              Active
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="dropdown position-static">
                              <button
                                className="btn btn-link text-dark p-0"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bi bi-three-dots-vertical fs-5"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="add-employee.html"
                                  >
                                    <i className="bi bi-pencil-square me-2 text-primary"></i>
                                    Edit Employee
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/view-employee"
                                  >
                                    <i className="bi bi-eye me-2 text-progress"></i>
                                    View Details
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="logs-employee.html"
                                  >
                                    <i className="bi bi-file-text me-2 text-primary"></i>
                                    Log Reports
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="attendance.html"
                                  >
                                    <i className="bi bi-clock me-2 text-warning"></i>
                                    Attendance
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="subtasks.html"
                                  >
                                    <i className="bi bi-check2-circle me-2 text-primary"></i>
                                    Task Report
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="bi bi-trash me-2"></i>Delete
                                    Employee
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>009</td>
                          <td style={{ textAlign: "left" }}>
                            Bishwo Raj Parajuli
                          </td>
                          <td style={{ textAlign: "left" }}>
                            bishwo.raj.parajuli@trackstaff.com
                          </td>
                          <td style={{ textAlign: "left" }}>
                            +1 (758) 512-5258
                          </td>
                          <td style={{ textAlign: "left" }}>Manager</td>
                          <td style={{ textAlign: "left" }}>
                            <span className="bg-warning px-2 py-1 text-white rounded-1 text-nowrap">
                              On Leave
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="dropdown position-static">
                              <button
                                className="btn btn-link text-dark p-0"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bi bi-three-dots-vertical fs-5"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="add-employee.html"
                                  >
                                    <i className="bi bi-pencil-square me-2 text-primary"></i>
                                    Edit Employee
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/view-employee"
                                  >
                                    <i className="bi bi-eye me-2 text-progress"></i>
                                    View Details
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="logs-employee.html"
                                  >
                                    <i className="bi bi-file-text me-2 text-primary"></i>
                                    Log Reports
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="attendance.html"
                                  >
                                    <i className="bi bi-clock me-2 text-warning"></i>
                                    Attendance
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="subtasks.html"
                                  >
                                    <i className="bi bi-check2-circle me-2 text-primary"></i>
                                    Task Report
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="bi bi-trash me-2"></i>Delete
                                    Employee
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>010</td>
                          <td style={{ textAlign: "left" }}>Xitij Shrestha</td>
                          <td style={{ textAlign: "left" }}>
                            xitij.shrestha@trackstaff.com
                          </td>
                          <td style={{ textAlign: "left" }}>
                            +1 (150) 534-4977
                          </td>
                          <td style={{ textAlign: "left" }}>Intern</td>
                          <td style={{ textAlign: "left" }}>
                            <span className="bg-primary px-2 py-1 text-white rounded-1 text-nowrap">
                              Active
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="dropdown position-static">
                              <button
                                className="btn btn-link text-dark p-0"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bi bi-three-dots-vertical fs-5"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="add-employee.html"
                                  >
                                    <i className="bi bi-pencil-square me-2 text-primary"></i>
                                    Edit Employee
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/view-employee"
                                  >
                                    <i className="bi bi-eye me-2 text-progress"></i>
                                    View Details
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="logs-employee.html"
                                  >
                                    <i className="bi bi-file-text me-2 text-primary"></i>
                                    Log Reports
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="attendance.html"
                                  >
                                    <i className="bi bi-clock me-2 text-warning"></i>
                                    Attendance
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="subtasks.html"
                                  >
                                    <i className="bi bi-check2-circle me-2 text-primary"></i>
                                    Task Report
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="bi bi-trash me-2"></i>Delete
                                    Employee
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeManagement;
