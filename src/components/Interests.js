import React from 'react';

const Interests = () => {
  const personalInterests = [
    'Playing Cricket',
    'Chess',
    '(Add more later)', // Keeping as requested; you can remove or replace this later
  ];

  return (
    <section className="interests-section">
      <h2>Personal Interests</h2>
      <ul className="interests-list">
        {personalInterests.map((interest, index) => (
          <li key={index} className="interest-item">
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;