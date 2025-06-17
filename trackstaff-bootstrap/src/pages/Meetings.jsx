export const Meetings = () => {
  return (
    <main className="p-2">
      <div className="p-3 bg-white rounded-3">
        {/* My Tasks Heading Start */}
        <div className="row mb-3 justify-content-between align-items-center">
          <div className="col">
            <h5 className="fs-2 fw-semibold">Meetings</h5>
          </div>
          <div className="col text-end">
            <button
              className="btn btn-primary w-auto text-nowrap"
              data-bs-toggle="modal"
              data-bs-target="#addMeetingModal"
            >
              <i className="bi bi-plus fs-5"></i> Schedule Meeting
            </button>
            {/* Add Meeting Modal */}
            <div
              className="modal fade text-start"
              id="addMeetingModal"
              tabIndex="-1"
              aria-labelledby="addMeetingModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header pb-0 border-bottom-0 align-items-start">
                    <div>
                      <h5 className="modal-title" id="addMeetingModalLabel">
                        Schedule New Meeting
                      </h5>
                      <p className="text-muted">
                        Fill the form below to schedule a new meeting.
                      </p>
                    </div>
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
                            <label
                              htmlFor="task-start-date"
                              className="form-label"
                            >
                              Date
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
                            <label
                              htmlFor="task-end-date"
                              className="form-label"
                            >
                              Time
                            </label>
                            <input
                              type="time"
                              className="form-control text-dark-emphasis"
                              id="task-due-date"
                              aria-label="Task End Date"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="mb-3">
                              <label
                                htmlFor="task-assigned-to"
                                className="form-label"
                              >
                                Assigned To
                              </label>
                              <input
                                type="search"
                                className="form-control multi-user-input"
                                id="task-assigned-to"
                                placeholder="Search user..."
                                aria-label="Assigned To"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <label
                            htmlFor="meeting-description"
                            className="form-label"
                          >
                            Meeting Agenda
                          </label>
                          <textarea
                            className="form-control"
                            id="task-description"
                            rows="3"
                            placeholder="Enter meeting agenda..."
                            aria-label="Meeting Agenda"
                          ></textarea>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer border-top-0">
                    <button
                      type="button"
                      className="btn border px-4"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Schedule Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 " style={{ width: " fit-content" }}>
          <ul
            className="nav nav-pills border rounded-3 border-1 border-secondary-subtle p-1 w-auto bg-white"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Upcoming
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Completed
              </button>
            </li>
          </ul>
        </div>

        <div className="tab-content rounded-3 bg-white" id="pills-tabContent">
          <div
            className="tab-pane fade show active p-2"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <h5 className="card-title m-0">Team Meeting 1</h5>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen_hover" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash_hover" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="">
                      <p className="fw-semibold">
                        Assignee:{" "}
                        <span>
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-3.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                        </span>
                      </p>
                      <p className="fw-semibold">
                        Agenda:{" "}
                        <span className="fw-normal">
                          Meeting Agenda about...
                        </span>
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center text-muted">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                      <button className="btn btn-primary">
                        <i className="bi bi-box-arrow-in-right"></i> Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <h5 className="card-title m-0">Team Meeting 2</h5>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen_hover" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash_hover" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="">
                      <p className="fw-semibold">
                        Assignee:{" "}
                        <span>
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-3.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                        </span>
                      </p>
                      <p className="fw-semibold">
                        Agenda:{" "}
                        <span className="fw-normal">
                          Meeting Agenda about...
                        </span>
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center text-muted">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                      <button className="btn btn-primary">
                        <i className="bi bi-box-arrow-in-right"></i> Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <h5 className="card-title m-0">Team Meeting 3</h5>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen_hover" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash_hover" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="">
                      <p className="fw-semibold">
                        Assignee:{" "}
                        <span>
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-3.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                        </span>
                      </p>
                      <p className="fw-semibold">
                        Agenda:{" "}
                        <span className="fw-normal">
                          Meeting Agenda about...
                        </span>
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center text-muted">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                      <button className="btn btn-primary">
                        <i className="bi bi-box-arrow-in-right"></i> Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <h5 className="card-title m-0">Team Meeting 4</h5>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen_hover" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash_hover" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="">
                      <p className="fw-semibold">
                        Assignee:{" "}
                        <span>
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-3.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                        </span>
                      </p>
                      <p className="fw-semibold">
                        Agenda:{" "}
                        <span className="fw-normal">
                          Meeting Agenda about...
                        </span>
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center text-muted">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                      <button className="btn btn-primary">
                        <i className="bi bi-box-arrow-in-right"></i> Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <h5 className="card-title m-0">Team Meeting 5</h5>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen_hover" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash_hover" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="">
                      <p className="fw-semibold">
                        Assignee:{" "}
                        <span>
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-3.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                        </span>
                      </p>
                      <p className="fw-semibold">
                        Agenda:{" "}
                        <span className="fw-normal">
                          Meeting Agenda about...
                        </span>
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center text-muted">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                      <button className="btn btn-primary">
                        <i className="bi bi-box-arrow-in-right"></i> Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <h5 className="card-title m-0">Team Meeting 6</h5>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen_hover" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash_hover" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="">
                      <p className="fw-semibold">
                        Assignee:{" "}
                        <span>
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-3.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                        </span>
                      </p>
                      <p className="fw-semibold">
                        Agenda:{" "}
                        <span className="fw-normal">
                          Meeting Agenda about...
                        </span>
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center text-muted">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                      <button className="btn btn-primary">
                        <i className="bi bi-box-arrow-in-right"></i> Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade rounded-3 p-2"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <h5 className="card-title m-0">Team Meeting 1</h5>
                    </div>
                    <hr />
                    <div className="">
                      <p className="fw-semibold">
                        Assignee:{" "}
                        <span>
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-3.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                        </span>
                      </p>
                      <p className="fw-semibold">
                        Agenda:{" "}
                        <span className="fw-normal">
                          Meeting Agenda about...
                        </span>
                      </p>
                    </div>
                    <div className="border-start border-3 border-primary p-3 bg-light rounded-2">
                      <h5>Meeting Notes</h5>
                      <p>
                        Team completed 90% of planned stories. Main blocker was
                        API integration delay
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <h5 className="card-title m-0">Team Meeting 2</h5>
                    </div>
                    <hr />
                    <div className="">
                      <p className="fw-semibold">
                        Assignee:{" "}
                        <span>
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-3.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                        </span>
                      </p>
                      <p className="fw-semibold">
                        Agenda:{" "}
                        <span className="fw-normal">
                          Meeting Agenda about...
                        </span>
                      </p>
                    </div>
                    <div className="border-start border-3 border-primary p-3 bg-light rounded-2">
                      <h5>Meeting Notes</h5>
                      <p>
                        Team completed 90% of planned stories. Main blocker was
                        API integration delay
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <h5 className="card-title m-0">Team Meeting 3</h5>
                    </div>
                    <hr />
                    <div className="">
                      <p className="fw-semibold">
                        Assignee:{" "}
                        <span>
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-2.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-3.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                          <img
                            src="../img/user-1.jpg"
                            alt="Avatar"
                            className="avatar"
                          />
                        </span>
                      </p>
                      <p className="fw-semibold">
                        Agenda:{" "}
                        <span className="fw-normal">
                          Meeting Agenda about...
                        </span>
                      </p>
                    </div>
                    <div className="border-start border-3 border-primary p-3 bg-light rounded-2">
                      <h5>Meeting Notes</h5>
                      <p>
                        Team completed 90% of planned stories. Main blocker was
                        API integration delay
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Meetings;
