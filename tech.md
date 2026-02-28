

# Полный исходный код портфолио — Ternopolskiy Georgiy

Ниже каждый файл проекта. Копируй файлы строго по указанным путям.

---

## ⚡ Быстрый старт

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install sass framer-motion react-router-dom react-intersection-observer gh-pages
```

Затем замени содержимое проекта файлами ниже.

---

## 📁 `index.html`

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Ternopolskiy Georgiy — Full-Stack Developer. Personal Portfolio."
    />
    <title>Ternopolskiy Georgiy | Portfolio</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 📁 `vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

---

## 📁 `package.json` (ключевые поля)

```json
{
  "name": "portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "homepage": "https://ternopolskiy.github.io/portfolio",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "framer-motion": "^11.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-intersection-observer": "^9.8.0",
    "react-router-dom": "^6.22.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "gh-pages": "^6.1.0",
    "sass": "^1.71.0",
    "vite": "^5.1.0"
  }
}
```

---

## 📁 `src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
```

---

## 📁 `src/App.jsx`

```jsx
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

---

## 📁 `src/data/skills.js`

```js
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
```

---

## 📁 `src/data/projects.js`

```js
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
```

---

## 🎨 SCSS-файлы

### 📁 `src/styles/abstracts/_variables.scss`

```scss
// ── Old Money Palette ──
$cream: #fdf6e3;
$navy: #001f3f;
$cool-grey: #c0c0c0;
$chocolate: #8b4513;
$beige: #eae0c8;

// ── Sicilian Palette ──
$black: #000000;
$crimson: #dc143c;
$gold: #ffd700;
$white: #ffffff;
$emerald: #008000;

// ── Typography ──
$font-primary: "Bodoni Moda", serif;

// ── Breakpoints ──
$desktop: 1200px;
$tablet: 768px;
$mobile: 480px;

// ── Spacing ──
$section-padding-y: 100px;
$container-width: 1200px;

// ── Transitions ──
$transition-default: 0.3s ease;
$transition-slow: 0.6s ease;
```

---

### 📁 `src/styles/abstracts/_mixins.scss`

```scss
@use "variables" as *;

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin section-padding {
  padding: $section-padding-y 0;
}

@mixin transition-default {
  transition: all $transition-default;
}

@mixin container {
  max-width: $container-width;
  margin: 0 auto;
  padding: 0 24px;
}

@mixin respond-to($bp) {
  @if $bp == desktop {
    @media (max-width: $desktop) {
      @content;
    }
  } @else if $bp == tablet {
    @media (max-width: $tablet) {
      @content;
    }
  } @else if $bp == mobile {
    @media (max-width: $mobile) {
      @content;
    }
  }
}
```

---

### 📁 `src/styles/abstracts/_animations.scss`

```scss
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleLine {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}
```

---

### 📁 `src/styles/abstracts/_index.scss`

```scss
@forward "variables";
@forward "mixins";
@forward "animations";
```

---

### 📁 `src/styles/base/_reset.scss`

```scss
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}
```

---

### 📁 `src/styles/base/_typography.scss`

```scss
@use "../abstracts" as *;

body {
  font-family: $font-primary;
  font-size: 16px;
  line-height: 1.6;
  color: $navy;
}

h1 {
  font-size: 72px;
  font-weight: 700;
  letter-spacing: 0.05em;

  @include respond-to(tablet) {
    font-size: 56px;
  }
  @include respond-to(mobile) {
    font-size: 40px;
  }
}

h2 {
  font-size: 42px;
  font-weight: 600;
  letter-spacing: 0.05em;

  @include respond-to(tablet) {
    font-size: 36px;
  }
  @include respond-to(mobile) {
    font-size: 28px;
  }
}

h3 {
  font-size: 28px;
  font-weight: 500;

  @include respond-to(mobile) {
    font-size: 22px;
  }
}

p {
  font-size: 18px;

  @include respond-to(mobile) {
    font-size: 16px;
  }
}
```

---

### 📁 `src/styles/base/_global.scss`

