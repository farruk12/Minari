import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './NavMenu.css';

const NavMenu = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${section}`;
    } else {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul className="menu-items">
          <li><a onClick={() => handleClick('living-room')}>LIVING ROOM</a></li>
          <li><a onClick={() => handleClick('bedroom')}>BEDROOM</a></li>
          <li><a onClick={() => handleClick('home-decor')}>HOME DECOR</a></li>
          <li><a onClick={() => handleClick('office')}>OFFICE</a></li>
          <li><a onClick={() => handleClick('outdoor')}>OUTDOOR</a></li>
          <li><a onClick={() => handleClick('carpets')}>CARPETS & MATS</a></li>
          <li><a onClick={() => handleClick('OUTDOOR')}>DISPLAY & VASES</a></li>
          <li><a onClick={() => handleClick('OUTDOOR')}>OUTDOOR</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
