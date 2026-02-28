import urlShortener from "../assets/projects/url_shortener.svg";
import goshahub from "../assets/projects/goshahub.svg";
import astrotracker from "../assets/projects/astrotracker.svg";
import telegram from "../assets/projects/logos_telegram.svg";
import sicilia from "../assets/projects/starter_sicilia.svg";
import pokemon from "../assets/projects/pokemon.svg";
import kroki from "../assets/projects/kroki.svg";
import arsenal from "../assets/projects/arsenal.svg";

export const projects = [
  {
    title: "URL-Shortener",
    image: urlShortener,
    stack: ["FastAPI", "SQLite"],
    description:
      "Современная платформа для сокращения URL с аналитикой, QR-кодами, био-страницами и адаптивным UI с тёмным режимом.",
    link: "https://github.com/ternopolskiy/url_shortener",
  },
  {
    title: "GoshaHub",
    image: goshahub,
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    description:
      "Веб-платформа для общения с AI-моделями (DeepSeek, Grok, Qwen) через OpenRouter API. Clean Architecture и SOLID.",
    link: "https://github.com/ternopolskiy/goshahub",
  },
  {
    title: "AstroTracker",
    image: astrotracker,
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "Socket.io", "NASA API"],
    description:
      "Веб-приложение для отслеживания космических событий: астероидов, запусков ракет, позиции МКС и солнечной активности.",
    link: "https://github.com/ternopolskiy/practice",
  },
  {
    title: "Принтюша — Telegram Bot",
    image: telegram,
    stack: ["Aiogram", "PostgreSQL", "Redis"],
    description:
      "Telegram-бот для студентов и преподавателей колледжа НКПиИТ — быстрый доступ к актуальному расписанию занятий.",
    link: "https://github.com/ternopolskiy/prentusha",
  },
  {
    title: "Sicilia, 1900 — Longread",
    image: sicilia,
    stack: ["HTML", "CSS", "SCSS", "JS", "React", "GSAP"],
    description:
      "Иммерсивный веб-лонгрид об истории Сицилии времён Коза Ностра. Кинематографичный дизайн и плавные анимации.",
    link: "https://github.com/ternopolskiy/sicilia-longread",
  },
  {
    title: "FFmpeg Converter Bot",
    image: telegram,
    stack: ["Aiogram", "PostgreSQL", "Redis", "FFmpeg"],
    description:
      "Telegram-бот для конвертации аудиофайлов FLAC → MP3 (320 кбит/с) с сохранением метаданных.",
    link: "https://github.com/ternopolskiy/ffmpeg_converter_bot",
  },
  {
    title: "Dark Fantasy Pokémon",
    image: pokemon,
    stack: ["HTML", "CSS", "JS", "PokéAPI"],
    description:
      "Покемоны в стиле тёмного фэнтези — мрачная, таинственная атмосфера и уникальный визуальный стиль.",
    link: "https://github.com/ternopolskiy/pokemon",
  },
  {
    title: "Kroki Визуализатор",
    image: kroki,
    stack: ["HTML", "CSS", "JS", "Kroki.io API"],
    description:
      "Удобный интерфейс для создания, редактирования и экспорта диаграмм через Kroki.io API.",
    link: "https://github.com/ternopolskiy/kroki-visualizer",
  },
  {
    title: "Arsenal Tactics",
    image: arsenal,
    stack: ["HTML", "CSS", "JS"],
    description:
      "Интерактивный сайт для анализа и создания футбольных тактик с встроенным тактическим редактором.",
    link: "https://github.com/ternopolskiy/arsenal-tactics",
  },
];
