<template>
  <section id="About" class="about">
    <div class="container">
      <div class="about-content">
        <h2>О решении</h2>
        <p>
          НейроПоиск — интеллектуальная система для быстрого и точного поиска
          информации в документах предприятия. Она позволяет находить
          конкретные выдержки из корпоративных документов, просто задавая
          вопросы на естественном языке.
        </p>
        <p>
          Благодаря технологиям искусственного интеллекта НейроПоиск
          анализирует смысл текста, а не только ключевые слова, что делает поиск
          интуитивным и максимально точным. Пользователю не нужно помнить
          формулировки — достаточно описать запрос своими словами.
        </p>
      </div>
      <div class="about-image">
        <img src="@/assets/about-image.png" alt="Пример работы системы" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/css/variables.scss";

.about {
  background-color: white;
  padding: 100px 0; // Увеличили отступ сверху и снизу

  .container {
    max-width: 1700px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .about-content {
    max-width: 700px;
    text-align: left;

    h2 {
      font-size: 2.2rem;
      font-weight: bold;
      margin-bottom: 25px;
      color: #1a1a1a;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.2;
      margin-bottom: 20px;
      color: #222;
    }
  }

  .about-image {
    max-width: 60%;
    margin-left: 100px;

    img {
      width: 95%;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
