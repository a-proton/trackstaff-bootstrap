import React from "react";

const Logs = () => {
  return (
    <main className="p-3">
      <div className="bg-white p-3 rounded-3">
        {/* <!-- Logs Heading Start --> */}
        <div className="d-flex">
          <div className="px-3">
            <h5 className="fs-3 fw-semibold">Employee Activity Logs</h5>
            {/* <!-- <p className="">Track your work performance</p> --> */}
          </div>
        </div>
        {/* <!-- Logs Heading End --> */}
        <div className="row g-3">
          <div className="col-12 d-flex align-items-stretch ">
            <div className="card border-0 h-100 w-100 rounded-3">
              <div className="card-body text-center h-100">
                <div className="d-flex align-items-end justify-content-between gap-4 text-start flex-wrap">
                  <div className="flex-grow-1">
                    <label for="employeeSearch">Employee Name</label>
                    <div className="multi-user-container">
                      <label
                        for="employeeSearch"
                        className="multi-user-label"
                      ></label>
                      <div className="tag-input" tabindex="0">
                        <div
                          id="employeeSearch"
                          className="tags-container"
                        ></div>
                        <input
                          type="text"
                          className="user-search-input"
                          list="datalist-employeeSearch"
                          placeholder="Search user..."
                        />
                      </div>
                      <datalist id="datalist-employeeSearch">
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
                  <div className="flex-grow-1">
                    <label for="logDate">Date</label>
                    <input
                      type="date"
                      className="form-control py-2"
                      id="logDate"
                      placeholder="Search by date..."
                      aria-label="Date"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" id="" className="form-select py-2">
                      <option value="">Select Role</option>
                      <option value="">Admin</option>
                      <option value="">Employee</option>
                    </select>
                  </div>
                  <div className="flex-grow-0">
                    <button className="btn btn-primary py-2 px-3">
                      <i className="bi bi-search"></i> Search
                    </button>
                  </div>
                </div>
                <div className="table-responsive w-100 mt-3">
                  <table className="table" style={{ textWrap: "balance;" }}>
                    <thead className="table-light border border-light-subtle align-middle">
                      <tr>
                        <th>Emp. Id</th>
                        <th style={{ textAlign: "left;" }}>Employee Name</th>
                        <th>Date</th>
                        <th>Key Presses</th>
                        <th>Mouse Clicks</th>
                        <th>Mouse Movements</th>
                        <th>Active Time</th>
                        <th>Performance</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>001</td>
                        <td style={{ textAlign: "left;" }}>Surya Poudel</td>
                        <td>2025-06-17</td>
                        <td>6,083</td>
                        <td>2,273</td>
                        <td>65%</td>
                        <td>7h 24m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                        <td className="">
                          <div className="dropdown position-static">
                            <button
                              className="btn btn-link text-dark p-0"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bi bi-three-dots-vertical fs-5"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href=" /screen-proofs"
                                >
                                  <i className="bi bi-display me-2 text-progress"></i>
                                  Screen Proofs
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="logs-employee.html"
                                >
                                  <i className="bi bi-speedometer2 me-2 text-primary"></i>
                                  Performance Evaluation
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>002</td>
                        <td style={{ textAlign: "left;" }}>Manish Shrestha</td>
                        <td>2025-06-17</td>
                        <td>7,850</td>
                        <td>1,148</td>
                        <td>9%</td>
                        <td>4h 56m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                        <td className="">
                          <div className="dropdown position-static">
                            <button
                              className="btn btn-link text-dark p-0"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bi bi-three-dots-vertical fs-5"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href=" /screen-proofs"
                                >
                                  <i className="bi bi-display me-2 text-progress"></i>
                                  Screen Proofs
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="logs-employee.html"
                                >
                                  <i className="bi bi-speedometer2 me-2 text-primary"></i>
                                  Performance Evaluation
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>003</td>
                        <td style={{ textAlign: "left;" }}>Kabita Subedi</td>
                        <td>2025-06-17</td>
                        <td>6,571</td>
                        <td>65</td>
                        <td>60%</td>
                        <td>5h 9m</td>
                        <td>
                          <span className="text-warning bg-warning-subtle rounded-5 py-1 px-2">
                            Moderate
                          </span>
                        </td>
                        <td className="">
                          <div className="dropdown position-static">
                            <button
                              className="btn btn-link text-dark p-0"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bi bi-three-dots-vertical fs-5"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/screen-proofs"
                                >
                                  <i className="bi bi-display me-2 text-progress"></i>
                                  Screen Proofs
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="logs-employee.html"
                                >
                                  <i className="bi bi-speedometer2 me-2 text-primary"></i>
                                  Performance Evaluation
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>004</td>
                        <td style={{ textAlign: "left;" }}>Sangam Giri</td>
                        <td>2025-06-17</td>
                        <td>10,079</td>
                        <td>1,237</td>
                        <td>37%</td>
                        <td>3h 22m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                        <td className="">
                          <div className="dropdown position-static">
                            <button
                              className="btn btn-link text-dark p-0"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bi bi-three-dots-vertical fs-5"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href=" /screen-proofs"
                                >
                                  <i className="bi bi-display me-2 text-progress"></i>
                                  Screen Proofs
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="logs-employee.html"
                                >
                                  <i className="bi bi-speedometer2 me-2 text-primary"></i>
                                  Performance Evaluation
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>005</td>
                        <td style={{ textAlign: "left;" }}>Nirmal GC</td>
                        <td>2025-06-17</td>
                        <td>10,293</td>
                        <td>1,009</td>
                        <td>86%</td>
                        <td>3h 5m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                        <td className="">
                          <div className="dropdown position-static">
                            <button
                              className="btn btn-link text-dark p-0"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bi bi-three-dots-vertical fs-5"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/screen-proofs"
                                >
                                  <i className="bi bi-display me-2 text-progress"></i>
                                  Screen Proofs
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="logs-employee.html"
                                >
                                  <i className="bi bi-speedometer2 me-2 text-primary"></i>
                                  Performance Evaluation
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>006</td>
                        <td style={{ textAlign: "left;" }}>Susmita Poudel</td>
                        <td>2025-06-17</td>
                        <td>1,381</td>
                        <td>4,379</td>
                        <td>83%</td>
                        <td>7h 2m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                        <td className="">
                          <div className="dropdown position-static">
                            <button
                              className="btn btn-link text-dark p-0"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bi bi-three-dots-vertical fs-5"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href=" /screen-proofs"
                                >
                                  <i className="bi bi-display me-2 text-progress"></i>
                                  Screen Proofs
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="logs-employee.html"
                                >
                                  <i className="bi bi-speedometer2 me-2 text-primary"></i>
                                  Performance Evaluation
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>007</td>
                        <td style={{ textAlign: "left;" }}>Rohan GC</td>
                        <td>2025-06-17</td>
                        <td>1,345</td>
                        <td>2,918</td>
                        <td>49%</td>
                        <td>5h 15m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                        <td className="">
                          <div className="dropdown position-static">
                            <button
                              className="btn btn-link text-dark p-0"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bi bi-three-dots-vertical fs-5"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href=" /screen-proofs"
                                >
                                  <i className="bi bi-display me-2 text-progress"></i>
                                  Screen Proofs
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="logs-employee.html"
                                >
                                  <i className="bi bi-speedometer2 me-2 text-primary"></i>
                                  Performance Evaluation
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>008</td>
                        <td style={{ textAlign: "left;" }}>Bisai Chhetri</td>
                        <td>2025-06-17</td>
                        <td>6,985</td>
                        <td>2,162</td>
                        <td>46%</td>
                        <td>5h 39m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                        <td className="">
                          <div className="dropdown position-static">
                            <button
                              className="btn btn-link text-dark p-0"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bi bi-three-dots-vertical fs-5"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href=" /screen-proofs"
                                >
                                  <i className="bi bi-display me-2 text-progress"></i>
                                  Screen Proofs
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="logs-employee.html"
                                >
                                  <i className="bi bi-speedometer2 me-2 text-primary"></i>
                                  Performance Evaluation
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>009</td>
                        <td style={{ textAlign: "left;" }}>
                          Bishwo Raj Parajuli
                        </td>
                        <td>2025-06-17</td>
                        <td>13,773</td>
                        <td>3,949</td>
                        <td>10%</td>
                        <td>3h 51m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Excellent
                          </span>
                        </td>
                        <td className="">
                          <div className="dropdown position-static">
                            <button
                              className="btn btn-link text-dark p-0"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bi bi-three-dots-vertical fs-5"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href=" /screen-proofs"
                                >
                                  <i className="bi bi-display me-2 text-progress"></i>
                                  Screen Proofs
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="logs-employee.html"
                                >
                                  <i className="bi bi-speedometer2 me-2 text-primary"></i>
                                  Performance Evaluation
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>010</td>
                        <td style={{ textAlign: "left;" }}>Xitij Shrestha</td>
                        <td>2025-06-17</td>
                        <td>8,774</td>
                        <td>2,556</td>
                        <td>50%</td>
                        <td>7h 18m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                        <td className="">
                          <div className="dropdown position-static">
                            <button
                              className="btn btn-link text-dark p-0"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bi bi-three-dots-vertical fs-5"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href=" /screen-proofs"
                                >
                                  <i className="bi bi-display me-2 text-progress"></i>
                                  Screen Proofs
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="logs-employee.html"
                                >
                                  <i className="bi bi-speedometer2 me-2 text-primary"></i>
                                  Performance Evaluation
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
        </div>
      </div>
    </main>
  );
};

export default Logs;
