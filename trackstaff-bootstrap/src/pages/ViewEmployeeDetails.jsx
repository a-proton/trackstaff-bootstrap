import React from "react";

const ViewEmployeeDetails = () => {
  return (
    <main className="p-3">
      <div className="bg-white p-3 rounded-3">
        {/* Add Employee Heading Start */}
        <div className="d-flex">
          <div className="px-3 pb-3">
            <h5 className="fs-2 fw-semibold">
              <a href="/employee">
                <i className="bi bi-chevron-left"></i>
              </a>{" "}
              View Employee Details
            </h5>
            {/* <p className="ps-4">Fill out the form below to add a new employee to your team.</p> */}
          </div>
        </div>
        {/* Add Employee Heading End */}

        <div className="p-2 p-md-3">
          <form>
            <div className="d-flex flex-column justify-content-between align-items-center">
              <div
                className="bg-primary-subtle rounded-circle d-flex justify-content-center align-items-center overflow-hidden"
                style={{ width: "100px", height: "100px" }}
              >
                <img
                  src="../img/user-1.jpg"
                  alt="Employee"
                  className="img-fluid"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* <p className="text-center m-0">Drag and drop or <span>Click to upload</span></p> */}
              {/* <p className="text-center text-muted">PNG, JPG <i className="bi bi-dot"></i> Max 3MB</p> */}

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 w-100 g-3 pt-3">
                <div className="col">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value="Manish Shrestha"
                    id="fullName"
                    disabled
                  />
                </div>
                <div className="col">
                  <label htmlFor="shiftType" className="form-label">
                    Shift Type
                  </label>
                  <select
                    className="form-select"
                    name=""
                    id="shiftType"
                    disabled
                  >
                    {/* <option value="">Select Shift Type</option> */}
                    <option value="">Full Time</option>
                    <option value="">Part Time</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select name="" id="role" className="form-select" disabled>
                    <option value="">Employee</option>
                    {/* <option value="">Select Role</option>
                    <option value="">Admin</option> */}
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value="manish.shrestha@example.com"
                    id="email"
                    disabled
                  />
                </div>
                <div className="col">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value="9876543210"
                    id="phoneNumber"
                    disabled
                  />
                </div>
                <div className="col">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value="Kathmandu, Nepal"
                    id="address"
                    disabled
                  />
                </div>
                <div className="col">
                  <label htmlFor="github" className="form-label">
                    GitHub
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value="https://github.com/manish-shrestha"
                    id="github"
                    disabled
                  />
                </div>
                <div className="col">
                  <label htmlFor="linkedin" className="form-label">
                    LinkedIn
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value="https://linkedin.com/manish-shrestha"
                    id="linkedin"
                    disabled
                  />
                </div>
                <div className="col">
                  <label htmlFor="facebook" className="form-label">
                    Facebook
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value="https://facebook.com/manish-shrestha"
                    id="facebook"
                    disabled
                  />
                </div>
                <div className="col">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select name="" id="status" className="form-select" disabled>
                    <option value="">Active</option>
                    {/* <option value="">Select Status</option>
                    <option value="">Inactive</option> */}
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="workingHours" className="form-label">
                    Working Hours
                  </label>
                  <div className="d-flex gap-2 align-items-center">
                    <input
                      type="time"
                      className="form-control"
                      value="10:00"
                      id="startTime"
                      disabled
                    />
                    <span>to</span>
                    <input
                      type="time"
                      className="form-control"
                      value="17:00"
                      id="endTime"
                      disabled
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="resumeUpload" className="form-label">
                    Resume Upload
                  </label>
                  {/* <input type="file" className="form-control" id="resumeUpload" value="resume.pdf" disabled /> */}
                  <a
                    href="resume.pdf"
                    className="btn btn-outline-light text-dark w-100"
                  >
                    Manish-Shrestha-resume.pdf
                  </a>
                </div>
                <div>
                  <label htmlFor="jobContract" className="form-label">
                    Job Contract
                  </label>
                  {/* <input type="file" className="form-control" id="jobContract" value="contract.pdf" disabled /> */}
                  <a
                    href="contract.pdf"
                    className="btn btn-outline-light text-dark w-100"
                  >
                    Manish-Shrestha-contract.pdf
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="d-flex justify-content-end gap-3">
              <button type="reset" className="btn btn-outline-secondary px-4 py-2">Cancel</button>
              <button type="submit" className="btn btn-primary px-4 py-2">Add Employee</button>
            </div> */}
          </form>
        </div>
      </div>
    </main>
  );
};

export default ViewEmployeeDetails;
