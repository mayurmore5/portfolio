// src/components/Experience.js
import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Web Development',
    company: 'Tech Researchers Club',
    description: 'I enhance my Web Development Skills and contribute to the projects and events.',
    date: 'March 2023 - Present',
  },
  {
    title: 'Operations Team Member',
    company: 'Microsoft Innovations Club',
    description: 'Manage and conduct events to improve the communication skills,leadership qualities and other soft skills',
    date: 'Aug 2023 - Present',
  },
  {
    title: 'Secretary',
    company: 'Umang',
    description: 'Managed and conducted events during the college Fest and Led the whole fest team .',
    date: 'May 2020 - March 2022',
  },
];

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>My Experience</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h3>{experience.title} - {experience.company}</h3>
              <p>{experience.description}</p>
              <span className="date">{experience.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
