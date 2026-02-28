const ProjectCard = ({ project }) => {
  const { title, image, stack, description, link } = project;

  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>

        <div className="project-card__stack">
          {stack.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>

        <p className="project-card__description">{description}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
