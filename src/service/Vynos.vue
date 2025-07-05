<template>
  <section class="service">
    <!-- Hero-блок -->
    <div class="hero-image">
      <img src="@/assets/services/vynos.png" alt="Вынос границ земельного участка" />
      <h1 class="service-title">Вынос границ земельного участка</h1>
    </div>

    <div class="container">
      <div class="service-text">
        <p>
          Компания <strong>КадастрПлюс</strong> предлагает услугу по выносу поворотных точек границ земельного участка для кадастрового учета и определения точных координат.
        </p>

        <h2>Что включает услуга?</h2>
        <p>
          <strong>Вынос в натуру границ участка</strong> — завершающий этап кадастровых работ после съемки, межевания и постановки на учет. Позволяет определить границы участка на местности.
        </p>
        <p>
          <strong>Определение местоположения</strong> — точная локализация границ земельного участка с учетом координат в кадастровом паспорте.
        </p>

        <p class="service-price"><strong>Стоимость от 800₽ за точку</strong></p>

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
              <strong>Сбор необходимых документов</strong> и заказ сведений.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <strong>Подготовка акта обследования</strong> с указанными координатами.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <strong>Подача акта с заявлением</strong> на вынос границ в орган кадастрового учета.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <strong>Получение кадастрового паспорта</strong> и подтверждения границ участка.
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