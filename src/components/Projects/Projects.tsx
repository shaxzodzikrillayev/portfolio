import "./Projects.scss";

const projects = [
  {
    image: "/Modern Portfolio.png",
    title: "Modern Portfolio",
    description:
      "Responsive portfolio website built with React, TypeScript and SCSS.",
    tech: "React • TypeScript • SCSS",
    link: "#",
  },
  {
    image: "/Landing Page.png",
    title: "Landing Page",
    description:
      "Modern landing page with smooth animations and responsive design.",
    tech: "React • SCSS • Vite",
    link: "#",
  },
  {
    image: "/Dashboard UI.png",
    title: "Dashboard UI",
    description: "Clean admin dashboard interface with reusable components.",
    tech: "React • TypeScript",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="projects__subtitle">MY PROJECTS</span>

        <h2 className="projects__title">Featured Projects</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="projects__card" key={project.title}>
              <div className="projects__image">
                <img src={project.image} alt={project.title} />
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="projects__tech">{project.tech}</span>

              <a href={project.link} className="projects__button">
                View Project
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
