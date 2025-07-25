import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Me</h2>
      <div className="about-content">
        <p>
          Hello! I'm <strong>Pankaj Ugale</strong>, a passionate and dedicated full-stack developer
          with experience building dynamic, responsive, and user-friendly web applications using technologies like
          <strong> React, Java, Spring Boot, MySQL</strong>, and more.
        </p>
        <p>
          I enjoy solving real-world problems through clean and maintainable code. I’m also constantly exploring new
          tools and frameworks to enhance my skills and stay up-to-date in the tech world.
        </p>
        <p>
          Currently, I’m focused on building robust web applications, working on team projects,
          and contributing to open-source platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
