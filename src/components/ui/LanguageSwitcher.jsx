import { useLanguage } from "../../context/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switcher">
      <button
        className={`lang-switcher__btn${lang === "ru" ? " lang-switcher__btn--active" : ""}`}
        onClick={() => setLang("ru")}
        aria-label="Русский"
      >
        RU
      </button>
      <span className="lang-switcher__divider">·</span>
      <button
        className={`lang-switcher__btn${lang === "en" ? " lang-switcher__btn--active" : ""}`}
        onClick={() => setLang("en")}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
