import { useLanguage } from "../../context/LanguageContext";

const LEVEL_MAP = {
  basic: 1,
  medium: 2,
  middle: 3,
  high: 4,
  "middle+": 4,
};

const SkillCard = ({ skill }) => {
  const { lang, t } = useLanguage();
  const { name, icon, level, description } = skill;
  const filled = LEVEL_MAP[level] ?? 1;
  const glow = level === "middle+";

  return (
    <div className="skill-card">
      <div className="skill-card__icon">
        <img src={icon} alt={name} loading="lazy" />
      </div>

      <h3 className="skill-card__name">{name}</h3>

      <div
        className="skill-card__level"
        aria-label={`${t.skills.levelLabel}: ${level}`}
      >
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`skill-card__bar${
              i <= filled
                ? glow
                  ? " skill-card__bar--glow"
                  : " skill-card__bar--active"
                : ""
            }`}
          />
        ))}
      </div>

      <p className="skill-card__description">{description[lang]}</p>
    </div>
  );
};

export default SkillCard;
