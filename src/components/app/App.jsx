import React from "react";
import Navbar from "../navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

// Global CSS Imports
// Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Resume from "../../pages/Resume";
import Profile from "../../pages/Profile";
import Users from "../../pages/Users";
import PageNotFound from "../../pages/PageNotFound";

// Pages Data
import HomeData from "../../pages-data/Home.json";
import ResumeData from "../../pages-data/Resume.json";
import UsersData from "../../pages-data/Users.json";

export default function App() {
  return (
    <main>
      <React.StrictMode>
        <Router>
          <Navbar />
          <div className="page">
            <Routes className="app">
              <Route path="/" element={<Home {...HomeData} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume {...ResumeData} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/users" element={<Users {...UsersData} />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </div>
        </Router>
      </React.StrictMode>
    </main>
  );
}
