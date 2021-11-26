import React from "react";
import Navbar from "../navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages 
import Home from "../../pages/Home";
import About from '../../pages/About';
import Resume from "../../pages/Resume";
import Profile from '../../pages/Profile'

export default function App() {
  return (
    <>
      <React.StrictMode>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </>
  );
}
