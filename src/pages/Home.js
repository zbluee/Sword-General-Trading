// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/home.css'; // Import home.css

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="background">
        <div className="overlay"></div>
        <div className="container">
          <h2>Welcome to Sword General Trading</h2>
          <p>We provide high-quality trading services.</p>
        </div>
        <div className="message">
          <h3><strong>Website Under Construction</strong></h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
