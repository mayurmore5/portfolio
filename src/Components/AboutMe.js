import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="cards-container">
          <div className="card">
            <div className="card-icon">👨‍💻</div>
            <h3 className="card-title">Web Developer</h3>
            <p className="card-description">
              I am a passionate web developer with expertise in building modern, responsive, and user-friendly web applications.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">🚀</div>
            <h3 className="card-title">Continuous Learning</h3>
            <p className="card-description">
              I am always eager to learn new technologies and stay up-to-date with the latest industry trends.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">⚙️</div>
            <h3 className="card-title">Problem-Solving</h3>
            <p className="card-description">
              I enjoy tackling complex problems and finding innovative solutions to meet the needs of my clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;