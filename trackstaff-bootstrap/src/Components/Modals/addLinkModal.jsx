import React, { useState, useEffect } from "react";

const AddSharedLinkModal = ({ isOpen, onClose, onSubmit }) => {
  const [show, setShow] = useState(false);
  const [linkDetails, setLinkDetails] = useState({
    type: "",
    title: "",
    url: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLinkDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!linkDetails.type) validationErrors.type = "Please select a link type.";
    if (!linkDetails.title) validationErrors.title = "Title is required.";
    if (!linkDetails.url) validationErrors.url = "URL is required.";
    else if (!/^(https?:\/\/)/i.test(linkDetails.url))
      validationErrors.url = "Enter a valid URL.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(linkDetails);
    onClose();
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
        aria-labelledby="addSharedLinkModalLabel"
        aria-hidden={!show}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addSharedLinkModalLabel">
                Add Shared Link
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* Type Dropdown */}
                <div className="mb-3">
                  <label htmlFor="shared-link-type" className="form-label">
                    Type
                  </label>
                  <select
                    name="type"
                    id="shared-link-type"
                    className="form-select text-dark-emphasis"
                    value={linkDetails.type}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Type</option>
                    <option value="meeting">Meeting</option>
                    <option value="task">Task</option>
                    <option value="document">Document</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.type && (
                    <small className="text-danger">{errors.type}</small>
                  )}
                </div>

                {/* Title Input */}
                <div className="mb-3">
                  <label htmlFor="shared-link-title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="shared-link-title"
                    className="form-control"
                    placeholder="Enter link title..."
                    value={linkDetails.title}
                    onChange={handleInputChange}
                  />
                  {errors.title && (
                    <small className="text-danger">{errors.title}</small>
                  )}
                </div>

                {/* URL Input */}
                <div className="mb-3">
                  <label htmlFor="shared-link-url" className="form-label">
                    Link URL
                  </label>
                  <input
                    type="text"
                    name="url"
                    id="shared-link-url"
                    className="form-control"
                    placeholder="https://example.com "
                    value={linkDetails.url}
                    onChange={handleInputChange}
                  />
                  {errors.url && (
                    <small className="text-danger">{errors.url}</small>
                  )}
                </div>
              </form>
            </div>
            <div className="modal-footer">
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
                Add Link
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

export default AddSharedLinkModal;
