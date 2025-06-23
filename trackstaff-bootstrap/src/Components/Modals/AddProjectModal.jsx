import React, { useState, useEffect } from "react";

const AddProjectModal = ({ isOpen, onClose, onSubmit }) => {
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
        aria-labelledby="addProjectModalLabel"
        aria-hidden={!show}
      >
        <div className="modal-dialog text-start">
          <div className="modal-content  ">
            <div className="modal-header pb-0 border-bottom-0 align-items-start">
              <div>
                <h5 className="modal-title" id="addProjectModalLabel">
                  Add New Project
                </h5>
                <p className="text-muted  ">
                  Fill the form below to add a new project.
                </p>
              </div>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="project-title" className="form-label">
                    Project Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="project-title"
                    placeholder="Enter project title..."
                    aria-label="Project Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="project-description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="project-description"
                    rows="3"
                    placeholder="Enter project description..."
                    aria-label="Project Description"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label
                        htmlFor="project-assigned-to"
                        className="form-label"
                      >
                        Assigned To
                      </label>
                      <div className="multi-user-container">
                        <label
                          htmlFor="project-assigned-to"
                          className="multi-user-label"
                        ></label>
                        <div className="tag-input" tabIndex="0">
                          <div
                            id="project-assigned-to"
                            className="tags-container"
                          ></div>
                          <input
                            type="text"
                            className="user-search-input"
                            list="datalist-project-assigned-to"
                            placeholder="Search user..."
                          />
                        </div>
                        <datalist id="datalist-project-assigned-to">
                          <option
                            value="Surya Poudel"
                            data-user-id="001"
                            data-role="Admin"
                          />
                          <option
                            value="Manish Shrestha"
                            data-user-id="002"
                            data-role="Developer"
                          />
                          <option
                            value="Kabita Subedi"
                            data-user-id="003"
                            data-role="Designer"
                          />
                          <option
                            value="Sangam Giri"
                            data-user-id="004"
                            data-role="Developer"
                          />
                          <option
                            value="Nirmal GC"
                            data-user-id="005"
                            data-role="Tester"
                          />
                          <option
                            value="Susmita Poudel"
                            data-user-id="006"
                            data-role="Content Writer"
                          />
                          <option
                            value="Rohan GC"
                            data-user-id="007"
                            data-role="Developer"
                          />
                          <option
                            value="Bisai Chhetri"
                            data-user-id="008"
                            data-role="Designer"
                          />
                          <option
                            value="Bishwo Raj Parajuli"
                            data-user-id="009"
                            data-role="Manager"
                          />
                          <option
                            value="Xitij Shrestha"
                            data-user-id="010"
                            data-role="Intern"
                          />
                        </datalist>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label
                        htmlFor="project-start-date"
                        className="form-label"
                      >
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="form-control text-dark-emphasis"
                        id="project-start-date"
                        aria-label="Project Start Date"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="project-due-date" className="form-label">
                        Due Date
                      </label>
                      <input
                        type="date"
                        className="form-control text-dark-emphasis"
                        id="project-due-date"
                        aria-label="Project Due Date"
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
                Add Project
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

export default AddProjectModal;
