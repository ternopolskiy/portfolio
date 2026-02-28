import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import BurgerMenu from "../ui/BurgerMenu";

const navLinks = [
  { name: "Home", target: "hero" },
  { name: "About", target: "about" },
  { name: "Skills", target: "skills" },
  { name: "Projects", target: "projects" },
  { name: "Contact", target: "footer" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__logo" onClick={() => scrollTo("hero")}>
          G.T
        </div>

        {/* Desktop links */}
        <div className="navbar__links">
          {navLinks.map((l) => (
            <button
              key={l.target}
              className="navbar__link"
              onClick={() => scrollTo(l.target)}
            >
              {l.name}
            </button>
          ))}
        </div>

        {/* Burger toggle */}
        <div
          className={`navbar__burger${menuOpen ? " navbar__burger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <BurgerMenu
            links={navLinks}
            onNavigate={scrollTo}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
