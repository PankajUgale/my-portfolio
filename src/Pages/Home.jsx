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
        {/* Profile Image & Info Row */}
        <div className="profile-flex">
          {/* Profile Image */}
          <div className="profile-image-frame">
            <img src={profileImage} alt="Pankaj Ugale" className="avatar-rounded" />
          </div>

          {/* Profile Info */}
          <div className="profile-info-text">
            <h1 className="main-title">&nbsp;&nbsp;&nbsp;&nbsp;Pankaj Ugale</h1>
            <p className="subtitle">
            🚀 Aspiring Software Developer | Java | SQL | Frontend | Spring |<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; E-learning & Academic Project Experiencer
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
          </div>
        </div>

        {/* Sections */}
        <section className="card">
          <h2>👨‍💻 About Me</h2>
          <p>
            I’m Pankaj Ugale, a passionate Java backend developer with strong problem-solving skills and a solid foundation in programming and web development.
            I'm eager to apply my expertise in C, Java, Spring Boot, Oracle SQL, and front-end technologies like HTML and CSS in a dynamic environment.
            I enjoy building scalable applications and am always exploring new technologies to level up my skills.
          </p>
        </section>

        <section className="card">
          <h2>📘 Professional Journey</h2>
          <li> Bachelor of Engineering in Computer Science and Engineering (2024), Anuradha Engineering College – CGPA: 7.51 </li>
          <li> Hands-on experience in backend development using Java, Spring, and Oracle SQL</li>
          <li>Strong grasp of OOP principles, data structures, and problem-solving using Java</li>
          <li> Built and deployed projects like an e-learning platform and a student management system</li>
          <li> Actively practiced Java full-stack assignments from NareshIT, enhancing both frontend and backend skills</li>
          <li> Certified in Java programming and full-stack development, with a keen interest in creating user-friendly and efficient applications</li>
        </section>

        <section className="card">
          <h2>🏆 Achievements</h2>
          <h3>Completed multiple Naresh IT Java-based assignments including:</h3>
          <li>Hotel Booking System using Inheritance, Interface, and Encapsulation</li>
          <li>Banking App for deposit and withdrawal using OOPs principles</li>
          <li>Successfully built and published a personal GitHub README portfolio</li>
          <li>Created a static Amazon clone webpage using HTML and CSS</li>
        </section>

        <section className="card">
          <h2>🛠 My Skills</h2>
          <h3>Programming Languages :</h3>
          <p>C, Java, JavaScript</p>
          <h3>Web Technologies :</h3>
          <p>HTML5, CSS3, JSON, JSP, Servlet, XML, RESTful APIs, React.js</p>
          <h3>Frameworks :</h3>
          <p>Spring, Spring Boot, Hibernate, JPA</p>
          <h3>Databases :</h3>
          <p>MySql, Oracle</p>
          <h3>Tools & Platforms :</h3>
          <p>Maven, Git, Eclipse IDE, Visual Studio Code, Mysql, Postman.</p>
        </section>

        <section className="card">
          <h2>📁 Projects</h2>
          <h3> SKILANCE – THE E-LEARNING PLATFORM :</h3>
          <p>SKILANCE – The E-Learning Platform is a full-stack web application developed to offer a seamless and interactive online learning experience.
             The backend is built using Spring Boot, leveraging RESTful APIs to manage users, courses, progress tracking, and admin operations.
             MySQL is used as the primary database, with JPA and Hibernate handling ORM tasks such as entity relationships and CRUD operations.
             User authentication is secured using JWT tokens and Spring Security, ensuring role-based access control between students and admins.
             The platform supports video-based course delivery, dynamic skill roadmaps, and certificate generation upon course completion.
             Robust error handling, input validation, and clean API architecture enhance reliability and scalability.
             Tools like Postman were used for API testing, and the frontend—built with React.js—communicates efficiently with the backend, creating a complete and user-friendly learning platform.</p>

          <h3>Student Management System :</h3>
          <p>Student Management System is a web-based application designed to streamline and automate academic administrative processes within an educational institution.
             Developed using Java and Spring Boot for the backend, the system provides a structured and secure way to manage student records.
             It includes modules for student registration, course enrollment, attendance tracking, grades management, and performance analysis.
             The backend leverages RESTful APIs to perform all operations, with MySQL serving as the database for persistent storage.
             JPA and Hibernate are used for managing entity relationships such as students, courses, and instructors.
             The application includes features like user authentication, form validation, and error handling to ensure data integrity.
             Designed for efficiency, the system allows administrators to access real-time data, update academic records, and generate student reports.
             The interface is user-friendly and scalable, making it a practical tool for both small institutions and large academic environments.</p>

          <h3>Personal Portfolio Website</h3>
          <p>Personal Portfolio Website is a fully responsive and interactive single-page application (SPA) developed using React.js and styled with Tailwind CSS.
             This project serves as a digital showcase of my skills, projects, certifications, and career achievements.
             It features a clean, modern UI with support for dark/light mode, smooth scrolling navigation, animated skill bars, and social media integration.
             The website is designed to give potential employers and collaborators a comprehensive overview of my technical background and personality.
             It includes dynamic sections such as About Me, Projects, Skills, Contact, and Certifications.
             I used React Router for navigation, and custom hooks and state management to implement features like theme toggling.
             The project emphasizes best practices in frontend development, code reusability through components, and responsiveness across devices.
             Additionally, I optimized performance and accessibility, making the portfolio both visually appealing and technically sound.</p>
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