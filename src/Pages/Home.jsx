// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import {
  SiGmail,
  SiLinkedin,
  SiGithub,
  SiInstagram
} from "react-icons/si";
import profileImage from "../assets/pankaj.jpg";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        {/* Profile Image */}
        <div className="profile-image-container">
          <img src={profileImage} alt="Pankaj Ugale" className="avatar" />
        </div>

        {/* Header */}
        <header className="home-header">
          <h1>🚀 Pankaj Ugale</h1>
          <p className="subtitle">
            Java Backend Developer | Spring Boot Craftsman | Full Stack Explorer
          </p>
          <div className="icon-links">
            <a
              href="mailto:pankajugale2020@gmail.com"
              className="social-icon"
              title="Email Me"
            >
              <SiGmail />
            </a>
            <a
              href="https://linkedin.com/in/pankajugale"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              title="LinkedIn"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://github.com/PankajUgale"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              title="GitHub"
            >
              <SiGithub />
            </a>
            <a
              href="https://instagram.com/YOUR-INSTAGRAM"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              title="Instagram"
            >
              <SiInstagram />
            </a>
          </div>
        </header>

        {/* Sections */}
        <section className="card">
          <h2>👨‍💻 About Me</h2>
          <p>
            I'm Pankaj Ugale, a passionate full-stack Java developer. Proficient in Java, C, C++, HTML, CSS, JavaScript, React, Node.js, and Express.js.
          </p>
        </section>

        <section className="card">
          <h2>📘 Professional Journey</h2>
          <p>
            Excelled academically with 82% in SSC, 89% in HSC, and an A grade in BCA. Self-learned HTML, CSS, and JavaScript, gaining strong frontend development skills.
          </p>
        </section>

        <section className="card">
          <h2>🏆 Achievements</h2>
          <p>
            Completed the ElectronicHUB project, showcasing various electronic devices. Developed a GitHub profile README praised for its clarity and design.
          </p>
        </section>

        <section className="card">
          <h2>🛠 My Skills</h2>
          <h3>Programming Languages</h3>
          <p>C, C++, Java, JavaScript</p>
          <h3>Web Technologies</h3>
          <p>HTML5, CSS3, JSON, JSP, Servlet, XML, RESTful APIs, React.js</p>
          <h3>Frameworks</h3>
          <p>Spring, Spring Boot, Hibernate</p>
          <h3>Databases</h3>
          <p>MongoDB, Oracle</p>
          <h3>Tools & Platforms</h3>
          <p>Maven, Git, Eclipse IDE, Visual Studio Code, Postman</p>
        </section>

        <section className="card">
          <h2>📁 Projects</h2>
          <h3>ElectronsHUB</h3>
          <p>A full stack website for electronic devices with real-time product reviews and recommendations.</p>
          <h3>Personal Portfolio</h3>
          <p>My personal portfolio, built with React and Tailwind CSS, showcasing my skills and projects.</p>
          <h3>Note Keeper</h3>
          <p>A simple note-keeping web app supporting dynamic note creation, editing, and deletion.</p>
        </section>

        <section className="card">
          <h2>📞 Contact Me</h2>
          <p>Reach out today to start building innovative solutions.</p>
          <p>Email: pankajugale2020@gmail.com</p>
          <p>Phone: +91 8308009147</p>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Pankaj Ugale. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
