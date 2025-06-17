import React from "react";
import "../screenproof.css";

const ScreenProofs = () => {
  return (
    <main className="p-2 screen-proofs">
      <div className="p-3 bg-white rounded-3">
        {/* <!-- Screen Proofs Heading Start --> */}
        <div className="row mb-3 justify-content-between align-items-center">
          <div className="col">
            <h5 className="fs-2 fw-semibold">
              <a href="/employee-logs">
                <i className="bi bi-chevron-left"></i>
              </a>
              Screen Proofs
            </h5>
            {/* <!-- <p  className="">Track your work hours and attendance</p> --> */}
          </div>
        </div>
        {/* <!-- Screen Proofs Heading End --> */}
        <div className="mb-3 " style={{ width: " fit-content;" }}>
          <ul
            className="nav nav-pills border rounded-3 border-1 border-secondary-subtle p-1 w-auto bg-white"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-all-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-all"
                type="button"
                role="tab"
                aria-controls="pills-all"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-recent-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-recent"
                type="button"
                role="tab"
                aria-controls="pills-recent"
                aria-selected="false"
              >
                Recent
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-past-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-past"
                type="button"
                role="tab"
                aria-controls="pills-past"
                aria-selected="false"
              >
                Past
              </button>
            </li>
          </ul>
        </div>
        {/* <style>
        .hover-options {
          opacity: 0;
          transition: opacity 0.1s ease-in-out;
        }

        .card-body:hover .hover-options {
          opacity: 1;
        }
      </style> */}
        <div className="tab-content rounded-3 bg-white" id="pills-tabContent">
          <div
            className="tab-pane fade show active p-2"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
          >
            <div className="d-flex gap-3 align-items-end flex-wrap mb-4">
              <div>
                <label htmlFor="fromDate">From</label>
                <input type="date" id="fromDate" className="form-control" />
              </div>
              <div>
                <label htmlFor="toDate">To</label>
                <input type="date" id="toDate" className="form-control" />
              </div>
              <div>
                <button className="btn btn-primary">
                  {" "}
                  <i className="bi bi-filter"></i> Apply Filter
                </button>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9;" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen1.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9;" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen2.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9;" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen1.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen2.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade rounded-3 p-2"
            id="pills-recent"
            role="tabpanel"
            aria-labelledby="pills-recent-tab"
          >
            <div className="d-flex gap-3 align-items-end flex-wrap mb-4">
              <div>
                <label htmlFor="fromDate">From</label>
                <input type="date" id="fromDate" className="form-control" />
              </div>
              <div>
                <label htmlFor="toDate">To</label>
                <input type="date" id="toDate" className="form-control" />
              </div>
              <div>
                <button className="btn btn-primary">
                  {" "}
                  <i className="bi bi-filter"></i> Apply Filter
                </button>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen1.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen2.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen1.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen2.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade rounded-3 p-2"
            id="pills-past"
            role="tabpanel"
            aria-labelledby="pills-past-tab"
          >
            <div className="d-flex gap-3 align-items-end flex-wrap mb-4">
              <div>
                <label htmlFor="fromDate">From</label>
                <input type="date" id="fromDate" className="form-control" />
              </div>
              <div>
                <label htmlFor="toDate">To</label>
                <input type="date" id="toDate" className="form-control" />
              </div>
              <div>
                <button className="btn btn-primary">
                  {" "}
                  <i className="bi bi-filter"></i> Apply Filter
                </button>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen1.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex gap-2 position-relative p-0">
                    <img
                      src="../img/screen2.jpg"
                      alt="Proof"
                      className="img-fluid w-100 object-fit-cover"
                      style={{ aspectRatio: "16/9" }}
                    />
                    <div className="d-flex position-absolute bottom-0 left-0 m-1">
                      <p className="bg-primary text-white py-1 px-2 rounded-3 m-0">
                        <i className="bi bi-clock"></i> 2023-06-01 10:00 AM
                      </p>
                    </div>
                    <div
                      className="hover-options position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <div className="d-flex gap-4">
                        <a href="#">
                          <i className="bi bi-eye-fill text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-download text-white fs-3"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-trash-fill text-white fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    // </div>
    // </div>
  );
};

export default ScreenProofs;
