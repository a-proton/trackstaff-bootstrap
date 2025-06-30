import React from "react";
import { useState } from "react";
import AddTaskModal from "../Components/Modals/taskModal";
const SubTask = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCreateTask = () => {
    alert("Task Created!");
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <main className="p-2">
      <div className="px-2 bg-white p-2 rounded-3">
        {/* <!-- My Tasks Heading Start --> */}
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-between gap-2">
            <h5 className="fs-2 fw-semibold">
              {" "}
              <a href="/tasks">
                <i className="bi bi-chevron-left"></i>
              </a>
              Employee Task Details
            </h5>
            <div>
              {/* <!-- Add Task Modal --> */}

              <button className="btn btn-primary" onClick={openModal}>
                <i className="bi bi-plus fs-5"></i> Add Task
              </button>

              <AddTaskModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleCreateTask}
              />
            </div>

            {/* <!-- <p  className="">Track your work hours and attendance</p> --> */}
          </div>
        </div>
        {/* <!-- My Tasks Heading End --> */}

        {/* <!-- Search and Date Filters --> */}
        <form className="d-flex flex-column flex-sm-row flex-wrap justify-content-between align-items-sm-end gap-2 mb-3 bg-white p-1 rounded-3">
          <div className="flex-grow-1">
            <label for="start-date" className="form-label">
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
          <div className="flex-grow-1">
            <label for="search" className="form-label">
              Task Name
            </label>
            <input
              type="search"
              className="form-control text-dark-emphasis"
              placeholder="Search by task name......"
              aria-label="Search"
            />
          </div>
          <div className="d-flex align-items-end gap-2 flex-grow-1 flex-wrap justify-content-center">
            <div className="flex-grow-1">
              <label for="start-date" className="form-label">
                Status
              </label>
              <select
                className="form-select text-dark-emphasis"
                id="task-status"
                aria-label="Task Status"
              >
                <option selected="" disabled="">
                  Select Status
                </option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="inprogress">In Progress</option>
              </select>
            </div>
            <div className="flex-grow-1">
              <label for="due-date" className="form-label">
                Priority
              </label>
              <select
                className="form-select text-dark-emphasis"
                id="task-priority"
                aria-label="Task Priority"
              >
                <option selected="" disabled="">
                  Select Priority
                </option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="flex-grow-0 text-center">
              <button type="button" className="btn btn-primary w-100 px-4">
                <i className="bi bi-search pe-2"></i> Search
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
                  Project
                </th>
                <th scope="col" className="text-start">
                  Title
                </th>
                <th scope="col" style={{ textAlign: "left" }}>
                  Status
                </th>
                <th scope="col" style={{ textAlign: "left" }}>
                  Priority
                </th>
                <th scope="col" style={{ textAlign: "left" }}>
                  Active Logs
                </th>
                {/* <th scope="col"></th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="align-middle">
                  1
                </th>
                <td className="text-start">Cheap Flights Nepal</td>
                <td className="text-start">Dynamic FAQ System</td>
                <td>
                  <td>
                    <span className="bg-warning text-white w-auto rounded-2 py-1 px-2">
                      Pending
                    </span>
                  </td>
                </td>
                <td>
                  <span className="bg-danger text-white w-auto rounded-2 py-1 px-2">
                    High
                  </span>
                </td>
                <td className="text-start">
                  <img
                    src="./img/user-1.jpg"
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginRight: "0px",
                      zIndex: 3,
                    }}
                  />
                  <img
                    src="../img/user-2.jpg"
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",

                      zIndex: 2,
                    }}
                  />
                  <img
                    src="./img/user-3.jpg"
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",

                      zIndex: 1,
                    }}
                  />
                </td>

                <td>
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <button type="button" className="btn btn-task w-100px px-4">
                      <i className="bi bi-chat pe-2"></i> Manage Task
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="align-middle">
                  1
                </th>
                <td className="text-start">Cheap Flights Nepal</td>
                <td className="text-start">Dynamic FAQ System</td>
                <td>
                  <td>
                    <span className="bg-warning text-white w-auto rounded-2 py-1 px-2">
                      Pending
                    </span>
                  </td>
                </td>
                <td>
                  <span className="bg-danger text-white w-auto rounded-2 py-1 px-2">
                    High
                  </span>
                </td>
                <td className="text-start">
                  <img
                    src="./img/user-1.jpg"
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginRight: "0px",
                      zIndex: 3,
                    }}
                  />
                  <img
                    src="../img/user-2.jpg"
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",

                      zIndex: 2,
                    }}
                  />
                  <img
                    src="./img/user-3.jpg"
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",

                      zIndex: 1,
                    }}
                  />
                </td>

                <td>
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <button type="button" className="btn btn-task w-100px px-4">
                      <i className="bi bi-chat pe-2"></i> Manage Task
                    </button>
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

export default SubTask;
