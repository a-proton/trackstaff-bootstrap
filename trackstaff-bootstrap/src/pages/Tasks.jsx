import React from "react";

const Tasks = () => {
  return (
    <main className="p-3">
      <div className="px-2 bg-white p-3 rounded-3">
        {/* <!-- Employee Tasks Heading Start --> */}
        <div className="row">
          <div className="col-12">
            <h5 className="fs-2 fw-semibold">Employee Task List</h5>
            {/* <!-- <p  className="">Track your work hours and attendance</p> --> */}
          </div>
        </div>
        {/* <!-- Employee Tasks Heading End -->

      <!-- Employee Tasks List Start --> */}

        <div className="d-flex justify-content-between align-items-center mb-3 gap-2 flex-wrap bg-white p-1 rounded-3">
          {/* <!-- Tabs --> */}
          <ul className="nav nav-pills border rounded-3 border-1 border-secondary-subtle p-1">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                All Tasks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pending
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Progress
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Completed
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cancelled
              </a>
            </li>
          </ul>

          {/* <!-- Filters --> */}
          {/* <!-- <div  className="d-flex justify-content-between align-items-center gap-2">
          <ul  className="nav nav-pills border rounded-3 border-1 border-secondary-subtle p-1">
            <li  className="nav-item">
              <a  className="nav-link active" aria-current="page" href="#">My Tasks</a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="#">Assigned Tasks</a>
            </li>
          </ul>
        </div> --> */}

          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addTaskModal"
          >
            <i className="bi bi-plus fs-5"></i> Add Task
          </button>

          {/* <!-- Add Task Modal --> */}
          <div
            className="modal fade"
            id="addTaskModal"
            tabindex="-1"
            aria-labelledby="addTaskModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header pb-0 border-bottom-0">
                  <div>
                    <h5 className="modal-title" id="addTaskModalLabel">
                      Create New Task
                    </h5>
                    <p className="text-muted">
                      Fill the form below to create a new task.
                    </p>
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
                      <label for="task-status" className="form-label">
                        Project
                      </label>
                      <select
                        className="form-select text-dark-emphasis"
                        id="task-status"
                        aria-label="Task Status"
                      >
                        <option selected="" disabled="">
                          Select Project
                        </option>
                        <option value="project1">Project 1</option>
                        <option value="project2">Project 2</option>
                        <option value="project3">Project 3</option>
                        <option value="project4">Project 4</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label for="task-title" className="form-label">
                        Task Title
                      </label>
                      <input
                        type="search"
                        className="form-control"
                        id="task-title"
                        placeholder="Search by task title..."
                        aria-label="Task Title"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="task-description" className="form-label">
                        Sub Task
                      </label>
                      <textarea
                        className="form-control"
                        id="task-description"
                        rows="3"
                        placeholder="Enter sub task one per line..."
                        aria-label="Sub Task"
                      ></textarea>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="mb-3">
                          <label for="task-assigned-to" className="form-label">
                            Assigned To
                          </label>
                          <div className="multi-user-container">
                            <label
                              for="tasks-assigned-to"
                              className="multi-user-label"
                            ></label>
                            <div className="tag-input" tabindex="0">
                              <div
                                id="tasks-assigned-to"
                                className="tags-container"
                              ></div>
                              <input
                                type="text"
                                className="user-search-input"
                                list="datalist-tasks-assigned-to"
                                placeholder="Search user..."
                              />
                            </div>
                            <datalist id="datalist-tasks-assigned-to">
                              <option
                                value="Surya Poudel"
                                data-user-id="001"
                                data-role="Admin"
                              ></option>
                              <option
                                value="Manish Shrestha"
                                data-user-id="002"
                                data-role="Developer"
                              ></option>
                              <option
                                value="Kabita Subedi"
                                data-user-id="003"
                                data-role="Designer"
                              ></option>
                              <option
                                value="Sangam Giri"
                                data-user-id="004"
                                data-role="Developer"
                              ></option>
                              <option
                                value="Nirmal GC"
                                data-user-id="005"
                                data-role="Tester"
                              ></option>
                              <option
                                value="Susmita Poudel"
                                data-user-id="006"
                                data-role="Content Writer"
                              ></option>
                              <option
                                value="Rohan GC"
                                data-user-id="007"
                                data-role="Developer"
                              ></option>
                              <option
                                value="Bisai Chhetri"
                                data-user-id="008"
                                data-role="Designer"
                              ></option>
                              <option
                                value="Bishwo Raj Parajuli"
                                data-user-id="009"
                                data-role="Manager"
                              ></option>
                              <option
                                value="Xitij Shrestha"
                                data-user-id="010"
                                data-role="Intern"
                              ></option>
                            </datalist>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3">
                          <label for="task-priority" className="form-label">
                            Status
                          </label>
                          <select
                            className="form-select text-dark-emphasis"
                            id="task-priority"
                            aria-label="Task Priority"
                          >
                            <option selected="" disabled="">
                              Pending
                            </option>
                            {/* <!-- <option value="pending">Pending</option> --> */}
                            <option value="progress">Progress</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <div className="mb-3">
                          <label for="task-start-date" className="form-label">
                            Start Date
                          </label>
                          <input
                            type="date"
                            className="form-control text-dark-emphasis"
                            id="task-start-date"
                            aria-label="Task Start Date"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3">
                          <label for="task-end-date" className="form-label">
                            Due Date
                          </label>
                          <input
                            type="date"
                            className="form-control text-dark-emphasis"
                            id="task-due-date"
                            aria-label="Task End Date"
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
                  <button type="submit" className="btn btn-primary px-4">
                    Create Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
      <!-- Search and Date Filters --> */}
        <form className="d-flex flex-column flex-sm-row flex-wrap justify-content-between align-items-sm-end gap-2 mb-3 bg-white p-1 rounded-3">
          <div className="flex-grow-1">
            <label for="search" className="form-label">
              Employee
            </label>
            <input
              type="search"
              className="form-control text-dark-emphasis"
              placeholder="Search by employee name......"
              aria-label="Search"
            />
          </div>
          <div className="flex-grow-1">
            <label for="search" className="form-label">
              Task Title
            </label>
            <input
              type="search"
              className="form-control text-dark-emphasis"
              placeholder="Search by task title......"
              aria-label="Search"
            />
          </div>

          <div className="d-flex align-items-end gap-2 flex-grow-1 flex-wrap justify-content-center">
            <div className="flex-grow-1">
              <label for="start-date" className="form-label">
                Start Date
              </label>
              <div className="input-group date">
                <input
                  type="date"
                  className="form-control text-dark-emphasis"
                  placeholder="dd/mm/yy"
                  aria-label="Start Date"
                />
                {/* <!-- <span  className="input-group-text"><i  className="bi bi-calendar"></i></span> --> */}
              </div>
            </div>
            <div className="flex-grow-1">
              <label for="due-date" className="form-label">
                Due Date
              </label>
              <div className="input-group date">
                <input
                  type="date"
                  className="form-control text-dark-emphasis"
                  placeholder="dd/mm/yy"
                  aria-label="Due Date"
                />
                {/* <!-- <span  className="input-group-text"><i  className="bi bi-calendar"></i></span> --> */}
              </div>
            </div>
            <div className="flex-grow-0 text-center">
              <button type="submit" className="btn btn-primary w-100 px-4">
                <i className="bi bi-search"></i> Search
              </button>
            </div>
          </div>
        </form>

        {/* <!-- Task Table --> */}
        <div className="task-table table-responsive overflow-auto">
          <table className="table text-center">
            <thead className="table-light border">
              <tr>
                <th scope="col">SN</th>
                <th scope="col">Employee Name</th>
                <th scope="col" style={{ textAlign: "left" }}>
                  Title
                </th>
                <th scope="col">Start Date</th>
                <th scope="col">Due Date</th>
                <th scope="col">Work Stats</th>
                <th scope="col">Priority</th>
                <th scope="col">Assign To</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="align-middle">
                  1
                </th>
                <td className="text-start">Manish Shrestha</td>
                <td className="text-start">Cheap Flights Nepal</td>
                <td>2025-02-11</td>
                <td>2025-02-11</td>
                <td>
                  <span className="bg-warning text-white w-auto rounded-2 py-1 px-2">
                    Pending
                  </span>
                </td>
                <td>
                  <span className="bg-danger text-white w-auto rounded-2 py-1 px-2">
                    High
                  </span>
                </td>
                <td>
                  <img
                    src="../img/user-1.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-2.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-3.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <span className="ms-2 pt-2">+2</span>
                </td>
                <td>
                  <div
                    className="dropdown position-static"
                    style={{ cursor: " pointer" }}
                  >
                    <i
                      className="bi bi-three-dots-vertical"
                      id="task-action"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="taskAction"
                    >
                      <li>
                        <a className="dropdown-item" href=" /sub-tasks">
                          <i className="bi bi-eye text-progress me-1"></i>
                          View All Tasks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-chat-square text-primary me-1"></i>{" "}
                          Add Remarks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-trash text-danger me-1"></i>{" "}
                          Delete Task
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="align-middle">
                  2
                </th>
                <td className="text-start">Sangam Giri</td>
                <td className="text-start">Cheap Flights Nepal</td>
                <td>2025-02-11</td>
                <td>2025-02-11</td>
                <td>
                  <span className="bg-progress text-white w-auto rounded-2 py-1 px-2">
                    In Progress
                  </span>
                </td>
                <td>
                  <span className="bg-primary text-white w-auto rounded-2 py-1 px-2">
                    Medium
                  </span>
                </td>
                <td>
                  <img
                    src="../img/user-1.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-2.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-3.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-1.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                </td>
                <td>
                  <div
                    className="dropdown position-static"
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className="bi bi-three-dots-vertical"
                      id="task-action"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="taskAction"
                    >
                      <li>
                        <a className="dropdown-item" href=" /sub-tasks">
                          <i className="bi bi-eye text-progress me-1"></i>
                          View All Tasks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-chat-square text-primary me-1"></i>{" "}
                          Add Remarks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-trash text-danger me-1"></i>{" "}
                          Delete Task
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="align-middle">
                  3
                </th>
                <td className="text-start">Bisai Chhetri</td>
                <td className="text-start">Cheap Flights Nepal</td>
                <td>2025-02-11</td>
                <td>2025-02-11</td>
                <td>
                  <span className="bg-primary text-white w-auto rounded-2 py-1 px-2">
                    Completed
                  </span>
                </td>
                <td>
                  <span className="bg-warning text-white w-auto rounded-2 py-1 px-2">
                    Low
                  </span>
                </td>
                <td>
                  <img
                    src="../img/user-1.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-2.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-3.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-1.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                </td>
                <td>
                  <div
                    className="dropdown position-static"
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className="bi bi-three-dots-vertical"
                      id="task-action"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="taskAction"
                    >
                      <li>
                        <a className="dropdown-item" href=" /sub-tasks">
                          <i className="bi bi-eye text-progress me-1"></i>
                          View All Tasks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-chat-square text-primary me-1"></i>{" "}
                          Add Remarks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-trash text-danger me-1"></i>{" "}
                          Delete Task
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="align-middle">
                  4
                </th>
                <td className="text-start">Rohan Gopal</td>
                <td className="text-start">Cheap Flights Nepal</td>
                <td>2025-02-11</td>
                <td>2025-02-11</td>
                <td>
                  <span className="bg-primary text-white w-auto rounded-2 py-1 px-2">
                    Completed
                  </span>
                </td>
                <td>
                  <span className="bg-warning text-white w-auto rounded-2 py-1 px-2">
                    Low
                  </span>
                </td>
                <td>
                  <img
                    src="../img/user-1.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-2.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-3.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-1.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                </td>
                <td>
                  <div
                    className="dropdown position-static"
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className="bi bi-three-dots-vertical"
                      id="task-action"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="taskAction"
                    >
                      <li>
                        <a className="dropdown-item" href=" /sub-tasks">
                          <i className="bi bi-eye text-progress me-1"></i>
                          View All Tasks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-chat-square text-primary me-1"></i>{" "}
                          Add Remarks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-trash text-danger me-1"></i>{" "}
                          Delete Task
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="align-middle">
                  5
                </th>
                <td className="text-start">Rahul Gopal</td>
                <td className="text-start">Cheap Flights Nepal</td>
                <td>2025-02-11</td>
                <td>2025-02-11</td>
                <td>
                  <span className="bg-primary text-white w-auto rounded-2 py-1 px-2">
                    Completed
                  </span>
                </td>
                <td>
                  <span className="bg-warning text-white w-auto rounded-2 py-1 px-2">
                    Low
                  </span>
                </td>
                <td>
                  <img
                    src="../img/user-1.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-2.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-3.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-1.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                </td>
                <td>
                  <div
                    className="dropdown position-static"
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className="bi bi-three-dots-vertical"
                      id="task-action"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="taskAction"
                    >
                      <li>
                        <a className="dropdown-item" href=" /sub-tasks">
                          <i className="bi bi-eye text-progress me-1"></i>
                          View All Tasks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-chat-square text-primary me-1"></i>{" "}
                          Add Remarks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-trash text-danger me-1"></i>{" "}
                          Delete Task
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="align-middle">
                  6
                </th>
                <td className="text-start">John Doe</td>
                <td className="text-start">Cheap Flights Nepal</td>
                <td>2025-02-11</td>
                <td>2025-02-11</td>
                <td>
                  <span className="bg-primary text-white w-auto rounded-2 py-1 px-2">
                    Completed
                  </span>
                </td>
                <td>
                  <span className="bg-warning text-white w-auto rounded-2 py-1 px-2">
                    Low
                  </span>
                </td>
                <td>
                  <img
                    src="../img/user-1.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-2.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-3.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                  <img
                    src="../img/user-1.jpg"
                    alt="Avatar"
                    className="avatar"
                  />
                </td>
                <td>
                  <div
                    className="dropdown position-static"
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className="bi bi-three-dots-vertical"
                      id="task-action"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="taskAction"
                    >
                      <li>
                        <a className="dropdown-item" href=" /sub-tasks">
                          <i className="bi bi-eye text-progress me-1"></i>
                          View All Tasks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-chat-square text-primary me-1"></i>{" "}
                          Add Remarks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-trash text-danger me-1"></i>{" "}
                          Delete Task
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
    </main>
  );
};

export default Tasks;
