import { useState } from "react";
import AddMemberModal from "../Components/Modals/addMemberModal";
const ManageTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddMember = (memberData) => {
    console.log("New member to add:", memberData);

    // For example: api.addMember(memberData);
    handleCloseModal();
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
                <div className="team-container p-3">
                  {/* <!-- Header --> */}
                  <div className="d-flex justify-content-between align-items-baseline mb-3 flex-wrap border-bottom pb-3">
                    <h5 className="mb-3 me-5 fw-semibold">
                      <a href="/chats">
                        <i className="bi bi-chevron-left"></i>
                      </a>
                      <span>Kamsansar Manage Teams</span>
                    </h5>
                    <div className="d-flex align-items-center gap-2 flex-fill">
                      <div className="input-group justify-content-end">
                        <span className="input-group-text bg-transparent">
                          <i className="bi bi-search"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control border-start-0 ps-1 py-2 flex-grow-1"
                          placeholder="Search team members..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="team-members p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-semibold">Team Members</h6>
                      <button
                        className="btn btn-primary"
                        onClick={handleOpenModal}
                      >
                        {" "}
                        <i className="bi bi-plus"></i>Add Member
                      </button>
                    </div>
                    <AddMemberModal
                      isOpen={isModalOpen}
                      onClose={handleCloseModal}
                      onSubmit={handleAddMember}
                    />
                    {/* <!-- Team Members Table --> */}
                    <div className="task-table table-responsive overflow-auto mt-3">
                      <table className="table text-center">
                        <thead className="table-light border">
                          <tr>
                            <th scope="col">SN</th>
                            <th scope="col" className="text-start">
                              Name
                            </th>
                            <th scope="col">Role</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row" className="align-middle">
                              1
                            </th>
                            <td className="text-start">Surya Poudel</td>
                            <td>Founder</td>
                            <td>
                              <span className="bg-danger text-white w-auto mx-auto rounded-2 py-1 px-2">
                                Admin
                              </span>
                            </td>
                            <td>
                              <div
                                className="dropdown position-static"
                                style={{ cursor: "pointer" }}
                              >
                                <i
                                  className="bi bi-three-dots-vertical"
                                  id="taskAction"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                ></i>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="taskAction"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-people text-primary me-1"></i>
                                      Change Role
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-trash text-danger me-1"></i>
                                      Remove
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" className="align-middle">
                              2
                            </th>
                            <td className="text-start">Manish Shrestha</td>
                            <td>UI/UX Designer</td>
                            <td>
                              <span className="bg-progress text-white w-auto mx-auto rounded-2 py-1 px-2">
                                Member
                              </span>
                            </td>
                            <td>
                              <div
                                className="dropdown position-static"
                                style={{ cursor: "pointer" }}
                              >
                                <i
                                  className="bi bi-three-dots-vertical"
                                  id="taskAction"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                ></i>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="taskAction"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-people text-primary me-1"></i>
                                      Change Role
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-trash text-danger me-1"></i>
                                      Remove
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" className="align-middle">
                              3
                            </th>
                            <td className="text-start">Kabita Subedi</td>
                            <td>Guest</td>
                            <td>
                              <span className="bg-primary text-white w-auto mx-auto rounded-2 py-1 px-2">
                                Guest
                              </span>
                            </td>
                            <td>
                              <div
                                className="dropdown position-static"
                                style={{ cursor: "pointer" }}
                              >
                                <i
                                  className="bi bi-three-dots-vertical"
                                  id="taskAction"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                ></i>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="taskAction"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-people text-primary me-1"></i>
                                      Change Role
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-trash text-danger me-1"></i>
                                      Remove
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" className="align-middle">
                              4
                            </th>
                            <td className="text-start">Sangam Giri</td>
                            <td>Full Stack Developer</td>
                            <td>
                              <span className="bg-progress text-white w-auto mx-auto rounded-2 py-1 px-2">
                                Member
                              </span>
                            </td>
                            <td>
                              <div
                                className="dropdown position-static"
                                style={{ cursor: "pointer" }}
                              >
                                <i
                                  className="bi bi-three-dots-vertical"
                                  id="taskAction"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                ></i>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="taskAction"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-people text-primary me-1"></i>
                                      Change Role
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-trash text-danger me-1"></i>
                                      Remove
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" className="align-middle">
                              5
                            </th>
                            <td className="text-start">Nirmal GC</td>
                            <td>Java Developer</td>
                            <td>
                              <span className="bg-progress text-white w-auto mx-auto rounded-2 py-1 px-2">
                                Member
                              </span>
                            </td>
                            <td>
                              <div
                                className="dropdown position-static"
                                style={{ cursor: "pointer" }}
                              >
                                <i
                                  className="bi bi-three-dots-vertical"
                                  id="taskAction"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                ></i>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="taskAction"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-people text-primary me-1"></i>
                                      Change Role
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-trash text-danger me-1"></i>
                                      Remove
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" className="align-middle">
                              6
                            </th>
                            <td className="text-start">Nirmal GC</td>
                            <td>Android Developer</td>
                            <td>
                              <span className="bg-progress text-white w-auto mx-auto rounded-2 py-1 px-2">
                                Member
                              </span>
                            </td>
                            <td>
                              <div
                                className="dropdown position-static"
                                style={{ cursor: "pointer" }}
                              >
                                <i
                                  className="bi bi-three-dots-vertical"
                                  id="taskAction"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                ></i>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="taskAction"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-people text-primary me-1"></i>
                                      Change Role
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-trash text-danger me-1"></i>
                                      Remove
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade rounded-3 p-2"
                id="pills-cheap-flight"
                role="tabpanel"
                aria-labelledby="pills-cheap-flight-tab"
              >
                cheap flight team members
              </div>
              <div
                className="tab-pane fade rounded-3 p-2"
                id="pills-trackstaff"
                role="tabpanel"
                aria-labelledby="pills-trackstaff-tab"
              >
                trackstaff team members
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManageTeam;
