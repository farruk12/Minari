import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import './ChatIcon.css';
import Chatbot from './Chatbot';

function ChatIcon() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className="chat-icon-container">
            <button onClick={toggleChat} className="chat-icon">
                <FontAwesomeIcon icon={faComments} />
            </button>
            {isChatOpen && <Chatbot />}
        </div>
    );
}

export default ChatIcon;
