<template>
  <section id="Hero" class="hero">
    <!-- Затемняющий слой -->
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1>Кадастровые работы в Кировской области</h1>
        <p>Профессионализм, точность и оперативность</p>
        <button
            class="btn order-call animate__animated animate__pulse animate__infinite animate__slow"
            onclick="window.location.href='tel:+79123727282'"
        >
          Заказать звонок
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/css/variables.scss";

.hero {
  background: url("@/assets/hero-bg.jpg") no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
  overflow: hidden;

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .container {
    max-width: 1700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    z-index: 2;
  }

  .hero-content {
    max-width: 800px;
    margin-bottom: 30px;

    h1 {
      font-size: 3rem;
      font-weight: bold;
      line-height: 1.2;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 30px;
      color: rgba(255, 255, 255, 0.8);
    }

    .order-call {
      background-color: transparent;
      border: 2px solid #ffcc00;;
      border-radius: 8px;
      padding: 12px 25px;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2); // лёгкое затемнение при наведении
      }
    }
  }
}
</style>
<script setup lang="ts">
</script>