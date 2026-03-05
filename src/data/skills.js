import python from "../assets/skills/devicon_python.svg";
import javascript from "../assets/skills/logos_javascript.svg";
import html from "../assets/skills/material-icon-theme_html.svg";
import css from "../assets/skills/skill-icons_css.svg";
import react from "../assets/skills/devicon_react-wordmark.svg";
import java from "../assets/skills/logos_java.svg";
import cpp from "../assets/skills/cpp.svg";
import csharp from "../assets/skills/csharp.svg";
import postgresql from "../assets/skills/devicon_postgresql-wordmark.svg";
import sqlite from "../assets/skills/skill-icons_sqlite.svg";
import redis from "../assets/skills/devicon_redis.svg";
import aiogram from "../assets/skills/aiogram.svg";
import git from "../assets/skills/skill-icons_git.svg";
import figma from "../assets/skills/logos_figma.svg";
import photoshop from "../assets/skills/devicon_photoshop.svg";
import premiere from "../assets/skills/skill-icons_premiere.svg";
import arduino from "../assets/skills/skill-icons_arduino.svg";
import youtube from "../assets/skills/logos_youtube-icon.svg";

export const skills = [
  {
    name: "Python",
    icon: python,
    level: "middle+",
    description: {
      ru: "Основной язык. FastAPI, автоматизация, Telegram-боты",
      en: "Primary language. FastAPI, automation, Telegram bots",
    },
  },
  {
    name: "JavaScript",
    icon: javascript,
    level: "middle",
    description: {
      ru: "Фронтенд, API-интеграции, интерактивные интерфейсы",
      en: "Frontend, API integrations, interactive interfaces",
    },
  },
  {
    name: "React",
    icon: react,
    level: "middle",
    description: {
      ru: "SPA, компонентный подход, хуки, Vite",
      en: "SPA, component architecture, hooks, Vite",
    },
  },
  {
    name: "Java",
    icon: java,
    level: "medium",
    description: {
      ru: "Spring Boot, серверная разработка, Clean Architecture",
      en: "Spring Boot, backend development, Clean Architecture",
    },
  },
  {
    name: "HTML5",
    icon: html,
    level: "high",
    description: {
      ru: "Семантическая вёрстка, доступность, SEO",
      en: "Semantic markup, accessibility, SEO",
    },
  },
  {
    name: "CSS3 / SCSS",
    icon: css,
    level: "high",
    description: {
      ru: "Адаптивная вёрстка, анимации, препроцессоры",
      en: "Responsive design, animations, preprocessors",
    },
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    level: "middle",
    description: {
      ru: "Проектирование БД, сложные запросы, миграции",
      en: "Database design, complex queries, migrations",
    },
  },
  {
    name: "SQLite",
    icon: sqlite,
    level: "middle",
    description: {
      ru: "Локальные базы данных, лёгкое хранилище",
      en: "Local databases, lightweight storage",
    },
  },
  {
    name: "Redis",
    icon: redis,
    level: "middle",
    description: {
      ru: "Кэширование, сессии, очереди задач",
      en: "Caching, sessions, task queues",
    },
  },
  {
    name: "Aiogram",
    icon: aiogram,
    level: "middle+",
    description: {
      ru: "Telegram-боты, FSM, middleware, webhooks",
      en: "Telegram bots, FSM, middleware, webhooks",
    },
  },
  {
    name: "Git",
    icon: git,
    level: "high",
    description: {
      ru: "Контроль версий, branching, GitHub",
      en: "Version control, branching, GitHub",
    },
  },
  {
    name: "C++",
    icon: cpp,
    level: "basic",
    description: {
      ru: "Основы алгоритмов, структуры данных",
      en: "Algorithm basics, data structures",
    },
  },
  {
    name: "C#",
    icon: csharp,
    level: "basic",
    description: {
      ru: "Основы ООП, .NET Framework",
      en: "OOP basics, .NET Framework",
    },
  },
  {
    name: "Figma",
    icon: figma,
    level: "medium",
    description: {
      ru: "Прототипирование, UI/UX дизайн",
      en: "Prototyping, UI/UX design",
    },
  },
  {
    name: "Photoshop",
    icon: photoshop,
    level: "basic",
    description: {
      ru: "Обработка изображений, графический дизайн",
      en: "Image processing, graphic design",
    },
  },
  {
    name: "Premiere Pro",
    icon: premiere,
    level: "basic",
    description: {
      ru: "Монтаж видео, цветокоррекция",
      en: "Video editing, color grading",
    },
  },
  {
    name: "Video Production",
    icon: youtube,
    level: "medium",
    description: {
      ru: "Создание и монтаж видеоконтента",
      en: "Video content creation and editing",
    },
  },
  {
    name: "Arduino",
    icon: arduino,
    level: "basic",
    description: {
      ru: "IoT-проекты, микроконтроллеры, датчики",
      en: "IoT projects, microcontrollers, sensors",
    },
  },
];
