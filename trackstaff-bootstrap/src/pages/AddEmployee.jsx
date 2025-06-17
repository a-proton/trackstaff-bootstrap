import React from "react";

const AddEmployee = () => {
  return (
    <main className="p-3">
      <div className="bg-white p-3 rounded-3">
        {/* <!-- Add Employee Heading Start --> */}
        <div className="d-flex">
          <div className="px-3 pb-3">
            <h5 className="fs-2 fw-semibold">
              <a href="/employee">
                <i className="bi bi-chevron-left"></i>
              </a>{" "}
              Add Employee
            </h5>
            <p className="ps-4">
              Fill out the form below to add a new employee to your team.
            </p>
          </div>
        </div>
        {/* <!-- Add Employee Heading End --> */}
        <div className="p-2 p-md-3">
          <form>
            <div className="d-flex flex-column justify-content-between align-items-center">
              <div className="d-flex flex-column align-items-center gap-2">
                <div
                  className="bg-primary-subtle rounded-circle p-3 d-flex justify-content-center align-items-center border-primary"
                  style={{
                    width: "100px",
                    height: "100px",
                    border: " 2px dashed",
                  }}
                >
                  <i className="bi bi-upload fs-1"></i>
                </div>
                <p className="text-center m-0">
                  Drag and drop or <span>Click to upload</span>
                </p>
                <p className="text-center text-muted">
                  PNG, JPG <i className="bi bi-dot"></i> Max 3MB
                </p>
              </div>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 w-100 g-3 pt-3">
                <div className="col">
                  <label for="fullName" className="form-label">
                    Full Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full Name"
                    id="fullName"
                    required
                  />
                </div>
                <div className="col">
                  <label for="shiftType" className="form-label">
                    Shift Type<span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    name=""
                    id="shiftType"
                    required
                  >
                    {/* <!-- <option value="">Select Shift Type</option> --> */}
                    <option value="">Full Time</option>
                    <option value="">Part Time</option>
                  </select>
                </div>
                <div className="col">
                  <label for="role" className="form-label">
                    Role<span className="text-danger">*</span>
                  </label>
                  <select name="" id="role" className="form-select" required>
                    <option value="">Select Role</option>
                    <option value="">Admin</option>
                    <option value="">Employee</option>
                  </select>
                </div>
                <div className="col">
                  <label for="email" className="form-label">
                    Email Address<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    id="email"
                    required
                  />
                </div>
                <div className="col">
                  <label for="phoneNumber" className="form-label">
                    Phone Number<span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    id="phoneNumber"
                    required
                  />
                </div>
                <div className="col">
                  <label for="address" className="form-label">
                    Address<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                    id="address"
                    required
                  />
                </div>
                <div className="col">
                  <label for="github" className="form-label">
                    GitHub
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter GitHub URL"
                    id="github"
                  />
                </div>
                <div className="col">
                  <label for="linkedin" className="form-label">
                    LinkedIn
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter LinkedIn URL"
                    id="linkedin"
                  />
                </div>
                <div className="col">
                  <label for="facebook" className="form-label">
                    Facebook
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Facebook URL"
                    id="facebook"
                  />
                </div>
                <div className="col">
                  <label for="status" className="form-label">
                    Status<span className="text-danger">*</span>
                  </label>
                  <select name="" id="status" className="form-select" required>
                    <option value="">Select Status</option>
                    <option value="">Active</option>
                    <option value="">Inactive</option>
                  </select>
                </div>
                <div className="col">
                  <label for="workingHours" className="form-label">
                    Working Hours<span className="text-danger">*</span>
                  </label>
                  <div className="d-flex gap-2 align-items-center">
                    <input
                      type="time"
                      className="form-control"
                      placeholder="Enter Working Hours"
                      id="startTime"
                      required
                    />
                    <span>to</span>
                    <input
                      type="time"
                      className="form-control"
                      placeholder="Enter Working Hours"
                      id="endTime"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label for="resumeUpload" className="form-label">
                    Resume Upload<span className="text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="resumeUpload"
                    required
                  />
                </div>
                <div>
                  <label for="jobContract" className="form-label">
                    Job Contract<span className="text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="jobContract"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end gap-3">
              <button type="reset" className="btn border px-4 py-2">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary px-4 py-2">
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddEmployee;
