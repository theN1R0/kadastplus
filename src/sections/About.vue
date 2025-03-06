<template>
  <section id="About" class="about">
    <div class="container">
      <h2 class="about-title">О нас</h2>
      <p class="about-subtitle">
        Мы — специалисты, которые качественно выполняют работу любой сложности.
      </p>
      <div class="about-grid">
        <div class="about-item">
          <img :src="sert1" alt="Сертификат Манылов Вячеслав">
          <h3>Вячеслав Манылов</h3>
          <p>Кадастровый инженер</p>
        </div>
        <div class="about-item">
          <img :src="sert2" alt="Сертификат Арасланов Дмитрий">
          <h3>Дмитрий Арасланов</h3>
          <p>Кадастровый инженер</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const sert1 = new URL('@/assets/sert1.jpg', import.meta.url).href;
const sert2 = new URL('@/assets/sert2.jpg', import.meta.url).href;
</script>

<style scoped>
@import "@/css/variables.scss";

.container {
  max-width: 1700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  z-index: 2;
}

.about {
  padding: 60px 20px;
  text-align: center;

  .about-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: black;
  }

  .about-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
  }

  .about-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

  .about-item {
    max-width: 300px;
    text-align: center;

    img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.3rem;
      font-weight: bold;
      margin: 0 0 5px;
      color: black;
    }

    p {
      font-size: 1rem;
      color: #666;
    }
  }
}
</style>