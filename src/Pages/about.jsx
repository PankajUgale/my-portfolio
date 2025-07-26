import React from "react";
import "./About.css"; // Make sure this CSS file is imported

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">👨‍💻About Me</h2>

      <div className="about-section">
        <h3 className="section-title">📍 Location</h3>
        <p>Pune (Current), Chikhali (Permanent), Maharashtra, India</p>
      </div>

      <div className="about-section">
        <h3 className="section-title">🎓 Education</h3>
        <div className="education-entry">
          <strong>Bachelor of Engineering – Computer Science & Engineering (2024)</strong><br />
          Anuradha Engineering College, Chikhali – CGPA: 7.51 / 10
        </div>
        <div className="education-entry">
          <strong>Higher Secondary Certificate – HSC (2020)</strong><br />
          D.B.D. College, Dhad – Percentage: 71.69%
        </div>
        <div className="education-entry">
          <strong>Secondary School Certificate – SSC</strong><br />
          New English School, Kothure – Percentage: 82%
        </div>
      </div>

      <div className="about-section">
        <h3 className="section-title">💼 Looking For</h3>
        <p>Full-time Developer Roles, Internships, and Freelance Projects</p>
      </div>

      <div className="about-section">
        <h3 className="section-title">🏆 Certifications</h3>
        <p>Java Programming (HackerRank), Software Engineering Intern (HackerRank), Java Full Stack (Naresh IT)</p>
      </div>

      <div className="about-section">
        <h3 className="section-title">💡 Skills</h3>
        <p>Java, Spring Boot, MySQL, JDBC, React.js, HTML, CSS, REST APIs</p>
      </div>

      <div className="about-section">
        <h3 className="section-title">🧰 Tools</h3>
        <p>Git, GitHub, Postman, VS Code, Eclipse IDE, MySQL Workbench</p>
      </div>

      <div className="about-section">
        <h3 className="section-title">🧠 Soft Skills</h3>
        <p>Communication, teamwork, time management, problem-solving, self-learning</p>
      </div>

      <div className="about-section">
        <h3 className="section-title">📧 Contact</h3>
        <p>
          Email: <a href="mailto:pankajugale2020@gmail.com" className="link">pankajugale2020@gmail.com</a><br />
          Phone: <a href="tel:+918308009147" className="link">+91 8308009147</a><br />
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/pankajugale"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/pankajugale
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
