// import { useEffect, useState } from 'react';
import "./App.css";
import Hero from "./components/Hero/Hero";
import Reveal from "./components/Animations/Reveal";
// import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Hero />
      <Reveal>
        {/* <About /> */}
        <TechStack />
        <Projects/>
      </Reveal>
    </div>
  );
}

export default App;
