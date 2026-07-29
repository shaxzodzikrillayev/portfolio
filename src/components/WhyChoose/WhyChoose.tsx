import "./WhyChoose.scss";
import { FaCode, FaBolt, FaPalette, FaMobileAlt } from "react-icons/fa";

const cards = [
  {
    number: "01",
    icon: <FaCode />,
    title: "Clean Code",
    text: "Writing maintainable, scalable and reusable code following modern development standards.",
  },
  {
    number: "02",
    icon: <FaPalette />,
    title: "Modern Design",
    text: "Creating clean, elegant and intuitive interfaces with attention to every detail.",
  },
  {
    number: "03",
    icon: <FaBolt />,
    title: "High Performance",
    text: "Optimizing applications for speed, accessibility and smooth user interactions.",
  },
  {
    number: "04",
    icon: <FaMobileAlt />,
    title: "Responsive Layout",
    text: "Building websites that look and work perfectly on desktop, tablet and mobile devices.",
  },
];

const WhyChoose = () => {
  return (
    <section id="why" className="why">
      <div className="container">
        <div className="why__header">
          <span className="why__subtitle">WHY WORK WITH ME</span>

          <h2 className="why__title">
            More than just
            <br />
            writing code.
          </h2>

          <p className="why__description">
            I focus on building modern, responsive and performant web
            applications that provide an excellent user experience and are easy
            to maintain.
          </p>
        </div>

        <div className="why__grid">
          {cards.map((card) => (
            <article className="why__card" key={card.number}>
              <span className="why__number">{card.number}</span>

              <div className="why__icon">{card.icon}</div>

              <h3 className="why__card-title">{card.title}</h3>

              <p className="why__card-text">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
