<template>
  <section id="Pricing" class="pricing">
    <div class="container">
      <h2 class="pricing-title">Наши услуги</h2>
      <p class="pricing-subtitle">Выполняем кадастровые работы по доступным ценам</p>
      <div class="pricing-grid">
        <router-link
            v-for="(service, index) in services"
            :key="service.title"
            :to="service.link"
            class="pricing-item animate__animated"
            :class="{ 'animate__fadeInUp': isVisible }"
            :style="isVisible ? `animation-delay: ${index * 0.1}s` : ''"
        >
          <div class="pricing-image">
            <img :src="service.image" :alt="service.title">
          </div>
          <div class="pricing-info">
            <h3>{{ service.title }}</h3>
            <p>{{ service.price }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';

const services = [
  { title: "Технический план", price: "от 9 000 руб", image: new URL('@/assets/services/tehplan.png', import.meta.url).href, link: "/services/plan" },
  { title: "Акт обследования", price: "от 5 000 руб", image: new URL('@/assets/services/act.png', import.meta.url).href, link: "/services/act" },
  { title: "Межевание участков", price: "от 8 000 руб", image: new URL('@/assets/services/mej.png', import.meta.url).href, link: "/services/mej" },
  { title: "Раздел земельного участка", price: "от 10 000 руб", image: new URL('@/assets/services/razdel.png', import.meta.url).href, link: "/services/razdel" },
  { title: "Объединение земельных участков", price: "от 12 000 руб", image: new URL('@/assets/services/obiedinenie.png', import.meta.url).href, link: "/services/obiedinenie" },
  { title: "Вынос границ", price: "от 1 000 руб", image: new URL('@/assets/services/vynos.png', import.meta.url).href, link: "/services/vynos" },
  { title: "Перераспределение участков", price: "от 14 000 руб", image: new URL('@/assets/services/pereraspredelenie.png', import.meta.url).href, link: "/services/pereraspredelenie" },
  { title: "Проектирование", price: "от 8 000 руб", image: new URL('@/assets/services/proekt.png', import.meta.url).href, link: "/services/proekt" },
  { title: "Оформление в собственность", price: "от 9 000 руб", image: new URL('@/assets/services/oformlenie.png', import.meta.url).href, link: "/services/oformlenie" },
  { title: "Топографическая съемка", price: "от 14 000 руб", image: new URL('@/assets/services/plan.png', import.meta.url).href, link: "/services/topo" },
  { title: "Гаражная амнистия", price: "от 8 000 руб", image: new URL('@/assets/services/garaj.png', import.meta.url).href, link: "/services/garaj" },
];

const isVisible = ref(false);

const handleScroll = () => {
  const section = document.getElementById('Pricing');
  if (!section) return;

  const rect = section.getBoundingClientRect();
  if (rect.top <= window.innerHeight - 100) {
    isVisible.value = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
@import "@/css/variables.scss";
@import "animate.css";

.pricing {
  padding: 60px 20px;
  background-color: #f5f5f5;
  text-align: center;

  .pricing-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #000;
  }

  .pricing-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    overflow: visible;
  }

  .pricing-item {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    opacity: 0;
    animation-duration: 1s;
    animation-fill-mode: both;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &.animate__fadeInUp {
      opacity: 1;
    }

    &:hover {
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
    }
  }

  .pricing-image {
    position: relative;
    height: 250px;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }

  .pricing-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background: rgba(0, 0, 0, 0.6);
    color: white;

    h3 {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0;
    }

    p {
      margin: 5px 0 0;
      font-size: 1rem;
      color: #ffcc00;
      font-weight: bold;
    }
  }
}
</style>
