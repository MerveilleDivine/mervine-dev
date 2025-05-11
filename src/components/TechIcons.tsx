import React from 'react';

// Define technology logos with Unsplash fallbacks
export const techLogos = {
  // Frontend
  HTML: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  CSS: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  JavaScript: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  TypeScript: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  React: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  Redux: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  Tailwind: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  
  // Backend
  Node: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  Express: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  MongoDB: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  MySQL: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  PostgreSQL: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  Firebase: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  
  // Tools
  Git: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  Docker: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  AWS: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  Testing: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  
  // Other/Fallbacks
  API: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  Authentication: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  Authorization: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  Database: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  SQL: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  CI: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  Agile: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  Code: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
};

export const getTechImage = (techName: string): string => {
  // Return corresponding tech logo or a default image
  return techLogos[techName as keyof typeof techLogos] || 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7';
};