```scss
@use "../abstracts" as *;

body {
  background-color: $cream;
  overflow-x: hidden;
}

.container {
  @include container;
}

// ── Reusable Section Title ──
.section-title {
  margin-bottom: 20px;

  &--centered {
    text-align: center;

    .section-title__line {
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__subtitle {
    display: block;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: $gold;
    font-weight: 500;
    margin-bottom: 8px;
  }

  &__heading {
    color: $navy;
  }

  &__line {
    width: 60px;
    height: 2px;
    background: $gold;
    margin-top: 16px;
    transform-origin: left;
  }
}

// ── Selection ──
::selection {
  background: $gold;
  color: $navy;
}

// ── Accessibility ──
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

### 📁 `src/styles/components/_navbar.scss`

```scss
@use "../abstracts" as *;

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  @include transition-default;

  &--scrolled {
    background: rgba($cream, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 14px 0;
    box-shadow: 0 2px 30px rgba($black, 0.06);
  }

  &__inner {
    @include container;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* ── Logo ── */
  &__logo {
    font-size: 26px;
    font-weight: 700;
    color: $navy;
    letter-spacing: 0.08em;
    cursor: pointer;
    @include transition-default;
    user-select: none;

    &:hover {
      color: $gold;
    }
  }

  /* ── Desktop Links ── */
  &__links {
    display: flex;
    gap: 40px;

    @include respond-to(tablet) {
      display: none;
    }
  }

  &__link {
    font-size: 15px;
    font-weight: 500;
    color: $navy;
    position: relative;
    letter-spacing: 0.03em;
    @include transition-default;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: $gold;
      transition: width $transition-default;
    }

    &:hover {
      color: $chocolate;

      &::after {
        width: 100%;
      }
    }
  }

  /* ── Burger Button ── */
  &__burger {
    display: none;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    z-index: 1002;
    padding: 4px;

    @include respond-to(tablet) {
      display: flex;
    }

    span {
      display: block;
      width: 28px;
      height: 2px;
      background: $navy;
      border-radius: 2px;
      @include transition-default;
      transform-origin: center;
    }

    &--open {
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 6px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -6px);
      }
    }
  }
}

/* ── Mobile Burger Menu ── */
.burger-menu {
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($black, 0.25);
    z-index: 998;
  }

  &__panel {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background: $cream;
    z-index: 999;
    padding: 110px 40px 40px;
    box-shadow: -8px 0 40px rgba($black, 0.08);

    @include respond-to(mobile) {
      width: 100%;
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__link {
    font-size: 22px;
    font-weight: 500;
    color: $navy;
    letter-spacing: 0.03em;
    @include transition-default;

    &:hover {
      color: $gold;
      transform: translateX(8px);
    }
  }
}
```

---

### 📁 `src/styles/components/_hero.scss`

```scss
@use "../abstracts" as *;

.hero {
  min-height: 100vh;
  @include flex-center;
  flex-direction: column;
  position: relative;
  background-color: $cream;
  overflow: hidden;

  /* ── Paper texture overlay ── */
  &__texture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    pointer-events: none;
    object-fit: cover;
  }

  &__content {
    text-align: center;
    position: relative;
    z-index: 1;
    padding: 0 24px;
  }

  /* ── "Ciao." ── */
  &__greeting {
    font-size: 28px;
    font-weight: 400;
    color: $chocolate;
    margin-bottom: 20px;
    font-style: italic;

    @include respond-to(mobile) {
      font-size: 22px;
    }
  }

  /* ── Name with shimmer hover ── */
  &__name {
    font-size: 72px;
    font-weight: 700;
    color: $navy;
    letter-spacing: 0.05em;
    margin-bottom: 0;
    cursor: default;
    transition: color $transition-slow;

    @include respond-to(tablet) {
      font-size: 52px;
    }
    @include respond-to(mobile) {
      font-size: 34px;
    }

    &:hover {
      background: linear-gradient(
        90deg,
        $navy 0%,
        $gold 40%,
        $navy 80%
      );
      background-size: 200% auto;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmer 3s linear infinite;
    }
  }

  /* ── Gold divider ── */
  &__line {
    width: 120px;
    height: 2px;
    background: $gold;
    margin: 28px auto;
    transform-origin: center;
  }

  /* ── Subtitle ── */
  &__title {
    font-size: 20px;
    font-weight: 400;
    color: $cool-grey;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    @include respond-to(mobile) {
      font-size: 14px;
      letter-spacing: 0.08em;
    }
  }
}
```

---

### 📁 `src/styles/components/_about.scss`

```scss
@use "../abstracts" as *;

