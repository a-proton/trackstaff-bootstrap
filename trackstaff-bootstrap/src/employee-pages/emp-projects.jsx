import React, { useState } from "react";
import RequestProjectModal from "../Components/Modals/RequestProjectModal";

const EmpProjects = () => {
  const [requestModalOpen, setRequestModalOpen] = useState(false);

  const handleRequestTask = () => {
    alert("Project Requested");
    setRequestModalOpen(false);
  };

  const openProjectRequestModal = () => {
    setRequestModalOpen(true);
  };

  return (
    <main className="p-3">
      <div className="px-2 pl-2 bg-white p-3 rounded-3">
        {/* Projects Heading Start */}
        <div className="row mb-3 justify-content-between align-items-center">
          <div className="col">
            <h5 className="fs-3 fw-semibold">Projects</h5>
            {/* <p  className="">Track your work hours and attendance</p> */}
          </div>
          <div className="col text-end">
            <button
              className="btn btn-primary w-auto"
              data-bs-toggle="modal"
              data-bs-target="#addProjectRequestModal"
              style={{ fontSize: "16px" }}
              onClick={openProjectRequestModal}
            >
              <i className="bi bi-plus fs-5"></i> Request Projects
            </button>

            {/* Task Modal with separate state */}
            <RequestProjectModal
              isOpen={requestModalOpen}
              onClose={() => setRequestModalOpen(false)}
              onSubmit={handleRequestTask}
            />
          </div>
        </div>
        {/* Projects Heading End */}

        <div className="mb-3 " style={{ width: "fit-content" }}>
          <ul
            className="nav nav-pills border rounded-3 border-1 border-secondary-subtle p-1 w-auto bg-white"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-active-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-active"
                type="button"
                role="tab"
                aria-controls="pills-active"
                aria-selected="true"
              >
                Active Projects
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-my-requests-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-my-requests"
                type="button"
                role="tab"
                aria-controls="pills-my-requests"
                aria-selected="false"
                tabIndex="-1"
              >
                My Requests
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-active"
            role="tabpanel"
            aria-labelledby="pills-active-tab"
          >
            {/* Active Projects */}
            <form className="d-flex flex-column flex-sm-row flex-wrap justify-content-between align-items-sm-end gap-2 mb-3">
              <div className="flex-grow-1">
                <label htmlFor="search" className="form-label">
                  Project Title
                </label>
                <input
                  type="search"
                  className="form-control text-dark-emphasis"
                  placeholder="Search by project title......"
                  aria-label="Search"
                />
              </div>
              <div className="d-flex align-items-end gap-2 flex-grow-1 flex-wrap justify-content-center">
                <div className="flex-grow-1">
                  <label htmlFor="start-date" className="form-label">
                    Start Date
                  </label>
                  <div className="input-group date">
                    <input
                      type="date"
                      className="form-control text-dark-emphasis"
                      placeholder="dd/mm/yy"
                      aria-label="Start Date"
                    />
                    {/* <span  className="input-group-text"><i  className="bi bi-calendar"></i></span> */}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <label htmlFor="due-date" className="form-label">
                    Due Date
                  </label>
                  <div className="input-group date">
                    <input
                      type="date"
                      className="form-control text-dark-emphasis"
                      placeholder="dd/mm/yy"
                      aria-label="Due Date"
                    />
                    {/* <span  className="input-group-text"><i  className="bi bi-calendar"></i></span> */}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <label htmlFor="task-status" className="form-label">
                    Status
                  </label>
                  <select
                    className="form-select text-dark-emphasis"
                    id="task-status"
                    aria-label="Task Status"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      All
                    </option>
                    <option value="pending">Pending</option>
                    <option value="progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <div className="flex-grow-0 text-center">
                  <button type="submit" className="btn btn-primary w-100 px-4">
                    <i className="bi bi-search"></i> Search
                  </button>
                </div>
              </div>
            </form>

            {/* Task Table */}
            <div className="task-table table-responsive overflow-auto">
              <table className="table text-center">
                <thead className="table-light border">
                  <tr>
                    <th scope="col">SN</th>
                    <th scope="col" className="text-start">
                      Title
                    </th>
                    <th scope="col">Start Date</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Assign To</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="align-middle">
                      1
                    </th>
                    <td className="text-start">Cheap Flights Nepal</td>
                    <td>2025-02-11</td>
                    <td>2025-02-11</td>
                    <td>
                      <span className="bg-warning text-white px-2 py-1 rounded-2 w-auto">
                        Pending
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
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className="bi bi-three-dots-vertical"
                          id="taskAction"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></i>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="taskAction"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil text-primary me-1"></i>{" "}
                              Edit Project
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-box-arrow-up-right text-warning me-1"></i>
                              Change Status
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-chat-square text-progress me-1"></i>
                              View Chat
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash text-danger me-1"></i>{" "}
                              Delete Project
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
                    <td className="text-start">Cheap Flights Nepal</td>
                    <td>2025-02-11</td>
                    <td>2025-02-11</td>
                    <td>
                      <span className="bg-progress text-white px-2 py-1 rounded-2 w-auto">
                        In Progress
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
                          id="taskAction"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></i>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="taskAction"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil text-primary me-1"></i>{" "}
                              Edit Project
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-box-arrow-up-right text-warning me-1"></i>
                              Change Status
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-chat-square text-progress me-1"></i>
                              View Chat
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash text-danger me-1"></i>{" "}
                              Delete Project
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
                    <td className="text-start">Cheap Flights Nepal</td>
                    <td>2025-02-11</td>
                    <td>2025-02-11</td>
                    <td>
                      <span className="bg-primary text-white px-2 py-1 rounded-2 w-auto">
                        Completed
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
                          id="taskAction"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></i>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="taskAction"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil text-primary me-1"></i>{" "}
                              Edit Project
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-box-arrow-up-right text-warning me-1"></i>
                              Change Status
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-chat-square text-progress me-1"></i>
                              View Chat
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash text-danger me-1"></i>{" "}
                              Delete Project
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
          <div
            className="tab-pane fade"
            id="pills-my-requests"
            role="tabpanel"
            aria-labelledby="pills-my-requests-tab"
          >
            {/* My Requests */}
            <form className="d-flex flex-column flex-sm-row flex-wrap justify-content-between align-items-sm-end gap-2 mb-3">
              <div className="flex-grow-1">
                <label htmlFor="search" className="form-label">
                  Project Title
                </label>
                <input
                  type="search"
                  className="form-control text-dark-emphasis"
                  placeholder="Search by project title......"
                  aria-label="Search"
                />
              </div>
              <div className="d-flex align-items-end gap-2 flex-grow-1 flex-wrap justify-content-center">
                <div className="flex-grow-1">
                  <label htmlFor="start-date" className="form-label">
                    Start Date
                  </label>
                  <div className="input-group date">
                    <input
                      type="date"
                      className="form-control text-dark-emphasis"
                      placeholder="dd/mm/yy"
                      aria-label="Start Date"
                    />
                    {/* <span  className="input-group-text"><i  className="bi bi-calendar"></i></span> */}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <label htmlFor="due-date" className="form-label">
                    Due Date
                  </label>
                  <div className="input-group date">
                    <input
                      type="date"
                      className="form-control text-dark-emphasis"
                      placeholder="dd/mm/yy"
                      aria-label="Due Date"
                    />
                    {/* <span  className="input-group-text"><i  className="bi bi-calendar"></i></span> */}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <label htmlFor="task-status" className="form-label">
                    Status
                  </label>
                  <select
                    className="form-select text-dark-emphasis"
                    id="task-status"
                    aria-label="Task Status"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      All
                    </option>
                    <option value="pending">Pending</option>
                    <option value="progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <div className="flex-grow-0 text-center">
                  <button type="submit" className="btn btn-primary w-100 px-4">
                    <i className="bi bi-search"></i> Search
                  </button>
                </div>
              </div>
            </form>

            {/* Task Table */}
            <div className="task-table table-responsive overflow-auto">
              <table className="table text-center">
                <thead className="table-light border">
                  <tr>
                    <th scope="col">SN</th>
                    <th scope="col" className="text-start">
                      Title
                    </th>
                    <th scope="col">Requested Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Assign To</th>
                    <th scope="col" className="text-start">
                      Feedback
                    </th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="align-middle">
                      1
                    </th>
                    <td className="text-start">Cheap Flights Nepal</td>
                    <td>2025-02-11</td>
                    <td>
                      <span className="bg-warning text-white px-2 py-1 rounded-2 w-auto">
                        Pending
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
                    <td className="text-start">Good</td>
                    <td>
                      <div
                        className="dropdown position-static"
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className="bi bi-three-dots-vertical"
                          id="taskAction"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></i>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="taskAction"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil text-primary me-1"></i>{" "}
                              Edit Project
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-box-arrow-up-right text-warning me-1"></i>
                              Change Status
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-chat-square text-progress me-1"></i>
                              View Chat
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash text-danger me-1"></i>{" "}
                              Delete Project
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
                    <td className="text-start">Cheap Flights Nepal</td>
                    <td>2025-02-11</td>
                    <td>
                      <span className="bg-progress text-white px-2 py-1 rounded-2 w-auto">
                        In Progress
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
                    <td className="text-start">Approved on 2025-02-11</td>
                    <td>
                      <div
                        className="dropdown position-static"
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className="bi bi-three-dots-vertical"
                          id="taskAction"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></i>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="taskAction"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil text-primary me-1"></i>{" "}
                              Edit Project
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-box-arrow-up-right text-warning me-1"></i>
                              Change Status
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-chat-square text-progress me-1"></i>
                              View Chat
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash text-danger me-1"></i>{" "}
                              Delete Project
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
                    <td className="text-start">Cheap Flights Nepal</td>
                    <td>2025-02-11</td>
                    <td>
                      <span className="bg-primary text-white px-2 py-1 rounded-2 w-auto">
                        Completed
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
                    <td className="text-start">Good Idea</td>
                    <td>
                      <div
                        className="dropdown position-static"
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className="bi bi-three-dots-vertical"
                          id="taskAction"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></i>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="taskAction"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil text-primary me-1"></i>{" "}
                              Edit Project
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-box-arrow-up-right text-warning me-1"></i>
                              Change Status
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-chat-square text-progress me-1"></i>
                              View Chat
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash text-danger me-1"></i>{" "}
                              Delete Project
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
    </main>
  );
};

export default EmpProjects;
