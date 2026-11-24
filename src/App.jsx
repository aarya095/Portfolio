
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        {/* <About /> */}
        <Education />
        {/* <Projects /> */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
