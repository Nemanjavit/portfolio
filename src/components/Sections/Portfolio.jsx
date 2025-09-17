import { projects } from "../../utils/projects";
import background from "../../assets/portfolioBg.png";
import ProjectCard from "../ProjectCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/src/all";
import gsap from "gsap";

const Portfolio = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".heading",
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".portfolio",
          start: "top 50%",
        },
        opacity: 1,
      }
    );
  });

  return (
    <div id="portfolio" className="portfolio">
      <div className="spacer">
        <img className="hiddenImg" src={background} alt="" />
        <h2 className="text-xxl fw-bold text-center mb-5 heading">PORTFOLIO</h2>
      </div>
      <div className="container portfolio-container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-3 g-4">
          {projects.map((project, i) => {
            return <ProjectCard key={i} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
