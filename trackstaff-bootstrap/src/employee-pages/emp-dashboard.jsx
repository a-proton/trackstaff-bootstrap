import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../empstyle.css";
import AddTaskModal from "../Components/Modals/taskModal";
const EmpDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [hasTimeBeenChanged, setHasTimeBeenChanged] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  const handleCreateTask = (taskData) => {
    console.log("Task created:", taskData);
    alert("Task Created!");
    setTaskModalOpen(false);
  };

  const openTaskModal = () => {
    setTaskModalOpen(true);
  };

  const handleDueDateChange = (e) => {
    if (!hasTimeBeenChanged) {
      setDueDate(e.target.value);
      setHasTimeBeenChanged(true);
    }
  };

  const handleTimeChange = (e) => {
    if (!hasTimeBeenChanged) {
      setCheckInTime(e.target.value);
      setHasTimeBeenChanged(true);
    }
  };

  const handleSaveAttendance = () => {
    if (isCheckedIn) {
      // Check out
      setIsCheckedIn(false);
    } else {
      // Check in
      setIsCheckedIn(true);
    }
    // Reset the time change flag and clear time for next use
    setHasTimeBeenChanged(false);
    setCheckInTime("");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCheckInDate(today);
  }, []);

  useEffect(() => {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5); // Format: HH:MM
    setCheckInTime(currentTime);
  }, [isCheckedIn]); // <- update whenever check-in/check-out status changes

  const formatTime = (date) => {
    return date
      .toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      .replace(/:/g, " : ");
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="p-2" style={{ backgroundColor: "#F5F6FA" }}>
      <div className="px-2">
        {/* <!-- Attendance & Productivity Tracker Row Start --> */}
        <div className="row overflow-hidden g-3 mb-3 pt-1">
          {/* <!-- Attendance Tracker Start --> */}
          <div className="col-12 col-xl-4 d-flex align-items-stretch">
            <div className="card border-0 shadow-sm h-100 w-100 rounded-3">
              <div className="card-body text-center h-100">
                <h5
                  className="card-title d-flex align-items-start gap-2 py-1 text-start"
                  style={{ fontSize: "22px" }}
                >
                  <i className="bi bi-clock"></i>
                  Attendance Tracker
                </h5>

                <div
                  className="fw-medium pt-3 pt-lg-5"
                  style={{ letterSpacing: "2px", fontSize: "38px" }}
                >
                  {formatTime(currentTime)}
                </div>
                <div className="text-muted" style={{ fontSize: "18px" }}>
                  {formatDate(currentTime)}
                </div>
                <div className="d-flex justify-content-center m-4">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#checkInModal"
                    className={`btn d-flex justify-content-center align-items-center gap-2   mt-4 ${
                      isCheckedIn ? "btn-danger" : "btn-primary"
                    }`}
                    style={{ width: "175px", fontSize: "20px" }}
                  >
                    <i
                      className={`bi ${
                        isCheckedIn
                          ? "bi-box-arrow-right"
                          : "bi-box-arrow-in-right"
                      }`}
                    ></i>
                    {isCheckedIn ? "Check Out" : "Check In"}
                  </button>
                </div>
                <div
                  className="modal fade text-start"
                  id="checkInModal"
                  tabIndex="-1"
                  aria-labelledby="checkInModallabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header pb-0 border-bottom-0">
                        <div>
                          <h5 className="modal-title" id="addTaskModalLabel">
                            {isCheckedIn ? "Check Out" : "Add Attendance"}
                          </h5>
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
                          <div className="mb-3">
                            <label htmlFor="checkInDate" className="form-label">
                              DATE
                            </label>
                            <input
                              type="date"
                              className="form-control text-dark-emphasis"
                              id="checkInDate"
                              aria-label="Date"
                              value={checkInDate || ""}
                              disabled
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="checkInTime" className="form-label">
                              TIME
                            </label>
                            <input
                              required
                              type="time"
                              className="form-control text-dark-emphasis"
                              id="checkInTime"
                              aria-label="Time"
                              value={checkInTime}
                              onChange={handleTimeChange}
                              disabled={hasTimeBeenChanged || isCheckedIn} // ← updated this line
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="task-description"
                              className="form-label"
                            >
                              REMARKS
                            </label>
                            <textarea
                              className="form-control"
                              id="task-description"
                              rows="3"
                              placeholder="Enter any remarks..."
                              aria-label="Sub Task"
                            ></textarea>
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
                        <button
                          type="button"
                          className="btn btn-primary px-4"
                          data-bs-dismiss="modal"
                          onClick={handleSaveAttendance}
                        >
                          {isCheckedIn ? "Save Check Out" : "Save Attendance"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Productivity Monitor Start --> */}
          <div className="col-12 col-xl-8 d-flex align-items-stretch">
            <div className="card border-0 shadow-sm h-100 w-100">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <div>
                      <svg
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.66634 22.6667C4.02467 22.6667 3.47556 22.4384 3.01901 21.9818C2.56245 21.5253 2.33379 20.9758 2.33301 20.3333V6.33333C2.33301 5.69167 2.56167 5.14256 3.01901 4.686C3.47634 4.22944 4.02545 4.00078 4.66634 4H22.1663C22.808 4 23.3575 4.22867 23.8148 4.686C24.2722 5.14333 24.5005 5.69244 24.4997 6.33333V9.83333C24.4997 10.1639 24.3877 10.4412 24.1637 10.6652C23.9397 10.8892 23.6628 11.0008 23.333 11C23.0032 10.9992 22.7263 10.8872 22.5023 10.664C22.2783 10.4408 22.1663 10.1639 22.1663 9.83333V6.33333H4.66634V20.3333H6.76634C7.0969 20.3333 7.37417 20.4453 7.59817 20.6693C7.82217 20.8933 7.93379 21.1702 7.93301 21.5C7.93223 21.8298 7.82062 22.1071 7.59817 22.3318C7.37573 22.5566 7.09845 22.6682 6.76634 22.6667H4.66634ZM20.9997 16.8333V14.5C20.9997 14.1694 21.1117 13.8926 21.3357 13.6693C21.5597 13.4461 21.8366 13.3341 22.1663 13.3333C22.4961 13.3326 22.7734 13.4446 22.9982 13.6693C23.2229 13.8941 23.3346 14.171 23.333 14.5V16.8333C23.333 17.1639 23.221 17.4412 22.997 17.6652C22.773 17.8892 22.4961 18.0008 22.1663 18C21.8366 17.9992 21.5597 17.8872 21.3357 17.664C21.1117 17.4408 20.9997 17.1639 20.9997 16.8333ZM17.2955 26.1667C16.8288 26.1667 16.3816 26.0792 15.9538 25.9042C15.5261 25.7292 15.1469 25.4764 14.8163 25.1458L9.68301 19.9833C9.46912 19.7694 9.35712 19.5023 9.34701 19.1818C9.3369 18.8614 9.43917 18.5841 9.65384 18.35L9.82884 18.175C10.1011 17.9028 10.4316 17.7181 10.8205 17.6208C11.2094 17.5236 11.5983 17.5236 11.9872 17.6208L13.9997 18.2042V9.83333C13.9997 9.50278 14.1117 9.22589 14.3357 9.00267C14.5597 8.77944 14.8366 8.66744 15.1663 8.66667C15.4961 8.66589 15.7734 8.77789 15.9982 9.00267C16.223 9.22744 16.3346 9.50433 16.333 9.83333V19.75C16.333 20.1389 16.1825 20.4453 15.8815 20.6693C15.5805 20.8933 15.2352 20.9563 14.8455 20.8583L13.4747 20.4792L16.4788 23.4833C16.5955 23.6 16.7219 23.6875 16.858 23.7458C16.9941 23.8042 17.14 23.8333 17.2955 23.8333H22.1663C22.808 23.8333 23.3575 23.6051 23.8148 23.1485C24.2722 22.6919 24.5005 22.1424 24.4997 21.5V16.8333C24.4997 16.5028 24.6117 16.2259 24.8357 16.0027C25.0597 15.7794 25.3366 15.6674 25.6663 15.6667C25.9961 15.6659 26.2734 15.7779 26.4982 16.0027C26.7229 16.2274 26.8346 16.5043 26.833 16.8333V21.5C26.833 22.7833 26.3761 23.8819 25.4622 24.7958C24.5483 25.7097 23.4497 26.1667 22.1663 26.1667H17.2955ZM17.4997 16.8333V8.66667C17.4997 8.33611 17.6117 8.05922 17.8357 7.836C18.0597 7.61278 18.3366 7.50078 18.6663 7.5C18.9961 7.49922 19.2734 7.61122 19.4982 7.836C19.7229 8.06078 19.8346 8.33767 19.833 8.66667V16.8333C19.833 17.1639 19.721 17.4412 19.497 17.6652C19.273 17.8892 18.9961 18.0008 18.6663 18C18.3366 17.9992 18.0597 17.8872 17.8357 17.664C17.6117 17.4408 17.4997 17.1639 17.4997 16.8333Z"
                          fill="#1A1A1A"
                        ></path>
                      </svg>
                    </div>
                    <h5 className="card-title d-flex align-items-center gap-2 m-0">
                      Your Productivity Monitor
                    </h5>
                  </div>
                  <div>
                    <p className="text-primary bg-primary-subtle px-2 py-1 rounded-1 border border-primary text-center m-0 text-nowrap">
                      Active Monitoring
                    </p>
                  </div>
                </div>

                {/* <!-- Overall Performance --> */}
                <div
                  id="overallPerformanceIndicator"
                  className="d-flex flex-column justify-content-center gap-2 mt-1"
                >
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="rounded-1"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "rgb(255, 193, 7)",
                        borderColor: "rgb(255, 193, 7)",
                      }}
                    ></div>
                    <span id="performanceText">Overall Performance (61%)</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="rounded-1"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "rgb(242, 242, 242)",
                        borderColor: "rgb(242, 242, 242)",
                      }}
                    ></div>
                    <span id="remainingText">Remaining (39%)</span>
                  </div>
                </div>

                {/* <!-- Progress Circle --> */}

                <div className="row mt-3">
                  <div className="col-12 col-lg-5 d-flex flex-column align-items-center">
                    {/* <!-- Circle --> */}
                    <div
                      className="custom-conic-gradient"
                      id="progressCircle"
                    ></div>
                    {/* <!-- Label --> */}
                    <div className="text-center mt-3">
                      <p
                        id="activityLabel"
                        className="bg-warning-subtle text-warning rounded-1 px-2 py-1 border-warning border"
                      >
                        Moderate Activity
                      </p>
                    </div>
                  </div>

                  {/* <!-- Progress Bars --> */}
                  <div className="col-12 col-lg-7 text-start d-flex flex-column gap-2">
                    <div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <p className="m-0 mb-1">Average Key Press Percentage</p>
                        <p id="keyPressPercent" className="m-0 fw-semibold">
                          38%
                        </p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar rounded-3"
                          role="progressbar"
                          style={{
                            width: "38%",
                            backgroundColor: " rgb(226, 38, 38)",
                          }}
                          aria-valuenow="38"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <p className="m-0 mb-1">
                          Average Mouse Click Percentage
                        </p>
                        <p id="mouseClickPercent" className="m-0 fw-semibold">
                          56%
                        </p>
                      </div>
                      <div className="progress">
                        <div
                          id="mouseClickBar"
                          className="progress-bar rounded-3"
                          role="progressbar"
                          style={{
                            width: " 56%",
                            backgroundColor: "rgb(255, 193, 7)",
                          }}
                          aria-valuenow="56"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <p className="m-0 mb-1">
                          Average Mouse Movement Percentage
                        </p>
                        <p
                          id="mouseMovementPercent"
                          className="m-0 fw-semibold"
                        >
                          88%
                        </p>
                      </div>
                      <div className="progress">
                        <div
                          id="mouseMovementBar"
                          className="progress-bar rounded-3"
                          role="progressbar"
                          style={{
                            width: "88%",
                            backgroundColor: " rgb(26, 177, 137)",
                          }}
                          aria-valuenow="88"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Productivity Monitor End --> */}
        </div>
        {/* <!-- Attendance & Productivity Tracker Row End --> */}

        {/* <!-- Task Boxes Row Start --> */}
        <div className="row overflow-hidden g-3">
          <div className="col-6 col-xl-3 d-flex align-items-stretch">
            <div className="card border-0 shadow-sm h-100 w-100 p-3 bg-white gap-2">
              <div className="card-title d-flex align-items-start justify-content-between gap-2 m-0">
                <div>
                  <p className="mb-1 fw-semibold">No. of Projects</p>
                  <p className="mb-0 fs-2 fw-semibold">10</p>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center fs-3 text-primary rounded-4 bg-primary-subtle"
                  style={{ width: "60px", height: "55px" }}
                >
                  <i className="bi bi-graph-up"></i>
                </div>
              </div>
              <p className="mb-0 text-muted">Active Projects</p>
              {/* <!-- <div className="d-flex align-items-center gap-1 flex-wrap">
              <i className="bi bi-arrow-up-right text-primary"></i>
              <p className="mb-0 text-primary">8.5%</p>
              <p className="mb-0 text-muted ">Up from yesterday</p>
            </div> --> */}
            </div>
          </div>
          <div className="col-6 col-xl-3 d-flex align-items-stretch">
            <div className="card border-0 shadow-sm h-100 w-100 p-3 bg-white gap-2">
              <div className="card-title d-flex align-items-start justify-content-between gap-2 m-0">
                <div>
                  <p className="mb-1 fw-semibold">Task Completed</p>
                  <p className="mb-0 fs-2 fw-semibold">12</p>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center fs-3 text-primary rounded-4 bg-primary-subtle"
                  style={{ width: "60px;", height: "55px;" }}
                >
                  <i className="bi bi-check-circle"></i>
                </div>
              </div>
              <p className="mb-0 text-muted">This Week</p>
              <div className="d-flex align-items-center gap-1 flex-wrap">
                <i className="bi bi-arrow-up-right text-primary"></i>
                <p className="mb-0 text-primary">8.5%</p>
                <p className="mb-0 text-muted ">Up from yesterday</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-xl-3 d-flex align-items-stretch">
            <div className="card border-0 shadow-sm h-100 w-100 p-3 bg-white gap-2">
              <div className="card-title d-flex align-items-start justify-content-between gap-2 m-0">
                <div>
                  <p className="mb-1 fw-semibold">Task In Progress</p>
                  <p className="mb-0 fs-2 fw-semibold">12</p>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center fs-3 text-progress rounded-4 bg-progress-subtle"
                  style={{ width: "60px;", height: "55px;" }}
                >
                  <i className="bi bi-box"></i>
                </div>
              </div>
              <p className="mb-0 text-muted">This Week</p>
              <div className="d-flex align-items-center gap-1 flex-wrap">
                <i className="bi bi-arrow-up-right text-primary"></i>
                <p className="mb-0 text-primary">8.5%</p>
                <p className="mb-0 text-muted ">Up from yesterday</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-xl-3 d-flex align-items-stretch">
            <div className="card border-0 shadow-sm h-100 w-100 p-3 bg-white gap-2">
              <div className="card-title d-flex align-items-start justify-content-between gap-2 m-0">
                <div>
                  <p className="mb-1 fw-semibold">Task Pending</p>
                  <p className="mb-0 fs-2 fw-semibold">6</p>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center fs-3 text-warning rounded-4 bg-warning-subtle"
                  style={{ width: "60px;", height: "55px;" }}
                >
                  <i className="bi bi-arrow-counterclockwise"></i>
                </div>
              </div>
              <p className="mb-0 text-muted">This Week</p>
              <div className="d-flex align-items-center gap-1 flex-wrap">
                <i className="bi bi-arrow-down-right text-danger"></i>
                <p className="mb-0 text-danger">8.5%</p>
                <p className="mb-0 text-muted ">Down from yesterday</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Task Boxes Row End --> */}

        {/* <!-- My Task & Recent Chats Row Start --> */}
        <div className="row overflow-hidden g-3 pt-2 h-100">
          <div className="col-12 col-xl-6 p-2 align-items-stretch">
            <div className="card p-3 flex-column gap-3 h-100 border-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <h4 className="fw-semibold m-0">My Task</h4>
                  <p className="text-muted m-0 px-2 py-1 border border-muted rounded-1">
                    5 tasks
                  </p>
                </div>
                <button
                  className="btn btn-primary py-1"
                  data-bs-toggle="modal"
                  data-bs-target="#addTaskModal"
                  onClick={openTaskModal}
                >
                  <i className="bi bi-plus fs-5"></i> Add Task
                </button>

                {/* <!-- Add Task Modal --> */}
                <AddTaskModal
                  isOpen={taskModalOpen}
                  onClose={() => setTaskModalOpen(false)}
                  onSubmit={handleCreateTask}
                />
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="card border-light-subtle">
                  <div className="card-body p-2">
                    <div className="d-flex align-items-start justify-content-between gap-2">
                      <p className="mb-0 fw-medium fs-5">
                        Create Dashboard Wireframe
                      </p>
                      <p className="mb-0 py-1 px-3 text-primary bg-primary-subtle rounded-pill text-center">
                        Completed
                      </p>
                    </div>
                    <div>
                      <p className="mb-0 fs-6">Kamsansar (Web)</p>
                      <small className="text-muted">April 12, 2025</small>
                    </div>
                  </div>
                </div>

                <div className="card border-light-subtle">
                  <div className="card-body p-2">
                    <div className="d-flex align-items-start justify-content-between gap-2">
                      <p className="mb-0 fw-medium fs-5">
                        Create Dashboard Wireframe
                      </p>
                      <p className="mb-0 py-1 px-3 text-progress bg-progress-subtle rounded-pill text-center">
                        In Progress
                      </p>
                    </div>
                    <div>
                      <p className="mb-0 fs-6">Kamsansar (Web)</p>
                      <small className="text-muted">April 12, 2025</small>
                    </div>
                  </div>
                </div>

                <div className="card border-light-subtle">
                  <div className="card-body p-2">
                    <div className="d-flex align-items-start justify-content-between gap-2">
                      <p className="mb-0 fw-medium fs-5">
                        Create Dashboard Wireframe
                      </p>
                      <p className="mb-0 py-1 px-3 text-warning bg-warning-subtle rounded-pill text-center">
                        Pending
                      </p>
                    </div>
                    <div>
                      <p className="mb-0 fs-6">Kamsansar (Web)</p>
                      <small className="text-muted">April 12, 2025</small>
                    </div>
                  </div>
                </div>

                <div className="card border-light-subtle">
                  <div className="card-body p-2">
                    <div className="d-flex align-items-start justify-content-between gap-2">
                      <p className="mb-0 fw-medium fs-5">
                        Create Dashboard Wireframe
                      </p>
                      <p className="mb-0 py-1 px-3 text-danger bg-danger-subtle rounded-pill text-center">
                        Cancelled
                      </p>
                    </div>
                    <div>
                      <p className="mb-0 fs-6">Kamsansar (Web)</p>
                      <small className="text-muted">April 12, 2025</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto mb-3">
                <a
                  href="/employee/tasks"
                  className="text-primary fs-5 border-0 border-bottom border-primary pb-1"
                >
                  View All Tasks <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 p-2 align-items-stretch">
            <div className="card p-3 flex-column gap-3 h-100 border-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <h4 className="fw-semibold m-0">Recent Chats</h4>
                  {/* <!-- <p className="text-muted m-0 px-2 py-1 border border-muted rounded-1">5 tasks</p> --> */}
                </div>
                {/* <!-- <button className="btn btn-primary">+ Add Task</button> --> */}
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div className="" style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p className="mb-0 fw-medium fs-5">Nirmal GC</p>
                      <small className="mb-0 text-muted">10:00 AM</small>
                    </div>
                    <p className="mb-0 fs-6 text-muted">
                      <span style={{ color: "#0D99FF" }}>@Manish</span> How are
                      you?
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div className="" style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-2.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p className="mb-0 fw-medium fs-5">Sangam Giri</p>
                      <small className="mb-0 text-muted">10:00 AM</small>
                    </div>
                    <p className="mb-0 fs-6 text-muted">
                      <span style={{ color: "#0D99FF;" }}>@Manish</span> How are
                      you?
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div className="" style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-3.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p className="mb-0 fw-medium fs-5">Mandeep</p>
                      <small className="mb-0 text-muted">10:00 AM</small>
                    </div>
                    <p className="mb-0 fs-6 text-muted">
                      <span style={{ color: " #0D99FF;" }}>@Manish</span> How
                      are you?
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div className="" style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p className="mb-0 fw-medium fs-5">Nirmal GC</p>
                      <small className="mb-0 text-muted">10:00 AM</small>
                    </div>
                    <p className="mb-0 fs-6 text-muted">
                      <span style={{ color: "#0D99FF;" }}>@Manish</span> How are
                      you?
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div className="" style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p className="mb-0 fw-medium fs-5">Nirmal GC</p>
                      <small className="mb-0 text-muted">10:00 AM</small>
                    </div>
                    <p className="mb-0 fs-6 text-muted">
                      <span style={{ color: " #0D99FF;" }}>@Manish</span> How
                      are you?
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body p-2 d-flex align-items-center gap-2">
                  <div className="" style={{ width: "50px", height: "50px" }}>
                    <img
                      src="../img/user-1.jpg"
                      alt=""
                      className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                    />
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between gap-2">
                      <p className="mb-0 fw-medium fs-5">Nirmal GC</p>
                      <small className="mb-0 text-muted">10:00 AM</small>
                    </div>
                    <p className="mb-0 fs-6 text-muted">
                      <span style={{ color: "#0D99FF" }}>@Hello</span> How are
                      you?
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-auto mb-3">
                <a
                  href="#"
                  className="text-primary fs-5 border-0 border-bottom border-primary pb-1"
                >
                  View All Chats <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- My Task & Recent Chats Row End --> */}

        {/* <!-- Task Status Row Start --> */}
        <div className="row overflow-hidden g-2 pt-2 h-100">
          <div className="col-12 col-lg-6 col-xl-4 p-2 align-items-stretch">
            <div className="card p-3 flex-column gap-3 h-100 border-0">
              <div className="d-flex">
                <p className="fs-5 fw-semibold m-0 px-3 py-2 text-white bg-warning rounded-1">
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
                      className=" bg-warning mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 fs-5 fw-medium">Cheap Flights Nepal</p>
                      <p className="mb-1 fs-6 text-muted">Home Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 list-unstyled m-0">
                    <div
                      className=" bg-warning mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 fs-5 fw-medium">Cheap Flights Nepal</p>
                      <p className="mb-1 fs-6 text-muted">Home Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 p-2 align-items-stretch">
            <div className="card p-3 flex-column gap-3 h-100 border-0">
              <div className="d-flex">
                <p className="fs-5 fw-semibold m-0 px-3 py-2 text-white bg-progress rounded-1">
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
                      className=" bg-progress mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 fs-5 fw-medium">Cheap Flights Nepal</p>
                      <p className="mb-1 fs-6 text-muted">Home Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 list-unstyled m-0">
                    <div
                      className=" bg-progress mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 fs-5 fw-medium">Cheap Flights Nepal</p>
                      <p className="mb-1 fs-6 text-muted">Home Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 list-unstyled m-0">
                    <div
                      className=" bg-progress mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 fs-5 fw-medium">Cheap Flights Nepal</p>
                      <p className="mb-1 fs-6 text-muted">Home Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 p-2 align-items-stretch">
            <div className="card p-3 flex-column gap-3 h-100 border-0">
              <div className="d-flex">
                <p className="fs-5 fw-semibold m-0 px-3 py-2 text-white bg-primary rounded-1">
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
                      className=" bg-primary mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 fs-5 fw-medium">Cheap Flights Nepal</p>
                      <p className="mb-1 fs-6 text-muted">Home Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 list-unstyled m-0">
                    <div
                      className=" bg-primary mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 fs-5 fw-medium">Cheap Flights Nepal</p>
                      <p className="mb-1 fs-6 text-muted">Home Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 list-unstyledm-0">
                    <div
                      className=" bg-primary mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 fs-5 fw-medium">Cheap Flights Nepal</p>
                      <p className="mb-1 fs-6 text-muted">Home Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 list-unstyled m-0">
                    <div
                      className=" bg-primary mt-1 rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 fs-5 fw-medium">Cheap Flights Nepal</p>
                      <p className="mb-1 fs-6 text-muted">Home Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                      <p className="mb-1 fs-6 text-muted">Landing Page</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Task Status Row End --> */}
      </div>
    </main>
  );
};

export default EmpDashboard;
