import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__subtitle">Hello, I'm Shahzod</span>

          <h1 className="hero__title">
            Frontend
            <br />
            <span>Developer</span>
          </h1>

          <p className="hero__text">
            I create modern, responsive and user-friendly websites using React,
            TypeScript and the latest web technologies.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="hero__button">
              View Projects
            </a>

            <a href="#contact" className="hero__button hero__button--outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__image">
          <div className="hero__blur"></div>

          <img src="/robot.svg" alt="Frontend Developer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
