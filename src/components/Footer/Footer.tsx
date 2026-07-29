import "./Footer.scss";

import { FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

const navigation = ["Home", "About", "Services", "Projects"];

const stack = ["React", "TypeScript", "SCSS", "Vite"];

const contacts = [
  {
    icon: FaGithub,
    name: "GitHub",
    link: "https://github.com/shaxzodzikrillayev",
  },
  {
    icon: FaTelegramPlane,
    name: "Telegram",
    link: "https://t.me/ZikrillaevShaxzod_tsx",
  },
  {
    icon: FaEnvelope,
    name: "Email",
    link: "mailto:shaxzodzikrillayev19@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <h2 className="footer__logo">Shaxzod</h2>

            <p className="footer__description">
              Frontend Developer passionate about building modern, responsive
              and high-performance web applications with React, TypeScript and
              modern technologies.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h3>Navigation</h3>
              {navigation.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              ))}
            </div>

            <div className="footer__column">
              <h3>Tech Stack</h3>
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="footer__column">
              <h3>Contact</h3>
              {contacts.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon />
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Shaxzod. All rights reserved.</span>

          <span>Built with React & TypeScript</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
