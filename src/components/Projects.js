import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Aqua Quench',
      date: 'Oct 2024',
      description: 'An automatic water dispensing IoT device using Arduino with hands-free operation.',
    },
    {
      title: 'Feast-Frenzy',
      date: 'Mar 2024',
      description: 'Event organizer app using the MERN stack to manage event planning and guest lists.',
    },
    {
      title: 'Tech-Tales',
      date: 'Dec 2023',
      description: 'Blogging platform using Java and JDBC to share tech insights.',
    },
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-date">{project.date}</span>
            </div>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;