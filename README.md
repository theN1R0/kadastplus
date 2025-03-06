# 🚧 КадастрПлюс

## Установка и запуск проекта

### 1. Клонируйте репозиторий:
```sh
git clone https://github.com/theN1R0/kadastplus.git
cd kadastplus
```

### 2. Установите зависимости:
```sh
npm install
```

### 3. Запустите локальный сервер разработки:
```sh
npm run serve
```
Открывайте в браузере: [http://localhost:8080](http://localhost:8080)

### 4. Сборка проекта для продакшена:
```sh
npm run build
```
Файлы сборки появятся в папке `dist/`. Эти файлы можно загрузить на веб-сервер.

## 📂 Структура проекта

```bash
├── public/
│   ├── favicon.ico          # Иконка сайта
│   └── index.html           # HTML-шаблон
├── src/
│   ├── assets/              # Медиафайлы (изображения, иконки)
│   ├── css/                 # Стили проекта
│   │   ├── main.scss        # Главный файл стилей
│   │   ├── mixins.scss      # Миксины для SCSS
│   │   ├── service.scss     # Стили для страниц услуг
│   │   └── variables.scss   # Переменные SCSS
│   ├── router/
│   │   └── index.js         # Настройка маршрутизации
│   ├── sections/            # Компоненты секций главной страницы
│   │   ├── About.vue
│   │   ├── Contacts.vue
│   │   ├── Features.vue
│   │   ├── Footer.vue
│   │   ├── Functions.vue
│   │   ├── Header.vue
│   │   ├── Hero.vue
│   │   ├── Offer.vue
│   │   ├── Pricing.vue
│   │   ├── Requirements.vue
│   │   ├── Whom.vue
│   │   └── Whyus.vue
│   ├── service/             # Страницы услуг
│   │   ├── Act.vue
│   │   ├── Garaj.vue
│   │   ├── Mej.vue
│   │   ├── Obiedinenie.vue
│   │   ├── Oformlenie.vue
│   │   ├── Pereraspredelenie.vue
│   │   ├── Plan.vue
│   │   ├── Proekt.vue
│   │   ├── Razdel.vue
│   │   ├── Topo.vue
│   │   └── Vynos.vue
│   ├── Home.vue             # Главная страница
│   ├── App.vue              # Корневой компонент приложения
│   └── main.js              # Точка входа в приложение
├── .gitignore               # Файл исключений для Git
├── babel.config.js          # Конфигурация Babel
├── jsconfig.json            # Конфигурация для IntelliSense
├── package.json             # Файл зависимостей npm
├── package-lock.json        # Лок-файл npm
├── README.md                # Документация проекта
└── vue.config.js            # Конфигурация сборки Vue CLI

```
## 🌐 Предпросмотр
![Предпросмотр](./src/assets/prew.png)
