import React from "react";
import { useState } from "react";
import ScheduleMeetingModal from "../Components/Modals/scheduleMeetingModal";
const EmpMeetings = () => {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);

  const handleCreateMeeting = (meetingData) => {
    console.log("Meeting created:", meetingData);
    setScheduleModalOpen(false);
  };
  const openScheduleModal = () => {
    setScheduleModalOpen(true);
  };
  return (
    <main className="p-3">
      <div className="p-3 bg-white rounded-3">
        {/* <!-- My Tasks Heading Start --> */}
        <div className="row mb-3 justify-content-between align-items-center">
          <div className="col">
            <h5 className="fs-2 fw-semibold">Meetings</h5>
            {/* <!-- <p  className="">Track your work hours and attendance</p> --> */}
          </div>
          <div className="col text-end">
            <button
              className="btn btn-primary  "
              style={{ fontSize: "16px" }}
              onClick={openScheduleModal}
            >
              <i className="bi bi-plus"></i> Add Meeting
            </button>
            {/* <!-- Add Meeting Modal --> */}
            <ScheduleMeetingModal
              isOpen={scheduleModalOpen}
              onClose={() => setScheduleModalOpen(false)}
              onSubmit={handleCreateMeeting}
            />
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
                tabindex="-1"
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
                          /
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
                    {/* <!-- <hr> --> */}
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
                    {/* <!-- <hr> --> */}
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
                    {/* <!-- <hr> --> */}
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

export default EmpMeetings;
