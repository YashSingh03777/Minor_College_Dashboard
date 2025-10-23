
import React from 'react';
import './MyProjects.css';

const teams = [
  {
    teamName: 'Team Alpha',
    projectTitle: 'AI Crop Monitoring System',
    goal: 'Automate crop health monitoring using drones and AI.',
    members: ['Yash Singh', 'Priya Sharma', 'Rohan Gupta', 'Meera Nair']
  },
  {
    teamName: 'Team Beta',
    projectTitle: 'Smart Water Management',
    goal: 'Optimize irrigation using IoT and weather forecasting.',
    members: ['Aman Verma', 'Sneha Mehta', 'Vikram Rao', 'Divya Iyer']
  },
  {
    teamName: 'Team Gamma',
    projectTitle: 'Disease Prediction in Crops',
    goal: 'Predict crop diseases using image processing and ML.',
    members: ['Nikhil Joshi', 'Anita Desai', 'Rahul Yadav', 'Komal Jain']
  },
 
  
];

export default function MyProjects() {
  return (
    <div className="my-projects-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="my-projects-title">📁 Student Project Showcase</h1>
        <p className="my-projects-subtitle">
          Explore the innovative projects our student teams are building as part of their final-year coursework.
          Each project focuses on real-world problems and is being developed with dedication, teamwork, and creativity.
        </p>
      </section>

      {/* Team Cards */}
      <div className="teams-grid">
        {teams.map((team, index) => (
          <div key={index} className="team-card fade-in">
            <h2 className="team-name">{team.teamName}</h2>
            <h3 className="project-title">{team.projectTitle}</h3>
            <p className="goal"><strong>🎯 Goal:</strong> {team.goal}</p>
            <ul className="members">
              {team.members.map((member, i) => (
                <li key={i}>👤 {member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
