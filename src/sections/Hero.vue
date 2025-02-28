<template>
  <section id="Hero" class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Умный поиск <br />по документам вашей компании</h1>
        <p>Найдите точную информацию в документах с помощью <br />вопросов на естественном языке</p>
      </div>
      <div class="hero-image">
        <img src="@/assets/hero-image.png" alt="Интерфейс системы" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/css/variables.scss";

.hero {
  background: url("@/assets/hero-bg.jpg") no-repeat center center;
  background-size: cover;
  padding: 50px 0;
  text-align: center;
  color: white;

  .container {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-content {
    max-width: 800px;
    text-align: center;
    margin-bottom: 30px;

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      line-height: 1.2;
    }

    p {
      font-size: 1.2rem;
      margin-top: 10px;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .hero-image {
    max-width: 80%;

    img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
