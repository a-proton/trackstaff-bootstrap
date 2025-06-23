import React, { useState, useEffect } from "react";

const ReminderModal = ({ isOpen, onClose, onSubmit }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    reminderTitle: "",
    description: "",
    assignedTo: [],
    assignee: [],
    dueDate: "",
    dueTime: "",
    priority: "medium",
    repeat: "never",
  });

  const users = [
    { id: "001", name: "Surya Poudel", role: "Admin" },
    { id: "002", name: "Manish Shrestha", role: "Developer" },
    { id: "003", name: "Kabita Subedi", role: "Designer" },
    { id: "004", name: "Sangam Giri", role: "Developer" },
    { id: "005", name: "Nirmal GC", role: "Tester" },
    { id: "006", name: "Susmita Poudel", role: "Content Writer" },
    { id: "007", name: "Rohan GC", role: "Developer" },
    { id: "008", name: "Bisai Chhetri", role: "Designer" },
    { id: "009", name: "Bishwo Raj Parajuli", role: "Manager" },
    { id: "010", name: "Xitij Shrestha", role: "Intern" },
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { id, value, type, name } = e.target;

    if (type === "radio") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      reminderTitle: "",
      description: "",
      assignedTo: [],
      assignee: [],
      dueDate: "",
      dueTime: "",
      priority: "medium",
      repeat: "never",
    });
  };

  return (
    <>
      {/* Bootstrap Modal with show class and backdrop */}
      <div
        className={`modal fade text-start ${show ? "show" : ""}`}
        style={{ display: "block" }}
        tabIndex="-1"
        aria-labelledby="addReminderModalLabel"
        aria-hidden={!show}
      >
        <div className="modal-dialog text-start">
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
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body overflow-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="reminderTitle" className="form-label">
                    Reminder Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="reminderTitle"
                    value={formData.reminderTitle}
                    onChange={handleInputChange}
                    placeholder="Enter reminder title..."
                    aria-label="Reminder Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter reminder description..."
                    aria-label="Reminder Description"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="assignedTo" className="form-label">
                        Assigned To
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="assignedTo"
                        value={formData.assignedTo}
                        onChange={handleInputChange}
                        placeholder="Search user..."
                        list="datalist-reminder-assigned-to"
                      />
                      <datalist id="datalist-reminder-assigned-to">
                        {users.map((user) => (
                          <option
                            key={user.id}
                            value={user.name}
                            data-user-id={user.id}
                            data-role={user.role}
                          />
                        ))}
                      </datalist>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="assignee" className="form-label">
                        Assignee
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="assignee"
                        value={formData.assignee}
                        onChange={handleInputChange}
                        placeholder="Search user..."
                        list="datalist-reminder-assignee"
                      />
                      <datalist id="datalist-reminder-assignee">
                        {users.map((user) => (
                          <option
                            key={user.id}
                            value={user.name}
                            data-user-id={user.id}
                            data-role={user.role}
                          />
                        ))}
                      </datalist>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="dueDate" className="form-label">
                        Due Date
                      </label>
                      <input
                        type="date"
                        className="form-control text-dark-emphasis"
                        id="dueDate"
                        value={formData.dueDate}
                        onChange={handleInputChange}
                        aria-label="Reminder Due Date"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="dueTime" className="form-label">
                        Due Time
                      </label>
                      <input
                        type="time"
                        className="form-control text-dark-emphasis"
                        id="dueTime"
                        value={formData.dueTime}
                        onChange={handleInputChange}
                        aria-label="Reminder Due Time"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="priority" className="form-label">
                    Priority
                  </label>
                  <div className="d-flex align-items-center gap-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="low"
                        name="priority"
                        id="reminder-priority-low"
                        checked={formData.priority === "low"}
                        onChange={handleInputChange}
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
                        name="priority"
                        id="reminder-priority-medium"
                        checked={formData.priority === "medium"}
                        onChange={handleInputChange}
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
                        name="priority"
                        id="reminder-priority-high"
                        checked={formData.priority === "high"}
                        onChange={handleInputChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="reminder-priority-high"
                      >
                        High
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="repeat" className="form-label">
                    Repeat
                  </label>
                  <select
                    className="form-select text-dark-emphasis"
                    id="repeat"
                    value={formData.repeat}
                    onChange={handleInputChange}
                    aria-label="Task Repeat"
                  >
                    <option value="never">Never</option>
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
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary px-4"
                onClick={handleSubmit}
              >
                Create Reminder
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal Backdrop */}
      <div
        className={`modal-backdrop fade ${show ? "show" : ""}`}
        onClick={onClose}
      ></div>
    </>
  );
};

export default ReminderModal;
