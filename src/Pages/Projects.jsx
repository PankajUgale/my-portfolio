import React from "react";
import { Card, CardContent } from "@/Components/ui/card";

const projects = [
  {
    title: "Skilance - E-Learning Platform",
    description: "Courses, skill tracking, ChatGPT & Gemini integration. Built using Java, Spring Boot, React, and MySQL.",
  },
  {
    title: "Student Management System",
    description: "Handles student records, attendance, grades. Uses Java, JDBC, SQL with a simple web frontend.",
  },
  {
    title: "Naresh IT Java Mini Projects",
    description: "Java-based OOP apps like Banking, Hotel Booking, Course Registration. Strong on Inheritance & Collections.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
