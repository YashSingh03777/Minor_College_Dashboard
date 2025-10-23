import React from 'react';
import './MyTasks.css'; // Make sure this file is in the same folder

const tasks = [
  {
    member: 'Somya Nigam',
    role: 'Frontend Developer',
    tasks: [
      { 
        title: 'Design responsive UI', 
        deadline: 'Nov 15', 
        status: 'In Progress', 
        priority: 'High',
        description: 'Create user-friendly interfaces with mobile-first approach.'
      },
      { 
        title: 'Integrate chat feature', 
        deadline: 'Nov 20', 
        status: 'Not Started', 
        priority: 'Medium',
        description: 'Implement real-time chat using WebSocket.'
      },
    ],
  },
  {
    member: 'Yash Singh',
    role: 'Backend Developer',
    tasks: [
      { 
        title: 'Build REST APIs', 
        deadline: 'Nov 18', 
        status: 'In Progress', 
        priority: 'High',
        description: 'Develop scalable and secure APIs for the app.'
      },
      { 
        title: 'Implement authentication', 
        deadline: 'Nov 22', 
        status: 'Not Started', 
        priority: 'High',
        description: 'Add JWT-based user authentication and role management.'
      },
    ],
  },
  {
    member: 'Vaibhav Patel',
    role: 'Database Administrator',
    tasks: [
      { 
        title: 'Design database schema', 
        deadline: 'Nov 12', 
        status: 'Completed', 
        priority: 'High',
        description: 'Define collections, tables, and relationships.'
      },
      { 
        title: 'Optimize queries', 
        deadline: 'Nov 19', 
        status: 'In Progress', 
        priority: 'Medium',
        description: 'Improve query efficiency for faster data retrieval.'
      },
    ],
  },
  {
    member: 'Rohit Mehra',
    role: 'API Integration Specialist',
    tasks: [
      { 
        title: 'Integrate third-party APIs', 
        deadline: 'Nov 17', 
        status: 'In Progress', 
        priority: 'Medium',
        description: 'Connect payment gateway and notification services.'
      },
      { 
        title: 'Test API endpoints', 
        deadline: 'Nov 23', 
        status: 'Not Started', 
        priority: 'Low',
        description: 'Perform unit and integration testing.'
      },
    ],
  },
];

const calculateProgress = () => {
  let totalTasks = 0;
  let completedTasks = 0;
  tasks.forEach(member => {
    member.tasks.forEach(task => {
      totalTasks++;
      if (task.status === 'Completed') completedTasks++;
    });
  });
  return ((completedTasks / totalTasks) * 100).toFixed(1);
};

export default function MyTasks() {
  const overallProgress = calculateProgress();

  return (
    <div className="my-tasks-container">
      <h1 className="tasks-title">📝 Team Member Tasks & Progress</h1>

      <p className="intro-text">
        This dashboard provides an overview of all team members and their assigned tasks. Track responsibilities, deadlines, priorities, and project status in one place.
      </p>

      <div className="progress-summary">
        <h3>Overall Project Progress</h3>
        <div className="progress-bar-background">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${overallProgress}%` }}
          >
            {overallProgress}%
          </div>
        </div>
      </div>

      <div className="tasks-grid">
        {tasks.map(({ member, role, tasks }, index) => (
          <div key={index} className="task-card fade-in">
            <h2>{member}</h2>
            <h4 className="role">{role}</h4>
            <ul className="task-list">
              {tasks.map(({ title, deadline, status, priority, description }, i) => (
                <li key={i} className={`priority-${priority.toLowerCase()}`}>
                  <div className="task-info">
                    <span className="task-title">{title}</span>
                    <span className="deadline">Due: {deadline}</span>
                  </div>
                  <div className="task-details">
                    <span className={`status status-${status.toLowerCase().replace(' ', '-')}`}>
                      {status}
                    </span>
                    <span className="priority">{priority} Priority</span>
                  </div>
                  <p className="description">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
