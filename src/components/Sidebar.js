import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <div className={`sidebar ${theme} ${isOpen ? 'open' : ''}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hamburger"
        >
          ☰
        </button>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <h3>Portfolio</h3>
        <nav>
          <Link to="/">Personal Info</Link>
          <Link to="/education">Education</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/interests">Personal Interests</Link>
          <Link to="/resume">View Resume</Link>
        </nav>
      </div>
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Sidebar;