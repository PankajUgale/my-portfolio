import React from "react";
import './Skill.css';
import skillImage from "../assets/skill.jpg";

const skills = [
  { name: "Java ☕", description: "Strong foundation in OOP concepts and backend development." },
  { name: "Spring Boot 🌱", description: "Experience building RESTful APIs and enterprise-level applications." },
  { name: "HTML5 📄", description: "Semantic markup and modern layouts." },
  { name: "CSS3 🎨", description: "Responsive design, animations, and UI styling." },
  { name: "JavaScript ⚙️", description: "Dynamic interactions and DOM manipulation." },
  { name: "React ⚛️", description: "Component-driven architecture and state management." },
  { name: "MySQL 🗃️", description: "Database design, CRUD operations, and queries." },
  { name: "Oracle SQL 🧮", description: "Query writing and relational schema management." },
  { name: "PL/SQL 💾", description: "Procedural programming with Oracle databases." },
  { name: "JSP & JDBC 🔗", description: "Java EE technology for dynamic web applications." },
  { name: "Data Structures 📚", description: "Optimized problem solving using core algorithms." },
  { name: "VS Code 🧑‍💻", description: "Daily driver IDE with custom extensions." },
  { name: "Eclipse 🖥️", description: "Java development and debugging tool." },
  { name: "Postman 📬", description: "API testing and automation platform." },
  { name: "Git & GitHub 🧩", description: "Version control, branching, and collaboration." }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-section">
        <h2 className="skills-title">
          🚀 My Technical Skills
        </h2>

        <img
          src={skillImage}
          alt="Skills Banner"
          className="skills-image"
        />

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
