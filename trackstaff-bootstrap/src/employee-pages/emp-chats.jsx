import { useState } from "react";
import PostMessageModal from "../Components/Modals/postMessageModal";
import AddSharedLinkModal from "../Components/Modals/addLinkModal";
import AddTaskModal from "../Components/Modals/taskModal";
const EmpChats = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const handleOpenLinkModal = () => {
    setIsModalOpen(true);
  };
  const handleCreateTask = (taskData) => {
    console.log("Task created:", taskData);
    alert("Task Created!");
    setTaskModalOpen(false);
  };
  const openTaskModal = () => {
    setTaskModalOpen(true);
  };
  const handleCloseLinkModal = () => {
    setIsModalOpen(false);
  };

  const handleLinkSubmit = (data) => {
    console.log("Submitted Link:", data);
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (data) => {
    console.log("Submitted Data:", data);
    setIsOpen(false);
  };

  return (
    <main className="p-2 reminders">
      <div className="p-2">
        <div className="row g-3">
          <div className="col-12 col-xl-7 col-xxl-8">
            <div
              className="tab-content rounded-3 bg-white"
              id="pills-tabContent"
            >
              <div
                className="tab-pane fade show active"
                id="pills-kaamsansar"
                role="tabpanel"
                aria-labelledby="pills-kaamsansar-tab"
              >
                <div className="chat-container p-3">
                  {/* Header */}
                  <div
                    className="d-flex justify-content-between align-items-baseline mb-3
                   flex-wrap"
                  >
                    <p className="mb-3 me-5 fs-5 fw-semibold">
                      Kamsansar Web Design
                    </p>
                    <div className="d-flex align-items-center gap-2 flex-fill">
                      <div className="input-group justify-content-end">
                        <span className="input-group-text bg-transparent">
                          <i className="bi bi-search"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control border-start-0 ps-1 py-2 flex-grow-1"
                          placeholder="Search messages..."
                        />
                      </div>
                      {/* FIXED: Updated Share Link button to use React handler */}
                      <button
                        className="btn btn-primary text-nowrap py-2"
                        data-bs-toggle="modal"
                        data-bs-target="#sharedLinkModal"
                      >
                        <i className="bi bi-link-45deg"></i> Shared Link
                      </button>

                      <div className=" ">
                        <a
                          href="/employee/calendar"
                          style={{ textDecoration: " none" }}
                        >
                          <i
                            className="fa-regular fa-calendar py-1 px-2"
                            style={{
                              color: "#0c966f",
                              border: "2px solid #0c966f",
                              fontSize: "22px",
                              borderRadius: "8px",
                              display: "inline-block",
                              cursor: " pointer",
                            }}
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*  Add Shared Link Modal */}
                  <div
                    class="modal fade"
                    id="sharedLinkModal"
                    tabindex="-1"
                    aria-labelledby="sharedLinkModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="sharedLinkModalLabel">
                            Shared Links
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <a href="#" target="_blank">
                            <h5>
                              Kamsansar Figma Link <span>(3 days ago)</span>
                            </h5>
                            <p class="link-progress">https://example.com</p>
                          </a>
                          <a href="#" target="_blank">
                            <h5>
                              Cheap Flight Booking Link{" "}
                              <span>(2 days ago)</span>
                            </h5>
                            <p class="link-progress">https://example.com</p>
                          </a>
                          <a href="#" target="_blank">
                            <h5>
                              TrackStaff Dashboard Link <span>(1 day ago)</span>
                            </h5>
                            <p class="link-progress">https://example.com</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Add Shared File Modal */}
                  <div
                    class="modal fade"
                    id="addSharedFileModal"
                    tabindex="-1"
                    aria-labelledby="addSharedFileModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="addSharedFileModalLabel">
                            Add Shared File
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <form>
                            <div class="mb-3">
                              <label for="sharedFile" class="form-label">
                                File
                              </label>
                              <input
                                class="form-control"
                                type="file"
                                id="sharedFile"
                              />
                            </div>
                            <div class="mb-3">
                              <label for="sharedFileDesc" class="form-label">
                                Description
                              </label>
                              <textarea
                                class="form-control"
                                id="sharedFileDesc"
                                rows="3"
                              ></textarea>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn border px-4"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary px-4">
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="d-flex align-items-start mb-2 position-relative">
                    {/* Avatar OUTSIDE */}
                    <img
                      src="../img/user-1.jpg"
                      className="chat-avatar outside-avatar"
                      alt="avatar"
                    />

                    {/* Chat Container */}
                    <div className="chat-container d-flex justify-content-between bg-light align-items-start w-100">
                      {/* Left Content */}
                      <div className="me-2">
                        <h6 className="mb-1">Manish Shrestha</h6>
                        <p className="mb-2">
                          Hello team, Please update your task. I'll take a look
                          at them.
                        </p>
                        <div className="small-icons d-flex gap-1">
                          <img
                            src="../img/user-1.jpg"
                            className="chat-avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            className="chat-avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            className="chat-avatar"
                          />
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="text-end d-flex flex-column gap-2">
                        <small className="text-muted">12 days ago</small>
                        <div className="task-icons d-flex gap-2 gapping">
                          <i
                            className="bi bi-pencil-square meeting_icon__pen  me-4"
                            onClick={handleOpenModal}
                          ></i>
                          <PostMessageModal
                            isOpen={isOpen}
                            onClose={handleCloseModal}
                            onSubmit={handleSubmit}
                          />
                          <i className="bi bi-trash meeting_icon__trash"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-2 position-relative">
                    {/* Avatar OUTSIDE */}
                    <img
                      src="../img/user-2.jpg"
                      className="chat-avatar outside-avatar"
                      alt="avatar"
                    />

                    {/* Chat Container */}
                    <div className="chat-container d-flex justify-content-between bg-light align-items-start w-100">
                      {/* Left Content */}
                      <div className="me-2">
                        <h6 className="mb-1">Manish Shrestha</h6>
                        <p className="mb-2">
                          Hello team, Please update your task. I'll take a look
                          at them.
                        </p>
                        <div className="small-icons d-flex gap-1">
                          <img
                            src="../img/user-2.jpg"
                            className="chat-avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            className="chat-avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            className="chat-avatar"
                          />
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="text-end d-flex flex-column gap-2">
                        <small className="text-muted">12 days ago</small>
                        <div className="task-icons d-flex gap-2 gapping">
                          <i className="bi bi-pencil-square meeting_icon__pen me-4"></i>
                          <i className="bi bi-trash meeting_icon__trash"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-2 position-relative">
                    {/* Avatar OUTSIDE */}
                    <img
                      src="../img/user-1.jpg"
                      className="chat-avatar outside-avatar"
                      alt="avatar"
                    />

                    {/* Chat Container */}
                    <div className="chat-container d-flex justify-content-between bg-light align-items-start w-100">
                      {/* Left Content */}
                      <div className="me-2">
                        <h6 className="mb-1">Manish Shrestha</h6>
                        <p className="mb-2">
                          Hello team, Please update your task. I'll take a look
                          at them.
                        </p>
                        <div className="small-icons d-flex gap-1">
                          <img
                            src="../img/user-1.jpg"
                            className="chat-avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            className="chat-avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            className="chat-avatar"
                          />
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="text-end d-flex flex-column gap-2">
                        <small className="text-muted">12 days ago</small>
                        <div className="task-icons d-flex gap-2 gapping">
                          <i className="bi bi-pencil-square meeting_icon__pen me-4"></i>
                          <i className="bi bi-trash meeting_icon__trash"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-2 position-relative">
                    {/* Avatar OUTSIDE */}
                    <img
                      src="../img/user-2.jpg"
                      className="chat-avatar outside-avatar"
                      alt="avatar"
                    />

                    {/* Chat Container */}
                    <div className="chat-container d-flex justify-content-between bg-light align-items-start w-100">
                      {/* Left Content */}
                      <div className="me-2">
                        <h6 className="mb-1">Manish Shrestha</h6>
                        <p className="mb-2">
                          Hello team, Please update your task. I'll take a look
                          at them.
                        </p>
                        <div className="small-icons d-flex gap-1">
                          <img
                            src="../img/user-2.jpg"
                            className="chat-avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            className="chat-avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            className="chat-avatar"
                          />
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="text-end d-flex flex-column gap-2">
                        <small className="text-muted">12 days ago</small>
                        <div className="task-icons d-flex gap-2 gapping">
                          <i className="bi bi-pencil-square meeting_icon__pen me-4"></i>
                          <i className="bi bi-trash meeting_icon__trash"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-2 position-relative">
                    {/* Avatar OUTSIDE */}
                    <img
                      src="../img/user-1.jpg"
                      className="chat-avatar outside-avatar"
                      alt="avatar"
                    />

                    {/* Chat Container */}
                    <div className="chat-container d-flex justify-content-between bg-light align-items-start w-100">
                      {/* Left Content */}
                      <div className="me-2">
                        <h6 className="mb-1">Manish Shrestha</h6>
                        <p className="mb-2">
                          Hello team, Please update your task. I'll take a look
                          at them.
                        </p>
                        <div className="small-icons d-flex gap-1">
                          <img
                            src="../img/user-1.jpg"
                            className="chat-avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            className="chat-avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            className="chat-avatar"
                          />
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="text-end d-flex flex-column gap-2">
                        <small className="text-muted">12 days ago</small>
                        <div className="task-icons d-flex gap-2 gapping">
                          <i className="bi bi-pencil-square meeting_icon__pen me-4"></i>
                          <i className="bi bi-trash meeting_icon__trash"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-2 position-relative">
                    {/* Avatar OUTSIDE */}
                    <img
                      src="../img/user-2.jpg"
                      className="chat-avatar outside-avatar"
                      alt="avatar"
                    />

                    {/* Chat Container */}
                    <div className="chat-container d-flex justify-content-between bg-light align-items-start w-100">
                      {/* Left Content */}
                      <div className="me-2">
                        <h6 className="mb-1">Manish Shrestha</h6>
                        <p className="mb-2">
                          Hello team, Please update your task. I'll take a look
                          at them.
                        </p>
                        <div className="small-icons d-flex gap-1">
                          <img
                            src="../img/user-2.jpg"
                            className="chat-avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            className="chat-avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            className="chat-avatar"
                          />
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="text-end d-flex flex-column gap-2">
                        <small className="text-muted">12 days ago</small>
                        <div className="task-icons d-flex gap-2 gapping">
                          <i className="bi bi-pencil-square meeting_icon__pen me-4"></i>
                          <i className="bi bi-trash meeting_icon__trash"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="input-group mt-5">
                    <div className="dropup">
                      <button
                        className="btn btn-light me-1 py-2"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-plus-lg"></i>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-toggle="modal"
                        data-bs-target="#addSharedFileModal"
                      >
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={handleOpenLinkModal}
                          >
                            <i className="bi bi-link-45deg"></i>
                            Share Link
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item">
                            <i className="bi bi-file-earmark"></i> Share File
                          </button>
                        </li>
                      </ul>
                    </div>

                    {/* Add Shared File Modal */}
                    <div
                      className="modal fade"
                      id="addSharedFileModal"
                      tabIndex="-1"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="addSharedFileModalLabel"
                            >
                              Add Shared File
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="sharedFile"
                                  className="form-label"
                                >
                                  File
                                </label>
                                <input
                                  className="form-control"
                                  type="file"
                                  id="sharedFile"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="sharedFileDesc"
                                  className="form-label"
                                >
                                  Description
                                </label>
                                <textarea
                                  className="form-control"
                                  id="sharedFileDesc"
                                  rows="3"
                                ></textarea>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn border px-4"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary px-4"
                            >
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <input
                      type="text"
                      className="form-control rounded me-1"
                      placeholder="Type your message here..."
                    />
                    <button
                      className="btn btn-primary py-2 rounded"
                      type="button"
                    >
                      <i className="bi bi-send"></i> Send
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade rounded-3 p-2"
                id="pills-cheap-flight"
                role="tabpanel"
                aria-labelledby="pills-cheap-flight-tab"
              >
                cheap flight chat
              </div>
              <div
                className="tab-pane fade rounded-3 p-2"
                id="pills-trackstaff"
                role="tabpanel"
                aria-labelledby="pills-trackstaff-tab"
              >
                trackstaff chat
              </div>
            </div>
          </div>

          {/* <!-- START: NEW SIDEBAR CONTENT --> */}
          <div className="col-12 col-xl-5 col-xxl-4">
            <div className="rounded-3 bg-white p-4 d-flex flex-column gap-4">
              {/* <!-- Quick Actions Section --> */}
              <div className="d-flex flex-column gap-3">
                <p className="fw-semibold fs-5 mb-0">Quick Actions</p>
                <div className="quick-action-wrapper">
                  <div className="d-flex justify-content-centre gap-3">
                    <div
                      className="position-relative"
                      style={{ cursor: "pointer" }}
                    >
                      <button
                        className="btn btn-light rounded-circle d-flex align-items-center justify-content-center quick-action-btn"
                        style={{
                          color: "#0c966f",
                          border: "3px solid #0c966f",
                          fontSize: " 22px",
                        }}
                        aria-label="Tasks"
                      >
                        <i
                          className="bi bi-list-check fs-4"
                          style={{ color: "#0c966f" }}
                          onClick={openTaskModal}
                        ></i>

                        {/* <!-- Add Button --> */}
                      </button>
                      <button
                        className="add-button position-absolute"
                        style={{ right: "-4px", bottom: "-3px" }}
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                    <div
                      className="position-relative"
                      style={{ cursor: "pointer" }}
                    >
                      <button
                        className="btn btn-light rounded-circle d-flex align-items-center justify-content-center quick-action-btn"
                        style={{
                          color: "#0c966f",
                          border: "3px solid #0c966f",
                          fontSize: " 22px",
                        }}
                        aria-label="Tasks"
                      >
                        <i
                          className="bi bi-link-45deg fs-4"
                          onClick={handleOpenLinkModal}
                          style={{
                            color: "#0c966f",
                          }}
                        ></i>

                        {/* <!-- Add Button --> */}
                      </button>
                      <div
                        className="add-button position-absolute"
                        style={{ right: "-4px", bottom: "-3px" }}
                      >
                        <i className="bi bi-plus"></i>
                      </div>
                    </div>
                    <div
                      className="position-relative"
                      style={{ cursor: "pointer" }}
                    >
                      <button
                        className="btn btn-light rounded-circle d-flex align-items-center justify-content-center quick-action-btn"
                        style={{
                          color: "#0c966f",
                          border: "3px solid #0c966f",
                          fontSize: " 22px",
                        }}
                        aria-label="Tasks"
                      >
                        <i
                          className="fa-regular fa-comments"
                          onClick={handleOpenModal}
                          style={{
                            color: "#0c966f",
                          }}
                        ></i>

                        {/* <!-- Add Button --> */}
                      </button>
                      <div
                        className="add-button position-absolute"
                        style={{ right: "-4px", bottom: "-3px" }}
                      >
                        <i className="bi bi-plus"></i>
                      </div>
                    </div>
                    <div
                      className="position-relative"
                      style={{ cursor: "pointer" }}
                    >
                      <button
                        className="btn btn-light rounded-circle d-flex align-items-center justify-content-center quick-action-btn"
                        style={{
                          color: "#0c966f",
                          border: "3px solid #0c966f",
                          fontSize: " 22px",
                        }}
                        aria-label="Tasks"
                      >
                        <i
                          className="fa-regular fa-calendar"
                          style={{
                            color: "#0c966f",
                          }}
                        ></i>

                        {/* <!-- Add Button --> */}
                      </button>
                      <div
                        className="add-button position-absolute"
                        style={{ right: "-4px", bottom: "-3px" }}
                      >
                        <i className="bi bi-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Your Task Status Section --> */}
              <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fw-semibold fs-5 mb-0">Your Task Status</p>
                  <a
                    href="#"
                    className="fw-medium text-decoration-none"
                    style={{ color: "#1a6a99" }}
                  >
                    See all
                  </a>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  <li className="d-flex align-items-center gap-2">
                    <span>Home Page</span>
                    <span className="bg-warning text-white w-auto rounded-3 px-2 py-1 mx-auto">
                      Pending
                    </span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <span>Landing Page</span>
                    <span className="bg-progress text-white w-auto mx-auto rounded-3 px-2 py-1">
                      In Progress
                    </span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <span>Landing Page</span>
                    <span className="bg-warning text-white w-auto mx-auto rounded-3 px-2 py-1">
                      Pending
                    </span>
                  </li>
                </ul>
              </div>

              {/* <!-- Assigned by Section --> */}

              <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fw-semibold fs-5 mb-0">Assigned by</p>
                  <a
                    href="#"
                    className="fw-medium text-decoration-none"
                    style={{ color: "#1a6a99" }}
                  >
                    See all
                  </a>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  <li className="d-flex align-items-start gap-3 p-2">
                    <img
                      src="../img/user-1.jpg"
                      alt="Avatar"
                      className="rounded-circle"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="flex-grow-1">
                      <div className="d-flex align-items-start justify-content-between">
                        <p
                          className="fw-medium mb-1 text-truncate"
                          style={{ maxWidth: "170px", fontSize: "16px" }}
                        >
                          Home Page Design...
                        </p>
                        <span
                          className="bg-warning text-white fw-semibold px-2 py-1 rounded-3"
                          style={{ fontSize: "14px" }}
                        >
                          Pending
                        </span>
                      </div>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "14px" }}
                      >
                        Assigned by:
                        <span
                          className="fw-medium"
                          style={{ color: "#1a6a99" }}
                        >
                          Manish Shrestha
                        </span>
                      </p>
                    </div>
                  </li>

                  <li className="d-flex align-items-start gap-3 p-2">
                    <img
                      src="../img/user-1.jpg"
                      alt="Avatar"
                      className="rounded-circle"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="flex-grow-1">
                      <div className="d-flex align-items-start justify-content-between">
                        <p
                          className="fw-medium mb-1 text-truncate"
                          style={{ maxWidth: "170px", fontSize: "16px" }}
                        >
                          Home Page Design...
                        </p>
                        <span
                          className="bg-warning text-white w-auto px-2 py-1 rounded-3 ms-auto"
                          style={{ fontSize: "14px" }}
                        >
                          Pending
                        </span>
                      </div>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "14px" }}
                      >
                        Assigned by:
                        <span
                          className="fw-medium"
                          style={{ color: "#1a6a99" }}
                        >
                          Manish Shrestha
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-3 p-2">
                    <img
                      src="../img/user-1.jpg"
                      alt="Avatar"
                      className="rounded-circle"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="flex-grow-1">
                      <div className="d-flex align-items-start justify-content-between">
                        <p
                          className="fw-medium mb-1 text-truncate"
                          style={{ maxWidth: "170px", fontSize: "16px" }}
                        >
                          Home Page Design...
                        </p>
                        <span
                          className="bg-warning text-white fw-semibold px-2 py-1 rounded-3"
                          style={{ fontSize: "14px" }}
                        >
                          Pending
                        </span>
                      </div>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "14px" }}
                      >
                        Assigned by:
                        <span
                          className="fw-medium"
                          style={{ color: "#1a6a99" }}
                        >
                          Manish Shrestha
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* <!-- Colleagues Task Status Section --> */}
              <div className="d-flex flex-column gap-2">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fw-semibold fs-5 mb-0">
                    Colleagues Task Status (3)
                  </p>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
                  {/* <!-- MODIFIED: Added data-bs-toggle, data-bs-target and cursor style --> */}
                  <li
                    className="d-flex justify-content-between align-items-start"
                    style={{ maxWidth: "750px", cursor: "pointer" }}
                    data-bs-toggle="modal"
                    data-bs-target="#colleagueTaskStatusModal"
                  >
                    <img
                      src="../img/user-1.jpg"
                      alt="Avatar"
                      className="rounded-circle me-2"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                    {/* <!-- Left: Avatar + Name --> */}
                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                      <div>
                        <p
                          className="fw-medium mb-0"
                          style={{ fontSize: "14px" }}
                        >
                          Manish Shrestha
                        </p>
                        <small className="text-muted">12 Task</small>
                      </div>
                    </div>

                    {/* <!-- Right: Status Icons + Progress Bar --> */}
                    <div
                      className="d-flex flex-column align-items-start"
                      style={{ width: "140px" }}
                    >
                      {/* <!-- Icons --> */}
                      <div className="d-flex align-items-center gap-2">
                        <span className="d-flex align-items-center gap-1 text-secondary">
                          <i className="fa-regular fa-circle-check text-success"></i>
                          1
                        </span>
                        <span className="d-flex align-items-center gap-1 text-secondary">
                          <i className="fa-regular fa-clock text-primary"></i> 1
                        </span>
                        <span className="d-flex align-items-center gap-1 text-secondary">
                          <i className="fa-regular fa-circle text-warning"></i>{" "}
                          8
                        </span>
                        <span className="d-flex align-items-center gap-1 text-secondary">
                          <i className="fa-regular fa-circle-xmark text-danger"></i>
                          1
                        </span>
                      </div>

                      {/* <!-- Progress Bar --> */}
                      <div className="w-100 mt-3">
                        <div
                          className="progress"
                          style={{
                            height: "10px",
                            backgroundColor: " #e9ecef",
                            borderRadius: "999px",
                          }}
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "40%", borderRadius: "999px" }}
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* <!-- MODIFIED: Added data-bs-toggle, data-bs-target and cursor style --> */}
                  <li
                    className="d-flex justify-content-between align-items-start"
                    style={{ maxWidth: "750px", cursor: "pointer" }}
                    data-bs-toggle="modal"
                    data-bs-target="#colleagueTaskStatusModal"
                  >
                    <img
                      src="../img/user-2.jpg"
                      alt="Avatar"
                      className="rounded-circle me-2"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                    {/* <!-- Left: Avatar + Name --> */}
                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                      <div>
                        <p
                          className="fw-medium mb-0"
                          style={{ fontSize: "14px" }}
                        >
                          Nirmal GC
                        </p>
                        <small className="text-muted">8 Task</small>
                      </div>
                    </div>

                    {/* <!-- Right: Status Icons + Progress Bar --> */}
                    <div
                      className="d-flex flex-column align-items-start"
                      style={{ width: "140px" }}
                    >
                      {/* <!-- Icons --> */}
                      <div className="d-flex align-items-center gap-2">
                        <span className="d-flex align-items-center gap-1 text-secondary">
                          <i className="fa-regular fa-circle-check text-success"></i>
                          1
                        </span>
                        <span className="d-flex align-items-center gap-1 text-secondary">
                          <i className="fa-regular fa-clock text-primary"></i> 1
                        </span>
                        <span className="d-flex align-items-center gap-1 text-secondary">
                          <i className="fa-regular fa-circle text-warning"></i>{" "}
                          8
                        </span>
                        <span className="d-flex align-items-center gap-1 text-secondary">
                          <i className="fa-regular fa-circle-xmark text-danger"></i>
                          1
                        </span>
                      </div>

                      {/* <!-- Progress Bar --> */}
                      <div className="w-100 mt-3">
                        <div
                          className="progress"
                          style={{
                            height: "10px",
                            backgroundColor: " #e9ecef",
                            borderRadius: "999px",
                          }}
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "40%", borderRadius: "999px" }}
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <!-- MODIFIED: Added data-bs-toggle, data-bs-target and cursor style --> */}
                  <li
                    className="d-flex justify-content-between align-items-start"
                    style={{ maxWidth: "750px", cursor: "pointer" }}
                    data-bs-toggle="modal"
                    data-bs-target="#colleagueTaskStatusModal"
                  >
                    <img
                      src="../img/user-3.jpg"
                      alt="Avatar"
                      className="rounded-circle me-2"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                    {/* <!-- Left: Avatar + Name --> */}
                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                      <div>
                        <p
                          className="fw-medium mb-0"
                          style={{ fontSize: "14px" }}
                        >
                          Rohan Katuwal
                        </p>
                        <small className="text-muted">14 Task</small>
                      </div>
                    </div>

                    {/* <!-- Right: Status Icons + Progress Bar --> */}
                    <div
                      className="d-flex flex-column align-items-start"
                      style={{ width: "140px" }}
                    >
                      {/* <!-- Icons --> */}
                      <div className="d-flex align-items-center gap-2">
                        <span className="d-flex align-items-center gap-1 text-secondary">
                          <i className="fa-regular fa-circle-check text-success"></i>
                          1
                        </span>
                        <span className="d-flex align-items-center gap-1 text-secondary">
                          <i className="fa-regular fa-clock text-primary"></i> 1
                        </span>
                        <span className="d-flex align-items-center gap-1 text-secondary">
                          <i className="fa-regular fa-circle text-warning"></i>{" "}
                          8
                        </span>
                        <span className="d-flex align-items-center gap-1 text-secondary">
                          <i className="fa-regular fa-circle-xmark text-danger"></i>
                          1
                        </span>
                      </div>

                      {/* <!-- Progress Bar --> */}
                      <div className="w-100 mt-3">
                        <div
                          className="progress"
                          style={{
                            height: "10px",
                            backgroundColor: " #e9ecef",
                            borderRadius: "999px",
                          }}
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "40%", borderRadius: "999px" }}
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="modal fade"
                id="colleagueTaskStatusModal"
                tabIndex="-1"
                aria-labelledby="colleagueTaskStatusModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header border-bottom-0">
                      <div className="d-flex align-items-center gap-2">
                        <div style={{ width: "50px", height: "50px" }}>
                          <img
                            src="../img/user-1.jpg"
                            alt=""
                            className="img-fluid object-fit-cover rounded-circle h-100 w-100"
                          />
                        </div>
                        <h1
                          className="modal-title fs-5"
                          id="colleagueTaskStatusModalLabel"
                        >
                          Nirmal GC's Tasks
                        </h1>
                      </div>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body py-0">
                      <div className="table-responsive">
                        <table className="table text-center table-borderless">
                          <thead>
                            <tr>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Task
                              </th>
                              <th scope="col">Due Date</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ textAlign: "left" }}>
                                Development Task
                              </td>
                              <td>2024-12-31</td>
                              <td>
                                <span className="badge bg-primary">
                                  Completed
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ textAlign: "left" }}>Design Task</td>
                              <td>2024-12-31</td>
                              <td>
                                <span className="badge bg-progress">
                                  In Progress
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ textAlign: "left" }}>Meeting</td>
                              <td>2024-12-25</td>
                              <td>
                                <span className="badge bg-danger">
                                  Cancelled
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ textAlign: "left" }}>Meeting</td>
                              <td>2024-12-25</td>
                              <td>
                                <span className="badge bg-warning">
                                  Pending
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* <!-- <div className="modal-footer pt-0 border-top-0">
                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                  </div> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END: NEW SIDEBAR CONTENT --> */}
        </div>
      </div>
      <AddSharedLinkModal
        isOpen={isModalOpen}
        onClose={handleCloseLinkModal}
        onSubmit={handleLinkSubmit}
      />
      <AddTaskModal
        isOpen={taskModalOpen}
        onClose={() => setTaskModalOpen(false)}
        onSubmit={handleCreateTask}
        hideProjectSelect={true}
      />
    </main>
  );
};

export default EmpChats;
