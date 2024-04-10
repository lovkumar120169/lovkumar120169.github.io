import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { JobsTicker } from "./components/Ticker";
import { Stats } from "./components/Stats";
import styled from "styled-components";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";
// import { Loader } from "./components/common/Loader";

function App() {
  return (
    <>
      <Navbar />
      <CONTAINER className="App">
        <Home />
        <JobsTicker></JobsTicker>
        <About />
        <Experience />
        <Education />
        <Projects />
        <Stats />
        <Contact />
      </CONTAINER>
      <Footer />
    </>
  );
}

const CONTAINER = styled.div`
  width: min(75rem, 100%);
  margin-inline: auto;
`;

export default App;
