import React, { useState } from "react";

function ChatInput({ onSendMessage }) {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => setInput(e.target.value);
    const handleSend = () => {
        if (input.trim()) {
            onSendMessage(input);
            setInput("");
        }
    };

    return (
        <div className="chat-input">
            <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={handleInputChange}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}

export default ChatInput;
