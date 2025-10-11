import React from 'react';

const facultyTasks = [
  {
    task: 'Prepare slides for second presentation',
    dueDate: 'Oct 20, 2025',
    description: 'Ensure all key points are covered and visuals are clear.',
  },
  {
    task: 'Review student project reports',
    dueDate: 'Oct 18, 2025',
    description: 'Check reports for completeness and clarity before feedback session.',
  },
  {
    task: 'Schedule one-on-one meetings',
    dueDate: 'Oct 22, 2025',
    description: 'Meet with students to discuss project progress and challenges.',
  },
  {
    task: 'Submit grades for first assignment',
    dueDate: 'Oct 15, 2025',
    description: 'Finalize grading and submit through the portal.',
  },
  {
    task: 'Second Presentation Day',
    dueDate: 'Oct 25, 2025',
    description: 'Make sure to attend and provide feedback to all student groups.',
  },
];

export default function UpcomingEvents() {
  return (
    <div style={{ maxWidth: '680px', margin: '2rem auto', fontFamily: 'Arial, sans-serif', padding: '1rem' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>📅 Faculty Upcoming Tasks & Events</h2>
      <p style={{ textAlign: 'center', color: '#555', marginBottom: '1.5rem' }}>
        Here are your upcoming important tasks and deadlines.
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {facultyTasks.map(({ task, dueDate, description }, index) => (
          <li
            key={index}
            style={{
              backgroundColor: '#ecf0f1',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1rem',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#2980b9' }}>{task}</h3>
            <p style={{ margin: '0 0 0.3rem 0', fontWeight: 'bold', color: '#34495e' }}>Due: {dueDate}</p>
            <p style={{ margin: 0, color: '#7f8c8d' }}>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
