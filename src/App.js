import "./App.css";
import Cursor from "./components/stickyCursor/cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reveal from "./components/Animations/Reveal";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Footer />
      <Cursor />
    </div>
  );
}

export default App;
