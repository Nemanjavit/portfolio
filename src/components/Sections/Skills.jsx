import { learning, skills } from "../../utils/skills";
import Skill from "../Skill";

const Skills = () => {
  return (
    <div id="skills" className="skills">
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
