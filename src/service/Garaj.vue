<template>
  <section class="service">
    <!-- Hero-блок -->
    <div class="hero-image">
      <img src="@/assets/services/garaj.png" alt="Гаражная амнистия" />
      <h1 class="service-title">Гаражная амнистия</h1>
    </div>

    <div class="container">
      <div class="service-text">
        <p>
          Компания <strong>КадастрПлюс</strong> оказывает полное сопровождение при оформлении гаражей по Гаражной амнистии — упрощённой процедуре регистрации права собственности на гараж и землю под ним.
        </p>

        <h2>Что включает услуга?</h2>
        <ul>
          <li>Право собственности на гараж, построенный до введения Градостроительного кодекса РФ.</li>
          <li>Земельный участок под гаражом — постановка на кадастровый учет земли, находящейся под гаражом.</li>
          <li>Кадастровые работы — изготовление технического плана и межевого плана для регистрации объекта.</li>
        </ul>

        <p class="service-price"><strong>Цена от 8 000₽</strong></p>

        <button
            class="btn order-call animate__animated animate__pulse animate__infinite animate__slow"
            onclick="window.location.href='tel:+79123727282'"
        >
          Заказать звонок
        </button>
      </div>

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
@import "@/css/service.scss";
</style>
