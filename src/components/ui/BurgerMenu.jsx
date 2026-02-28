import { motion } from "framer-motion";

const BurgerMenu = ({ links, onNavigate, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <motion.div
        className="burger-menu__overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="burger-menu__panel"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
      >
        <div className="burger-menu__links">
          {links.map((link, i) => (
            <motion.button
              key={link.target}
              className="burger-menu__link"
              onClick={() => onNavigate(link.target)}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
            >
              {link.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default BurgerMenu;
