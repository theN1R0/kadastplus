# 🧠 НейроПоиск

## Установка и запуск проекта

### 1. Клонируйте репозиторий:
```sh
git clone https://github.com/your-repo/neurosearch.git
cd neurosearch
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
├── src/
│   ├── assets/          # Медиафайлы (иконки, изображения)
│   ├── css/             # Файлы стилей (SCSS, CSS)
│   ├── sections/        # Блоки страниц (Hero, Footer, Contacts и т. д.)
│   ├── App.vue          # Корневой Vue-компонент
│   └── main.js          # Точка входа в приложение
├── public/              # Публичные файлы (index.html, favicon)
├── .gitignore           # Исключения для Git
├── package.json         # Зависимости проекта
├── README.md            # Описание проекта
└── vue.config.js        # Конфигурация Vue.js
```
## 🌐 Предпросмотр
![Предпросмотр](./src/assets/prew.png)
