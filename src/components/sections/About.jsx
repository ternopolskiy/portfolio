import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../../context/LanguageContext";
import photo from "../../assets/gosha.svg";
import SectionTitle from "../ui/SectionTitle";

const About = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__inner">
        <motion.div
          className="about__photo-wrapper"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={photo}
            alt="Georgiy Ternopolskiy"
            className="about__photo"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="about__text"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />

          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
