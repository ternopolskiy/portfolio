import { createContext, useContext, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem("portfolio-lang");
    if (saved) return saved;
    const browser = navigator.language?.slice(0, 2);
    return browser === "ru" ? "ru" : "en";
  });

  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
