import { useLanguage } from "../../context/LanguageContext";
import emailIcon from "../../assets/contacts/email.svg";
import githubIcon from "../../assets/contacts/github.svg";
import telegramIcon from "../../assets/contacts/telegram.svg";
import vkIcon from "../../assets/contacts/vk.svg";
import whatsappIcon from "../../assets/contacts/whatsapp.svg";
import gitverseIcon from "../../assets/contacts/gitverse.svg";

const contacts = [
  { icon: emailIcon, href: "mailto:georg137ternopol@gmail.com", label: "Email" },
  { icon: githubIcon, href: "https://github.com/ternopolskiy", label: "GitHub" },
  { icon: telegramIcon, href: "https://t.me/sex_akula", label: "Telegram" },
  { icon: vkIcon, href: "https://m.vk.com/idididididplex", label: "VK" },
  { icon: whatsappIcon, href: "https://wa.me/79994626748", label: "WhatsApp" },
  { icon: gitverseIcon, href: "https://gitverse.ru/ternopolskiy", label: "GitVerse" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <p className="footer__text">{t.footer.text}</p>

        <div className="footer__contacts">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`footer__contact-link${c.label === "GitVerse" ? " footer__contact-link--gitverse" : ""}`}
              aria-label={c.label}
            >
              <img src={c.icon} alt={c.label} />
            </a>
          ))}
        </div>

        <p className="footer__copyright">
          © {new Date().getFullYear()} Ternopolskiy Georgiy. {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
