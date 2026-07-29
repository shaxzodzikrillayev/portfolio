import "./Services.scss";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    text: "Building responsive and modern web applications using React, TypeScript, SCSS and Vite with clean architecture.",
  },
  {
    icon: <FaLaptopCode />,
    title: "UI Implementation",
    text: "Transforming Figma designs into pixel-perfect interfaces with smooth animations and adaptive layouts.",
  },
  {
    icon: <FaRocket />,
    title: "Performance",
    text: "Optimizing websites for speed, accessibility and excellent user experience across all devices.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__header">
          <span className="services__subtitle">WHAT I DO</span>

          <h2 className="services__title">
            Creating modern digital
            <br />
            experiences that users love.
          </h2>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="services__card" key={service.title}>
              <div className="services__icon">{service.icon}</div>

              <h3 className="services__card-title">{service.title}</h3>

              <p className="services__card-text">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
