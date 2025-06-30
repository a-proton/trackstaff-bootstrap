import React, { useState, useEffect } from "react";

const PostMessageModal = ({ isOpen, onClose, onSubmit }) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [status, setStatus] = useState("pending");

  // Handle changes in the message input
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle changes in the assigned users input
  const handleUserSearch = (e) => {
    // Simulate adding users based on input (for simplicity)
    const userInput = e.target.value;
    if (userInput.trim() !== "") {
      setAssignedUsers([...assignedUsers, userInput]);
      e.target.value = ""; // Clear the input after adding
    }
  };

  // Handle changes in the status radio buttons
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  // Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      message,
      assignedUsers,
      status,
    });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Bootstrap Modal with show class and backdrop */}
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={{ display: "block" }}
        tabIndex="-1"
        aria-labelledby="postMessageModalLabel"
        aria-hidden={!show}
      >
        <div className="modal-dialog text-start">
          <div className="modal-content">
            <div className="modal-header pb-0 border-bottom-0 align-items-start">
              <div>
                <h5 className="modal-title">Post a New Message</h5>
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
                {/* MESSAGE INPUT */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    MESSAGE
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Enter your message..."
                    value={message}
                    onChange={handleMessageChange}
                  ></textarea>
                </div>

                {/* ASSIGN TO INPUT */}
                <div className="mb-3">
                  <label htmlFor="assign-to" className="form-label">
                    ASSIGN TO
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="assign-to"
                    placeholder="Search and add users..."
                    onChange={handleUserSearch}
                  />
                  {assignedUsers.length > 0 && (
                    <div className="mt-2">
                      {assignedUsers.map((user, index) => (
                        <span key={index} className="badge bg-secondary me-2">
                          {user}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* SET TASK STATUS */}
                <div className="mb-3">
                  <label className="form-label">SET TASK STATUS</label>
                  <div className="d-flex align-items-center gap-3">
                    <div>
                      <input
                        type="radio"
                        id="pending"
                        name="status"
                        value="pending"
                        checked={status === "pending"}
                        onChange={handleStatusChange}
                      />
                      <label
                        htmlFor="pending"
                        className="ms-2"
                        style={{ color: "#6c757d" }}
                      >
                        Pending
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="in-progress"
                        name="status"
                        value="in-progress"
                        checked={status === "in-progress"}
                        onChange={handleStatusChange}
                      />
                      <label
                        htmlFor="in-progress"
                        className="ms-2"
                        style={{ color: "#ffc107" }}
                      >
                        In Progress
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="completed"
                        name="status"
                        value="completed"
                        checked={status === "completed"}
                        onChange={handleStatusChange}
                      />
                      <label
                        htmlFor="completed"
                        className="ms-2"
                        style={{ color: "#28a745" }}
                      >
                        Completed
                      </label>
                    </div>
                  </div>
                </div>

                {/* FORM FOOTER */}
                <div className="modal-footer border-top-0">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onClose}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
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

export default PostMessageModal;
