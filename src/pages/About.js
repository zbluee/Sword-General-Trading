// src/pages/About.js
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/about.css'; // Import about.css

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="background"></div>
        <div className="content">
          <h2>About Us</h2>
          <p>Nuai General Trading PLC is committed to delivering excellence in trading.</p>
        </div>
        <div className="message">
          <h3><strong>Website Under Construction</strong></h3>
        </div>
      </div>
    </div>
  );
}

export default About;
