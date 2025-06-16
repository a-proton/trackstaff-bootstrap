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

const EmployeeManagement = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showChatsCollapse, setShowChatsCollapse] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

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

            <button className="btn btn-primary">
              <a
                href="add-employee.html"
                className="text-decoration-none text-white"
              >
                <i className="bi bi-plus fs-5"></i> Add Employee
              </a>
            </button>
          </div>

          <div className="row g-3">
            <div className="col-12 d-flex align-items-stretch ">
              <div className="card border-0 h-100 w-100 rounded-3">
                <div className="card-body text-center h-100">
                  <div className="d-flex align-items-end justify-content-between gap-4 text-start flex-wrap">
                    <div className="flex-grow-1">
                      <label for="employeeSearch">Employee Name</label>
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
                          <th style={{ textAlign: "left;" }}>Email Address</th>
                          <th style={{ textAlign: "left;" }}>Employee Name</th>
                          <th style={{ textAlign: "left;" }}>Phone no.</th>
                          <th style={{ textAlign: "left;" }}>Role</th>
                          <th style={{ textAlign: "left;" }}>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody id="adminEmployeeTableBody"></tbody>
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
