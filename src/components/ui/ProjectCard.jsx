import { useLanguage } from "../../context/LanguageContext";

const ProjectCard = ({ project }) => {
  const { lang, t } = useLanguage();
  const { title, image, stack, description, link } = project;

  /* title может быть строкой или объектом { ru, en } */
  const displayTitle = typeof title === "object" ? title[lang] : title;

  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={image} alt={displayTitle} loading="lazy" />
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{displayTitle}</h3>

        <div className="project-card__stack">
          {stack.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>

        <p className="project-card__description">{description[lang]}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          {t.projects.viewProject}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
