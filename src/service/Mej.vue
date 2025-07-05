<template>
  <section class="service">
    <!-- Hero-блок -->
    <div class="hero-image">
      <img src="@/assets/services/mej.png" alt="Межевание земельного участка" />
      <h1 class="service-title">Межевание земельного участка</h1>
    </div>

    <div class="container">
      <div class="service-text">
        <p>
          Компания <strong>КадастрПлюс</strong> предлагает услугу по межеванию в Кировской области для учета изменений границ земельного участка.
        </p>

        <h2>Наши услуги:</h2>

        <p>
          <strong>Уточнение границ земельного участка.</strong> Определение местоположения земельного участка на местности.
        </p>
        <p>
          <strong>Раздел земельного участка.</strong> Исходный участок прекращает свое существование, вместо него образуются два или несколько новых земельных участков.
        </p>
        <p>
          <strong>Объединение земельных участков.</strong> Объединяем смежные земельные участки в один, при этом исходный участок прекращает свое существование.
        </p>
        <p>
          <strong>Перераспределение земельных участков.</strong> В результате перераспределения смежных участков образуются новые земельные участки, а исходные прекращают существование.
        </p>
        <p>
          <strong>Исправление реестровой ошибки.</strong> Корректировка границ участков при наличии ошибок, вызванных некорректным определением координат.
        </p>

        <p class="service-price"><strong>Цена от 8 000₽</strong></p>

        <button
            class="btn order-call animate__animated animate__pulse animate__infinite animate__slow"
            onclick="window.location.href='tel:+79123727282'"
        >
          Заказать звонок
        </button>
      </div>

      <!-- Этапы (если будут) -->
      <!--
      <div class="service-steps">
        <h2 class="steps-title">Этапы осуществления проекта</h2>
        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <strong>Пример этапа.</strong> Описание.
            </div>
          </div>
        </div>
      </div>
      -->
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