.about {
  @include section-padding;
  background: $cream;

  &__inner {
    @include container;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 80px;
    align-items: center;

    @include respond-to(tablet) {
      grid-template-columns: 1fr;
      gap: 40px;
      justify-items: center;
      text-align: center;
    }
  }

  /* ── Photo ── */
  &__photo-wrapper {
    @include flex-center;
  }

  &__photo {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    border: 3px solid $gold;
    object-fit: cover;
    box-shadow: 0 12px 40px rgba($black, 0.1);

    @include respond-to(mobile) {
      width: 200px;
      height: 200px;
    }
  }

  /* ── Text block ── */
  &__text {
    .section-title {
      margin-bottom: 28px;

      @include respond-to(tablet) {
        text-align: center;

        .section-title__line {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }

    p {
      color: rgba($navy, 0.8);
      margin-bottom: 14px;
      line-height: 1.8;

      &:first-of-type {
        font-size: 22px;
        font-weight: 500;
        color: $navy;

        @include respond-to(mobile) {
          font-size: 18px;
        }
      }
    }
  }
}
```

---

### 📁 `src/styles/components/_skills.scss`

```scss
@use "../abstracts" as *;

.skills {
  @include section-padding;
  background: $beige;

  &__inner {
    @include container;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 24px;
    margin-top: 50px;

    @include respond-to(mobile) {
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }
  }
}

/* ── Single Skill Card ── */
.skill-card {
  background: $white;
  border-radius: 14px;
  padding: 28px 18px 22px;
  text-align: center;
  border: 1px solid rgba($gold, 0.08);
  position: relative;
  @include transition-default;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 2px;
    background: $gold;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform $transition-default;
    border-radius: 1px;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba($black, 0.08);
    border-color: rgba($gold, 0.3);

    &::after {
      transform: scaleX(1);
    }
  }

  /* ── Icon ── */
  &__icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 14px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  /* ── Name ── */
  &__name {
    font-size: 16px;
    font-weight: 600;
    color: $navy;
    margin-bottom: 10px;
  }

  /* ── Level bars ── */
  &__level {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 10px;
  }

  &__bar {
    width: 22px;
    height: 3px;
    background: rgba($cool-grey, 0.35);
    border-radius: 2px;

    &--active {
      background: $gold;
    }

    &--glow {
      background: $gold;
      box-shadow: 0 0 6px rgba($gold, 0.55), 0 0 12px rgba($gold, 0.25);
    }
  }

  /* ── Description ── */
  &__description {
    font-size: 12px;
    color: rgba($navy, 0.55);
    line-height: 1.5;
  }
}
```

---

### 📁 `src/styles/components/_projects.scss`

```scss
@use "../abstracts" as *;

.projects {
  @include section-padding;
  background: $cream;

  &__inner {
    @include container;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 50px;

    @include respond-to(desktop) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include respond-to(mobile) {
      grid-template-columns: 1fr;
    }
  }
}

/* ── Single Project Card ── */
.project-card {
  background: $white;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba($beige, 0.6);
  position: relative;
  @include transition-default;
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: $gold;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform $transition-default;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 60px rgba($black, 0.1);

    &::after {
      transform: scaleX(1);
    }

    .project-card__image img {
      transform: scale(1.05);
    }
  }

  /* ── Image area ── */
  &__image {
    width: 100%;
    height: 200px;
    @include flex-center;
    background: $beige;
    padding: 30px;
    overflow: hidden;

    img {
      max-height: 100%;
      max-width: 80%;
      object-fit: contain;
      @include transition-default;
    }
  }

  /* ── Content ── */
  &__content {
    padding: 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    color: $navy;
    margin-bottom: 12px;
  }

  &__stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 14px;
  }

  &__tag {
    font-size: 11px;
    padding: 4px 12px;
    background: rgba($beige, 0.6);
    color: $chocolate;
    border-radius: 20px;
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  &__description {
    font-size: 14px;
    color: rgba($navy, 0.65);
    line-height: 1.6;
    margin-bottom: 20px;
    flex: 1;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 600;
    color: $navy;
    @include transition-default;
    align-self: flex-start;

    &::after {
      content: "→";
      display: inline-block;
      transition: transform $transition-default;
    }

    &:hover {
      color: $gold;

      &::after {
        transform: translateX(6px);
      }
    }
  }
}
```

---

### 📁 `src/styles/components/_footer.scss`

```scss
@use "../abstracts" as *;

