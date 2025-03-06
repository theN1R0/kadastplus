<template>
  <section class="service">
    <div class="container">
      <h1 class="service-title">Гаражная амнистия</h1>
      <div class="service-content">
        <div class="service-image">
          <img
              src="@/assets/services/garaj.jpg"
              alt="Гаражная амнистия"
          />
        </div>
        <div class="service-text">
          <p>
            Компания <strong>КадастрПлюс</strong> оказывает полное сопровождение при оформлении гаражей по Гаражной амнистии — упрощённой процедуре регистрации права собственности на гараж и землю под ним.
          </p>
          <h2>Что включает услуга?</h2>
          <p>
            Мы помогаем оформить:
            <ul>
              <li>Право собственности на гараж, построенный до введения Градостроительного кодекса РФ.</li>
              <li>Земельный участок под гаражом — постановка на кадастровый учет земли, находящейся под гаражом.</li>
              <li>Кадастровые работы — изготовление технического плана и межевого плана для регистрации объекта.</li>
            </ul>
          </p>
          <p class="service-price"><strong>Цена от 8 000₽</strong></p>
          <button
              class="btn order-call animate__animated animate__pulse animate__infinite animate__slow"
              onclick="window.location.href='tel:+79123727282'"
          >
            Заказать звонок
          </button>
        </div>
      </div>

      <!-- Секция этапов -->
      <div class="service-steps">
        <h2 class="steps-title">Этапы оформления гаражной амнистии</h2>
        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <strong>Сбор документов и проверка права собственности.</strong> Подготовка документов для начала процедуры оформления.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <strong>Выполнение кадастровых работ.</strong> Изготовление технического и межевого плана.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <strong>Подача заявления в Росреестр.</strong> Оформление и подача документов для регистрации права собственности.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <strong>Получение выписки из ЕГРН с зарегистрированным правом.</strong> Оформление свидетельства о праве собственности на гараж и землю.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToOffer = () => {
  const offerSection = document.getElementById("Offer");
  if (offerSection) {
    offerSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped lang="scss">
@import "@/css/variables.scss";

.service {
  padding: 100px 20px;

  .service-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 40px;
    text-align: center;
    color: black;
  }

  .service-content {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    flex-wrap: wrap;

    @media (min-width: 992px) {
      flex-wrap: nowrap;
    }
  }

  .service-image {
    flex: 1;
    max-width: 500px;

    img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 3px solid #ffcc00;
    }
  }

  .service-text {
    flex: 1;
    font-size: 1.1rem;
    line-height: 1.6;
    color: black;

    h2 {
      margin-top: 20px;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .service-price {
      margin-top: 20px;
      font-size: 1.3rem;
      color: #ffcc00;
      font-weight: bold;
    }

    .order-call {
      margin-top: 20px;
      background-color: #ffcc00;
      border: none;
      padding: 15px 30px;
      font-size: 1.1rem;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: darken(#ffcc00, 10%);
      }
    }
  }

  .service-steps {
    margin-top: 60px;
    color: black;

    .steps-title {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 30px;
      text-align: center;
    }

    .steps-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .step-item {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      padding: 20px;
      background: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      border: 2px solid #ffcc00;

      .step-number {
        width: 40px;
        height: 40px;
        background-color: #ffcc00;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: white;
        font-size: 1.2rem;
      }

      .step-text {
        font-size: 1.1rem;
        line-height: 1.6;
      }
    }
  }
}
</style>
