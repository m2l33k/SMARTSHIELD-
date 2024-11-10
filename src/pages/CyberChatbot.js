import React, { useState } from 'react';
import './CyberChatbot.css'; // Add styles for the chatbot

const CyberChatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your Cybersecurity Assistant. How can I help you?", sender: "bot" },
  ]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      // Add user message to chat
      setMessages([...messages, { text: userInput, sender: "user" }]);
      setUserInput('');

      // Respond with a simple cybersecurity message (replace with real logic if needed)
      const botResponse = getBotResponse(userInput);
      setMessages([...messages, { text: userInput, sender: "user" }, { text: botResponse, sender: "bot" }]);
    }
  };

  // Basic response logic (this can be expanded to call an API or use AI services)
  const getBotResponse = (input) => {
    if (input.toLowerCase().includes("threat")) {
      return "Make sure your system is up-to-date and use a firewall for protection!";
    } else if (input.toLowerCase().includes("incident")) {
      return "Incident response requires a clear plan. I suggest isolating affected systems and analyzing logs.";
    } else if (input.toLowerCase().includes("secure")) {
      return "Use strong, unique passwords and enable multi-factor authentication wherever possible.";
    } else {
      return "I'm here to help with cybersecurity-related questions. Try asking about threats, incidents, or security tips.";
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={userInput}
            onChange={handleUserInput}
            placeholder="Ask me anything about cybersecurity..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default CyberChatbot;
