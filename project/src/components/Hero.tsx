import React, { useRef } from 'react';
import PankajImg from './Profile.png';
import { Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(heroRef, 0.3);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const resumeContent = `
PANKAJ UGALE
Full Stack Developer | Java Enthusiast | Problem Solver

Email: pankajugale2020@gmail.com
Phone: 8308009147
LinkedIn: linkedin.com/in/pankajugale

EDUCATION
B.E. Computer Science (2024) – Anuradha Engineering College – CGPA: 7.51
HSC (2020) – D.B.D. College, Dhad – 71.69%

SKILLS
Languages: C, Java, Advanced Java, Spring
Frontend: HTML, CSS, React
Database: Oracle SQL, PL/SQL
Concepts: OOPs, DSA

PROJECTS
• Skilance – E-Learning Platform (Java, Spring Boot, React)
• Student Management System (Java, Spring, Oracle SQL)
• Amazon Clone (HTML, CSS, JavaScript)

CERTIFICATIONS
• HackerRank: Java Programming
• Naresh IT: Java Full Stack
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Pankaj_Ugale_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-green-400 to-blue-600 opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <img
              src={PankajImg}
              alt="Pankaj Ugale"
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
            Pankaj Ugale
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            🚀 Aspiring Software Developer | Java | SQL | Frontend | Spring<br />
            E-learning & Academic Project Experience
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building scalable web applications and solving real-world problems with modern technologies.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={downloadResume}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </button>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/pankajugale"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transform hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/pankajugale"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