.footer {
  background: $black;
  padding: 80px 0 40px;

  &__inner {
    @include container;
    text-align: center;
  }

  /* ── "Grazie…" ── */
  &__text {
    font-size: 28px;
    font-weight: 400;
    color: $white;
    font-style: italic;
    margin-bottom: 40px;
    letter-spacing: 0.02em;

    @include respond-to(mobile) {
      font-size: 20px;
    }
  }

  /* ── Contact icons ── */
  &__contacts {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 48px;
  }

  &__contact-link {
    @include flex-center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    @include transition-default;

    img {
      width: 24px;
      height: 24px;
      filter: brightness(0) invert(1);
      @include transition-default;
    }

    &:hover {
      transform: scale(1.15);
      background: rgba($gold, 0.1);

      img {
        filter: brightness(0) invert(1) drop-shadow(0 0 6px rgba($gold, 0.8));
      }
    }
  }

  /* ── Bottom line ── */
  &__copyright {
    font-size: 13px;
    color: rgba($white, 0.35);
    padding-top: 32px;
    border-top: 1px solid rgba($white, 0.08);
    letter-spacing: 0.02em;
  }
}
```

---

### 📁 `src/styles/main.scss`

```scss
// ── Abstracts (variables, mixins, animations) ──
@use "abstracts";

// ── Base ──
@use "base/reset";
@use "base/typography";
@use "base/global";

// ── Components ──
@use "components/navbar";
@use "components/hero";
@use "components/about";
@use "components/skills";
@use "components/projects";
@use "components/footer";
```

---

## ⚛️ React-компоненты

### 📁 `src/components/layout/Navbar.jsx`

```jsx
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
```

---

### 📁 `src/components/ui/BurgerMenu.jsx`

```jsx
import { motion } from "framer-motion";

