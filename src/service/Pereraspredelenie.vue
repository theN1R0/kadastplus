<template>
  <section class="service">
    <div class="container">
      <h1 class="service-title">Перераспределение земельных участков</h1>
      <div class="service-content">
        <div class="service-image">
          <img
              src="@/assets/services/pereraspredelenie.jpg"
              alt="Перераспределение земельных участков"
          />
        </div>
        <div class="service-text">
          <p>
            Компания <strong>КадастрПлюс</strong> предлагает услугу по перераспределению земельных участков для учета изменений границ.
          </p>
          <h2>Что включает услуга?</h2>
          <p>
            <strong>Перераспределение земельных участков</strong> — это процесс перераспределения земельных участков, в результате которого из нескольких смежных земельных участков образуется несколько других земельных участков, а существование исходных участков прекращается.
          </p>
          <p>
            Для перераспределения земельных участков между частными собственниками необходимо получить их согласие и иметь одинаковую категорию земель.
          </p>
          <p class="service-price"><strong>Цена от 14 000₽</strong></p>
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
              <strong>Образование земельного участка</strong> в целях заключения соглашения о перераспределении.
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-text">
              <strong>Заключение соглашения о перераспределении</strong> при наличии ранее принятого постановления Администрации об утверждении схемы расположения земельного участка.
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
