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
    description: "Основной язык. FastAPI, автоматизация, Telegram-боты",
  },
  {
    name: "JavaScript",
    icon: javascript,
    level: "middle",
    description: "Фронтенд, API-интеграции, интерактивные интерфейсы",
  },
  {
    name: "React",
    icon: react,
    level: "middle",
    description: "SPA, компонентный подход, хуки, Vite",
  },
  {
    name: "Java",
    icon: java,
    level: "medium",
    description: "Spring Boot, серверная разработка, Clean Architecture",
  },
  {
    name: "HTML5",
    icon: html,
    level: "high",
    description: "Семантическая вёрстка, доступность, SEO",
  },
  {
    name: "CSS3 / SCSS",
    icon: css,
    level: "high",
    description: "Адаптивная вёрстка, анимации, препроцессоры",
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    level: "middle",
    description: "Проектирование БД, сложные запросы, миграции",
  },
  {
    name: "SQLite",
    icon: sqlite,
    level: "middle",
    description: "Локальные базы данных, лёгкое хранилище",
  },
  {
    name: "Redis",
    icon: redis,
    level: "middle",
    description: "Кэширование, сессии, очереди задач",
  },
  {
    name: "Aiogram",
    icon: aiogram,
    level: "middle+",
    description: "Telegram-боты, FSM, middleware, webhooks",
  },
  {
    name: "Git",
    icon: git,
    level: "high",
    description: "Контроль версий, branching, GitHub",
  },
  {
    name: "C++",
    icon: cpp,
    level: "basic",
    description: "Основы алгоритмов, структуры данных",
  },
  {
    name: "C#",
    icon: csharp,
    level: "basic",
    description: "Основы ООП, .NET Framework",
  },
  {
    name: "Figma",
    icon: figma,
    level: "medium",
    description: "Прототипирование, UI/UX дизайн",
  },
  {
    name: "Photoshop",
    icon: photoshop,
    level: "basic",
    description: "Обработка изображений, графический дизайн",
  },
  {
    name: "Premiere Pro",
    icon: premiere,
    level: "basic",
    description: "Монтаж видео, цветокоррекция",
  },
  {
    name: "Video Production",
    icon: youtube,
    level: "medium",
    description: "Создание и монтаж видеоконтента",
  },
  {
    name: "Arduino",
    icon: arduino,
    level: "basic",
    description: "IoT-проекты, микроконтроллеры, датчики",
  },
];
