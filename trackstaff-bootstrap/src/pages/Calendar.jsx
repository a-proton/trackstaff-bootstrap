import React, { useState } from "react"; // 1. useMemo removed from import
import "./CalendarView.css";

const eventsData = {
  "2025-6-15": [
    { title: "Submit Final Proposal", type: "deadline", user: "Manish" },
    { title: "Plan Q3 Projects", type: "task", user: "Manish" },
  ],
  "2025-6-16": [{ title: "Team Sync", type: "meeting", user: "All" }],
  "2025-6-17": [
    { title: "Complete Poster Design", type: "task", user: "Nirmal GC" },
    { title: "Call John about invoice", type: "reminder", user: "Manish" },
  ],
  "2025-6-18": [
    { title: "Client Presentation", type: "meeting", user: "Rohan Katuwal" },
  ],
  "2025-6-19": [{ title: "Review Ad Copy", type: "task", user: "Nirmal GC" }],
  "2025-6-20": [
    { title: "Project Alpha Deadline", type: "deadline", user: "Manish" },
  ],
};

const Calendar = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(
    new Date(2025, 5, 15)
  );
  const [selectedFilters, setSelectedFilters] = useState(
    new Set(["deadline"]) // Set to 1 to match your image
  );

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // 2. The entire 'eventCounts' useMemo block has been DELETED.

  const toggleFilter = (filter) => {
    const newFilters = new Set(selectedFilters);
    if (newFilters.has(filter)) newFilters.delete(filter);
    else newFilters.add(filter);
    setSelectedFilters(newFilters);
  };

  const removeFilter = (filter) => {
    const newFilters = new Set(selectedFilters);
    newFilters.delete(filter);
    setSelectedFilters(newFilters);
  };

  const formatDateKey = (date) =>
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  const getWeekDates = () => {
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(currentWeekStart);
      day.setDate(currentWeekStart.getDate() + i);
      return day;
    });
  };

  return (
    <main>
      <div className="calendar-container">
        {/* Header remains the same */}
        <div className="calendar-header">
          <div className="header-content">
            <div className="main-title-line">
              <button className="nav-btn">
                <a href="/chats">
                  <i className="fas fa-chevron-left"></i>
                </a>
              </button>
              <h1>Calendar View</h1>
            </div>
            <p>Track your work performance</p>
          </div>
        </div>

        <div className="calendar-controls">
          {/* Week navigation remains the same */}
          <div className="week-navigation">
            <button
              className="nav-btn"
              onClick={() =>
                setCurrentWeekStart(
                  new Date(
                    currentWeekStart.setDate(currentWeekStart.getDate() - 7)
                  )
                )
              }
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="current-week">
              {`${
                monthNames[currentWeekStart.getMonth()]
              } ${currentWeekStart.getDate()} - ${new Date(
                currentWeekStart.getTime() + 6 * 86400000
              ).getDate()}, ${currentWeekStart.getFullYear()}`}
            </div>
            <button
              className="nav-btn"
              onClick={() =>
                setCurrentWeekStart(
                  new Date(
                    currentWeekStart.setDate(currentWeekStart.getDate() + 7)
                  )
                )
              }
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="legend-wrapper">
            {/* Legend remains the same */}
            <div className="legend">
              {["deadline", "meeting", "reminder", "task"].map((type) => (
                <div key={type} className="legend-item">
                  <div className={`legend-dot ${type}`}></div>
                  <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                </div>
              ))}
            </div>

            <div className="filter-container">
              {/* Filter button with active count remains the same */}
              <div
                className="filter-btn"
                onClick={() =>
                  document
                    .getElementById("filter-dropdown")
                    .classList.toggle("show")
                }
              >
                <i class="bi bi-funnel"></i>
                <span>Filter</span>
                {selectedFilters.size > 0 && (
                  <span className="selected-filter-count-badge">
                    {selectedFilters.size}
                  </span>
                )}
              </div>
              <div className="filter-dropdown" id="filter-dropdown">
                <ul>
                  {["deadline", "meeting", "reminder", "task"].map((type) => (
                    <li
                      key={type}
                      data-value={type}
                      className={selectedFilters.has(type) ? "selected" : ""}
                      onClick={() => toggleFilter(type)}
                    >
                      {/* 3. The count span is now gone. Only the name remains. */}
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the component remains the same */}
        <div className="active-filters-section">
          {Array.from(selectedFilters).length > 0 && (
            <span>Active Filters:</span>
          )}
          {Array.from(selectedFilters).map((type) => (
            <div key={type} className={`active-filter-pill ${type}`}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
              <span className="close-pill" onClick={() => removeFilter(type)}>
                ×
              </span>
            </div>
          ))}
        </div>

        <div className="week-view">
          {getWeekDates().map((date, i) => (
            <React.Fragment key={i}>
              <div className="day-header">
                <span className="day-name">{weekDays[date.getDay()]}</span>
                <span className="day-number">{date.getDate()}</span>
              </div>
            </React.Fragment>
          ))}

          {getWeekDates().map((date, i) => {
            const key = formatDateKey(date);
            const dayEvents = eventsData[key] || [];
            return (
              <div className="day-cell" key={`cell-${i}`}>
                {dayEvents.map((event, idx) =>
                  selectedFilters.size === 0 ||
                  selectedFilters.has(event.type) ? (
                    <div key={idx} className={`event ${event.type}`}>
                      <div className="event-title">{event.title}</div>
                      <div className="event-user">
                        <i className="fas fa-user"></i>
                        <span>{event.user}</span>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Calendar;
