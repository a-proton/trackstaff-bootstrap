const EmployeeAttendence = () => {
  return (
    <main className="p-3">
      <div className="bg-white p-3 rounded-3">
        {/* <!-- Logs Heading Start --> */}
        <div className="d-flex">
          <div className="px-3">
            <h5 className="fs-2 fw-semibold">Attendance List</h5>
            {/* <!-- <p className="">Track your work performance</p> --> */}
          </div>
        </div>
        {/* <!-- Logs Heading End --> */}
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
                    <label for="fromDate">From Date</label>
                    <input
                      type="date"
                      className="form-control py-2"
                      id="fromDate"
                      placeholder="Search by date..."
                      aria-label="Date"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <label for="toDate">To Date</label>
                    <input
                      type="date"
                      className="form-control py-2"
                      id="toDate"
                      placeholder="Search by date..."
                      aria-label="Date"
                    />
                  </div>

                  <div className="flex-grow-0">
                    <button className="btn btn-primary py-2 px-3">
                      <i className="bi bi-search"></i> Search
                    </button>
                  </div>
                </div>
                <div className="table-responsive w-100 mt-3">
                  <table className="table" style={{ textWrap: " balance;" }}>
                    <thead className="table-light border border-light-subtle align-middle">
                      <tr>
                        <th>Emp. Id</th>
                        <th style={{ textAlign: "left;" }}>Employee Name</th>
                        <th style={{ textAlign: "left;" }}>Role</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>001</td>
                        <td style={{ textAlign: "left;" }}>John Doe</td>
                        <td style={{ textAlign: "left;" }}>Admin</td>
                        <td>09:00 AM</td>
                        <td>17:00 PM</td>
                        <td>
                          <span className="bg-primary-subtle px-3 py-1 rounded-5 text-primary">
                            Present
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
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editAttendanceModal"
                                >
                                  <i className="bi bi-pencil-square me-2 text-primary"></i>
                                  Edit Attendance
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#viewAttendanceModal"
                                >
                                  <i className="bi bi-eye me-2 text-progress"></i>
                                  View Attendance
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-2"></i>Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>002</td>
                        <td style={{ textAlign: " left;" }}>Jane Doe</td>
                        <td style={{ textAlign: " left;" }}>Employee</td>
                        <td>09:00 AM</td>
                        <td>17:00 PM</td>
                        <td>
                          <span className="bg-danger-subtle px-3 py-1 rounded-5 text-danger">
                            Absent
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
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editAttendanceModal"
                                >
                                  <i className="bi bi-pencil-square me-2 text-primary"></i>
                                  Edit Attendance
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#viewAttendanceModal"
                                >
                                  <i className="bi bi-eye me-2 text-progress"></i>
                                  View Attendance
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                >
                                  <i className="bi bi-trash me-2"></i>Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* <!-- Edit Attendance Modal --> */}
                <div
                  className="modal fade text-start"
                  id="editAttendanceModal"
                  tabindex="-1"
                  aria-labelledby="editAttendanceModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header pb-0 border-bottom-0 align-items-start">
                        <div>
                          <h5
                            className="modal-title"
                            id="editAttendanceModalLabel"
                          >
                            Edit Attendance
                          </h5>
                          {/* <!-- <p className="text-muted">Fill the form below to edit attendance.</p> --> */}
                        </div>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row g-3">
                            <div className="col-6">
                              <div className="mb-3">
                                <label for="employee-id" className="form-label">
                                  Employee ID
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="employee-id"
                                  value="001"
                                  aria-label="Employee ID"
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="mb-3">
                                <label
                                  for="employee-name"
                                  className="form-label"
                                >
                                  Employee Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="employee-name"
                                  value="John Doe"
                                  aria-label="Employee Name"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label for="role" className="form-label">
                              Role
                            </label>
                            <select
                              name="role"
                              id="role"
                              className="form-select"
                            >
                              <option value="Admin">Admin</option>
                              <option value="UI/UX">UI/UX</option>
                              <option value="Frontend">Frontend</option>
                              <option value="Backend">Backend</option>
                              <option value="Full Stack">Full Stack</option>
                              <option value="Testing">Testing</option>
                              <option value="DevOps">DevOps</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div className="mb-3">
                                <label
                                  for="attendance-date"
                                  className="form-label"
                                >
                                  Due Date
                                </label>
                                <input
                                  type="date"
                                  className="form-control text-dark-emphasis"
                                  id="attendance-date"
                                  aria-label="Attendance Date"
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="mb-3">
                                <label
                                  for="attendance-status"
                                  className="form-label"
                                >
                                  Status
                                </label>
                                <select name="" id="" className="form-select">
                                  <option value="Present">Present</option>
                                  <option value="Absent">Absent</option>
                                  <option value="Half Day">Half Day</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div className="mb-3">
                                <label
                                  for="attendance-check-in-time"
                                  className="form-label"
                                >
                                  Check In Time
                                </label>
                                <input
                                  type="time"
                                  className="form-control"
                                  id="attendance-check-in-time"
                                  aria-label="Attendance Check In Time"
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="mb-3">
                                <label
                                  for="attendance-check-out-time"
                                  className="form-label"
                                >
                                  Check Out Time
                                </label>
                                <input
                                  type="time"
                                  className="form-control"
                                  id="attendance-check-out-time"
                                  aria-label="Attendance Check Out Time"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer border-top-0">
                        <button
                          type="button"
                          className="btn border px-4"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Edit Attendance
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 
              <!-- View Attendance Modal --> */}
                <div
                  className="modal fade text-start"
                  id="viewAttendanceModal"
                  tabindex="-1"
                  aria-labelledby="viewAttendanceModalLabel"
                  aria-hidden="true"
                  style={{ maxHeight: "80vh;" }}
                >
                  <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header pb-0 border-bottom-0 align-items-start">
                        <div>
                          <h5
                            className="modal-title"
                            id="viewAttendanceModalLabel"
                          >
                            Employee Attendance
                          </h5>
                          {/* <!-- <p className="text-muted">Fill the form below to edit attendance.</p> --> */}
                        </div>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex align-items-center gap-2">
                            <div
                              className="d-flex align-items-center justify-content-around overflow-hidden rounded-circle"
                              style={{ width: " 60px", height: " 60px" }}
                            >
                              <img
                                src="../img/user-2.jpg"
                                alt=""
                                className="img-fluid object-fit-cover"
                              />
                            </div>

                            <div>
                              <p className="mb-0 fw-medium fs-5">Nirmal GC</p>
                              <small className="mb-0 text-muted">
                                005 • UI/UX Designer
                              </small>
                            </div>
                          </div>
                          <table className="table table-border w-100">
                            <tr>
                              <td className="w-50">Role</td>
                              <td className="w-50">Senior UI/UX Designer</td>
                            </tr>
                            <tr>
                              <td className="w-50">Email</td>
                              <td className="w-50">yoo@yoo.com</td>
                            </tr>
                            <tr>
                              <td className="w-50">Phone</td>
                              <td className="w-50">+977 1234567890</td>
                            </tr>
                            <tr>
                              <td className="w-50">Join Date</td>
                              <td className="w-50">2022-01-01</td>
                            </tr>
                            <tr>
                              <td className="w-50">Attendance</td>
                              <td className="w-50">98%</td>
                            </tr>
                          </table>
                        </div>
                        <div className="d-flex align-items-stretch">
                          <div className="card border-0 h-100 w-100">
                            <div className="card-body text-center h-100 p-0">
                              <div className="d-flex align-items-center justify-content-between gap-4">
                                <h5
                                  className="card-title d-flex align-items-center gap-2 py-1 text-start"
                                  id="monthHeading"
                                >
                                  <i className="bi bi-clock"></i>
                                  Attendance History - July 2025
                                </h5>
                                <div className="d-flex align-items-center gap-2">
                                  <button
                                    className="btn border py-0 px-1"
                                    id="prevMonthBtn"
                                  >
                                    <i className="bi bi-chevron-left"></i>
                                  </button>
                                  <button
                                    className="btn border py-0 px-1"
                                    id="nextMonthBtn"
                                  >
                                    <i className="bi bi-chevron-right"></i>
                                  </button>
                                </div>
                              </div>
                              <div className="table-responsive w-100 mt-3">
                                <table
                                  className="table"
                                  style={{ textWrap: "balance;" }}
                                >
                                  <thead className="table-light border border-light-subtle align-middle">
                                    <tr className="">
                                      <th>Date</th>
                                      <th>Check In</th>
                                      <th>Check Out</th>
                                      <th>Hours Worked</th>
                                      <th>Status</th>
                                    </tr>
                                  </thead>
                                  <tbody id="attendanceTableBody">
                                    <tr>
                                      <td>2025-05-01</td>
                                      <td>
                                        <i className="bi bi-clock text-primary"></i>{" "}
                                        09:00 AM
                                      </td>
                                      <td>
                                        <i className="bi bi-clock text-danger"></i>{" "}
                                        17:00 PM
                                      </td>
                                      <td>8h 13m</td>
                                      <td>
                                        <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                                          Present
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2025-05-02</td>
                                      <td>
                                        <i className="bi bi-clock text-primary"></i>{" "}
                                        09:00 AM
                                      </td>
                                      <td>
                                        <i className="bi bi-clock text-danger"></i>{" "}
                                        17:00 PM
                                      </td>
                                      <td>8h 13m</td>
                                      <td>
                                        <span className="text-danger bg-danger-subtle rounded-5 py-1 px-2">
                                          Absent
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2025-05-03</td>
                                      <td>
                                        <i className="bi bi-clock text-primary"></i>{" "}
                                        09:00 AM
                                      </td>
                                      <td>
                                        <i className="bi bi-clock text-danger"></i>{" "}
                                        17:00 PM
                                      </td>
                                      <td>8h 13m</td>
                                      <td>
                                        <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                                          Present
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2025-05-04</td>
                                      <td>
                                        <i className="bi bi-clock text-primary"></i>{" "}
                                        09:00 AM
                                      </td>
                                      <td>
                                        <i className="bi bi-clock text-danger"></i>{" "}
                                        17:00 PM
                                      </td>
                                      <td>8h 13m</td>
                                      <td>
                                        <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                                          Present
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2025-05-05</td>
                                      <td>
                                        <i className="bi bi-clock text-primary"></i>{" "}
                                        09:00 AM
                                      </td>
                                      <td>
                                        <i className="bi bi-clock text-danger"></i>{" "}
                                        17:00 PM
                                      </td>
                                      <td>8h 13m</td>
                                      <td>
                                        <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                                          Present
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2025-05-06</td>
                                      <td>
                                        <i className="bi bi-clock text-primary"></i>{" "}
                                        09:00 AM
                                      </td>
                                      <td>
                                        <i className="bi bi-clock text-danger"></i>{" "}
                                        17:00 PM
                                      </td>
                                      <td>8h 13m</td>
                                      <td>
                                        <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                                          Present
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2025-05-07</td>
                                      <td>
                                        <i className="bi bi-clock text-primary"></i>{" "}
                                        09:00 AM
                                      </td>
                                      <td>
                                        <i className="bi bi-clock text-danger"></i>{" "}
                                        17:00 PM
                                      </td>
                                      <td>8h 13m</td>
                                      <td>
                                        <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                                          Present
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2025-05-06</td>
                                      <td>
                                        <i className="bi bi-clock text-primary"></i>{" "}
                                        09:00 AM
                                      </td>
                                      <td>
                                        <i className="bi bi-clock text-danger"></i>{" "}
                                        17:00 PM
                                      </td>
                                      <td>8h 13m</td>
                                      <td>
                                        <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                                          Present
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2025-05-07</td>
                                      <td>
                                        <i className="bi bi-clock text-primary"></i>{" "}
                                        09:00 AM
                                      </td>
                                      <td>
                                        <i className="bi bi-clock text-danger"></i>{" "}
                                        17:00 PM
                                      </td>
                                      <td>8h 13m</td>
                                      <td>
                                        <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                                          Present
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2025-05-06</td>
                                      <td>
                                        <i className="bi bi-clock text-primary"></i>{" "}
                                        09:00 AM
                                      </td>
                                      <td>
                                        <i className="bi bi-clock text-danger"></i>{" "}
                                        17:00 PM
                                      </td>
                                      <td>8h 13m</td>
                                      <td>
                                        <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                                          Present
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2025-05-07</td>
                                      <td>
                                        <i className="bi bi-clock text-primary"></i>{" "}
                                        09:00 AM
                                      </td>
                                      <td>
                                        <i className="bi bi-clock text-danger"></i>{" "}
                                        17:00 PM
                                      </td>
                                      <td>8h 13m</td>
                                      <td>
                                        <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                                          Present
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2025-05-06</td>
                                      <td>
                                        <i className="bi bi-clock text-primary"></i>{" "}
                                        09:00 AM
                                      </td>
                                      <td>
                                        <i className="bi bi-clock text-danger"></i>{" "}
                                        17:00 PM
                                      </td>
                                      <td>8h 13m</td>
                                      <td>
                                        <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                                          Present
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2025-05-07</td>
                                      <td>
                                        <i className="bi bi-clock text-primary"></i>{" "}
                                        09:00 AM
                                      </td>
                                      <td>
                                        <i className="bi bi-clock text-danger"></i>{" "}
                                        17:00 PM
                                      </td>
                                      <td>8h 13m</td>
                                      <td>
                                        <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                                          Present
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer border-top-0">
                        <button
                          type="button"
                          className="btn border px-4"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <a href="#">
                          <button type="submit" className="btn btn-primary">
                            Edit Attendance
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmployeeAttendence;