const BurgerMenu = ({ links, onNavigate, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <motion.div
        className="burger-menu__overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="burger-menu__panel"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
      >
        <div className="burger-menu__links">
          {links.map((link, i) => (
            <motion.button
              key={link.target}
              className="burger-menu__link"
              onClick={() => onNavigate(link.target)}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
            >
              {link.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default BurgerMenu;
```

---

### 📁 `src/components/ui/SectionTitle.jsx`

```jsx
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <div
      className={`section-title${centered ? " section-title--centered" : ""}`}
    >
      {subtitle && <span className="section-title__subtitle">{subtitle}</span>}
      <h2 className="section-title__heading">{title}</h2>
      <motion.div
        className="section-title__line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
};

export default SectionTitle;
```

---

### 📁 `src/components/sections/Hero.jsx`

```jsx
import { motion } from "framer-motion";
import texture from "../../assets/old_paper_texture.svg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <img
        src={texture}
        alt=""
        className="hero__texture"
        aria-hidden="true"
      />

      <div className="hero__content">
        <motion.p
          className="hero__greeting"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ciao.
        </motion.p>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Ternopolskiy Georgiy
        </motion.h1>

        <motion.div
          className="hero__line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        />

        <motion.p
          className="hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          Full-Stack Developer
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
```

---

### 📁 `src/components/sections/About.jsx`

```jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import photo from "../../assets/gosha.svg";
import SectionTitle from "../ui/SectionTitle";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__inner">
        {/* Photo */}
        <motion.div
          className="about__photo-wrapper"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={photo}
            alt="Georgiy Ternopolskiy"
            className="about__photo"
            loading="lazy"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="about__text"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <SectionTitle title="About Me" subtitle="Обо мне" />

          <p>Привет!</p>

          <p>
            Меня зовут Георгий, мне 17&nbsp;лет и я Full-Stack Developer.
            Учусь на 3&nbsp;курсе в Новосибирском колледже печати и
            информационных технологий на специальности &laquo;Информационные
            Системы и Программирование&raquo;.
          </p>

          <p>
            Двукратный призёр регионального чемпионата
            &laquo;Профессионалы&raquo;&nbsp;— 2025&nbsp;— 3-е место&nbsp;🥉,
            2026&nbsp;— 3-е место&nbsp;🥉
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
```

---

### 📁 `src/components/ui/SkillCard.jsx`

```jsx
const LEVEL_MAP = {
  basic: 1,
  medium: 2,
  middle: 3,
  high: 4,
  "middle+": 4,
};

const SkillCard = ({ skill }) => {
  const { name, icon, level, description } = skill;
  const filled = LEVEL_MAP[level] ?? 1;
  const glow = level === "middle+";

  return (
    <div className="skill-card">
      <div className="skill-card__icon">
        <img src={icon} alt={name} loading="lazy" />
      </div>

      <h3 className="skill-card__name">{name}</h3>

      <div className="skill-card__level" aria-label={`Уровень: ${level}`}>
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`skill-card__bar${
              i <= filled
                ? glow
                  ? " skill-card__bar--glow"
                  : " skill-card__bar--active"
                : ""
            }`}
          />
        ))}
      </div>

      <p className="skill-card__description">{description}</p>
    </div>
  );
};

export default SkillCard;
```

---

### 📁 `src/components/sections/Skills.jsx`

```jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../../data/skills";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills__inner">
        <SectionTitle title="Skills" subtitle="Навыки" centered />

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
```

---

### 📁 `src/components/ui/ProjectCard.jsx`

```jsx
const ProjectCard = ({ project }) => {
  const { title, image, stack, description, link } = project;

  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>

        <div className="project-card__stack">
          {stack.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>

        <p className="project-card__description">{description}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
```

---

### 📁 `src/components/sections/Projects.jsx`

```jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../../data/projects";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects__inner">
        <SectionTitle title="Projects" subtitle="Проекты" centered />

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

---

### 📁 `src/components/layout/Footer.jsx`

```jsx
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
```

---

## 🚀 Деплой

```bash
# Сборка и деплой одной командой
npm run deploy
```

На GitHub:
1. **Settings → Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `gh-pages` / `/ (root)`

Сайт будет доступен по адресу:
```
https://ternopolskiy.github.io/portfolio
```

---

## 📋 Чек-лист перед деплоем

| # | Пункт | Статус |
|---|-------|--------|
| 1 | Все SVG-ассеты лежат в `src/assets/` по указанным путям | ☐ |
| 2 | `gosha.svg` — твоя фотография в SVG/PNG | ☐ |
| 3 | `old_paper_texture.svg` — текстура для hero | ☐ |
| 4 | `npm run dev` запускается без ошибок | ☐ |
| 5 | Адаптивность проверена на 480 / 768 / 1200px | ☐ |
| 6 | Бургер-меню работает корректно | ☐ |
| 7 | Все ссылки на GitHub-проекты открываются | ☐ |
| 8 | Lighthouse ≥ 90 по всем метрикам | ☐ |
| 9 | `npm run deploy` — сайт на GitHub Pages | ☐ |

> **Примечание**: если `gosha.svg` — это растровая фотография, переименуй в `gosha.png` / `.jpg` и обнови импорт в `About.jsx`. SVG подходит для векторной графики; для фото лучше использовать `.webp` или `.jpg` для оптимального размера.