import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Layers, Folder, Sun, Moon } from "lucide-react";
import "./Navbar.css";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">PANKAJ</div>
      <ul className="nav-menu">
        <li><Link to="/" className="nav-item"><Home size={18} /> Home</Link></li>
        <li><Link to="/about" className="nav-item"><User size={18} /> About</Link></li>
        <li><Link to="/skills" className="nav-item"><Layers size={18} /> Skills</Link></li>
        <li><Link to="/projects" className="nav-item"><Folder size={18} /> Projects</Link></li>
      </ul>
      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <Link to="/contact" className="contact-button">Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
