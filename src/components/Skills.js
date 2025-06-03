import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { category: 'Programming Languages', details: 'Java, Python' },
    { category: 'Web Development', details: 'HTML5, CSS3, React JS, Node JS, Express JS, MongoDB, MySQL' },
    { category: 'Software/Tools', details: 'GitHub, AutoCAD' },
    { category: 'CRM Tools', details: 'Salesforce' },
  ];

  return (
    <section className="skills-section">
      <h2>Technical Skills</h2>
      <ul className="skills-list">
        {technicalSkills.map((skill, index) => (
          <li key={index} className="skill-item">
            <strong className="skill-category">{skill.category}:</strong> {skill.details}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;