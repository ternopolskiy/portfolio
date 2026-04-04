import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CurrentFocus from "./components/sections/CurrentFocus";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CurrentFocus />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
