import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const workExperienceRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <div>
      <Navbar 
        heroRef={heroRef}
        skillsRef={skillsRef}
        workExperienceRef={workExperienceRef}
        contactMeRef={contactMeRef}
      />
      <div className='container'>
        <div ref={heroRef}><Hero /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={workExperienceRef}><WorkExperience /></div>
        <div ref={contactMeRef}><ContactMe /></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
