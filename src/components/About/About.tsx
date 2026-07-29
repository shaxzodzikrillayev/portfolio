import "./About.scss";

const cards = [
  {
    title: "Frontend",
    text: "React, TypeScript, SCSS, Vite, responsive layouts and animations.",
  },
  {
    title: "Experience",
    text: "Continuously improving my skills, building modern projects and learning new technologies.",
  },
  {
    title: "Goal",
    text: "To create high-quality web applications with excellent performance and design.",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__left">
          <span className="about__subtitle">ABOUT ME</span>

          <h2 className="about__title">
            Frontend Developer creating modern, responsive and interactive
            websites.
          </h2>

          <p className="about__text">
            I specialize in building modern web applications using React,
            TypeScript and SCSS. My goal is to create fast, beautiful and
            user-friendly interfaces with clean code and smooth animations.
          </p>

          <div className="about__buttons">
            <a href="#projects" className="about__button">
              View Projects
            </a>

            <a href="#contact" className="about__button about__button--ghost">
              Contact Me
            </a>
          </div>
        </div>

        <div className="about__right">
          {cards.map((card) => (
            <div className="about__card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;