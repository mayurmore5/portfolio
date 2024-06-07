// src/App.js
import React from 'react';
import Header from './Components/Header';
import Profile from './Components/Profile';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
