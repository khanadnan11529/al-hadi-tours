import "./Services.css";

const services = [
  {
    icon: "🕋",
    title: "Umrah Packages",
    description:
      "Well-planned Umrah packages with visa assistance, accommodation and travel support.",
  },
  {
    icon: "🛂",
    title: "Visa Services",
    description:
      "Reliable visa assistance with guidance to make your application process simple.",
  },
  {
    icon: "✈️",
    title: "Tour Packages",
    description:
      "Domestic and international tour packages planned according to your requirements.",
  },
  {
    icon: "🏨",
    title: "Hotel Booking",
    description:
      "Find comfortable and suitable accommodation for your travel requirements.",
  },
  {
    icon: "🚐",
    title: "Transportation",
    description:
      "Convenient transportation and transfer assistance for a smooth journey.",
  },
  {
    icon: "📋",
    title: "Customized Travel",
    description:
      "Tell us your requirements and our team will help create a suitable travel plan.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="services-heading">
          <span>WHAT WE OFFER</span>

          <h2>
            Our <strong>Services</strong>
          </h2>

          <p>
            From visa assistance to Umrah and travel services,
            we're here to help make your journey easier.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact">
                Enquire Now <span>→</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;