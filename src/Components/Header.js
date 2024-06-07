import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Mayur M.</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};
export default Header;