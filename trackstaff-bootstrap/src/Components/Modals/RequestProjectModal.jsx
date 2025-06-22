import React, { useState, useEffect } from "react";

const RequestProjectModal = ({ isOpen, onClose, onSubmit }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    projectTitle: "",
    description: "",
    assignedTo: "",
    startDate: "",
    dueDate: "",
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      projectTitle: "",
      description: "",
      assignedTo: "",
      startDate: "",
      dueDate: "",
    });
  };

  return (
    <>
      {/* Bootstrap Modal with show class and backdrop */}
      <div
        className={`modal fade text-start ${show ? "show" : ""}`}
        style={{ display: "block" }}
        tabIndex="-1"
        aria-labelledby="addProjectModalLabel"
        aria-hidden={!show}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header pb-0 border-bottom-0">
              <div>
                <h5 className="modal-title" id="addProjectModalLabel">
                  Request New Project
                </h5>
                <p className="text-muted">
                  Fill the form below to request a new project.
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
              <div>
                <div className="mb-3">
                  <label htmlFor="task-title" className="form-label">
                    Project Title
                  </label>
                  <input
                    type="search"
                    className="form-control"
                    id="task-title"
                    value={formData.projectTitle}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        projectTitle: e.target.value,
                      }))
                    }
                    placeholder="Search by project title..."
                    aria-label="Project Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="task-description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="task-description"
                    rows="3"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Enter project description..."
                    aria-label="Project Description"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor="task-assigned-to" className="form-label">
                        Assigned To
                      </label>
                      <input
                        type="search"
                        className="form-control"
                        id="task-assigned-to"
                        value={formData.assignedTo}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            assignedTo: e.target.value,
                          }))
                        }
                        placeholder="Search user..."
                        aria-label="Assigned To"
                      />
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
                        value={formData.startDate}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            startDate: e.target.value,
                          }))
                        }
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
                        value={formData.dueDate}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            dueDate: e.target.value,
                          }))
                        }
                        aria-label="Task End Date"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
                type="submit"
                className="btn btn-primary px-4"
                onClick={handleSubmit}
              >
                Request Project
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
export default RequestProjectModal;
