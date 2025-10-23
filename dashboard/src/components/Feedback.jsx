import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Feedback.css'; // optional external CSS file

function Feedback() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [formData, setFormData] = useState({
    teacher: '',
    student: '',
    rating: 0,
    comment: '',
  });

  const apiURL = 'http://localhost:3001/api/feedback';

  // Fetch feedback from API
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const res = await axios.get(apiURL);
      setFeedbackList(res.data);
    } catch (err) {
      console.error('Error fetching feedback:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRating = (r) => {
    setFormData((prev) => ({
      ...prev,
      rating: r,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.teacher || !formData.student || !formData.comment) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await axios.post(apiURL, {
        ...formData,
        timestamp: new Date().toISOString(),
      });
      setFormData({
        teacher: '',
        student: '',
        rating: 0,
        comment: '',
      });
      fetchFeedback(); // Refresh list
    } catch (err) {
      console.error('Error submitting feedback:', err);
    }
  };

  return (
    <div className="feedback-container">
      <h2>📢 Teacher Feedback</h2>

      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          name="teacher"
          placeholder="Teacher Name"
          value={formData.teacher}
          onChange={handleChange}
        />
        <input
          type="text"
          name="student"
          placeholder="Student or Project Name"
          value={formData.student}
          onChange={handleChange}
        />
        <div className="rating-input">
          Rating:
          {[1, 2, 3, 4, 5].map((r) => (
            <span
              key={r}
              className={r <= formData.rating ? 'star selected' : 'star'}
              onClick={() => handleRating(r)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          name="comment"
          placeholder="Write your feedback..."
          value={formData.comment}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>

      <div className="feedback-list">
        <h3>📄 Public Feedback</h3>
        {feedbackList.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          feedbackList.map((item, index) => (
            <div key={index} className="feedback-item">
              <div className="top-row">
                <strong>{item.teacher}</strong> ➡️ <strong>{item.student}</strong>
                <span className="timestamp">{new Date(item.timestamp).toLocaleString()}</span>
              </div>
              <div className="stars">
                {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
              </div>
              <p>{item.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Feedback;
