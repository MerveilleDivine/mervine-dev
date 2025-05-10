
import React from 'react';

// Define technology logos
export const techLogos = {
  // Frontend
  HTML: '/lovable-uploads/c793dd14-043e-430b-a3c9-41b9daffa7e9.png',
  CSS: '/tech-icons/css.png',
  JavaScript: '/tech-icons/javascript.png',
  TypeScript: '/tech-icons/typescript.png',
  React: '/tech-icons/react.png',
  Redux: '/tech-icons/redux.png',
  Tailwind: '/tech-icons/tailwind.png',
  
  // Backend
  Node: '/tech-icons/nodejs.png',
  Express: '/tech-icons/express.png',
  MongoDB: '/tech-icons/mongodb.png',
  MySQL: '/tech-icons/mysql.png',
  PostgreSQL: '/tech-icons/postgresql.png',
  Firebase: '/tech-icons/firebase.png',
  
  // Tools
  Git: '/tech-icons/git.png',
  Docker: '/tech-icons/docker.png',
  AWS: '/tech-icons/aws.png',
  Testing: '/tech-icons/jest.png',
};

export const getTechImage = (techName: string): string => {
  // Return corresponding tech logo or a default image
  return techLogos[techName as keyof typeof techLogos] || '/tech-icons/code.png';
};
