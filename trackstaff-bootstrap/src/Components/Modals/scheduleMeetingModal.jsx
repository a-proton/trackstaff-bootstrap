import React, { useState, useEffect } from "react";

const ScheduleMeetingModal = ({ isOpen, onClose, onSubmit }) => {
  const [show, setShow] = useState(false);
  //const onClose = () => setIsModalOpen(false);

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
        aria-labelledby="addMeetingModalLabel"
        aria-hidden={!show}
      >
        <div className="modal-dialog text-start">
          <div className="modal-content">
            {/* Updated header to match AddProjectModal */}
            <div className="modal-header pb-0 border-bottom-0 align-items-start">
              <div>
                <h5 className="modal-title" id="addMeetingModalLabel">
                  Schedule New Meeting
                </h5>
                <p className="text-muted ">
                  Fill the form below to schedule a new meeting.
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
                  <label htmlFor="meeting-title" className="form-label">
                    Meeting Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="meeting-title"
                    placeholder="Enter meeting title..."
                    aria-label="Meeting Title"
                  />
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="meeting-date" className="form-label">
                        Date
                      </label>
                      <input
                        type="date"
                        className="form-control text-dark-emphasis"
                        id="meeting-date"
                        aria-label="Meeting Date"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="meeting-time" className="form-label">
                        Time
                      </label>
                      <input
                        type="time"
                        className="form-control text-dark-emphasis"
                        id="meeting-time"
                        aria-label="Meeting Time"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label
                        htmlFor="meeting-assigned-to"
                        className="form-label"
                      >
                        Assigned To
                      </label>
                      <div className="multi-user-container">
                        <label
                          htmlFor="meeting-assigned-to"
                          className="multi-user-label"
                        ></label>
                        <div className="tag-input" tabIndex="0">
                          <div
                            id="meeting-assigned-to"
                            className="tags-container"
                          ></div>
                          <input
                            type="text"
                            className="user-search-input"
                            list="datalist-meeting-assigned-to"
                            placeholder="Search user..."
                          />
                        </div>
                        <datalist id="datalist-meeting-assigned-to">
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

                <div className="mb-3">
                  <label htmlFor="meeting-description" className="form-label">
                    Meeting Agenda
                  </label>
                  <textarea
                    className="form-control"
                    id="meeting-description"
                    rows="3"
                    placeholder="Enter meeting agenda..."
                    aria-label="Meeting Agenda"
                  ></textarea>
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
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      <div
        className={`modal-backdrop fade ${show ? "show" : ""}`}
        onClick={onClose}
      ></div>
    </>
  );
};

export default ScheduleMeetingModal;
