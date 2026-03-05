import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import BurgerMenu from "../ui/BurgerMenu";

const NAV_TARGETS = ["hero", "about", "skills", "projects", "footer"];
const NAV_KEYS = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = NAV_KEYS.map((key, i) => ({
    name: t.nav[key],
    target: NAV_TARGETS[i],
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <div className="navbar__logo" onClick={() => scrollTo("hero")}>
          G.T
        </div>

        <div className="navbar__right">
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

          <LanguageSwitcher />

          <div
            className={`navbar__burger${menuOpen ? " navbar__burger--open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

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
