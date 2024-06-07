// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, imageUrl, githubUrl, liveDemoUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub
          </a>
          <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
