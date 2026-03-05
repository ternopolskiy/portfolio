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
    description: {
      ru: "Современная платформа для сокращения URL с аналитикой, QR-кодами, био-страницами и адаптивным UI с тёмным режимом.",
      en: "Modern URL shortening platform with analytics, QR codes, bio pages and responsive UI with dark mode.",
    },
    link: "https://github.com/ternopolskiy/url_shortener",
  },
  {
    title: "GoshaHub",
    image: goshahub,
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    description: {
      ru: "Веб-платформа для общения с AI-моделями (DeepSeek, Grok, Qwen) через OpenRouter API. Clean Architecture и SOLID.",
      en: "Web platform for communicating with AI models (DeepSeek, Grok, Qwen) via OpenRouter API. Clean Architecture & SOLID.",
    },
    link: "https://github.com/ternopolskiy/goshahub",
  },
  {
    title: "AstroTracker",
    image: astrotracker,
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "Socket.io", "NASA API"],
    description: {
      ru: "Веб-приложение для отслеживания космических событий: астероидов, запусков ракет, позиции МКС и солнечной активности.",
      en: "Web app for tracking space events: asteroids, rocket launches, ISS position and solar activity in real time.",
    },
    link: "https://github.com/ternopolskiy/practice",
  },
  {
    title: {
      ru: "Принтюша — Telegram-бот",
      en: "Printyusha — Telegram Bot",
    },
    image: telegram,
    stack: ["Aiogram", "PostgreSQL", "Redis"],
    description: {
      ru: "Telegram-бот для студентов и преподавателей колледжа НКПиИТ — быстрый доступ к актуальному расписанию занятий.",
      en: "Telegram bot for students and teachers of NKPiIT college — quick access to up-to-date class schedules.",
    },
    link: "https://github.com/ternopolskiy/prentusha",
  },
  {
    title: "Sicilia, 1900 — Longread",
    image: sicilia,
    stack: ["HTML", "CSS", "SCSS", "JS", "React", "GSAP"],
    description: {
      ru: "Иммерсивный веб-лонгрид об истории Сицилии времён Коза Ностра. Кинематографичный дизайн и плавные анимации.",
      en: "Immersive web longread about the history of Sicily during the rise of Cosa Nostra. Cinematic design and smooth animations.",
    },
    link: "https://github.com/ternopolskiy/sicilia-longread",
  },
  {
    title: "FFmpeg Converter Bot",
    image: telegram,
    stack: ["Aiogram", "PostgreSQL", "Redis", "FFmpeg"],
    description: {
      ru: "Telegram-бот для конвертации аудиофайлов FLAC → MP3 (320 кбит/с) с сохранением метаданных.",
      en: "Telegram bot for converting FLAC audio to high-quality MP3 (320 kbps) while preserving metadata.",
    },
    link: "https://github.com/ternopolskiy/ffmpeg_converter_bot",
  },
  {
    title: "Dark Fantasy Pokémon",
    image: pokemon,
    stack: ["HTML", "CSS", "JS", "PokéAPI"],
    description: {
      ru: "Покемоны в стиле тёмного фэнтези — мрачная, таинственная атмосфера и уникальный визуальный стиль.",
      en: "Pokémon reimagined in dark fantasy style — grim, mysterious atmosphere and unique visual design.",
    },
    link: "https://github.com/ternopolskiy/pokemon",
  },
  {
    title: {
      ru: "Kroki Визуализатор",
      en: "Kroki Visualizer",
    },
    image: kroki,
    stack: ["HTML", "CSS", "JS", "Kroki.io API"],
    description: {
      ru: "Удобный интерфейс для создания, редактирования и экспорта диаграмм через Kroki.io API.",
      en: "Convenient interface for creating, editing and exporting diagrams via Kroki.io API.",
    },
    link: "https://github.com/ternopolskiy/kroki-visualizer",
  },
  {
    title: "Arsenal Tactics",
    image: arsenal,
    stack: ["HTML", "CSS", "JS"],
    description: {
      ru: "Интерактивный сайт для анализа и создания футбольных тактик с встроенным тактическим редактором.",
      en: "Interactive website for analyzing and creating football tactics with a built-in tactical editor.",
    },
    link: "https://github.com/ternopolskiy/arsenal-tactics",
  },
];
