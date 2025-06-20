import React from "react";

const Dashboard = () => {
  return (
    <main className="p-2 pt-3" style={{ backgroundColor: "#F5F6FA" }}>
      <div className="px-2 ">
        {/* Task Boxes Row Start */}
        <div className="row overflow-hidden g-3">
          <div className="col-6 col-xl-3 d-flex align-items-stretch">
            <div className="card border-0 shadow-sm h-100 w-100 p-3 bg-white gap-2">
              <div className="card-title d-flex align-items-start justify-content-between gap-2 m-0">
                <div>
                  <p className="mb-1 fw-semibold">Total Employee</p>
                  <p className="mb-0 fs-2 fw-semibold">15</p>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center fs-3 text-progress rounded-circle bg-progress-subtle"
                  style={{ width: "60px", height: "55px" }}
                >
                  <i className="bi bi-people"></i>
                </div>
              </div>
              <p className="mb-0 text-muted">All Active Employees</p>
            </div>
          </div>
          <div className="col-6 col-xl-3 d-flex align-items-stretch">
            <div className="card border-0 shadow-sm h-100 w-100 p-3 bg-white gap-2">
              <div className="card-title d-flex align-items-start justify-content-between gap-2 m-0">
                <div>
                  <p className="mb-1 fw-semibold">Attendance</p>
                  <p className="mb-0 fs-2 fw-semibold">92%</p>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center fs-3 text-primary rounded-circle bg-primary-subtle"
                  style={{ width: "60px", height: "55px" }}
                >
                  <i className="bi bi-check-circle"></i>
                </div>
              </div>
              <p className="mb-0 text-muted">10 of 15 present</p>
            </div>
          </div>
          <div className="col-6 col-xl-3 d-flex align-items-stretch">
            <div className="card border-0 shadow-sm h-100 w-100 p-3 bg-white gap-2">
              <div className="card-title d-flex align-items-start justify-content-between gap-2 m-0">
                <div>
                  <p className="mb-1 fw-semibold">Ongoing Projects</p>
                  <p className="mb-0 fs-2 fw-semibold">12</p>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center fs-3 text-warning rounded-circle bg-warning-subtle"
                  style={{ width: "60px", height: "55px" }}
                >
                  <i className="bi bi-box"></i>
                </div>
              </div>
              <p className="mb-0 text-muted">In Progress</p>
            </div>
          </div>
          <div className="col-6 col-xl-3 d-flex align-items-stretch">
            <div className="card border-0 shadow-sm h-100 w-100 p-3 bg-white gap-2">
              <div className="card-title d-flex align-items-start justify-content-between gap-2 m-0">
                <div>
                  <p className="mb-1 fw-semibold">Task Pending</p>
                  <p className="mb-0 fs-2 fw-semibold">23</p>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center fs-3 text-danger rounded-circle bg-danger-subtle"
                  style={{ width: "60px", height: "55px" }}
                >
                  <i className="bi bi-arrow-counterclockwise"></i>
                </div>
              </div>
              <p className="mb-0 text-muted">Not Yet Completed</p>
            </div>
          </div>
        </div>
        {/* Task Boxes Row End */}

        {/* Employee Attendance, Projects, System Alerts & Quick Links Row Start */}
        <div className="row overflow-hidden g-3 pt-2 h-100">
          <div className="col-12 col-xl-6 col-xxl-4 p-2 align-items-stretch">
            <div className="card p-3 flex-column gap-3 h-100 border-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column align-items-start gap-1">
                  <h4 className="fw-semibold m-0" style={{ fontSize: "24px" }}>
                    Employee Attendance
                  </h4>
                  <p className="text-muted m-0  " style={{ fontSize: "18px" }}>
                    Week of Apr 20-27, 2025
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button className="btn py-0 px-1" id="prevLogsBtn">
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <button className="btn py-0 px-1" id="nextLogsBtn">
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="p-2">
                  <img
                    className="img-fluid w-100"
                    src="../img/attendance-chart.png"
                    alt="Attendance"
                  />
                </div>

                <div className="d-flex flex-wrap gap-4 my-3">
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between gap-2 border-start border-4 border-progress rounded-4 p-3 shadow-sm">
                      <div className="">
                        <p className="mb-0" style={{ fontSize: "12px" }}>
                          Avg Attendance
                        </p>
                        <p
                          className="mb-0  fw-bold text-progress"
                          style={{ fontSize: "24px" }}
                        >
                          85%
                        </p>
                      </div>
                      <div
                        className="bg-progress-subtle p-2 rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-graph-up text-progress fs-3"></i>
                      </div>
                    </div>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between gap-2 border-start border-4 border-primary rounded-4 p-3 shadow-sm">
                      <div className="">
                        <p className="mb-0" style={{ fontSize: "12px" }}>
                          Total Present
                        </p>
                        <p
                          className="mb-0  fw-bold text-primary"
                          style={{ fontSize: "24px" }}
                        >
                          78{" "}
                          <small
                            className="text-muted  fw-normal"
                            style={{ fontSize: "14px" }}
                          >
                            days
                          </small>
                        </p>
                      </div>
                      <div
                        className="bg-primary-subtle p-2 rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-check-circle text-primary fs-3"></i>
                      </div>
                    </div>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between gap-2 border-start border-4 border-danger rounded-4 p-3 shadow-sm flex-fill">
                      <div className="">
                        <p className="mb-0" style={{ fontSize: "12px" }}>
                          Total Absent
                        </p>
                        <p
                          className="mb-0  fw-bold text-danger"
                          style={{ fontSize: "24px" }}
                        >
                          50{" "}
                          <small
                            className="text-muted  fw-normal"
                            style={{ fontSize: "14px" }}
                          >
                            days
                          </small>
                        </p>
                      </div>
                      <div
                        className="bg-danger-subtle p-2 rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-exclamation-circle text-danger fs-3"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto mb-3">
                <a
                  href="/attendence"
                  className="text-primary fs-5 border-0 border-bottom border-primary pb-1"
                >
                  View Attendance <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-xxl-5 p-2 align-items-stretch">
            <div className="card p-3 flex-column gap-3 h-100 border-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <h4 className="fw-semibold m-0" style={{ fontSize: "24px" }}>
                    Projects
                  </h4>
                </div>
              </div>
              <div className="">
                <h3 className="fw-semibold" style={{ fontSize: "20px" }}>
                  Kamsansar
                </h3>
                <div className="d-flex justify-content-between gap-1 mb-1">
                  <p className="mb-0 fw-medium  " style={{ fontSize: "14px" }}>
                    Overall completion
                  </p>
                  <p className="mb-0 text-danger fw-semibold">36%</p>
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow="36"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-danger rounded-5"
                    style={{ width: "36%" }}
                  ></div>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <p
                    className="bg-primary text-white p-2 rounded-5"
                    style={{ fontSize: "11px" }}
                  >
                    Completed: 14
                  </p>
                  <p
                    className="bg-progress text-white p-2 rounded-5"
                    style={{ fontSize: "11px" }}
                  >
                    InProgress: 6
                  </p>
                  <p
                    className="bg-warning text-white p-2 rounded-5"
                    style={{ fontSize: "11px" }}
                  >
                    Pending: 2
                  </p>
                  <p
                    className="bg-danger text-white p-2 rounded-5"
                    style={{ fontSize: "11px" }}
                  >
                    Cancelled: 1
                  </p>
                </div>
              </div>
              <div className="w-100">
                <h4 className="fw-semibold" style={{ fontSize: "20px" }}>
                  Kamsansar
                </h4>
                <div className="d-flex justify-content-between gap-1 mb-1">
                  <p className="mb-0 fw-medium " style={{ fontSize: "14px" }}>
                    Overall completion
                  </p>
                  <p className="mb-0 text-progress fw-semibold">68%</p>
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow="68"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-progress rounded-5"
                    style={{ width: "68%" }}
                  ></div>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <p
                    className="bg-primary text-white p-2 rounded-5"
                    style={{ fontSize: "11px" }}
                  >
                    Completed: 14
                  </p>
                  <p
                    className="bg-progress text-white p-2 rounded-5"
                    style={{ fontSize: "11px" }}
                  >
                    InProgress: 6
                  </p>
                  <p
                    className="bg-warning text-white p-2 rounded-5"
                    style={{ fontSize: "11px" }}
                  >
                    Pending: 2
                  </p>
                  <p
                    className="bg-danger text-white p-2 rounded-5"
                    style={{ fontSize: "11px" }}
                  >
                    Cancelled: 1
                  </p>
                </div>
              </div>
              <div className="">
                <h4 className="fw-semibold" style={{ fontSize: "20px" }}>
                  Kamsansar
                </h4>
                <div className="d-flex justify-content-between gap-1 mb-1">
                  <p className="mb-0 fw-medium  " style={{ fontSize: "14px" }}>
                    Overall completion
                  </p>
                  <p className="mb-0 text-primary fw-semibold">90%</p>
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-primary rounded-5"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <p
                    className="bg-primary text-white p-2 rounded-5"
                    style={{ fontSize: "11px" }}
                  >
                    Completed: 14
                  </p>
                  <p
                    className="bg-progress text-white p-2 rounded-5"
                    style={{ fontSize: "11px" }}
                  >
                    InProgress: 6
                  </p>
                  <p
                    className="bg-warning text-white p-2 rounded-5"
                    style={{ fontSize: "11px" }}
                  >
                    Pending: 2
                  </p>
                  <p
                    className="bg-danger text-white p-2 rounded-5"
                    style={{ fontSize: "11px" }}
                  >
                    Cancelled: 1
                  </p>
                </div>
              </div>

              <div className="mt-auto mb-3">
                <a
                  href="/projects"
                  className="text-primary fs-5 border-0 border-bottom border-primary pb-1"
                >
                  View Projects <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-3 p-2 align-items-stretch">
            <div className="d-flex flex-column flex-lg-row flex-xxl-column gap-3 h-100">
              <div className="card p-3 flex-column gap-3 border-0 col">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex flex-column gap-3">
                    <h4
                      className="fw-semibold m-0"
                      style={{ fontSize: "20px" }}
                    >
                      System Alerts
                    </h4>
                    <p className="text-danger m-0" style={{ fontSize: "15px" }}>
                      <i className="bi bi-exclamation-circle"></i> 3 employee
                      absent today
                    </p>
                    <p className="text-danger m-0" style={{ fontSize: "15px" }}>
                      <i className="bi bi-exclamation-circle"></i> 34 tasks
                      delayed
                    </p>
                    <p
                      className="text-danger m-0 "
                      style={{ fontSize: "15px" }}
                    >
                      <i className="bi bi-exclamation-circle"></i> 2 project
                      approval pending
                    </p>
                    <p className="text-danger m-0" style={{ fontSize: "16px" }}>
                      <i className="bi bi-exclamation-circle"></i> 1 project
                      approval rejected
                    </p>
                    <p className="text-danger m-0" style={{ fontSize: "15px" }}>
                      <i className="bi bi-exclamation-circle"></i> 1 project
                      approval rejected
                    </p>
                  </div>
                </div>
              </div>
              <div className="card p-3 flex-column gap-3 border-0 col">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex flex-column gap-3 w-100">
                    <h4
                      className="fw-semibold m-0"
                      style={{ fontSize: "20px" }}
                    >
                      Quick Links
                    </h4>
                    <button
                      className="btn btn-primary w-100 rounded-3 text-start"
                      style={{ fontSize: "16px" }}
                    >
                      <i className="bi bi-plus"></i> Add Project
                    </button>
                    <button
                      className="btn btn-primary w-100 rounded-3 text-start"
                      style={{ fontSize: "16px" }}
                    >
                      <i className="bi bi-plus"></i> Add Task
                    </button>
                    <button
                      className="btn btn-primary w-100 rounded-3 text-start"
                      style={{ fontSize: "16px" }}
                    >
                      <i className="bi bi-plus"></i> Add Employee
                    </button>
                    <button
                      className="btn btn-primary w-100 rounded-3 text-start"
                      style={{ fontSize: "16px" }}
                    >
                      <i className="bi bi-plus"></i> Add Attendance
                    </button>
                    <button
                      className="btn btn-primary w-100 rounded-3 text-start"
                      style={{ fontSize: "16px" }}
                    >
                      <i className="bi bi-plus"></i> Add Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Employee Attendance, Projects, System Alerts & Quick Links Row End */}

        {/* Employee Activities & Performance Timeline Row Start */}
        <div className="row overflow-hidden g-3 pt-2 h-100">
          <div className="col-12 col-xl-6 p-2 align-items-stretch">
            <div className="card p-3 flex-column gap-3 h-100 border-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <h4 className="fw-semibold m-0" style={{ fontSize: "20px" }}>
                    Employee Activities
                  </h4>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium "
                        style={{ fontSize: "18px" }}
                      >
                        Nirmal GC
                      </p>
                      <small className="mb-0 text-muted">2 hours ago</small>
                    </div>
                    <p
                      className="mb-0   text-muted"
                      style={{ fontSize: "14px" }}
                    >
                      Completed Tasks
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-2.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium "
                        style={{ fontSize: "18px" }}
                      >
                        Sangam Giri
                      </p>
                      <small className="mb-0 text-muted">2 hours ago</small>
                    </div>
                    <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
                      Added New Tasks
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-3.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium "
                        style={{ fontSize: "18px" }}
                      >
                        Mandeep
                      </p>
                      <small className="mb-0 text-muted">2 hours ago</small>
                    </div>
                    <p
                      className="mb-0   text-muted"
                      style={{ fontSize: "14px" }}
                    >
                      Checked In
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium "
                        style={{ fontSize: "18px" }}
                      >
                        Nirmal GC
                      </p>
                      <small className="mb-0 text-muted">2 hours ago</small>
                    </div>
                    <p
                      className="mb-0   text-muted"
                      style={{ fontSize: "14px" }}
                    >
                      Checked Out
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium  "
                        style={{ fontSize: "18px" }}
                      >
                        Nirmal GC
                      </p>
                      <small className="mb-0 text-muted">2 hours ago</small>
                    </div>
                    <p
                      className="mb-0   text-muted"
                      style={{ fontSize: "14px" }}
                    >
                      Updated tasks
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium "
                        style={{ fontSize: "18px" }}
                      >
                        Nirmal GC
                      </p>
                      <small className="mb-0 text-muted">2 hours ago</small>
                    </div>
                    <p
                      className="mb-0   text-muted"
                      style={{ fontSize: "14px" }}
                    >
                      Checked In
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 p-2 align-items-stretch">
            <div className="card p-3 flex-column gap-3 h-100 border-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <h4 className="fw-semibold m-0" style={{ fontSize: "20px" }}>
                    Performance Timeline
                  </h4>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium "
                        style={{ fontSize: "18px" }}
                      >
                        Nirmal GC
                      </p>
                      <p className="mb-0 text-primary fw-semibold">78%</p>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow="78"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-primary rounded-5"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-2.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium "
                        style={{ fontSize: "18px" }}
                      >
                        Sangam Giri
                      </p>
                      <p className="mb-0 text-danger fw-semibold">24%</p>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow="24"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-danger rounded-5"
                        style={{ width: "24%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-3.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium "
                        style={{ fontSize: "18px" }}
                      >
                        Mandeep
                      </p>
                      <p className="mb-0 text-warning fw-semibold">56%</p>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow="56"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-warning rounded-5"
                        style={{ width: "56%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium "
                        style={{ fontSize: "18px" }}
                      >
                        Nirmal GC
                      </p>
                      <p className="mb-0 text-progress fw-semibold">68%</p>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow="68"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-progress rounded-5"
                        style={{ width: "68%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium  "
                        style={{ fontSize: "18px" }}
                      >
                        Nirmal GC
                      </p>
                      <p className="mb-0 text-primary fw-semibold">89%</p>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-primary rounded-5"
                        style={{ width: "89%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium  "
                        style={{ fontSize: "18px" }}
                      >
                        Nirmal GC
                      </p>
                      <small className="mb-0 text-muted">10:00 AM</small>
                    </div>
                    <p
                      className="mb-0  text-muted"
                      style={{ fontSize: "14px" }}
                    >
                      <span style={{ color: "#0D99FF", fontSize: "14px" }}>
                        @Manish
                      </span>{" "}
                      How are you?
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium "
                        style={{ fontSize: "18px" }}
                      >
                        Nirmal GC
                      </p>
                      <small className="mb-0 text-muted">10:00 AM</small>
                    </div>
                    <p
                      className="mb-0   text-muted"
                      style={{ fontSize: "14px" }}
                    >
                      <span style={{ color: "#0D99FF" }}>@Manish</span> How are
                      you?
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p
                        className="mb-0 fw-medium  "
                        style={{ fontSize: "18px" }}
                      >
                        Nirmal GC
                      </p>
                      <small className="mb-0 text-muted">10:00 AM</small>
                    </div>
                    <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
                      <span style={{ color: "#0D99FF" }}>@Hello</span> How are
                      you?
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-auto mb-3">
                <a
                  href="/chats"
                  className="text-primary fs-5 border-0 border-bottom border-primary pb-1"
                >
                  View All Chats <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Task & Recent Chats Row End */}

        {/* Task Status Row Start */}
        <div className="row overflow-hidden g-2 pt-2 h-100">
          <div className="col-12 col-lg-6 col-xl-4 p-2 align-items-stretch">
            <div className="card p-3 flex-column gap-3 h-100 border-0">
              <div className="d-flex">
                <p
                  className="  fw-semibold m-0 px-3 py-2 text-white bg-warning rounded-1"
                  style={{ fontSize: "18px" }}
                >
                  Pending
                </p>
              </div>
              <div className="d-flex flex-column position-relative">
                <div
                  className="position-absolute top-0 bg-dark-subtle h-100 z-0"
                  style={{ width: "3px", left: "8px" }}
                ></div>
                <ul className="d-flex flex-column gap-4 p-0 z-1 mt-1">
                  <li className="d-flex gap-3 list-unstyledm-0">
                    <div
                      className="bg-warning mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p
                        className="mb-1 fw-medium"
                        style={{ fontSize: "18px" }}
                      >
                        Cheap Flights Nepal
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Home Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 list-unstyled m-0">
                    <div
                      className="bg-warning mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p
                        className="mb-1 fw-medium"
                        style={{ fontSize: "18px" }}
                      >
                        Cheap Flights Nepal
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Home Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 p-2 align-items-stretch">
            <div className="card p-3 flex-column gap-3 h-100 border-0">
              <div className="d-flex">
                <p
                  className="  fw-semibold m-0 px-3 py-2 text-white bg-progress rounded-1"
                  style={{ fontSize: "18px" }}
                >
                  In Progress
                </p>
              </div>
              <div className="d-flex flex-column position-relative">
                <div
                  className="position-absolute top-0 bg-dark-subtle h-100 z-0"
                  style={{ width: "3px", left: "8px" }}
                ></div>
                <ul className="d-flex flex-column gap-4 p-0 z-1 mt-1">
                  <li className="d-flex gap-3 list-unstyledm-0">
                    <div
                      className="bg-progress mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p
                        className="mb-1 fw-medium"
                        style={{ fontSize: "18px" }}
                      >
                        Cheap Flights Nepal
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Home Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 list-unstyled m-0">
                    <div
                      className="bg-progress mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p
                        className="mb-1 fw-medium"
                        style={{ fontSize: "18px" }}
                      >
                        Cheap Flights Nepal
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Home Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 list-unstyled m-0">
                    <div
                      className="bg-progress mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p
                        className="mb-1 fw-medium"
                        style={{ fontSize: "18px" }}
                      >
                        Cheap Flights Nepal
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Home Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 p-2 align-items-stretch">
            <div className="card p-3 flex-column gap-3 h-100 border-0">
              <div className="d-flex">
                <p
                  className="  fw-semibold m-0 px-3 py-2 text-white bg-primary rounded-1"
                  style={{ fontSize: "18px" }}
                >
                  Completed
                </p>
              </div>
              <div className="d-flex flex-column position-relative">
                <div
                  className="position-absolute top-0 bg-dark-subtle h-100 z-0"
                  style={{ width: "3px", left: "8px" }}
                ></div>
                <ul className="d-flex flex-column gap-4 p-0 z-1 mt-1">
                  <li className="d-flex gap-3 list-unstyledm-0">
                    <div
                      className="bg-primary mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p
                        className="mb-1  fw-medium"
                        style={{ fontSize: "18px" }}
                      >
                        Cheap Flights Nepal
                      </p>
                      <p
                        className="mb-1  text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Home Page
                      </p>
                      <p
                        className="mb-1  text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 list-unstyled m-0">
                    <div
                      className="bg-primary mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p
                        className="mb-1 fw-medium"
                        style={{ fontSize: "18px" }}
                      >
                        Cheap Flights Nepal
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Home Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 list-unstyledm-0">
                    <div
                      className="bg-primary mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p
                        className="mb-1 fw-medium"
                        style={{ fontSize: "18px" }}
                      >
                        Cheap Flights Nepal
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Home Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 list-unstyled m-0">
                    <div
                      className="bg-primary mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p
                        className="mb-1 fw-medium"
                        style={{ fontSize: "18px" }}
                      >
                        Cheap Flights Nepal
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Home Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "16px" }}
                      >
                        Landing Page
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Task Status Row End */}
      </div>
    </main>
  );
};

export default Dashboard;
