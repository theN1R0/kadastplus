<template>
  <section class="service">
    <!-- Hero-блок -->
    <div class="hero-image">
      <img src="@/assets/services/razdel.png" alt="Раздел земельного участка" />
      <h1 class="service-title">Раздел земельного участка</h1>
    </div>

    <div class="container">
      <div class="service-text">
        <p>
          Компания <strong>КадастрПлюс</strong> предлагает услугу по разделу земельного участка для учета изменений границ участка земли.
        </p>

        <h2>Что включает услуга?</h2>
        <p>
          Раздел земельного участка — это кадастровые работы, в результате которых из одного объекта недвижимости, зарегистрированного в ЕГРН, образуются несколько новых участков с индивидуальными кадастровыми номерами.
        </p>
        <p>
          <strong>Раздел земельного участка:</strong> исходный участок прекращает свое существование, а вместо него образуются два или несколько новых земельных участков.
        </p>

        <p class="service-price"><strong>Цена от 10 000₽</strong></p>

        <button
            class="btn order-call animate__animated animate__pulse animate__infinite animate__slow"
            onclick="window.location.href='tel:+79123727282'"
        >
          Заказать звонок
        </button>
      </div>

      <!-- Этапы проекта -->
      <div class="service-steps">
        <h2 class="steps-title">Этапы осуществления проекта</h2>
        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <strong>Сбор необходимых документов.</strong>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <strong>Подготовка межевого плана.</strong>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <strong>Подача межевого плана</strong> с заявлением о разделе земельного участка в орган кадастрового учета или МФЦ.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <strong>Получение кадастровых паспортов</strong> на образованные земельные участки.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">5</div>
            <div class="step-text">
              <strong>Подача заявления и получение свидетельства</strong> о праве собственности на образованные земельные участки.
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
