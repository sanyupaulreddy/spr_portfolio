import React from 'react';

const Resume = () => (
  <section className="resume-section">
    <h2>My Resume</h2>
    <div className="pdf-preview">
      <h3>Resume Preview</h3>
      <embed
        src="/assets/resume.pdf"
        type="application/pdf"
        width="100%"
        height="500px"
        className="pdf-embed"
      />
    </div>
  </section>
);

export default Resume;