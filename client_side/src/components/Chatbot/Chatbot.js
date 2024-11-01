// Chatbot.js
import React, { useState } from "react";
import ChatInput from "./ChatInput";
import ChatOutput from "./ChatOutput";
import "./Chatbot.css";
import axios from "axios";

function Chatbot() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async (message) => {
        const userMessage = { sender: "user", text: message };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post("http://localhost:5000/api/chatbot", { message });
            const botMessage = { sender: "bot", text: response.data.response };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error fetching chatbot response:", error);
        }
    };

    return (
        <div className="chatbot">
            <ChatOutput messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    );
}

export default Chatbot;
