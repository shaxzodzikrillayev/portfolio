import "./Companies.scss";
import type { CSSProperties, ComponentType, SVGProps } from "react";

import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
} from "react-icons/fa";

import { SiTypescript, SiVite } from "react-icons/si";

type Technology = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  color: string;
};

const technologies: Technology[] = [
  { icon: FaReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
  { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
  { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
  { icon: FaSass, name: "Sass", color: "#CC6699" },
  { icon: SiVite, name: "Vite", color: "#646CFF" },
  { icon: FaGitAlt, name: "Git", color: "#F05032" },
  { icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
  { icon: FaFigma, name: "Figma", color: "#F24E1E" },
];

const Companies = () => {
  return (
    <section id="stack" className="companies">
      <div className="container">
        <span className="companies__subtitle">MY TECH STACK</span>

        <div className="companies__grid">
          {technologies.map(({ icon: Icon, name, color }) => (
            <div
              key={name}
              className="companies__card"
              style={
                {
                  "--tech-color": color,
                } as CSSProperties
              }
            >
              <Icon className="companies__logo"/>

              <h3 className="companies__name">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;