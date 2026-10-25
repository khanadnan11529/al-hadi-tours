import "./TourPackages.css";

const tours = [
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    title: "Dubai Tour",
    duration: "5 Days / 4 Nights",
    description:
      "Experience the best of Dubai with carefully planned sightseeing, accommodation and travel assistance.",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Maldives Tour",
    duration: "5 Days / 4 Nights",
    description:
      "Enjoy a relaxing tropical holiday with comfortable stays and a memorable island experience.",
  },
  {
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
    title: "International Tours",
    duration: "Customized",
    description:
      "Plan your international holiday according to your preferred destination, duration and budget.",
  },
];

function TourPackages() {
  return (
    <section className="tour-section" id="tours">

      <div className="tour-container">

        <div className="tour-heading">

          <div>
            <span>EXPLORE THE WORLD</span>

            <h2>
              Popular <strong>Tour Packages</strong>
            </h2>
          </div>

          <p>
            Discover exciting destinations with travel packages
            designed around your requirements.
          </p>

        </div>

        <div className="tour-grid">

          {tours.map((tour) => (
            <div className="tour-card" key={tour.title}>

              <div className="tour-image">

                <img
                  src={tour.image}
                  alt={tour.title}
                />

                <span className="tour-duration">
                  {tour.duration}
                </span>

              </div>

              <div className="tour-content">

                <h3>{tour.title}</h3>

                <p>{tour.description}</p>

                <a href="#contact">
                  Enquire Now →
                </a>

              </div>

            </div>
          ))}

        </div>

        <div className="tour-bottom">

          <p>
            Looking for something different?
            We can create a customized travel plan for you.
          </p>

          <a href="#contact">
            Plan My Trip
          </a>

        </div>

      </div>

    </section>
  );
}

export default TourPackages;