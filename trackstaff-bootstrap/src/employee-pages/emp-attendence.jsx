import React from "react";

const EmpAttendence = () => {
  return (
    <div>
      <main className="p-2">
        <div className="px-2">
          {/* <!-- Attendance Heading Start --> */}
          <div className="row">
            <div className="col-12">
              <h5 className="fs-2 fw-semibold">Attendance</h5>
              <p className="">Track your work hours and attendance</p>
            </div>
          </div>
          {/* <!-- Attendance Heading End --> */}

          <div className="row g-3">
            <div className="col-12 col-xl-4">
              <div className="card border-0 shadow-sm h-auto w-100 rounded-3">
                <div className="card-body text-center h-auto">
                  <h5 className="card-title d-flex align-items-start gap-2 py-1 text-start mb-4">
                    <i className="bi bi-clock"></i> Total Attendance
                  </h5>

                  <div className="d-flex align-items-center justify-content-center gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p>Total</p>
                      <p className="fs-2 fw-semibold text-info">20</p>
                      <p>Days</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p>Present</p>
                      <p className="fs-2 fw-semibold text-primary">20</p>
                      <p>Days</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p>Absent</p>
                      <p className="fs-2 fw-semibold text-danger">20</p>
                      <p>Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8 d-flex align-items-stretch">
              <div className="card border-0 shadow-sm h-100 w-100 rounded-3">
                <div className="card-body text-center">
                  <div className="d-flex align-items-center justify-content-between gap-4">
                    <h5
                      className="card-title d-flex align-items-center gap-2 py-1 text-start"
                      id="monthHeading"
                    >
                      <i className="bi bi-clock"></i> Attendance History - June
                      2025
                    </h5>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn border px-1 py-0"
                        id="prevMonthBtn"
                      >
                        <i className="bi bi-chevron-left"></i>
                      </button>
                      <button
                        className="btn border px-1 py-0"
                        id="nextMonthBtn"
                      >
                        <i className="bi bi-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                  <div className="table-responsive w-100 mt-3">
                    <table className="table" style={{ textWrap: "balance" }}>
                      <thead className="table-light border border-light-subtle align-middle">
                        <tr className="">
                          <th>Date</th>
                          <th>Check In</th>
                          <th>Check Out</th>
                          <th>Hours Worked</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody id="attendanceTableBody">
                        <tr>
                          <td>2025-06-01</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-02</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-03</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-04</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-05</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> --:--
                            --
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> --:-- --
                          </td>
                          <td>--</td>
                          <td>
                            <span className="text-danger bg-danger-subtle rounded-5 py-1 px-2">
                              Absent
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-06</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-07</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-08</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-09</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> --:--
                            --
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> --:-- --
                          </td>
                          <td>--</td>
                          <td>
                            <span className="text-danger bg-danger-subtle rounded-5 py-1 px-2">
                              Absent
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-10</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-11</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> --:--
                            --
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> --:-- --
                          </td>
                          <td>--</td>
                          <td>
                            <span className="text-danger bg-danger-subtle rounded-5 py-1 px-2">
                              Absent
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-12</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-13</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-14</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-15</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-16</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> --:--
                            --
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> --:-- --
                          </td>
                          <td>--</td>
                          <td>
                            <span className="text-danger bg-danger-subtle rounded-5 py-1 px-2">
                              Absent
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-17</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-18</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-19</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> --:--
                            --
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> --:-- --
                          </td>
                          <td>--</td>
                          <td>
                            <span className="text-danger bg-danger-subtle rounded-5 py-1 px-2">
                              Absent
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-20</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-21</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-22</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> --:--
                            --
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> --:-- --
                          </td>
                          <td>--</td>
                          <td>
                            <span className="text-danger bg-danger-subtle rounded-5 py-1 px-2">
                              Absent
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-23</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> --:--
                            --
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> --:-- --
                          </td>
                          <td>--</td>
                          <td>
                            <span className="text-danger bg-danger-subtle rounded-5 py-1 px-2">
                              Absent
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-24</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-25</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-26</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-27</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-28</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-29</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2025-06-30</td>
                          <td>
                            <i className="bi bi-clock text-primary"></i> 09:00
                            AM
                          </td>
                          <td>
                            <i className="bi bi-clock text-danger"></i> 05:00 PM
                          </td>
                          <td>8h 0m</td>
                          <td>
                            <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                              Present
                            </span>
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
    </div>
  );
};

export default EmpAttendence;
