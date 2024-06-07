import React, { useEffect, useState } from 'react';
import './Profile.css';
import profilePicture from '../assets/pf.jpg'; // Make sure to import your profile picture
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons';

const roles = ['Developer', 'Leader', 'Programmer'];

const Profile = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-content">
        <h1 className="profile-name">Mayur More</h1>
        <h2 className="profile-role">I am a <span className="highlight">{roles[currentRole]}</span></h2>
        <p className="profile-description">Frontend Developer at Vellore Institute of Technology pursuing BTECH in Computer Science Engineering</p>
        <div className="buttons">
        <a href="www.linkedin.com/in/mayurmore5" target="_blank" rel="noopener noreferrer" className="contact-button">Contact Me</a>
          <a href="/resume.pdf" download className="portfolio-button">Resume</a>
        </div>
        <div className="social-icons">
          <a href="https://github.com/mayurmore5" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="www.linkedin.com/in/mayurmore5" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://x.com/Mayurm517" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMedium} size="2x" />
          </a>
        </div>
      </div>
      <div className="profile-picture-container">
        <img src={profilePicture} alt="Syed Omar Albeez" className="profile-picture" />
      </div>
    </div>
  );
};

export default Profile;
