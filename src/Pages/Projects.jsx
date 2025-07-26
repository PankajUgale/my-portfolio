import React from "react";
import "./Projects.css";
import { Card, CardContent } from "@/components/ui/card";
import skillanceImage from "../assets/skillance.png";
import portfolioImage from "../assets/portfolio.png";
import studentImage from "../assets/student.png";

const projects = [
  {
    image: skillanceImage,
    title: "Skilance - E-Learning Platform",
    description: (
      <>
        <p><strong>Tech Stack:</strong> Spring Boot, MySQL, JPA (Hibernate), React.js, RESTful APIs, JWT, Postman, Git, VS Code</p>
        <p><strong>Project Overview:</strong> Skilance is a full-stack web application designed to deliver online learning experiences with seamless course consumption, personalized roadmaps, and AI-powered features.</p>
        <p><strong>🔧 Key Backend Features:</strong></p>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Spring Boot REST APIs:</strong> Modular and secure APIs for users, courses, and certificates.</li>
          <li><strong>JWT Authentication:</strong> Role-based route access via Spring Security.</li>
          <li><strong>MySQL + JPA:</strong> Relational schema and mapped relationships.</li>
          <li><strong>PDF Certificate Generation</strong> on course completion.</li>
          <li><strong>Error Handling:</strong> Custom exceptions, @ControllerAdvice.</li>
          <li><strong>Postman + JUnit:</strong> For API testing and core unit tests.</li>
        </ul>
        <p><strong>🧠 Frontend Highlights:</strong></p>
        <ul className="list-disc list-inside pl-4">
          <li>React + Tailwind CSS UI</li>
          <li>Dark/Light Theme Toggle</li>
          <li>Smooth scroll and route transitions</li>
          <li>ChatGPT API integrated AI chatbot</li>
        </ul>
      </>
    )
  },
  {
    image: studentImage,
    title: "Student Management System",
    description: (
      <>
        <p><strong>Tech Stack:</strong> Java, Spring Boot, MySQL, JDBC, JPA, HTML, CSS, REST APIs</p>
        <p><strong>Project Overview:</strong> A system to manage students, courses, grades, and attendance with role-based access and reporting modules.</p>
        <p><strong>🔧 Key Backend Features:</strong></p>
        <ul className="list-disc list-inside pl-4">
          <li>Spring Boot REST APIs for all modules</li>
          <li>Basic login for role-based access</li>
          <li>Normalized MySQL DB and JPA relationships</li>
          <li>Validation & Exception Handling</li>
          <li>Reports on grades, attendance</li>
          <li>Tested via Postman and JUnit</li>
        </ul>
        <p><strong>🧠 Frontend Highlights:</strong></p>
        <ul className="list-disc list-inside pl-4">
          <li>HTML, CSS, Bootstrap UI</li>
          <li>Clean dashboards and input forms</li>
          <li>Axios/Fetch for API calls</li>
          <li>Pagination and filtering support</li>
        </ul>
      </>
    )
  },
  {
    image: portfolioImage,
    title: "Personal Portfolio Website",
    description: (
      <>
        <p><strong>Tech Stack:</strong> React.js, Tailwind CSS, JavaScript, HTML, Vite, GitHub Pages</p>
        <p><strong>Project Overview:</strong> A modern developer portfolio showcasing skills, projects, and contact info with dark/light theme support.</p>
        <ul className="list-disc list-inside pl-4">
          <li>Responsive with Tailwind CSS</li>
          <li>Routing via React Router</li>
          <li>Theme toggle using local state</li>
          <li>Componentized and modular</li>
          <li>Scroll animations and interactive elements</li>
          <li>Deployed on GitHub Pages</li>
        </ul>
      </>
    )
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Card key={index} className="project-card">
            <CardContent>
              <img src={project.image} alt={project.title} className="project-image rounded-lg mb-3" />
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <div className="project-description text-sm text-gray-300 space-y-2">
                {project.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
