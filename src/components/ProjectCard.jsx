const ProjectCard = ({ project }) => {
  return (
    <div className="col projectCard">
      <div className="card h-100">
        <a
          className="card-link"
          href={project.liveSite}
          rel="noreferrer"
          target="_blank"
        >
          <div
            style={{ backgroundImage: `url(${project.imgUrl})` }}
            className="card-image-container"
          ></div>
        </a>

        <div className="card-body">
          <h5 className="card-title my-3 text-xl fw-bold">{project.name}</h5>

          {project.technologyUsed.map((tech, i) => {
            return (
              <span key={i} className="badge rounded-pill bg-dark me-2">
                {tech}
              </span>
            );
          })}

          <p className="card-text my-3 text-sm">{project.description}</p>
        </div>
        <div className="buttons p-3 d-flex gap-3">
          <a
            target="_blank"
            rel="noreferrer"
            className="btn text-sm btn-dark px-5"
            href={project.sourceCode}
          >
            Source Code
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={project.liveSite}
            className="btn text-sm btn-dark px-5"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
