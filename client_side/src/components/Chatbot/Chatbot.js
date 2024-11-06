import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';
import './Chatbot.css';
import axios from 'axios';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message) => {
    try {
      setIsLoading(true);
      // Add user message to chat
      setMessages(prev => [...prev, { sender: 'user', text: message }]);

      // Send message to backend
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: message
      });

      // Add bot response to chat
      setMessages(prev => [...prev, { sender: 'bot', text: response.data.response }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h3>Interior Design Assistant</h3>
      </div>
      <ChatOutput messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}

export default Chatbot;
