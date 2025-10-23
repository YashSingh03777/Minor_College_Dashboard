
import React, { useState } from "react";
import "./App.css";

import ProgressReport from "./components/ProgressReport";
import MentorChat from "./components/MentorChat";
import MyProjects from "./components/MyProjects";
import MyTasks from "./components/MyTasks";
import UpcomingEvents from "./components/UpcomingEvents";
import RecentActivities from "./components/RecentActivities";
import PerformanceOverview from "./components/PerformanceOverview";
import MyTeam from "./components/MyTeam";
import Presentation from "./components/Presentations";
import Feedback from "./components/Feedback";

// Optional dashboard / default content
const Dashboard = () => (
  <>
    <h1 className="page-title">SVVV_OFFICIAL_PROJECT (STUDENT DETAILS)</h1>

    <div className="info-cards">
      <div className="info-card">
        <h3>Mentor</h3>
        <p>Dr. Sharma (Computer Science)</p>
      </div>
      <div className="info-card">
        <h3>Team Members</h3>
        <ul>
          <li>Yash Singh</li>
          <li>Prince Pandey</li>
          <li>Somya Nigam</li>
        </ul>
      </div>
      <div className="info-card">
        <h3>Project Title</h3>
        <p>AI-Based Smart Farming System</p>
      </div>
      <div className="info-card">
        <h3>Status</h3>
        <p>On Track 🚀</p>
      </div>
    </div>

    <div className="tabs">
      <button className="tab active">SVVV BOARD</button>
      <button className="tab">Files</button>
      <button className="tab">Team Chat</button>
      <button className="tab">Presentations</button>
      <button className="tab">Progress Report</button>
    </div>

    <div className="svvv-board">
      <div className="svvv-column">
        <h3>Work to be done!</h3>
        <div className="task-card">
          <h4>Task: Literature Review</h4>
          <p>Assigned: Major Project</p>
          <p>Due: Nov 10</p>
        </div>
        <div className="task-card">
          <h4>Task: Data Collection</h4>
          <p>Assigned: Major Project</p>
          <p>Due: Nov 15</p>
        </div>
      </div>

      <div className="svvv-column">
        <h3>IN PROGRESS</h3>
        <div className="task-card high-priority">
          <h4>Task: Experiment Setup</h4>
          <span className="priority-badge">High Priority</span>
          <p>Assigned: Major Project</p>
          <p>Due: Nov 22</p>
        </div>
        <div className="task-card">
          <h4>Task: Draft Report</h4>
          <p>Assigned: Major Project</p>
          <p>Due: Nov 25</p>
        </div>
      </div>

      <div className="svvv-column">
        <h3>COMPLETED</h3>
        <div className="task-card completed">
          <h4>Task: Project Proposal</h4>
          <p>Completed: Nov 1</p>
        </div>
        <div className="task-card completed">
          <h4>Task: Research Paper Review</h4>
          <p>Completed: Oct 28</p>
        </div>
      </div>
    </div>
  </>
);

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "My Projects":
        return <MyProjects />;
      case "My Team":
        return <MyTeam />;
      case "Presentations":
        return <Presentation />;
      case "Mentor Chat":
        return <MentorChat />;
      case "Progress Report":
        return <ProgressReport />;
      case "My Task":
        return <MyTasks />;
      case "Upcoming Events":
        return <UpcomingEvents />;
      case "Recent Activities":
        return <RecentActivities />;
      case "Performance Overview":
        return <PerformanceOverview />;
        case "Feedback Form":
        return <Feedback />;
      case "Dashboard":
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
      {/* Header */}
      <header className="top-header">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <h2 className="header-title">SVVV_MAJOR_PROJECT</h2>
        <div className="user-section">
          <span>Hello, Yash!</span>
          <div className="user-icon">Y</div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          {[
            "Dashboard",
            "My Projects",
            "My Team",
            "Presentations",
            "Mentor Chat",
            "Progress Report",
            "My Task",
            "Upcoming Events",
            "Recent Activities",
            "Performance Overview",
            "Feedback Form"
          ].map((item) => (
            <li
              key={item}
              className={activeComponent === item ? "active" : ""}
              onClick={() => setActiveComponent(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {renderComponent()}
      </main>
    </div>
  );
}

export default App;
