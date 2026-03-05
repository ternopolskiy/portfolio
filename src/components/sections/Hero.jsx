import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import texture from "../../assets/old_paper_texture.svg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <img
        src={texture}
        alt=""
        className="hero__texture"
        aria-hidden="true"
      />

      <div className="hero__content">
        <motion.p
          className="hero__greeting"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          className="hero__name"
          data-text="Ternopolskiy Georgiy"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Ternopolskiy Georgiy
        </motion.h1>

        <motion.div
          className="hero__line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        />

        <motion.p
          className="hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {t.hero.subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
