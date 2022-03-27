import React from "react";
import Navbar from "../navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import Home from "../../pages/Home";
import ContactMe from "../../pages/ContactMe";
import Resume from "../../pages/Resume";
import Profile from "../../pages/Profile";
import PageNotFound from "../../pages/PageNotFound";

// Pages Data
import HomeData from "../../pages-data/Home.json";
import ResumeData from "../../pages-data/Resume.json";


export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <div className="page">
          <Routes className="app">
            <Route path="/" element={<Home {...HomeData} />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/resume" element={<Resume {...ResumeData} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </React.StrictMode>
  );
}
