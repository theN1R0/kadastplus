<template>
  <section class="service">
    <div class="container">
      <h1 class="service-title">Составление технического плана</h1>
      <div class="service-content">
        <div class="service-image">
          <img
              src="@/assets/services/plan.jpg"
              alt="Технический план"
          />
        </div>
        <div class="service-text">
          <p>
            Компания <strong>КадастрПлюс</strong> предлагает составление технического плана для регистрации недвижимости или учета изменений параметров объектов.
          </p>
          <h2>Мы оформляем:</h2>
          <p>
            <strong>Технический план зданий.</strong> Жилые дома, садовые дома, хозяйственные постройки (бани, гаражи, сараи), нежилые здания.
          </p>
          <p>
            <strong>Технический план сооружений.</strong> Инженерные сети (газопроводы, водопроводы, тепловые сети, канализация, электросети, автомобильные дороги).
          </p>
          <p>
            <strong>Технический план объектов незавершенного строительства.</strong> Здания и сооружения, строительство которых не завершено.
          </p>
          <p class="service-price"><strong>Цена от 9 000₽</strong></p>
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
        <h2 class="steps-title">Этапы осуществления проекта</h2>
        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <strong>Определение координат здания на местности.</strong>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <strong>Вычисление площадей здания.</strong>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <strong>Подготовка декларации (при необходимости).</strong>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <strong>Оформление технического плана.</strong>
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