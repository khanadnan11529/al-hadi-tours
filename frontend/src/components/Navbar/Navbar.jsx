import "./Navbar.css";
import logo from "../../assets/logo/al-hadi-logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="navbar-logo">
          <img
            src={logo}
            alt="Al-Hadi Tours & Travels"
          />
        </a>

        <nav className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#umrah">Umrah</a>
          <a href="#tours">Tours</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>

          <a href="#contact" className="enquire-button">
            Enquire Now
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;