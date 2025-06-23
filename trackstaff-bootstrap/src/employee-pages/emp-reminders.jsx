import ReminderModal from "../Components/Modals/reminderModal";
import { useState } from "react";
const EmpReminders = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddReminder = () => {
    alert("Reminder Added!");
    setModalOpen(false);
  };

  const openReminderModal = () => {
    setModalOpen(true);
  };
  return (
    <main className="p-3 reminders">
      <div className="p-3 pl-2 bg-white rounded-3">
        {/* <!-- My Tasks Heading Start --> */}
        <div className="row mb-3 justify-content-between align-items-center">
          <div className="col">
            <h5 className="fs-2 fw-semibold">Reminders</h5>
            {/* <!-- <p className="">Track your work hours and attendance</p> --> */}
          </div>
          <div className="col text-end">
            <button
              className="btn btn-primary w-auto text-nowrap"
              onClick={openReminderModal}
            >
              <i className="bi bi-plus fs-5"></i> Add Reminder
            </button>
            {/* <!-- Add Reminder Modal --> */}
            <ReminderModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              onSubmit={handleAddReminder}
            />
          </div>
        </div>
        {/* <!-- My Tasks Heading End --> */}
        <div className="mb-3 " style={{ width: "fit-content" }}>
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
                tabindex="-1"
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
                tabindex="-1"
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
                          for="reminder-checkbox-1"
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
                          for="reminder-checkbox-2"
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
                          for="reminder-checkbox-3"
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
                          for="reminder-checkbox-4"
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
                          for="reminder-checkbox-5"
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
                          for="reminder-checkbox-6"
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
                          for="reminder-checkbox-7"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash" href="#">
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
                          for="reminder-checkbox-8"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash" href="#">
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
                          for="reminder-checkbox-9"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash" href="#">
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
                          for="reminder-checkbox-10"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash" href="#">
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
                          for="reminder-checkbox-11"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash" href="#">
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
                          for="reminder-checkbox-12"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash" href="#">
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
                          for="reminder-checkbox-13"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash" href="#">
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
                          id="reminder-checkbox-14"
                        />
                        <label
                          className="form-check-label"
                          for="reminder-checkbox-14"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash" href="#">
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
                          id="reminder-checkbox-15"
                        />
                        <label
                          className="form-check-label"
                          for="reminder-checkbox-15"
                        >
                          Making New Year Post
                        </label>
                      </div>
                      <div className="d-flex gap-3 fs-5">
                        <a className="meeting_icon__pen" href="#">
                          <i className="bi bi-pen"></i>
                        </a>
                        <a className="meeting_icon__trash" href="#">
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

export default EmpReminders;
