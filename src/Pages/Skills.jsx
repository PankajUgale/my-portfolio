import React from "react";

const skills = [
  "Java", "Spring Boot", "HTML & CSS", "Oracle SQL", "PL/SQL",
  "JSP & JDBC", "OOPs", "Data Structures", "VS Code", "Eclipse",
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-3 text-center shadow">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
