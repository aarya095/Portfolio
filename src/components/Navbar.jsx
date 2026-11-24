
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">
        Aarya<span>.</span>
      </a>

      <nav className="navbar-links" aria-label="Main navigation">
        {/* <a href="#about">About</a> */}
        <a href="#education">Education</a>
        {/* <a href="#projects">Projects</a> */}
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
