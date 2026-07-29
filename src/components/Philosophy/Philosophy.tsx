import "./Philosophy.scss";
import { FaCode, FaRocket, FaPalette } from "react-icons/fa";

const philosophyItems = [
  {
    id: "01",
    icon: <FaCode />,
    title: "Clean Code",
    description:
      "Writing scalable, maintainable and reusable code using modern development practices.",
  },
  {
    id: "02",
    icon: <FaPalette />,
    title: "Modern UI",
    description:
      "Designing elegant interfaces with smooth interactions and responsive layouts.",
  },
  {
    id: "03",
    icon: <FaRocket />,
    title: "Performance",
    description:
      "Optimizing applications for speed, accessibility and the best user experience.",
  },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="philosophy">
      <div className="container">
        <div className="philosophy__header">
          <span className="philosophy__subtitle">MY PHILOSOPHY</span>

          <h2 className="philosophy__title">
            Building digital products that are fast, beautiful and enjoyable to
            use.
          </h2>

          <p className="philosophy__description">
            I believe great websites combine clean code, thoughtful design and
            exceptional user experience. Every project is an opportunity to
            create something reliable, modern and memorable.
          </p>
        </div>

        <div className="philosophy__stats">
          <div className="philosophy__stat">
            <h3>10+</h3>
            <span>Projects</span>
          </div>

          <div className="philosophy__stat">
            <h3>100%</h3>
            <span>Responsive</span>
          </div>

          <div className="philosophy__stat">
            <h3>24/7</h3>
            <span>Learning</span>
          </div>
        </div>

        <div className="philosophy__grid">
          {philosophyItems.map((item) => (
            <article className="philosophy__card" key={item.id}>
              <span className="philosophy__number">{item.id}</span>

              <div className="philosophy__icon">{item.icon}</div>

              <h3 className="philosophy__card-title">{item.title}</h3>

              <p className="philosophy__card-text">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
