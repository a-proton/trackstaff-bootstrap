import React from "react";
import { useState } from "react";
import AddTaskModal from "../Components/Modals/taskModal";

const Tasks = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCreateTask = () => {
    alert("Task Created!");
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <main className="p-3">
      <div className="px-2 bg-white p-3 rounded-3">
        {/* Employee Tasks Heading Start */}
        <div className="row">
          <div className="col-12">
            <h5 className="fs-3 fw-semibold">Employee Task List</h5>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3 gap-2 flex-wrap bg-white p-1 rounded-3">
          {/* Tabs */}
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

          {/* Add Task Button - NOW WITH ONCLICK HANDLER */}
          <button className="btn btn-primary" onClick={openModal}>
            <i className="bi bi-plus fs-5"></i> Add Task
          </button>

          <AddTaskModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleCreateTask}
          />
        </div>

        {/* Search and Date Filters */}
        <form className="d-flex flex-column flex-sm-row flex-wrap justify-content-between align-items-sm-end gap-2 mb-3 bg-white p-1 rounded-3">
          <div className="flex-grow-1">
            <label htmlFor="search" className="form-label">
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
            <label htmlFor="search" className="form-label">
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
              </div>
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
                        <a className="dropdown-item" href="/sub-tasks">
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
              {/* Other table rows... */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Tasks;
