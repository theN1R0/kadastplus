<template>
  <section class="service">
    <!-- Hero-блок -->
    <div class="hero-image">
      <img src="@/assets/services/obiedinenie.png" alt="Объединение земельных участков" />
      <h1 class="service-title">Объединение земельных участков</h1>
    </div>

    <div class="container">
      <div class="service-text">
        <p>
          Компания <strong>КадастрПлюс</strong> предлагает услугу по объединению земельных участков в Кировской области для учета изменений границ участка земли.
        </p>

        <h2>Что включает услуга?</h2>
        <p>
          Лучше иметь один большой земельный участок, чем два маленьких. Объединение земельных участков — это процесс кадастровых работ, в результате которых из двух (или более) смежных участков формируется один новый участок. При этом исходные участки прекращают свое существование, а образованный участок получает новый кадастровый номер.
        </p>
        <p>
          <strong>Объединение земельных участков</strong> — оптимальное решение для упрощения использования земли, снижения налоговой нагрузки и упрощения сделок с недвижимостью.
        </p>

        <p class="service-price"><strong>Цена от 12 000₽</strong></p>

        <button
            class="btn order-call animate__animated animate__pulse animate__infinite animate__slow"
            onclick="window.location.href='tel:+79123727282'"
        >
          Заказать звонок
        </button>
      </div>

      <div class="service-steps">
        <h2 class="steps-title">Этапы осуществления проекта</h2>
        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-text">
              <strong>Сбор необходимых документов</strong> и заказ сведений из ЕГРН.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <strong>Подготовка межевого плана</strong> с информацией о смежных участках.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-text">
              <strong>Подача межевого плана</strong> с заявлением об объединении участков в орган кадастрового учета или МФЦ.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-text">
              <strong>Получение кадастрового паспорта</strong> на объединенный земельный участок.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">5</div>
            <div class="step-text">
              <strong>Подача заявления и получение свидетельства</strong> о праве собственности на образованный участок.
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