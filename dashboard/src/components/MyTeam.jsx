import React from 'react';
import './MyTeam.css';

const teamMembers = [
  {
    name: 'Somya Nigam',
    role: 'Frontend Developer',
    description: 'Somya focuses on crafting engaging and responsive user interfaces using ReactJS and modern CSS frameworks. She ensures the app is user-friendly and accessible.',
  },
  {
    name: 'Yash Singh',
    role: 'Backend Developer',
    description: 'Yash is responsible for building robust server-side logic using Node.js and Express. He manages authentication, routing, and integrates backend functionality smoothly.',
  },
  {
    name: 'Vaibhav Sharma',
    role: 'Database Administrator',
    description: 'Vaibhav designs and maintains the project’s database schema in MongoDB. He ensures efficient data storage, indexing, and performance optimization.',
  },
  {
    name: 'Rohit Mehra',
    role: 'API Integration Engineer',
    description: 'Rohit handles all API-related tasks, including setting up third-party integrations, creating RESTful APIs, and ensuring secure data exchange between frontend and backend.',
  },
];

export default function MyTeam() {
  return (
    <div className="my-team-container">
      <h1 className="my-team-title">👥 Meet Our Project Team</h1>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card slide-up">
            <h2>{member.name}</h2>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
