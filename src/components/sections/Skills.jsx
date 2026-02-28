import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../../data/skills";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills__inner">
        <SectionTitle title="Skills" subtitle="Навыки" centered />

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
