import React, { useState, useEffect } from "react";

const AddMemberModal = ({ isOpen, onClose, onSubmit }) => {
  // State to control the visibility and animation class
  const [show, setShow] = useState(false);

  // State to hold the form data for the new member
  const [memberData, setMemberData] = useState({
    employeeName: "",
    role: "",
    status: "Active", // Default status
  });

  // Effect to handle the fade-in/out animation
  useEffect(() => {
    if (isOpen) {
      // Reset form when modal opens
      setMemberData({
        employeeName: "",
        role: "",
        status: "Active",
      });
      // Add 'show' class after a short delay to trigger the CSS transition
      setTimeout(() => setShow(true), 10);
    } else {
      // Remove 'show' class to fade out
      setShow(false);
    }
  }, [isOpen]);

  // Don't render the modal if it's not open
  if (!isOpen) return null;

  // Handler to update state when form fields change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMemberData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the collected member data to the parent component
    onSubmit(memberData);
  };

  return (
    <>
      {/* Bootstrap Modal with dynamic 'show' class for animation */}
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={{ display: "block" }}
        tabIndex="-1"
        aria-labelledby="addMemberModalLabel"
        aria-hidden={!show}
      >
        <div className="modal-dialog text-start">
          <div className="modal-content">
            <div className="modal-header pb-0 border-bottom-0 align-items-start">
              <div>
                <h5 className="modal-title" id="addMemberModalLabel">
                  Add New Member
                </h5>
                <p className="text-muted">
                  Fill the form below to add a new project member.
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
                {/* Employee Name Input */}
                <div className="mb-3">
                  <label htmlFor="employee-name" className="form-label">
                    Employee Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="employee-name"
                    name="employeeName"
                    placeholder="Enter employee's full name"
                    value={memberData.employeeName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Role Select */}
                <div className="mb-3">
                  <label htmlFor="member-role" className="form-label">
                    Role
                  </label>
                  <select
                    className="form-select text-dark-emphasis"
                    id="member-role"
                    name="role"
                    aria-label="Member Role"
                    value={memberData.role}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select Role
                    </option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="QA Tester">QA Tester</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>

                {/* Status Select */}
                <div className="mb-3">
                  <label htmlFor="member-status" className="form-label">
                    Status
                  </label>
                  <select
                    className="form-select text-dark-emphasis"
                    id="member-status"
                    name="status"
                    aria-label="Member Status"
                    value={memberData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="On Leave">On Leave</option>
                  </select>
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
                Add Member
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal Backdrop */}
      <div
        className={`modal-backdrop fade ${show ? "show" : ""}`}
        // The backdrop doesn't strictly need an onClick, but it's good practice
        // if you want clicking outside the modal to close it.
        onClick={onClose}
      ></div>
    </>
  );
};

export default AddMemberModal;
