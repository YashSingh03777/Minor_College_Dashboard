import React, { useState, useEffect, useRef } from 'react';
import './MentorChat.css';

export default function MentorChat() {
  const [messages, setMessages] = useState([
    { sender: 'Mentor', text: "Hello, how's your project going?" },
    { sender: 'Student', text: "It's progressing well, almost done!" }
  ]);
  const [inputText, setInputText] = useState('');
  const [senderType, setSenderType] = useState('Student');
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      sender: senderType,
      text: inputText.trim()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
  };

  // Auto-scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="mentor-chat-container">
      <h1>👨‍🏫 Mentor & Student Chatroom</h1>
      <p className="intro-text">
        Welcome to the SVVV Project Chatroom. Select your role, send messages, and collaborate in real time.
      </p>

      <div className="chat-card">
        <div className="chat-header">
          <h3>💬 Live Discussion</h3>
          <span className="status-badge">Online</span>
        </div>

        <div className="chat-box">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.sender.toLowerCase()} slide-in`}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="chat-input">
          <select
            value={senderType}
            onChange={(e) => setSenderType(e.target.value)}
            className="sender-select"
          >
            <option value="Student">👨‍🎓 Student</option>
            <option value="Mentor">🧑 Mentor</option>
          </select>

          <input
            type="text"
            value={inputText}
            placeholder="Type your message..."
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>

      <div className="usage-steps">
        <h3>📌 How to Use</h3>
        <ol>
          <li>Select your role from the dropdown.</li>
          <li>Type your message in the input field.</li>
          <li>Press <strong>Enter</strong> or click <strong>Send</strong>.</li>
          <li>Scroll up/down to see all messages.</li>
        </ol>
      </div>
    </div>
  );
}
