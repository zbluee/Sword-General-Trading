// src/pages/Contact.js
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/contact.css'; // Import contact.css

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="background"></div>
        <div className="content">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us for any inquiries.</p>
        </div>
        <div className="message">
          <h3><strong>Website Under Construction</strong></h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
