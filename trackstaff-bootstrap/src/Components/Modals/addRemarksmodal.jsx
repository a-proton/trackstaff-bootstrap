import React, { useState, useEffect } from "react";

const RemarksModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState("InProgress");
  const [priority, setPriority] = useState("High");
  const [newRemark, setNewRemark] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  const customStyles = `
    .dropdown-item-white-hover:not(.active):hover {
      background-color: rgb(250, 250, 250) !important;
      color: #333 !important;
    }
    .dropdown-item.active {
      color: white !important;
    }
    .dropdown-menu {
      border-radius: 0 !important;
    }
    .dropdown-item {
      border-radius: 0 !important;
    }
    .modal-content {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .bg-light.rounded-3 {
      margin-right: 1rem;
    }
  `;

  const statusData = {
    InProgress: { buttonColor: "#0D99FF", activeColor: "#0D99FF" },
    Pending: { buttonColor: "#ffc107", activeColor: "#ffc107" },
    Completed: { buttonColor: "#1AB189", activeColor: "#1AB189" },
  };

  const priorityData = {
    High: { buttonColor: "#FF4F4F", activeColor: "#FF4F4F" },
    Medium: { buttonColor: "#1ab189", activeColor: "#1ab189" },
    Low: { buttonColor: "#FEC53D", activeColor: "#FEC53D" },
  };

  const remarks = [
    {
      id: 1,
      name: "Alton Tremblay",
      avatar: "https://i.pravatar.cc/40?img=1",
      message: "Hello team, Please update your task. I'll take a look at them.",
      daysAgo: "12 days ago",
    },
    {
      id: 2,
      name: "Alton Tremblay",
      avatar: "https://i.pravatar.cc/40?img=2",
      message: "Hello team, Please update your task. I'll take a look at them.",
      daysAgo: "12 days ago",
    },
    {
      id: 3,
      name: "Alton Tremblay",
      avatar: "https://i.pravatar.cc/40?img=1",
      message: "Hello team, Please update your task. I'll take a look at them.",
      daysAgo: "12 days ago",
    },
    {
      id: 4,
      statusChange: true,
      from: "Pending",
      to: "InProgress",
      date: "06/11/2025",
      time: "03:54 PM",
    },
    {
      id: 5,
      name: "Alton Tremblay",
      avatar: "https://i.pravatar.cc/40?img=2",
      image:
        "https://images.unsplash.com/photo-1577422995234-533999e564a2?w=800",
      daysAgo: "12 days ago",
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      <style>{customStyles}</style>

      {/* Backdrop with animation */}
      <div
        className={`modal-backdrop fade ${show ? "show" : ""}`}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        className={`modal fade ${show ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <div className="modal-content rounded-3">
            {/* Header */}
            <div className="modal-header align-items-start pb-3 px-4">
              <div className="flex-grow-1">
                <h5 className="modal-title fw-bold">
                  Remarks for "Cheap Flight"
                </h5>
                <div className="d-flex gap-4 mt-3">
                  {/* Status Dropdown */}
                  <div className="d-flex align-items-center gap-2">
                    <strong className="text-nowrap">Status:</strong>
                    <div className="dropdown">
                      <button
                        className="btn btn-sm d-flex align-items-center text-white"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{
                          backgroundColor: statusData[status].buttonColor,
                        }}
                      >
                        {status}
                        <i className="bi bi-chevron-down ms-2 text-white"></i>
                      </button>
                      <ul
                        className="dropdown-menu p-0"
                        style={{ minWidth: "150px", overflow: "hidden" }}
                      >
                        {Object.keys(statusData).map((opt) => (
                          <li key={opt}>
                            <button
                              className={`dropdown-item w-100 text-start px-3 py-2 dropdown-item-white-hover ${
                                status === opt ? "active" : ""
                              }`}
                              onClick={() => setStatus(opt)}
                              style={
                                status === opt
                                  ? {
                                      backgroundColor:
                                        statusData[opt].activeColor,
                                    }
                                  : {}
                              }
                            >
                              {opt}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Priority Dropdown */}
                  <div className="d-flex align-items-center gap-2">
                    <strong>Priority:</strong>
                    <div className="dropdown">
                      <button
                        className="btn btn-sm d-flex align-items-center text-white"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{
                          backgroundColor: priorityData[priority].buttonColor,
                        }}
                      >
                        {priority}
                        <i className="bi bi-chevron-down ms-2 text-white"></i>
                      </button>
                      <ul
                        className="dropdown-menu p-0"
                        style={{ minWidth: "150px", overflow: "hidden" }}
                      >
                        {Object.keys(priorityData).map((opt) => (
                          <li key={opt}>
                            <button
                              className={`dropdown-item w-100 text-start px-3 py-2 dropdown-item-white-hover ${
                                priority === opt ? "active" : ""
                              }`}
                              onClick={() => setPriority(opt)}
                              style={
                                priority === opt
                                  ? {
                                      backgroundColor:
                                        priorityData[opt].activeColor,
                                    }
                                  : {}
                              }
                            >
                              {opt}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body pt-4 px-4">
              {remarks.map((item) =>
                item.statusChange ? (
                  <div key={item.id} className="text-center my-4 px-3">
                    <span
                      className="d-inline-block rounded-pill px-3 py-2"
                      style={{
                        backgroundColor: "#e7f5ff",
                        color: "#0d6efd",
                        fontSize: "0.9rem",
                      }}
                    >
                      ● Status changed from "{item.from}" to "{item.to}" ●{" "}
                      {item.date} {item.time}
                    </span>
                  </div>
                ) : (
                  <div
                    className="d-flex align-items-start mb-4 pe-3"
                    key={item.id}
                  >
                    <img
                      src={item.avatar}
                      alt="Avatar"
                      className="rounded-circle"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div className="bg-light rounded-3 p-3 w-100 ms-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 fw-bold">{item.name}</h6>
                        <small className="text-muted flex-shrink-0 ms-3">
                          {item.daysAgo}
                        </small>
                      </div>
                      {item.message && (
                        <p className="mb-0 mt-2 text-muted">{item.message}</p>
                      )}
                      {item.image && (
                        <img
                          src={item.image}
                          alt="Attached"
                          className="img-fluid rounded-3 mt-2"
                        />
                      )}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Footer */}
            <div className="modal-footer border-top-0 d-flex align-items-center px-4">
              <div className="flex-grow-1 me-2">
                <div className="d-flex align-items-center">
                  <span className="border rounded px-3 py-2 bg-white">
                    <i className="bi bi-plus-lg"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control shadow-none ms-2"
                    placeholder="Add a new remark"
                    value={newRemark}
                    onChange={(e) => setNewRemark(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="btn text-white d-flex align-items-center gap-2 px-4 py-2"
                style={{ backgroundColor: "#26a69a", border: "none" }}
                onClick={() => {
                  if (newRemark.trim()) {
                    alert(`Remark sent: ${newRemark}`);
                    setNewRemark("");
                  }
                }}
              >
                <i className="bi bi-send-fill"></i>
                <span className="fw-semibold">Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemarksModal;
