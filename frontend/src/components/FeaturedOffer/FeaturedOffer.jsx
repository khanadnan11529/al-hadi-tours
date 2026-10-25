import "./FeaturedOffer.css";
import umrahPoster from "../../assets/umrah-visa.jpg";

function FeaturedOffer() {
  return (
    <section className="featured-offer" id="umrah">

      <div className="featured-container">

        {/* Left - Promotional Poster */}
        <div className="featured-image">
          <img
            src={umrahPoster}
            alt="Al-Hadi 365 Days Multiple Entry Umrah Visa"
          />
        </div>

        {/* Right - Offer Details */}
        <div className="featured-content">

          <span className="featured-label">
            SPECIAL UMRAH OFFER
          </span>

          <h2>
            365 Days
            <br />
            <strong>Multiple Entry Umrah Visa</strong>
          </h2>

          <p className="featured-description">
            Experience the blessings of Umrah with greater
            flexibility. Travel to Saudi Arabia multiple times
            within the visa validity and spend more time in
            worship and ibadah.
          </p>

          <div className="offer-highlights">

            <div className="offer-item">
              <span className="offer-icon">📅</span>

              <div>
                <strong>365 Days</strong>
                <p>Visa Validity</p>
              </div>
            </div>

            <div className="offer-item">
              <span className="offer-icon">⏱️</span>

              <div>
                <strong>90 Days</strong>
                <p>Maximum Stay</p>
              </div>
            </div>

            <div className="offer-item">
              <span className="offer-icon">🔄</span>

              <div>
                <strong>Multiple Entry</strong>
                <p>Travel Multiple Times</p>
              </div>
            </div>

            <div className="offer-item">
              <span className="offer-icon">🛡️</span>

              <div>
                <strong>Safe & Reliable</strong>
                <p>Complete Support</p>
              </div>
            </div>

          </div>

          <div className="offer-price">

            <span>Starting From</span>

            <strong>₹12,500</strong>

          </div>

          <div className="offer-buttons">

            <a
              href="#contact"
              className="offer-primary-btn"
            >
              Enquire Now
            </a>

            <a
              href="tel:+919167493183"
              className="offer-call-btn"
            >
              📞 Call Us
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedOffer;