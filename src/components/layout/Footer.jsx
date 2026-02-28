import emailIcon from "../../assets/contacts/email.svg";
import githubIcon from "../../assets/contacts/github.svg";
import telegramIcon from "../../assets/contacts/telegram.svg";
import vkIcon from "../../assets/contacts/vk.svg";
import whatsappIcon from "../../assets/contacts/whatsapp.svg";

const contacts = [
  { icon: emailIcon, href: "mailto:georg137ternopol@gmail.com", label: "Email" },
  { icon: githubIcon, href: "https://github.com/ternopolskiy", label: "GitHub" },
  { icon: telegramIcon, href: "https://t.me/sex_akula", label: "Telegram" },
  { icon: vkIcon, href: "https://m.vk.com/idididididplex", label: "VK" },
  { icon: whatsappIcon, href: "https://wa.me/79994626748", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <p className="footer__text">Grazie per la vostra attenzione.</p>

        <div className="footer__contacts">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-link"
              aria-label={c.label}
            >
              <img src={c.icon} alt={c.label} />
            </a>
          ))}
        </div>

        <p className="footer__copyright">
          © {new Date().getFullYear()} Ternopolskiy Georgiy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
