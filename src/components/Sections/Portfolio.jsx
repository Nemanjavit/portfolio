import { projects } from "../../utils/projects";
import background from "../../assets/portfolioBg.png";
import ProjectCard from "../ProjectCard";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="spacer">
        <img className="hiddenImg" src={background} alt="" />
        <h2 className="text-xxl fw-bold text-center mb-5 heading">PORTFOLIO</h2>
      </div>
      <div className="container portfolio-container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project, i) => {
            return <ProjectCard key={i} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
