import htmlIcon from "../../assets/techIcons/html.png";
import cssIcon from "../../assets/techIcons/css.png";
import js from "../../assets/techIcons/js.png";
import sass from "../../assets/techIcons/sass.png";
import gitIcon from "../../assets/techIcons/social.png";
import react from "../../assets/techIcons/react.png";
import nextJs from "../../assets/techIcons/next.png";
import typescript from "../../assets/techIcons/typescript.png";
import postgreSql from "../../assets/techIcons/postgre.png";
import express from "../../assets/techIcons/express.png";
import Skill from "../Skill";

const skills = [
  {
    iconUrl: htmlIcon,
    name: "HTML",
  },
  {
    iconUrl: cssIcon,
    name: "CSS 3",
  },
  {
    iconUrl: js,
    name: "Javscript",
  },
  {
    iconUrl: sass,
    name: "SASS",
  },
  {
    iconUrl: gitIcon,
    name: "Git",
  },
  {
    iconUrl: react,
    name: "React JS",
  },
  {
    iconUrl: nextJs,
    name: "Next JS",
  },
  {
    iconUrl: typescript,
    name: "Type Script",
  },
];

const learning = [
  {
    iconUrl: postgreSql,
    name: "PostgreSql",
  },
  {
    iconUrl: express,
    name: "Express Js",
  },
];

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <h2 className="text-lg fw-bold mb-4">SKILLS:</h2>
        <div className="row">
          {skills.map((skill, i) => {
            return <Skill key={i} name={skill.name} url={skill.iconUrl} />;
          })}
        </div>
        <h2 className="text-lg fw-bold mb-4">CURRENTLY LEARNING:</h2>
        <div className="row">
          {learning.map((skill, i) => {
            return <Skill key={i} name={skill.name} url={skill.iconUrl} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
