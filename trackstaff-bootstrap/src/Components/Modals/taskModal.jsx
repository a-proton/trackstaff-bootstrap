import React, { useState, useEffect } from "react";

const AddTaskModal = ({ isOpen, onClose, onSubmit }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      {/* Bootstrap Modal with show class and backdrop */}
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={{ display: "block" }}
        tabIndex="-1"
        aria-labelledby="addTaskModalLabel"
        aria-hidden={!show}
      >
        <div className="modal-dialog text-start">
          <div className="modal-content">
            <div className="modal-header pb-0 border-bottom-0 align-items-start">
              <div>
                <h5 className="modal-title">Create New Task</h5>
                <p className="text-muted">
                  Fill the form below to create a new task.
                </p>
              </div>
              <button
                type="button"
                className="btn-close "
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="task-status" className="form-label">
                    Project
                  </label>
                  <select
                    className="form-select text-dark-emphasis"
                    id="task-status"
                    aria-label="Task Status"
                  >
                    <option value="" disabled selected>
                      Select Project
                    </option>
                    <option value="project1">Project 1</option>
                    <option value="project2">Project 2</option>
                    <option value="project3">Project 3</option>
                    <option value="project4">Project 4</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="task-title" className="form-label">
                    Task Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="task-title"
                    placeholder="Enter task title..."
                    aria-label="Task Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="task-description" className="form-label">
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
                      <label htmlFor="task-assigned-to" className="form-label">
                        Assigned To
                      </label>
                      <div className="multi-user-container">
                        <label
                          htmlFor="tasks-assigned-to"
                          className="multi-user-label"
                        ></label>
                        <div className="tag-input" tabIndex="0">
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
                      <label htmlFor="task-priority" className="form-label">
                        Status
                      </label>
                      <select
                        className="form-select text-dark-emphasis"
                        id="task-priority"
                        aria-label="Task Priority"
                      >
                        <option value="" disabled selected>
                          Pending
                        </option>
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
                      <label htmlFor="task-start-date" className="form-label">
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
                      <label htmlFor="task-end-date" className="form-label">
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
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary px-4"
                onClick={handleSubmit}
              >
                Create Task
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal Backdrop */}
      <div
        className={`modal-backdrop fade ${show ? "show" : ""}`}
        onClick={onClose}
      ></div>
    </>
  );
};

export default AddTaskModal;
