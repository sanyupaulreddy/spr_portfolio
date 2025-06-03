import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="hamburger" onClick={toggleSidebar}>
        {isOpen ? '✖' : '☰'}
      </button>
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h3>Sanyu Paul Reddy</h3>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
        <nav>
          <NavLink to="/" exact className="nav-link" activeClassName="active" onClick={toggleSidebar}>
            Personal Info
          </NavLink>
          <NavLink to="/education" className="nav-link" activeClassName="active" onClick={toggleSidebar}>
            Education
          </NavLink>
          <NavLink to="/skills" className="nav-link" activeClassName="active" onClick={toggleSidebar}>
            Skills
          </NavLink>
          <NavLink to="/projects" className="nav-link" activeClassName="active" onClick={toggleSidebar}>
            Projects
          </NavLink>
          <NavLink to="/certifications" className="nav-link" activeClassName="active" onClick={toggleSidebar}>
            Certifications
          </NavLink>
          <NavLink to="/interests" className="nav-link" activeClassName="active" onClick={toggleSidebar}>
            Interests
          </NavLink>
          <NavLink to="/resume" className="nav-link" activeClassName="active" onClick={toggleSidebar}>
            Resume
          </NavLink>
        </nav>
      </nav>
    </>
  );
};

export default Sidebar;