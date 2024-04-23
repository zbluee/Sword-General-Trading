// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import statement
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contacts';

function App() {
  return (
    <Router>
      <div>
        <Routes> {/* Update this to Routes */}
          <Route path="/" element={<Home />} /> {/* Update element prop */}
          <Route path="/about" element={<About />} /> {/* Update element prop */}
          <Route path="/contact" element={<Contact />} /> {/* Update element prop */}
        </Routes> {/* Update this to Routes */}
      </div>
    </Router>
  );
}

export default App;
