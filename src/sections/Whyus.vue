<template>
  <section id="Whyus" class="whyus">
    <div class="container">
      <h2 class="whyus-title">Почему выбирают нас?</h2>
      <div class="whyus-items">
        <div class="whyus-item">
          <div class="whyus-icon">
            <font-awesome-icon icon="bolt" />
          </div>
          <h3>Оперативность</h3>
          <p>Быстро справляемся с задачами</p>
        </div>
        <div class="whyus-item">
          <div class="whyus-icon">
            <font-awesome-icon icon="user-tie" />
          </div>
          <h3>Профессионализм</h3>
          <p>Опыт более 16 лет</p>
        </div>
        <div class="whyus-item">
          <div class="whyus-icon">
            <font-awesome-icon icon="tools" />
          </div>
          <h3>Точность</h3>
          <p>Современное оборудование</p>
        </div>
        <div class="whyus-item">
          <div class="whyus-icon">
            <font-awesome-icon icon="users" />
          </div>
          <h3>Компетентность</h3>
          <p>Постоянный штат профессионалов</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/css/variables.scss";

.whyus {
  padding: 60px 20px;
  background-color: white;
  text-align: center;

  .whyus-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 40px;
    color: #1f1f1f; // черный цвет
  }

  .whyus-items {
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
  }

  .whyus-item {
    max-width: 250px;
    padding: 20px;
    text-decoration: none;
    color: inherit;
    border-radius: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: block;

    &:hover {
      transform: translateY(-10px) scale(1.05);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
  }

  .whyus-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    margin: 0 auto 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    font-size: 5rem;
    color: #ffcc00;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #1f1f1f;
  }

  p {
    font-size: 1rem;
    color: #4f4f4f;
  }
}

</style>
