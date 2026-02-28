import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../../data/projects";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects__inner">
        <SectionTitle title="Projects" subtitle="Проекты" centered />

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
