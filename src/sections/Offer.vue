<template>
  <section id="Offer" class="offer">
    <div class="container">
      <h2>Наше предложение</h2>
      <p>
        Мы предлагаем не просто продукт, а полный цикл внедрения и сопровождения, чтобы НейроПоиск стал
        максимально полезным инструментом для вашего предприятия. Наше предложение включает:
      </p>

      <div class="offer-content">
        <div class="timeline">
          <div v-for="(item, index) in offers" :key="index" class="timeline-item">
            <div class="timeline-icon" :class="{ blue: index % 2 === 0, black: index % 2 !== 0 }"></div>
            <div class="timeline-content">
              <h3>{{ item.title }}</h3>
              <ul>
                <li v-for="(point, i) in item.points" :key="i">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const offers = [
  {
    title: "Лицензирование",
    points: [
      "Предоставление лицензии на использование НейроПоиска",
      "Заключение лицензионного соглашения, регулирующего права и обязанности сторон",
    ],
  },
  {
    title: "Сопровождение",
    points: [
      "Техническая поддержка на всех этапах использования продукта",
      "Регулярное обновление программного обеспечения для повышения эффективности и безопасности",
      "Оперативное устранение возникающих вопросов и проблем",
    ],
  },
  {
    title: "Наполнение базы знаний",
    points: [
      "Помощь в загрузке и систематизации документов заказчика в НейроПоиск",
      "Возможность выполнения работ на территории заказчика для обеспечения конфиденциальности данных",
      "Настройка структуры документов и их фрагментов для максимально точного поиска",
    ],
  },
  {
    title: "Обучение сотрудников",
    points: [
      "Проведение обучающих сессий для сотрудников заказчика",
      "Обучение работе с интерфейсом, настройке документов и использованию всех функций НейроПоиска",
      "Предоставление методических материалов и инструкций для самостоятельного использования",
    ],
  },
];
</script>

<style scoped lang="scss">
@import "@/css/variables.scss";

.offer {
  padding: 80px 0;
  background-color: #eeeeee;

  .container {
    max-width: 1700px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 40px;
    max-width: 900px;
  }

  .offer-content {
    position: relative;
    display: flex;
  }

  .timeline {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 25px;
      top: 5px;
      width: 5px;
      height: 550px;
      background: #000;
    }
  }

  .timeline-item {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    position: relative;
  }

  .timeline-icon {
    width: 35px;
    height: 35px;
    border-radius: 4px;
    position: absolute;
    left: 10px;
    top: 5px;
  }

  .timeline-icon.blue {
    background: #0f2a55;
  }

  .timeline-icon.black {
    background: #242424;
  }

  .timeline-content {
    margin-left: 70px;
    max-width: 900px;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 10px;
  }

  ul {
    padding-left: 20px;
  }

  li {
    font-size: 1rem;
    color: #333;
    margin-bottom: 5px;
    font-weight: bold;
  }

  @media (max-width: 992px) {
    .timeline {
      padding-left: 30px;
    }

    .timeline::before {
      left: 14px;
    }

    .timeline-item {
      flex-direction: column;
      align-items: flex-start;
    }

    .timeline-icon {
      margin-bottom: 10px;
    }

    .timeline-content {
      max-width: 100%;
      margin-left: 50px;
    }
  }
}
</style>
