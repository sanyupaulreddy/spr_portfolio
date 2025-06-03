import React from 'react';
import profile from '../assets/profile.jpg';

const Header = () => (
  <div style={{ textAlign: 'center' }}>
    <img src={profile} alt="Profile" width="150" style={{ borderRadius: '50%' }} />
    <h1>Sanyu Paul Reddy Singareddy</h1>
    <p>Email: <a href="mailto:sanyu.p.singareddy@gmail.com">sanyu.p.singareddy@gmail.com</a></p>
    <p>
      <a href="https://www.linkedin.com/in/sanyupaulsingareddy4a5aab2b7" target="_blank" rel="noreferrer">https://www.linkedin.com/in/sanyupaulsingareddy4a5aab2b7</a> | 
      <a href="https://github.com/" target="_blank" rel="noreferrer"> GitHub</a>
    </p>
  </div>
);

export default Header;
