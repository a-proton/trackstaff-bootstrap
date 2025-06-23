import React from "react";
import { useState } from "react";
import AddProjectModal from "../Components/Modals/AddProjectModal";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCreateProject = () => {
    alert("Project Created!");
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <main className="p-3">
      <div className="px-2 bg-white p-3 rounded-3">
        {/* <!-- Projects Heading Start --> */}
        <div className="row mb-3 justify-content-between align-items-center">
          <div className="col">
            <h5 className="fs-2 fw-semibold">Projects</h5>
            {/* <!-- <p  className="">Track your work hours and attendance</p> --> */}
          </div>
          <div className="col text-end">
            <button className="btn btn-primary" onClick={openModal}>
              <i className="bi bi-plus fs-5"></i> Add Project
            </button>

            <AddProjectModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              onSubmit={handleCreateProject}
            />
          </div>
        </div>
        {/* <!-- Projects Heading End --> */}

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
                id="pills-project-requests-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-project-requests"
                type="button"
                role="tab"
                aria-controls="pills-project-requests"
                aria-selected="false"
                tabindex="-1"
              >
                Project Requests{" "}
                <span className="badge bg-danger text-white w-auto mx-auto rounded-circle">
                  1
                </span>
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
            {/* <!-- Active Projects --> */}
            <form className="d-flex flex-column flex-sm-row flex-wrap justify-content-between align-items-sm-end gap-2 mb-3">
              <div className="flex-grow-1">
                <label for="search" className="form-label">
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
                <div className="flex-grow-1">
                  <label for="task-status" className="form-label">
                    Status
                  </label>
                  <select
                    className="form-select text-dark-emphasis"
                    id="task-status"
                    aria-label="Task Status"
                  >
                    <option selected="" disabled="">
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

            {/* <!-- Task Table --> */}
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
                      <span className="bg-warning text-white w-auto mx-auto rounded-3 px-2 py-1">
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
                          <li
                            data-bs-toggle="modal"
                            data-bs-target="#viewProjectModal"
                          >
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil text-primary me-1"></i>{" "}
                              Edit Project
                            </a>
                          </li>
                          {/* <!-- <li><a  className="dropdown-item" href="#"><i  className="bi bi-box-arrow-up-right text-warning me-1"></i>
                            Change Status</a></li> --> */}
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-chat-square text-progress me-1"></i>
                              View Chat
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-trash text-danger me-1 "></i>{" "}
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
                      <span className="bg-progress text-white w-auto mx-auto rounded-3 px-2 py-1">
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
                          <li
                            data-bs-toggle="modal"
                            data-bs-target="#viewProjectModal"
                          >
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil text-primary me-1"></i>{" "}
                              Edit Project
                            </a>
                          </li>
                          {/* <!-- <li><a  className="dropdown-item" href="#"><i  className="bi bi-box-arrow-up-right text-warning me-1"></i>
                            Change Status</a></li> --> */}
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
                      <span className="bg-primary text-white w-auto mx-auto rounded-3 px-2 py-1">
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
                          <li
                            data-bs-toggle="modal"
                            data-bs-target="#viewProjectModal"
                          >
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-pencil text-primary me-1"></i>{" "}
                              Edit Project
                            </a>
                          </li>
                          {/* <!-- <li><a  className="dropdown-item" href="#"><i  className="bi bi-box-arrow-up-right text-warning me-1"></i>
                            Change Status</a></li> --> */}
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
            id="pills-project-requests"
            role="tabpanel"
            aria-labelledby="pills-project-requests-tab"
          >
            {/* <!-- Project Requests --> */}
            <form className="d-flex flex-column flex-sm-row flex-wrap justify-content-between align-items-sm-end gap-2 mb-3">
              <div className="flex-grow-1">
                <label for="search" className="form-label">
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
                    {/* </input><!-- <span  className="input-group-text"><i  className="bi bi-calendar"></i></span> --> */}
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
                <div className="flex-grow-1">
                  <label for="task-status" className="form-label">
                    Status
                  </label>
                  <select
                    className="form-select text-dark-emphasis"
                    id="task-status"
                    aria-label="Task Status"
                  >
                    <option selected="" disabled="">
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

            {/* <!-- Task Table --> */}
            <div className="task-table table-responsive overflow-auto">
              <table className="table text-center">
                <thead className="table-light border">
                  <tr>
                    <th scope="col">SN</th>
                    <th scope="col" className="text-start">
                      Title
                    </th>
                    <th scope="col" className="text-start">
                      Requestor
                    </th>
                    <th scope="col">Requested Date</th>
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
                    <td style={{ textAlign: "left" }}>Sangam Giri</td>
                    <td>2025-02-11</td>
                    <td>
                      <span className="bg-warning text-white w-auto rounded-2 py-1 px-2">
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
                          <li
                            data-bs-toggle="modal"
                            data-bs-target="#viewProjectModal"
                          >
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye text-progress me-1"></i>{" "}
                              View Project
                            </a>
                          </li>
                          {/* <!-- <li><a  className="dropdown-item" href="#"><i  className="bi bi-box-arrow-up-right text-warning me-1"></i>
                            Change Status</a></li> --> */}
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-check-circle text-primary me-1"></i>
                              Approve Project
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-x-circle text-danger me-1"></i>{" "}
                              Reject Project
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
                    <td style={{ textAlign: "left" }}>Nirmal GC</td>
                    <td>2025-02-11</td>
                    <td>
                      <span className="bg-progress text-white w-auto rounded-2 py-1 px-2">
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
                          <li
                            data-bs-toggle="modal"
                            data-bs-target="#viewProjectModal"
                          >
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye text-progress me-1"></i>{" "}
                              View Project
                            </a>
                          </li>
                          {/* <!-- <li><a  className="dropdown-item" href="#"><i  className="bi bi-box-arrow-up-right text-warning me-1"></i>
                            Change Status</a></li> --> */}
                          <li>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-check-circle text-primary me-1"></i>
                              Approve Project
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-x-circle text-danger me-1"></i>{" "}
                              Reject Project
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
                    <td style={{ textAlign: "left" }}>Manish Shrestha</td>
                    <td>2025-02-11</td>
                    <td>
                      <span className="bg-primary text-white w-auto rounded-2 py-1 px-2">
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
                          <li
                            data-bs-toggle="modal"
                            data-bs-target="#viewProjectModal"
                          >
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-eye text-progress me-1"></i>{" "}
                              View Project
                            </a>
                          </li>
                          {/* <!-- <li><a  className="dropdown-item" href="#"><i  className="bi bi-box-arrow-up-right text-warning me-1"></i>
                            Change Status</a></li> --> */}
                          <li>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-check-circle text-primary me-1"></i>
                              Approve Project
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-x-circle text-danger me-1"></i>{" "}
                              Reject Project
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
          {/* <!-- View Project Modal --> */}
          <div
            className="modal fade text-start"
            id="viewProjectModal"
            tabindex="-1"
            aria-labelledby="viewProjectModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header pb-0 border-bottom-0">
                  <div>
                    <h5 className="modal-title" id="viewProjectModalLabel">
                      Project Request Details
                    </h5>
                    {/* <!-- <p  className="text-muted">Fill the form below to request a new project.</p> --> */}
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
                    <div className="row">
                      <div className="col-6 mb-3">
                        <label for="task-title" className="form-label">
                          Project Title
                        </label>
                        <input
                          type="search"
                          className="form-control"
                          id="task-title"
                          value="AI Based Learning Platform"
                          aria-label="Project Title"
                        />
                      </div>
                      <div className="col-6 mb-3">
                        <label for="task-requester" className="form-label">
                          Requester
                        </label>
                        <input
                          type="search"
                          className="form-control"
                          id="task-requester"
                          value="Manish Shrestha"
                          aria-label="Requester"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="task-description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="task-description"
                        rows="5"
                        aria-label="Project Description"
                      >
                        A platform designed to deliver personalized learning
                        experiences using AI algorithms. It will adapt content
                        based on the user’s performance and preferences to
                        improve learning outcomes.
                      </textarea>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label for="assignees2" className="form-label">
                            Assigned To
                          </label>
                          <div className="multi-user-container">
                            <label
                              for="assignees2"
                              className="multi-user-label"
                            ></label>
                            <div className="tag-input" tabindex="0">
                              <div
                                id="assignees2"
                                className="tags-container"
                              ></div>
                              <input
                                type="text"
                                className="user-search-input"
                                list="datalist-assignees2"
                                placeholder="Search user..."
                              />
                            </div>
                            <datalist id="datalist-assignees2">
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
                    Reject
                  </button>
                  <button type="submit" className="btn btn-primary px-4">
                    Accept Project{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
