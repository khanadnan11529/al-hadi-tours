import "./WhyChooseUs.css";

const reasons = [
  {
    number: "01",
    title: "Trusted Service",
    description:
      "We focus on reliable service, clear communication and complete customer support.",
  },
  {
    number: "02",
    title: "Umrah Assistance",
    description:
      "Get dedicated assistance for your Umrah visa and travel requirements.",
  },
  {
    number: "03",
    title: "Easy Communication",
    description:
      "Reach our team easily through phone, WhatsApp or our online enquiry form.",
  },
  {
    number: "04",
    title: "Complete Travel Support",
    description:
      "From visa assistance to accommodation and transportation, we help simplify your journey.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section" id="about">
      <div className="why-container">

        <div className="why-heading">
          <span>WHY AL-HADI</span>

          <h2>
            Travel With <strong>Confidence</strong>
          </h2>

          <p>
            Your journey matters to us. We aim to provide dependable
            travel assistance and a smooth experience from planning
            to your journey.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <div className="why-card" key={reason.number}>

              <span className="why-number">
                {reason.number}
              </span>

              <div className="why-line"></div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;