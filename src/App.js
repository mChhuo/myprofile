import "./App.css";
import Cover from "./components/Cover";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Extras from "./components/Extras";
import Footer from "./components/Footer";
import ContentsBar from "./components/ContentsBar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Cover />
      <ContentsBar />
      <AboutMe />
      <Experiences />
      <Skills />
      <Projects />
      <Extras />
      <Footer />
    </>
  );
}

export default App;
