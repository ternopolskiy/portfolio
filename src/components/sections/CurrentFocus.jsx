import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../../context/LanguageContext";
import SectionTitle from "../ui/SectionTitle";
import looksmaxxImg from "../../assets/looksmaxx.webp";

const ECOSYSTEM_LINKS = [
  { label: "AscendMax", href: "https://www.ascendmax.app/" },
  { label: "FaceIQ Labs", href: "https://www.faceiqlabs.com/" },
  { label: "Looksmaxx AI", href: "https://looksmax.ai/" },
];

const CurrentFocus = () => {
  const { t, lang } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const renderDescription = (raw) => {
    const parts = raw.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i}>{part}</strong>
      ) : (
        part
      )
    );
  };

  return (
    <section className="current-focus" id="current-focus" ref={ref}>
      <div className="current-focus__inner">
        <SectionTitle
          title={t.currentFocus.title}
          subtitle={t.currentFocus.subtitle}
        />

        <div className="current-focus__grid">
          {/* ── Left column: text ── */}
          <motion.div
            className="current-focus__text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="current-focus__ecosystem-subtitle">
              {t.currentFocus.ecosystem}
            </p>

            <p className="current-focus__description">
              {renderDescription(t.currentFocus.description)}
            </p>

            <p className="current-focus__ecosystem-label">
              {t.currentFocus.ecosystemLabel}
            </p>

            <div className="current-focus__links">
              {ECOSYSTEM_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="current-focus__link"
                >
                  {link.label}
                  <span className="current-focus__link-arrow">→</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right column: image with fade ── */}
          <motion.div
            className="current-focus__image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="current-focus__image-container">
              <img
                src={looksmaxxImg}
                alt="Looksmaxx AI Ecosystem"
                className="current-focus__image"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
