import "./Hero.css";

function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hello Al-Hadi Tours & Travels, I am interested in your Umrah and Visa services. Please share the details."
  );

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            YOUR JOURNEY BEGINS HERE
          </span>

          <h1>
            Your Journey to
            <span> Umrah </span>
            Begins With Us
          </h1>

          <p>
            Trusted visa assistance, Umrah packages and travel
            services designed to make your journey comfortable,
            simple and memorable.
          </p>

          <div className="hero-buttons">

            <a href="#umrah" className="hero-primary-btn">
              Explore Umrah
            </a>

            <a
              href={`https://wa.me/919167493183?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-whatsapp-btn"
            >
              💬 WhatsApp Us
            </a>

          </div>

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>365</strong>
              <span>Days Validity</span>
            </div>

            <div className="hero-stat">
              <strong>90</strong>
              <span>Days Max Stay</span>
            </div>

            <div className="hero-stat">
              <strong>₹12,500</strong>
              <span>Visa Rate</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;