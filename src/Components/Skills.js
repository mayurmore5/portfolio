// src/TechSkills.js
import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiJavascript, SiTypescript, SiRedux, SiTailwindcss, SiFigma, SiStorybook, SiPython, SiCplusplus } from 'react-icons/si';

import './Skills.css';

const TechSkills = () => {
  return (
    <div className="tech-skills">
      <h1>Skills.</h1>
      <div className="skills-grid">
        <div className="skill"><FaReact className="react" /></div>
        <div className="skill"><SiNextdotjs className="nextjs" /></div>
        <div className="skill"><FaNodeJs className="nodejs" /></div>
        <div className="skill"><SiJavascript className="javascript" /></div>
        <div className="skill"><SiTypescript className="typescript" /></div>
        <div className="skill"><SiRedux className="redux" /></div>
        <div className="skill"><SiTailwindcss className="tailwindcss" /></div>
        <div className="skill"><SiMongodb className="mongodb" /></div>
        <div className="skill"><FaGitAlt className="git" /></div>
        <div className="skill"><FaHtml5 className="html5" /></div>
        <div className="skill"><FaCss3Alt className="css3" /></div>
        <div className="skill"><SiStorybook className="storybook" /></div>
        <div className="skill"><SiFigma className="figma" /></div>
        <div className="skill"><SiPython className="python" /></div>
        <div className="skill"><SiCplusplus className="cpp" /></div>
      </div>
    </div>
  );
};

export default TechSkills;
