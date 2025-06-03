import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      institution: 'Malla Reddy University, Hyderabad, Telangana',
      degree: 'Bachelor of Technology in Computer Science',
      score: 'CGPA: 9.00',
      duration: 'Expected July 2026',
    },
    {
      institution: 'Narayana IIT Academy, Hyderabad, Telangana',
      degree: 'Intermediate in PCM',
      score: 'Score: 97.3%',
      duration: '2020 - 2022',
    },
    {
      institution: 'St. Peter\'s Central Public School, Hanamakonda, Warangal, Telangana',
      degree: 'Class X in CBSE Board',
      score: 'Score: 85%',
      duration: '2020',
    },
  ];

  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {educationDetails.map((edu, index) => (
          <div key={index} className="education-item">
            <h3 className="education-institution">{edu.institution}</h3>
            <p className="education-degree">{edu.degree}</p>
            <p className="education-score">{edu.score}</p>
            <p className="education-duration">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;