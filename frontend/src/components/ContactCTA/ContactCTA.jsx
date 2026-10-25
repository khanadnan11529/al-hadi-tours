import { useState } from "react";
import "./ContactCTA.css";

function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    travelDate: "",
    travelers: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          travelers: Number(formData.travelers)
        })
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      const savedEnquiry = await response.json();

      console.log("Enquiry saved:", savedEnquiry);

      alert("Thank you! Your enquiry has been received. Our team will contact you shortly.");

      // Clear form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        travelDate: "",
        travelers: "",
        message: ""
      });

    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's Plan Your
            <strong> Journey</strong>
          </h2>

          <p>
            Have questions about Umrah, visa services or travel
            packages? Send us your requirements and our team
            will get in touch with you.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">
                📞
              </div>

              <div>
                <span>Call Us</span>

                <a href="tel:+919167493183">
                  +91 91674 93183
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                ✉️
              </div>

              <div>
                <span>Email Us</span>

                <a href="mailto:hadisaudi@gmail.com">
                  hadisaudi@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                📍
              </div>

              <div>
                <span>Visit Us</span>

                <p>
                  82 Khairunnisa Heights,
                  Shop No. 03, Ground Floor,
                  Dongri Bazar, Mumbai - 400009
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side - Form */}

        <div className="contact-form-wrapper">

          <div className="form-header">
            <h3>Send Us An Enquiry</h3>

            <p>
              Fill in your details and we'll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">
                <label>Full Name *</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Service *</label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select a service
                  </option>

                  <option value="Umrah Package">
                    Umrah Package
                  </option>

                  <option value="Visa Service">
                    Visa Service
                  </option>

                  <option value="Tour Package">
                    Tour Package
                  </option>

                  <option value="Hotel Booking">
                    Hotel Booking
                  </option>

                  <option value="Transportation">
                    Transportation
                  </option>

                  <option value="Customized Travel">
                    Customized Travel
                  </option>
                </select>

              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Travel Date</label>

                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Number of Travelers</label>

                <input
                  type="number"
                  name="travelers"
                  min="1"
                  placeholder="Number of travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="form-group">

              <label>Message</label>

              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your travel requirements..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>

            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send Enquiry →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactCTA;