// import { useEffect, useState } from 'react';
import "./App.css";
import Cursor from "./components/stickyCursor/cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Reveal from "./components/Animations/Reveal";
// import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
    
  <Cursor />
    <Navbar />
      <Hero />
      {/* <Reveal>
        <About />
      </Reveal> */}
      <Reveal>
        <TechStack />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Footer/>
    </div>
  );
}

export default App;
