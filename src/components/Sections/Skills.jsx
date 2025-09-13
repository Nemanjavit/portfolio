import { useGSAP } from "@gsap/react";
import { learning, skills } from "../../utils/skills";
import Skill from "../Skill";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsContainer = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".skill",
      { x: "100vw" },
      {
        scrollTrigger: {
          trigger: ".skills",
          start: "top 75%",
        },
        x: 0,
        duration: 0.3,
        stagger: { each: 0.1 },
      }
    );
  });

  return (
    <div ref={skillsContainer} id="skills" className="skills">
      <div className="container">
        <h2 className="text-lg fw-bold mb-4">SKILLS:</h2>
        <div className="row skills-row">
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
