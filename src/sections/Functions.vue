<template>
  <section id="Functions" class="functions">
    <div class="container">
      <h2>Функции</h2>
      <p class="description">
        Система поддерживает несколько ролей пользователей:
      </p>

      <!-- Карточки ролей -->
      <div class="roles">
        <div class="role-card">
          <font-awesome-icon icon="search" class="role-icon" />
          <h3>Читатели</h3>
          <p>Ищут конкретные фрагменты текста из документов, задавая вопросы на естественном языке.</p>
        </div>
        <div class="role-card">
          <font-awesome-icon icon="file-alt" class="role-icon" />
          <h3>Редакторы</h3>
          <p>Подготавливают документы для поиска, добавляют или изменяют содержимое и связанные с ним вопросы.</p>
        </div>
        <div class="role-card">
          <font-awesome-icon icon="cogs" class="role-icon" />
          <h3>Администраторы</h3>
          <p>Управляют правами пользователей, группами документов и настраивают систему под нужды компании.</p>
        </div>
      </div>
      <!-- Таблица функций -->
      <div class="table-responsive">
        <table class="functions-table">
          <thead>
          <tr>
            <th>Функция</th>
            <th>Читатель</th>
            <th>Редактор</th>
            <th>Администратор</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(func, index) in functions" :key="index" :class="{ highlighted: func.highlighted }">
            <td>{{ func.name }}</td>
            <td><font-awesome-icon v-if="func.reader" icon="check" /></td>
            <td><font-awesome-icon v-if="func.editor" icon="check" /></td>
            <td><font-awesome-icon v-if="func.admin" icon="check" /></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const functions = ref([
  { name: "Выбор группы документов", reader: true, editor: true, admin: true },
  { name: "Выбор документа для поиска", reader: true, editor: true, admin: true },
  { name: "Отправка вопроса, получение ответа в виде чата", reader: true, editor: true, admin: true },
  { name: "Like/dislike ответа", reader: true, editor: true, admin: true },
  { name: "Очистка чата с вопросами и ответами", reader: true, editor: true, admin: true, highlighted: true },
  { name: "Выбор группы документов для редактирования", reader: false, editor: true, admin: true },
  { name: "Выбор документа для редактирования", reader: false, editor: true, admin: true },
  { name: "Добавление, удаление, изменение блоков текста в документе", reader: false, editor: true, admin: true },
  { name: "Добавление, удаление, изменение вопросов к блоку текста", reader: false, editor: true, admin: true },
  { name: "Просмотр like/dislike ответов", reader: false, editor: true, admin: true },
  { name: "Добавление, удаление, изменение группы документов", reader: false, editor: false, admin: true },
  { name: "Добавление, удаление, изменение документов", reader: false, editor: false, admin: true },
  { name: "Поиск пользователей в Active Directory по ФИО", reader: false, editor: false, admin: true },
  { name: "Настройка прав пользователей (роли, группы, доступ)", reader: false, editor: false, admin: true },
]);
</script>

<style scoped lang="scss">
@import "@/css/variables.scss";

.functions {
  padding: 80px 0;
  background-color: #ffffff;

  .container {
    max-width: 1700px;
    margin: 0 auto;
    text-align: left;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #1a1a1a;
  }

  .description {
    font-size: 1.1rem;
    margin-bottom: 30px;
    color: #444;
  }

  /* Карточки ролей */
  .roles {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    .role-card {
      background: #0f2a55;
      color: white;
      padding: 30px;
      border-radius: 10px;
      flex: 1;
      margin: 0 10px;
      text-align: left;
      min-height: 250px;
      max-width: 530px;

      .role-icon {
        font-size: 2rem;
        margin-bottom: 10px;
      }

      h3 {
        font-size: 1.3rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  /* Таблица функций */
  .table-responsive {
    overflow-x: auto;
  }

  .functions-table {
    width: 100%;
    font-size: 1rem;

    th, td {
      padding: 16px; /* Увеличен отступ */
      color: #242424;
      font-weight: bold;
    }

    th {
      font-weight: bold;
      text-align: center;
      border-bottom: 2px solid #242424;
      font-size: 1.6rem;
    }

    td {
      font-size: 1rem;
      text-align: center;
    }

    /* Первая колонка (названия функций) */
    td:first-child, th:first-child {
      text-align: left;
      min-width: 350px; /* Фиксированная ширина для названий функций */
    }

    /* Подсветка выделенной строки */
    .highlighted {
      background-color: #c9dbf8; /* Сделал более насыщенный цвет */
    }

    /* Иконки галочек */
    td svg {
      color: #0f2a55;
      font-size: 1.9rem;
    }
  }
}
</style>
