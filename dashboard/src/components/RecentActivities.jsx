// RecentActivities.jsx
import React, { useState, useEffect } from "react";
import "./RecentActivities.css";  // import the CSS file

// A helper to convert timestamp to “time ago” string
function timeAgo(ts) {
  const now = new Date();
  const then = new Date(ts);
  const diffMs = now - then;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffH = Math.floor(diffMin / 60);
  const diffD = Math.floor(diffH / 24);
  if (diffSec < 60) return `${diffSec} sec ago`;
  if (diffMin < 60) return `${diffMin} min ago`;
  if (diffH < 24) return `${diffH} hr ago`;
  return `${diffD} d ago`;
}

// Sample “mock” fetcher (in real use, fetch from API)
function fetchActivities() {
  // returns promise of list of activities for “today”
  return Promise.resolve([
    {
      id: 1,
      type: "comment",
      user: "Alice",
      content: "Left feedback on your assignment.",
      timestamp: new Date().getTime() - 1000 * 60 * 5, // 5 min ago
      read: false,
    },
    {
      id: 2,
      type: "message",
      user: "Professor Bob",
      content: "Please check your grade for Week 2.",
      timestamp: new Date().getTime() - 1000 * 60 * 60 * 2, // 2 hr ago
      read: false,
    },
    {
      id: 3,
      type: "comment",
      user: "Charlie",
      content: "Great job on your last quiz!",
      timestamp: new Date().getTime() - 1000 * 60 * 60 * 5, // 5 hr ago
      read: true,
    },
    // ... more
  ]);
}

function RecentActivities() {
  const [activities, setActivities] = useState([]);
  const [filter, setFilter] = useState("all"); // “all”, “comment”, “message”

  useEffect(() => {
    fetchActivities().then((data) => {
      // Optionally filter for “today” here if needed
      setActivities(data);
    });
  }, []);

  const filtered = activities.filter((act) => {
    if (filter === "all") return true;
    return act.type === filter;
  });

  const markAsRead = (id) => {
    setActivities((prev) =>
      prev.map((act) =>
        act.id === id ? { ...act, read: true } : act
      )
    );
  };

  const handleClick = (activity) => {
    // e.g. navigate to detail page or show modal
    alert(`You clicked: ${activity.type} from ${activity.user}`);
    markAsRead(activity.id);
  };

  return (
    <div className="recent-activities">
      <div className="ra-header">
        <h2>Recent Activities (Today)</h2>
        <div className="ra-filter">
          <label>
            <input
              type="radio"
              name="filter"
              value="all"
              checked={filter === "all"}
              onChange={() => setFilter("all")}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value="comment"
              checked={filter === "comment"}
              onChange={() => setFilter("comment")}
            />
            Comments
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value="message"
              checked={filter === "message"}
              onChange={() => setFilter("message")}
            />
            Messages
          </label>
        </div>
      </div>
      <ul className="ra-list">
        {filtered.length === 0 ? (
          <li className="ra-empty">No recent activity today.</li>
        ) : (
          filtered.map((act) => (
            <li
              key={act.id}
              className={`ra-item ${act.read ? "read" : "unread"}`}
              onClick={() => handleClick(act)}
            >
              <div className="ra-icon">
                {act.type === "comment" ? "💬" : "✉️"}
              </div>
              <div className="ra-content">
                <div className="ra-main">
                  <strong>{act.user}</strong>{" "}
                  {act.type === "comment"
                    ? "commented:"
                    : "sent you a message:"}
                  <span className="ra-text"> {act.content}</span>
                </div>
                <div className="ra-time">{timeAgo(act.timestamp)}</div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default RecentActivities;
