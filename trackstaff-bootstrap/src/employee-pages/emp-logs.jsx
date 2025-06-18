import React from "react";

const EmpLogs = () => {
  return (
    <main className="p-2">
      <div className="px-2">
        {/* <!-- Logs Heading Start --> */}
        <div className="row">
          <div className="col-12">
            <h5 className="fs-2 fw-semibold">Daily Activity Logs</h5>
            <p className="">Track your work performance</p>
          </div>
        </div>
        {/* <!-- Logs Heading End --> */}
        <div className="row g-3">
          <div className="col-12 col-xxl-9 d-flex align-items-stretch ">
            <div className="card border-0 shadow-sm h-100 w-100 rounded-3">
              <div className="card-body text-center h-100">
                <div className="d-flex align-items-center justify-content-between gap-4">
                  <h5
                    className="card-title d-flex align-items-center gap-2 py-1 text-start"
                    id="logsMonthHeading"
                  >
                    Activity Logs - June 2025
                  </h5>
                  <div className="d-flex align-items-center gap-2">
                    <button className="btn border px-1 py-0" id="prevLogsBtn">
                      <i className="bi bi-chevron-left"></i>
                    </button>
                    <button className="btn border px-1 py-0" id="nextLogsBtn">
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>
                <div className="table-responsive w-100 mt-3">
                  <table className="table" style={{ textWrap: " balance;" }}>
                    <thead className="table-light border border-light-subtle align-middle">
                      <tr>
                        <th>Date</th>
                        <th>Key Presses</th>
                        <th>Mouse Clicks</th>
                        <th>Mouse Movements</th>
                        <th>Active Time</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody id="logsTableBody">
                      <tr>
                        <td>2025-06-01</td>
                        <td>5,475</td>
                        <td>2,918</td>
                        <td>38%</td>
                        <td>6h 37m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-02</td>
                        <td>703</td>
                        <td>3,708</td>
                        <td>12%</td>
                        <td>5h 29m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-03</td>
                        <td>6,456</td>
                        <td>3,793</td>
                        <td>9%</td>
                        <td>6h 0m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-04</td>
                        <td>12,057</td>
                        <td>2,500</td>
                        <td>92%</td>
                        <td>5h 2m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-05</td>
                        <td>10,169</td>
                        <td>1,170</td>
                        <td>23%</td>
                        <td>4h 25m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-06</td>
                        <td>8,700</td>
                        <td>381</td>
                        <td>11%</td>
                        <td>3h 51m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-07</td>
                        <td>6,582</td>
                        <td>3,386</td>
                        <td>58%</td>
                        <td>3h 53m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-08</td>
                        <td>3,786</td>
                        <td>3,231</td>
                        <td>82%</td>
                        <td>4h 52m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-09</td>
                        <td>6,726</td>
                        <td>2,811</td>
                        <td>53%</td>
                        <td>6h 28m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-10</td>
                        <td>3,961</td>
                        <td>1,908</td>
                        <td>20%</td>
                        <td>6h 7m</td>
                        <td>
                          <span className="text-warning bg-warning-subtle rounded-5 py-1 px-2">
                            Moderate
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-11</td>
                        <td>14,615</td>
                        <td>3,211</td>
                        <td>75%</td>
                        <td>3h 51m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Excellent
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-12</td>
                        <td>2,466</td>
                        <td>2,193</td>
                        <td>6%</td>
                        <td>5h 23m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-13</td>
                        <td>4,182</td>
                        <td>2,389</td>
                        <td>39%</td>
                        <td>5h 57m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-14</td>
                        <td>1,170</td>
                        <td>2,848</td>
                        <td>39%</td>
                        <td>3h 43m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-15</td>
                        <td>2,578</td>
                        <td>3,269</td>
                        <td>17%</td>
                        <td>2h 10m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-16</td>
                        <td>8,238</td>
                        <td>375</td>
                        <td>3%</td>
                        <td>2h 20m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-17</td>
                        <td>11,227</td>
                        <td>4,855</td>
                        <td>34%</td>
                        <td>5h 12m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Excellent
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-18</td>
                        <td>8,036</td>
                        <td>982</td>
                        <td>21%</td>
                        <td>3h 43m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-19</td>
                        <td>4,201</td>
                        <td>575</td>
                        <td>69%</td>
                        <td>4h 11m</td>
                        <td>
                          <span className="text-warning bg-warning-subtle rounded-5 py-1 px-2">
                            Moderate
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-20</td>
                        <td>5,647</td>
                        <td>3,338</td>
                        <td>29%</td>
                        <td>4h 37m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-21</td>
                        <td>5,216</td>
                        <td>487</td>
                        <td>9%</td>
                        <td>2h 28m</td>
                        <td>
                          <span className="text-warning bg-warning-subtle rounded-5 py-1 px-2">
                            Moderate
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-22</td>
                        <td>2,007</td>
                        <td>925</td>
                        <td>30%</td>
                        <td>2h 41m</td>
                        <td>
                          <span className="text-danger bg-danger-subtle rounded-5 py-1 px-2">
                            Poor
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-23</td>
                        <td>5,414</td>
                        <td>1,325</td>
                        <td>13%</td>
                        <td>4h 2m</td>
                        <td>
                          <span className="text-warning bg-warning-subtle rounded-5 py-1 px-2">
                            Moderate
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-24</td>
                        <td>8,343</td>
                        <td>4,956</td>
                        <td>91%</td>
                        <td>6h 40m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-25</td>
                        <td>11,765</td>
                        <td>1,251</td>
                        <td>32%</td>
                        <td>4h 44m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-26</td>
                        <td>8,199</td>
                        <td>1,732</td>
                        <td>82%</td>
                        <td>7h 9m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-27</td>
                        <td>10,328</td>
                        <td>2,153</td>
                        <td>85%</td>
                        <td>6h 24m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-28</td>
                        <td>14,072</td>
                        <td>4,805</td>
                        <td>14%</td>
                        <td>4h 2m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Excellent
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-29</td>
                        <td>7,099</td>
                        <td>1,872</td>
                        <td>1%</td>
                        <td>4h 27m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2025-06-30</td>
                        <td>2,666</td>
                        <td>2,934</td>
                        <td>78%</td>
                        <td>3h 12m</td>
                        <td>
                          <span className="text-primary bg-primary-subtle rounded-5 py-1 px-2">
                            Good
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
  );
};

export default EmpLogs;
