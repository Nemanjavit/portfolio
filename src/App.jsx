import "./scss/index.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Sections/Quote";
import AboutMe from "./components/Sections/AboutMe";
import Skills from "./components/Sections/Skills";
import Portfolio from "./components/Sections/Portfolio";
import Contact from "./components/Sections/Contact";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <ToastContainer theme="colored" hideProgressBar autoClose={5000} />
        <Hero />
        <Quote />
        <AboutMe />
        <Skills />
        <Portfolio />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
