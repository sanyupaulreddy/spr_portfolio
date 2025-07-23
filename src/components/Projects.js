import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Polling System for Question and Answers',
      date: 'Jan 2025',
      description: 'A polling system where questions need to be answered with proper AI evaluation.',
      details: [
        'A data-driven web application developed using HTML, CSS, JavaScript, and Python',
        'Aimed at providing in-depth ODI cricket player statistics, latest cricket news, and comprehensive ICC tournament details.',
        'The platform features an intuitive UI to offer users meaningful insights and updates in real-time.'
      ]
    },
    {
      title: 'CricSta',
      date: 'May 2025',
      description: 'A Cricket statistics web application to see ODI format stats of different players',
      details: [
        'A web application built using MERN stack that allows users to participate in polls by answering questions.',
        'Responses are collected and evaluated using basic AI techniques to analyze trends and generate insights.',
        'The app features a clean UI and real-time response tracking.'
      ]
    },
    {
      title: 'Feast-Frenzy',
      date: 'Mar 2024',
      description: 'Event organizer app using the MERN stack to manage event planning and guest lists.',
      details: [
        'Built a full-stack application with MongoDB for data storage and Node.js for the backend.',
        'Developed a React frontend with reusable components for event creation and guest management.',
        'Implemented user authentication using JSON Web Tokens (JWT) for secure access.',
      ]
    },
    {
      title: 'Tech-Tales',
      date: 'Dec 2023',
      description: 'Blogging platform using Java and JDBC to share tech insights.',
      details: [
        'Created a backend using Java Servlets and JDBC to connect to a MySQL database.',
        'Designed a user interface with HTML, CSS, and JavaScript for blog posting and viewing.',
        'Implemented CRUD operations for managing blog posts and user comments.',
        'Tested the platform with multiple users to ensure stability and performance.'
      ]
    },
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-item"
            tabIndex={0}
            onClick={() =>
              setSelectedProject(selectedProject === index ? null : index)
            }
            style={{ cursor: "pointer" }}
          >
            <div className="project-header">
              <h3 className="project-title" title="Click to expand/collapse details">
                {project.title}
              </h3>
              <span className="project-date">{project.date}</span>
            </div>
            <p className="project-description">{project.description}</p>
            {selectedProject === index && (
              <div className="project-details">
                {project.details.map((detail, i) => (
                  <div key={i} className="project-detail-line">{detail}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
