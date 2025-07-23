import React, { useState } from 'react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    { name: 'Introduction to Python Programming', file: `${process.env.PUBLIC_URL}/assets/Intro_Python_prgm.pdf` },
    { name: 'Introduction to HTML', file: `${process.env.PUBLIC_URL}/assets/Intro_to_HTML.pdf` },
    { name: 'Introduction to Python', file: `${process.env.PUBLIC_URL}/assets/Introduction_to_py.pdf` },
    { name: 'Prompt Engineering – LinkedIn', file: `${process.env.PUBLIC_URL}/assets/Prompt_Enginnering_Linkedin.pdf` }
  ];

  return (
    <section className="certifications-section">
      <h2>Certifications</h2>
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={index} className="certification-item">
            <button
              className="certification-button"
              onClick={() => setSelectedCert(cert.file)}
            >
              {cert.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedCert && (
        <div className="pdf-preview">
          <h3>Certificate Preview</h3>
          <iframe
            src={selectedCert}
            title="Certificate Preview"
            className="pdf-embed"
          />
        </div>
      )}
    </section>
  );
};

export default Certifications;
