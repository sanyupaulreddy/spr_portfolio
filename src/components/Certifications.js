import React, { useState } from 'react';

const Certifications = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const certifications = [
    { title: 'Introduction to Python (Coursera)', path: '/assets/Introduction_to_py.pdf' },
    { title: 'Introduction to HTML and CSS (Coursera)', path: '/assets/Intro_to_HTML.pdf' },
    { title: 'Introduction to Python Programming (Penn University)', path: '/assets/Intro_Python_prgm.pdf' },
  ];

  return (
    <section className="certifications-section">
      <h2>Certifications</h2>
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={index} className="certification-item">
            <button
              onClick={() => setSelectedPdf(cert.path)}
              className="certification-button"
            >
              {cert.title}
            </button>
          </li>
        ))}
      </ul>

      {selectedPdf && (
        <div className="pdf-preview">
          <h3>Preview</h3>
          <embed
            src={selectedPdf}
            type="application/pdf"
            width="100%"
            height="500px"
            className="pdf-embed"
          />
        </div>
      )}
    </section>
  );
};

export default Certifications;