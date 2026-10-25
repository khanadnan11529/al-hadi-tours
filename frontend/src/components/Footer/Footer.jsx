import "./Footer.css";
import logo from "../../assets/logo/al-hadi-logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <img
            src={logo}
            alt="Al-Hadi Tours & Travels"
            className="footer-logo"
          />

          <p>
            Your trusted travel partner for Umrah,
            visa assistance and tour packages.
            Your journey begins here.
          </p>

          <div className="footer-social">

            <a
              href="https://www.instagram.com/alhadi.mumbai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/919167493183"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#umrah">Umrah</a>
          <a href="#tours">Tour Packages</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Services */}
        <div className="footer-column">

          <h3>Our Services</h3>

          <a href="#umrah">Umrah Packages</a>
          <a href="#contact">Visa Services</a>
          <a href="#tours">Tour Packages</a>
          <a href="#contact">Hotel Booking</a>
          <a href="#contact">Transportation</a>
          <a href="#contact">Customized Travel</a>

        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>Contact Us</h3>

          <div>
            <span>📞</span>
            <a href="tel:+919167493183">
              +91 91674 93183
            </a>
          </div>

          <div>
            <span>✉️</span>
            <a href="mailto:hadisaudi@gmail.com">
              hadisaudi@gmail.com
            </a>
          </div>

          <div>
            <span>📍</span>
            <p>
              82 Khairunnisa Heights,
              Shop No. 03, Ground Floor,
              Dongri Bazar,
              Mumbai - 400009
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Al-Hadi Tours & Travels.
          All Rights Reserved.
        </p>

        <p>
          Your Journey Begins Here
        </p>

      </div>

    </footer>
  );
}

export default Footer;