import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./Components/Navbar.jsx"; 
import Navbar from "./Components/navbar.jsx"; 
//import Home from "./Pages/Home.jsx";
import Home from "./Pages/home.jsx";
//import About from "./Pages/About.jsx";
import About from "./Pages/about.jsx";

//import Projects from "./Pages/Projects.jsx";
import Projects from "./Pages/projects.jsx";
//import Skills from "./Pages/Skills.jsx";
import Skills from "./Pages/skills.jsx";
//import Contact from "./Pages/Contact.jsx";
import Contact from "./Pages/contact.jsx";

import "./App.css";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Router>
      <div className="app">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
