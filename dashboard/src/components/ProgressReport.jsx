import React from 'react';
import './ProgressReport.css';

export default function ProgressReport() {
  const progressPercentage = 78;

  return (
    <div className="progress-report-container">
      <h1 className="report-title">📈 Project Progress Report</h1>

      <section className="overview-section fade-in">
        <h2>🧠 Project Overview</h2>
        <p>
          <strong>Title:</strong> AI-Based Smart Farming System<br />
          <strong>Objective:</strong> To develop an intelligent platform that monitors crop health, automates irrigation, and enhances agricultural efficiency using AI and IoT technologies.
        </p>
      </section>

      <section className="progress-bar-section fade-in">
        <h2>✅ Overall Progress</h2>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progressPercentage}%` }}>
            {progressPercentage}%
          </div>
        </div>
      </section>

      <section className="milestones-section fade-in">
        <h2>📅 Key Milestones</h2>
        <ul>
          <li className="done">✅ Project Proposal Submitted (Oct 1)</li>
          <li className="done">✅ Literature Review Completed (Oct 20)</li>
          <li className="done">✅ Data Collection Completed (Nov 5)</li>
          <li className="in-progress">🚧 Model Training Underway (Due: Nov 18)</li>
          <li className="upcoming">🕒 Integration Testing (Starts: Nov 25)</li>
          <li className="upcoming">🕒 Final Report Submission (Due: Dec 5)</li>
        </ul>
      </section>

      <section className="team-contributions-section fade-in">
        <h2>👥 Team Contributions</h2>
        <ul>
          <li><strong>Somya Nigam:</strong> Frontend UI/UX and React integration</li>
          <li><strong>Yash Singh:</strong> Backend logic and Python APIs</li>
          <li><strong>Vaibhav Patel:</strong> Database modeling and cloud setup</li>
          <li><strong>Rohit Mehra:</strong> IoT device handling and API calls</li>
        </ul>
      </section>

      <section className="status-section fade-in">
        <h2>📌 Current Status</h2>
        <p>
          We are currently focused on training the machine learning models and fine-tuning the irrigation control logic. The backend APIs are 90% complete, and UI integration is in progress. The team is aligned with the timeline and confident in meeting all deadlines.
        </p>
      </section>

      <footer className="report-footer">
        <p>Last Updated: October 10, 2025 | Supervisor: Dr. Sharma</p>
      </footer>
    </div>
  );
}
