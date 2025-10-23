import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import './PerformanceOverview.css'; // Create this file or use inline styles

const teamData = [
  { name: 'Team Alpha', progress: 80, target: 90 },
  { name: 'Team Beta', progress: 65, target: 75 },
  { name: 'Team Gamma', progress: 92, target: 90 },
  { name: 'Team Delta', progress: 40, target: 70 },
  { name: 'Team Epsilon', progress: 78, target: 85 },
];

// Generate insight based on progress
const generateInsight = (team) => {
  const diff = team.progress - team.target;
  if (diff >= 5) return `${team.name} is ahead by ${diff}% 🎯`;
  if (diff >= 0) return `${team.name} just met the target ✅`;
  if (diff >= -10) return `${team.name} is close to target (${Math.abs(diff)}% left) 🔄`;
  return `${team.name} needs improvement (${Math.abs(diff)}% below target) ⚠️`;
};

function PerformanceOverview() {
  return (
    <div className="performance-container">
      <h2>📊 Performance Overview - Project Teams</h2>

      {/* Insights Section */}
      <div className="insights">
        <h3>💡 Insights</h3>
        <ul>
          {teamData.map(team => (
            <li key={team.name}>{generateInsight(team)}</li>
          ))}
        </ul>
      </div>

      {/* Team Cards */}
      <div className="teams">
        {teamData.map(team => (
          <div key={team.name} className="team-card">
            <h4>{team.name}</h4>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${team.progress}%`,
                  backgroundColor: team.progress >= team.target ? '#4caf50' : '#2196f3'
                }}
              ></div>
            </div>
            <p>Progress: {team.progress}%</p>
            <p>Target: {team.target}%</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="chart-section">
        <h3>📶 Team Progress Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={teamData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="progress" fill="#8884d8" />
            <Bar dataKey="target" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PerformanceOverview;
