import React from 'react';
import Logo from './Logo';
import Icons from './Icons';
import ChatIcon from '../components/Chatbot/ChatIcon';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="right-section">
        <ChatIcon />
      </div>
      <div className="center-section">
        <Logo />
      </div>
      <div className="icons-section">
        <Icons />
      </div>
    </header>
  );
}

export default Header;
