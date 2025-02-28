<template>
  <section id="whom" class="whom">
    <div class="container">
      <h2>Для кого?</h2>
      <div class="carousel">
        <transition name="fade" mode="out-in">
          <div class="carousel-item" :key="currentSlide">
            <div class="content">
              <h3>{{ slides[currentSlide].title }}</h3>
              <p>{{ slides[currentSlide].text }}</p>
              <span class="slide-counter">{{ currentSlide + 1 }} / {{ slides.length }}</span>
            </div>
            <div class="image">
              <img :src="slides[currentSlide].image" :alt="slides[currentSlide].title" />
            </div>
          </div>
        </transition>
      </div>
      <div class="carousel-controls">
        <button class="prev-btn" @click="prevSlide">
          <font-awesome-icon icon="chevron-left" />
        </button>
        <button class="next-btn" @click="nextSlide">
          <font-awesome-icon icon="chevron-right" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import industryImg from "@/assets/industry.jpg";
import GovernmentImg from "@/assets/Government.jpg";
import scienceImg from "@/assets/science.jpg";
import legalImg from "@/assets/legal.jpg";

const slides = ref([
  {
    title: "Промышленные предприятия",
    text: "Производственные компании сталкиваются с проблемой: важная\n" +
        "техническая информация часто \"заперта\" в головах опытных сотрудников или\n" +
        "разбросана по тысячам технических документов. Когда возникает\n" +
        "необходимость в быстром доступе к конкретному параметру технологии или\n" +
        "характеристике оборудования, время на поиск может стоить компании\n" +
        "значительных денег. НейроПоиск преобразует корпоративную документацию\n" +
        "в интерактивную базу знаний, где каждый сотрудник может получить точный\n" +
        "ответ на свой вопрос.",
    image: industryImg,
  },
  {
    title: "Государственные организации",
    text: "Госструктуры работают с большим объемом документов, регламентов и нормативов. НейроПоиск помогает мгновенно находить нужную информацию и снижает бюрократическую нагрузку...",
    image: GovernmentImg,
  },
  {
    title: "Научные и образовательные учреждения",
    text: "Вузы, НИИ и библиотеки могут быстро искать информацию в статьях, патентах и исследованиях. Это ускоряет научные открытия и обучение...",
    image: scienceImg,
  },
  {
    title: "Юридические компании",
    text: "Адвокаты и юристы обрабатывают тысячи страниц документов. НейроПоиск помогает быстро находить прецеденты и законы...",
    image: legalImg,
  },
]);

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};
</script>

<style scoped lang="scss">
@import "@/css/variables.scss";

.whom {
  background-color: #f5f5f5;
  padding: 80px 0;

  .container {
    max-width: 1700px;
    margin: 0 auto;
  }

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

  .carousel {
    background: white;
    padding: 0;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    height: 500px;
  }

  .carousel-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    position: relative;
  }

  .slide-counter {
    position: absolute;
    bottom: 30px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #000000;
  }

  .content {
    max-width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
  }

  .image {
    max-width: 50%;
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 0;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-in-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .carousel-controls {
    display: flex;
    justify-content: center;
    margin-top: 50px;

    button {
      border: none;
      width: 60px;
      height: 60px;
      cursor: pointer;
      font-size: 1.5rem;
      transition: 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;

      &.prev-btn {
        background: #b0b0b0;
      }

      &.next-btn {
        background: #1d3557;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
