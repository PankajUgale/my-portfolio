import { Project, Skill, Education, Certification } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Skilance – E-Learning Platform',
    description: 'Comprehensive e-learning platform with AI integration and modern web technologies.',
    technologies: ['Java', 'Spring Boot', 'React', 'JWT', 'ChatGPT API'],
    features: [
      'ChatGPT/Gemini AI integration',
      'Video content management',
      'Interactive roadmap PDFs',
      'Admin panel with analytics',
      'JWT authentication',
      'Role-based access control',
      'Responsive UI design'
    ],
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Student Management System',
    description: 'Web-based comprehensive system for educational institution management.',
    technologies: ['Java', 'Spring', 'Oracle SQL', 'HTML', 'CSS'],
    features: [
      'Student registration management',
      'Attendance tracking system',
      'Grade management',
      'Performance analytics',
      'Report generation',
      'User role management'
    ],
    category: 'fullstack'
  },
  {
    id: 3,
    title: 'Amazon Clone',
    description: 'Pixel-perfect static responsive homepage replicating Amazon\'s design.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive design',
      'Modern CSS Grid & Flexbox',
      'Interactive product cards',
      'Mobile-first approach',
      'Cross-browser compatibility'
    ],
    category: 'frontend'
  },
  {
    id: 4,
    title: 'Hotel Booking System',
    description: 'Object-oriented Java application for hotel reservation management.',
    technologies: ['Java', 'OOP', 'Collections'],
    features: [
      'Room booking system',
      'Customer management',
      'Payment processing',
      'Availability checking',
      'Booking history'
    ],
    category: 'java'
  },
  {
    id: 5,
    title: 'Banking Application',
    description: 'Console-based banking system demonstrating core Java concepts.',
    technologies: ['Java', 'OOP', 'File I/O'],
    features: [
      'Account management',
      'Transaction processing',
      'Balance inquiry',
      'Fund transfer',
      'Transaction history'
    ],
    category: 'java'
  }
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['C', 'Java', 'Advanced Java', 'Spring Framework'],
    icon: 'Code'
  },
  {
    category: 'Frontend Development',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
    icon: 'Monitor'
  },
  {
    category: 'Database Technologies',
    items: ['Oracle SQL', 'PL/SQL', 'Database Design', 'Query Optimization'],
    icon: 'Database'
  },
  {
    category: 'Core Concepts',
    items: ['Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Design Patterns'],
    icon: 'Brain'
  },
  {
    category: 'Development Tools',
    items: ['VS Code', 'Eclipse IDE', 'Git', 'Maven', 'Postman'],
    icon: 'Wrench'
  }
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Engineering - Computer Science',
    institution: 'Anuradha Engineering College',
    year: '2024',
    score: 'CGPA: 7.51'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'D.B.D. College, Dhad',
    year: '2020',
    score: '71.69%'
  }
];

export const certifications: Certification[] = [
  {
    name: 'Java Programming',
    issuer: 'HackerRank',
    year: '2024'
  },
  {
    name: 'Java Full Stack Development',
    issuer: 'Naresh IT',
    year: '2024'
  }
];