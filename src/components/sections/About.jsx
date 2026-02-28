import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import photo from "../../assets/gosha.svg";
import SectionTitle from "../ui/SectionTitle";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__inner">
        {/* Photo */}
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

        {/* Text */}
        <motion.div
          className="about__text"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <SectionTitle title="About Me" subtitle="Обо мне" />

          <p>Привет!</p>

          <p>
            Меня зовут Георгий, мне 17&nbsp;лет и я Full-Stack Developer.
            Учусь на 3&nbsp;курсе в Новосибирском колледже печати и
            информационных технологий на специальности &laquo;Информационные
            Системы и Программирование&raquo;.
          </p>

          <p>
            Двукратный призёр регионального чемпионата
            &laquo;Профессионалы&raquo;&nbsp;— 2025&nbsp;— 3-е место&nbsp;🥉,
            2026&nbsp;— 3-е место&nbsp;🥉
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
