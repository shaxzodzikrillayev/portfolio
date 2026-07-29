import { useEffect, useState } from "react";
import "./Header.scss";

const sections = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "stack",
    title: "Tech Stack",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Header = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const position = window.innerHeight / 2;

      let current = "home";

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (!section) return;

        const { top, bottom } = section.getBoundingClientRect();

        if (top <= position && bottom >= position) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container">
        <a href="#home" className="header__logo" onClick={closeMenu}>
          <h2>Shaxzod</h2>

          <span>&lt;Frontend Developer /&gt;</span>
        </a>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          {sections.map(({ id, title }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className={active === id ? "active" : ""}
            >
              {title}
            </a>
          ))}
        </nav>

        <a href="#contact" className="header__button" onClick={closeMenu}>
          Hire Me
        </a>

        <button
          className={`header__burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
