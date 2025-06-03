import React from 'react';

const Resume = () => (
  <section className="resume-section">
    <h2>Resume</h2>
    <div className="pdf-preview">
      <h3>My Resume</h3>
      <iframe
        src={`${process.env.PUBLIC_URL}/assets/resume.pdf`}
        title="Resume Preview"
        className="pdf-embed"
      />
    </div>
  </section>
);

export default Resume;