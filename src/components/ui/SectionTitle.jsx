import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`section-title${centered ? " section-title--centered" : ""}`}>
      {subtitle && <span className="section-title__subtitle">{subtitle}</span>}
      <h2 className="section-title__heading">{title}</h2>
      <motion.div
        className="section-title__line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
};

export default SectionTitle;
