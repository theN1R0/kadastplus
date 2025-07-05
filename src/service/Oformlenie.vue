<template>
  <section class="service">
    <!-- Hero-блок -->
    <div class="hero-image">
      <img src="@/assets/services/oformlenie.png" alt="Оформление дома в собственность" />
      <h1 class="service-title">Оформление дома в собственность</h1>
    </div>

    <div class="container">
      <div class="service-text">
        <p>
          Компания <strong>КадастрПлюс</strong> предлагает услугу по оформлению дома в собственность в Кировской области.
        </p>

        <h2>Мы оформляем в собственность:</h2>
        <p>
          Жилого дома<br />
          Дачного дома<br />
          Садового дома<br />
          Бани<br />
          Хозяйственных построек<br />
          Других сооружений
        </p>

        <p class="service-price"><strong>Цена от 9 000₽</strong></p>

        <button
            class="btn order-call animate__animated animate__pulse animate__infinite animate__slow"
            onclick="window.location.href='tel:+79123727282'"
        >
          Заказать звонок
        </button>
      </div>

      <!-- Этапы -->
      <div class="service-steps">
        <h2 class="steps-title">Этапы осуществления проекта</h2>
        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <strong>Определение координат</strong> здания на местности.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <strong>Вычисление площадей</strong> здания.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <strong>Подготовка декларации</strong> (при необходимости).
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <strong>Оформление технического плана</strong>.
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
@import "@/css/service.scss";
</style>
