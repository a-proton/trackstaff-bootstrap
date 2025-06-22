const Reminders = () => {
  return (
    <main className="p-3 reminders">
      <div className="p-3 bg-white rounded-3">
        {/* <!-- My Tasks Heading Start --> */}
        <div className="row mb-3 justify-content-between align-items-center">
          <div className="col">
            <h5 className="fs-2 fw-semibold">Reminders</h5>
            {/* <!-- <p className="">Track your work hours and attendance</p> --> */}
          </div>
          <div className="col text-end">
            <button
              className="btn btn-primary w-auto text-nowrap"
              data-bs-toggle="modal"
              data-bs-target="#addReminderModal"
            >
              <i className="bi bi-plus fs-5"></i> Add Reminder
            </button>
            {/* <!-- Add Reminder Modal --> */}
            <div
              className="modal fade text-start"
              id="addReminderModal"
              tabIndex="-1"
              aria-labelledby="addReminderModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header pb-0 border-bottom-0 align-items-start">
                    <div>
                      <h5 className="modal-title" id="addReminderModalLabel">
                        Add New Reminder
                      </h5>
                      <p className="text-muted">
                        Fill the form below to add a new reminder.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body overflow-auto">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="reminder-title" className="form-label">
                          Reminder Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="reminder-title"
                          placeholder="Enter reminder title..."
                          aria-label="Reminder Title"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="reminder-description"
                          className="form-label"
                        >
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          id="reminder-description"
                          rows="3"
                          placeholder="Enter reminder description..."
                          aria-label="Reminder Description"
                        ></textarea>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="mb-3">
                            <label
                              htmlFor="task-assigned-to"
                              className="form-label"
                            >
                              Assigned To
                            </label>
                            <div className="multi-user-container">
                              <label
                                htmlFor="reminder-assigned-to"
                                className="multi-user-label"
                              ></label>
                              <div className="tag-input" tabIndex="0">
                                <div
                                  id="reminder-assigned-to"
                                  className="tags-container"
                                ></div>
                                <input
                                  type="text"
                                  className="user-search-input"
                                  list="datalist-reminder-assigned-to"
                                  placeholder="Search user..."
                                />
                              </div>
                              <datalist id="datalist-reminder-assigned-to">
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
                            <label
                              htmlFor="reminder-assignee"
                              className="form-label"
                            >
                              Assignee
                            </label>
                            <div className="multi-user-container">
                              <label
                                htmlFor="reminder-assignee"
                                className="multi-user-label"
                              ></label>
                              <div className="tag-input" tabIndex="0">
                                <div
                                  id="reminder-assignee"
                                  className="tags-container"
                                ></div>
                                <input
                                  type="text"
                                  className="user-search-input"
                                  list="datalist-reminder-assignee"
                                  placeholder="Search user..."
                                />
                              </div>
                              <datalist id="datalist-reminder-assignee">
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
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="mb-3">
                            <label
                              htmlFor="reminder-due-date"
                              className="form-label"
                            >
                              Due Date
                            </label>
                            <input
                              type="date"
                              className="form-control text-dark-emphasis"
                              id="reminder-due-date"
                              aria-label="Reminder Due Date"
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="mb-3">
                            <label
                              htmlFor="reminder-due-time"
                              className="form-label"
                            >
                              Due Time
                            </label>
                            <input
                              type="time"
                              className="form-control text-dark-emphasis"
                              id="reminder-due-time"
                              aria-label="Reminder Due Time"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="task-priority" className="form-label">
                          Priority
                        </label>
                        <div className="d-flex align-items-center gap-4">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="low"
                              name="reminder-priority"
                              id="reminder-priority-low"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reminder-priority-low"
                            >
                              Low
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="medium"
                              name="reminder-priority"
                              id="reminder-priority-medium"
                              checked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reminder-priority-medium"
                            >
                              Medium
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="high"
                              name="reminder-priority"
                              id="reminder-priority-high"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reminder-priority-high"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="task-repeat" className="form-label">
                          Repeat
                        </label>
                        <select
                          className="form-select text-dark-emphasis"
                          id="reminder-repeat"
                          aria-label="Task Repeat"
                        >
                          <option selected="" disabled="">
                            Never
                          </option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="yearly">Yearly</option>
                        </select>
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
                    <button type="submit" className="btn btn-primary px-4">
                      Create Reminder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- My Tasks Heading End --> */}
        <div className="mb-3 " style={{ width: "fit-content;" }}>
          <ul
            className="nav nav-pills border rounded-3 border-1 border-secondary-subtle p-1 w-auto bg-white"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-my-reminders-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-my-reminders"
                type="button"
                role="tab"
                aria-controls="pills-my-reminders"
                aria-selected="true"
              >
                My Reminders
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-assigned-by-me-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-assigned-by-me"
                type="button"
                role="tab"
                aria-controls="pills-assigned-by-me"
                aria-selected="false"
                tabIndex="-1"
              >
                Assigned by Me
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-assigned-to-me-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-assigned-to-me"
                type="button"
                role="tab"
                aria-controls="pills-assigned-to-me"
                aria-selected="false"
                tabIndex="-1"
              >
                Assigned to Me
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content rounded-3 bg-white" id="pills-tabContent">
          <div
            className="tab-pane fade show active p-2"
            id="pills-my-reminders"
            role="tabpanel"
            aria-labelledby="pills-my-reminders-tab"
          >
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-1"
                        >
                          Making New Year Post
                        </label>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-primary py-1 px-3 rounded-5 m-0">
                        Completed
                      </p>
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Low
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-2"
                        >
                          Making New Year Post
                        </label>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-progress py-1 px-3 rounded-5 m-0">
                        Medium
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-3"
                        >
                          Making New Year Post
                        </label>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-danger py-1 px-3 rounded-5 m-0">
                        High
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-4"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-4"
                        >
                          Making New Year Post
                        </label>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-progress py-1 px-3 rounded-5 m-0">
                        Medium
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-5"
                        >
                          Making New Year Post
                        </label>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-progress py-1 px-3 rounded-5 m-0">
                        Medium
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-6"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-6"
                        >
                          Making New Year Post
                        </label>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-progress py-1 px-3 rounded-5 m-0">
                        Medium
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade rounded-3 p-2"
            id="pills-assigned-by-me"
            role="tabpanel"
            aria-labelledby="pills-assigned-by-me-tab"
          >
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-7"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-7"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-danger py-1 px-3 rounded-5 m-0">
                        High
                      </p>
                    </div>
                    <hr />
                    <div>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-8"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-8"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-progress py-1 px-3 rounded-5 m-0">
                        Medium
                      </p>
                    </div>
                    <hr />
                    <div>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-9"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-9"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-progress py-1 px-3 rounded-5 m-0">
                        Medium
                      </p>
                    </div>
                    <hr />
                    <div>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-10"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-10"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-progress py-1 px-3 rounded-5 m-0">
                        Medium
                      </p>
                    </div>
                    <hr />
                    <div>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-11"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-11"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-progress py-1 px-3 rounded-5 m-0">
                        Medium
                      </p>
                    </div>
                    <hr />
                    <div>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-12"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-12"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-progress py-1 px-3 rounded-5 m-0">
                        Medium
                      </p>
                    </div>
                    <hr />
                    <div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade rounded-3 p-2"
            id="pills-assigned-to-me"
            role="tabpanel"
            aria-labelledby="pills-assigned-to-me-tab"
          >
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-13"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-13"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-progress py-1 px-3 rounded-5 m-0">
                        Medium
                      </p>
                    </div>
                    <hr />
                    <div>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                /
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-14"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-14"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-progress py-1 px-3 rounded-5 m-0">
                        Medium
                      </p>
                    </div>
                    <hr />
                    <div>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    /
                    <div className="d-flex justify-content-between align-items-baseline">
                      <div className="form-check pb-3 fs-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="reminder-checkbox-15"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reminder-checkbox-15"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="" href="#">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                    <div className="pb-3">
                      <small className="text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </small>
                    </div>
                    <div className="d-flex  align-items-center text-muted gap-2 pb-3">
                      <span className="fw-normal">
                        <i className="bi bi-calendar3"></i> 2023-06-01
                      </span>{" "}
                      at
                      <span className="fw-normal">
                        <i className="bi bi-clock"></i> 10:00 AM
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <p className="text-white bg-warning py-1 px-3 rounded-5 m-0">
                        Pending
                      </p>
                      <p className="text-white bg-progress py-1 px-3 rounded-5 m-0">
                        Medium
                      </p>
                    </div>
                    <hr />
                    <div>
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

export default Reminders;
