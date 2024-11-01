// ChatInput.js
import React, { useState } from "react";

function ChatInput({ onSendMessage }) {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="chat-input">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about our furniture or decor..."
            />
            <button type="submit">Send</button>
        </form>
    );
}

export default ChatInput;
