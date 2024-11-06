import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ChatContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const MessageContainer = styled.div`
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: input
      });

      setMessages([...messages, 
        { type: 'user', content: input },
        { type: 'bot', content: response.data.response }
      ]);
      setInput('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ChatContainer>
      <MessageContainer>
        {messages.map((msg, index) => (
          <div key={index} className={msg.type}>
            {msg.content}
          </div>
        ))}
      </MessageContainer>
      <InputContainer>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about interior design..."
        />
        <button onClick={sendMessage}>Send</button>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;
